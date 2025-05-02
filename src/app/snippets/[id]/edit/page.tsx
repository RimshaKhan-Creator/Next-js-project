import { prisma } from "@/app/lib/prisma";
import EditForm from "@/app/components/ui/editform";

interface Props {
  params: Promise<{ id: string }>; // `params` is now a Promise of an object
}

export default async function EditSnippetPage({ params }: Props) {
  // Await the `params` to resolve the Promise and get the actual object
  const resolvedParams = await params;

  // Convert `id` from string to number
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: Number(resolvedParams.id), // Convert the string `id` to a number for Prisma
    },
  });

  if (!snippet) {
    return <div>Snippet not found.</div>;
  }

  return <EditForm snippet={snippet} />;
}
// y generate static params hai jo ky dynamic ko static params m convert kry ga es sy optimization best ho gi or speed bh fast ho g
export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet)=> {
    return {id:snippet.id.toString()}
  })
}
