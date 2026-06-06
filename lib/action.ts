"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text: unknown): boolean {
  return !text || (text as string).trim() === "";
}

export const shareMeal = async (formData: FormData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    typeof meal.creator_email !== "string" ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  saveMeal(meal as any);
  redirect("/meals");
};
