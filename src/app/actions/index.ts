'use server';
import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; // ✅ THIS LINE

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });

  // Optional: clear cache for home (usually not needed if SSR)
  revalidatePath('/');

  redirect('/'); // ✅ redirect to homepage after saving
};
export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });

  // Revalidate homepage if you're showing all snippets there
  revalidatePath('/');

  // Redirect back to home after deletion
  redirect('/');
}