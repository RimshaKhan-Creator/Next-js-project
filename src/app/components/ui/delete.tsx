// app/components/DeleteButton.tsx

'use client';

import { useTransition } from "react";
import { deleteSnippet } from "@/app/actions";

export default function DeleteButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteSnippet(id);
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
    >
      {isPending ? "Deleting..." : "🗑️ Delete"}
    </button>
  );
}
