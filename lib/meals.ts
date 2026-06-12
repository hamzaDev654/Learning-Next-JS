import fs from "node:fs";
import path from "node:path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

export interface Meal {
  id?: number;
  slug?: string;
  title: string;
  image: string | any;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

const dbPath = path.join(process.cwd(), "meals.db");

console.log("Database path:", dbPath);
console.log("Database exists:", fs.existsSync(dbPath));

const db = sql(dbPath);

export async function getMeals(): Promise<Meal[]> {
  await new Promise((res) => setTimeout(res, 10000));

  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export function getMeal(slug: string): Meal | undefined {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
    | Meal
    | undefined;
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (e: any) => {
    if (e) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
}
