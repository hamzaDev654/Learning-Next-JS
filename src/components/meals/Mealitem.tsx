import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "@/style/meals-item.module.css";

interface props {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  preload?: boolean;
}

const Mealitem: FC<props> = ({ title, slug, image, summary, creator, preload = false }) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" preload={preload} />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default Mealitem;
