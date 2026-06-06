import { FC } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "../../../../lib/meals";
import Classes from "@/style/meal-details.module.css";

interface MealDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const MealsDetailsPage: FC<MealDetailsProps> = async ({ params }) => {
  const { slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={Classes.header}>
        <div className={Classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={Classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={Classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={Classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={Classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
};

export default MealsDetailsPage;
