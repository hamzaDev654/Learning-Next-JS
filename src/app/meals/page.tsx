import { FC } from "react";
import Link from "next/link";
import style from "@/style/meals.module.css";
import { getMeals } from "../../../lib/meals";
import MealsGrid from "@/components/meals/MealsGrid";
// here
const MealsPage: FC = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself . It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
