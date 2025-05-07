"use server";

import { redirect } from "next/navigation";

export const search = async (formData: FormData) => {
  const term = formData.get("term");

  if (typeof term !== "string" || !term.trim()) {
    return redirect("/");
  }

  return redirect(`/search?term=${term}`);
};
