// app/new/page.tsx
import { prisma } from '@/app/lib/prisma';
import { redirect } from 'next/navigation';

  export default async function NewSnippetPage() {
  const snippets = await prisma.snippet.findMany();

  // ✅ This will show in your terminal (server logs)
  console.log('📦 All Snippets:', snippets);
  async function handleCreateSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    if (!title || !code) return;

    await prisma.snippet.create({
      data: { title, code },
    });

    redirect('/'); // Go back to home or snippets list after creating
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Snippet</h1>

      <form action={handleCreateSnippet} className="w-96 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Snippet Title"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <textarea
          name="code"
          placeholder="Your code here..."
          rows={8}
          className="w-full px-4 py-2 border rounded font-mono"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Create Snippet
        </button>
      </form>
    </div>
  );
}
