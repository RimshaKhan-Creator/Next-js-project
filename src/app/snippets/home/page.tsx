// This is a server component
import Link from 'next/link';

type Snippet = {
  title: string;
  code: string;
};

// Example function to simulate fetching from server-side storage
async function getSnippet(): Promise<Snippet | null> {
  // Replace this with DB or cookies logic
  return null;
}

export default async function SavedSnippetPage() {
  const snippet = await getSnippet();
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Saved Snippet</h1>

      {snippet ? (
        <div className="w-96 p-4 border rounded-2xl shadow-lg bg-white space-y-2 mb-4">
          <h2 className="text-xl font-semibold">{snippet.title}</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm">{snippet.code}</pre>
          <div className="flex justify-end gap-2 mt-2">
            {/* This would need to go to a client route to delete */}
            <form action="/delete-snippet" method="POST">
              <button
                type="submit"
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mb-4">No snippet available.</p>
      )}

      <Link href="/new">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700">
          New
        </button>
      </Link>
    </div>
  );
}
