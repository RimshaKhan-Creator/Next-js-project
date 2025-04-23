// app/page.tsx
import { prisma } from './lib/prisma';
import Link from 'next/link';
import {deleteSnippet} from '@/app/actions/index'
import DeleteButton from "@/app/components/ui/delete";

export default async function HomePage() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="min-h-screen px-6 py-8 bg-gray-50">
      {/* Top Bar with title + New button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Home</h1>

        <Link
          href="http://localhost:3000/snippets/new"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          ➕ New
        </Link>
      </div>

      {/* Snippets List */}
      <div className="space-y-4 max-w-3xl mx-auto w-full">
        {snippets.length === 0 ? (
          <p className="text-gray-500">No snippets found.</p>
        ) : (
          snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">{snippet.title}</h2>
              <pre className="mt-2 p-3 bg-gray-100 text-sm rounded font-mono whitespace-pre-wrap">
                {snippet.code}
              </pre>

              <div className="mt-3 flex justify-end gap-2">
                <Link
                  href={`snippets/${snippet.id}/edit`}
                  className="px-4 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                >
                  ✏️ Edit
                </Link>

                <DeleteButton id={snippet.id} />

              </div>
            
              {/* <form action={deleteSnippet.bind(null, snippet.id)}>
  <button type="submit">🗑️ Delete</button>
</form> */}
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}
