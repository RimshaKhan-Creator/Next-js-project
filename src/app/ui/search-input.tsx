"use client"
import React from "react";
import { useSearchParams } from "next/navigation";
import { search } from "@/app/actions/search";
import { Input } from "@/components/ui/input"


const SearchInput = () => {
    const searchParams = useSearchParams();

  return (
    <form action={search}>
      <Input defaultValue={searchParams.get("term") || ""} type="text" name="term" placeholder="Search post..." />
    </form>
  );
};

export default SearchInput;