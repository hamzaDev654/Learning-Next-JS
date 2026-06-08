import { FC } from "react";
import Mealitem from "./Mealitem";
import style from "@/style/meals-grid.module.css";
import type { Meal } from "../../../lib/meals";

interface props {
  meals: Meal[];
}
const MealsGrid: FC<props> = ({ meals }) => {
  return (
    <ul className={style.meals}>
      {meals.map((meal, index) => {
        const slug = meal.slug ?? "";
        return (
          <li key={meal.id}>
            <Mealitem {...meal} slug={slug} preload={index === 0} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
