// app/snippets/[id]/edit/page.tsx
import { prisma } from "@/app/lib/prisma";
import EditForm from "@/app/components/ui/editform"; 

interface Props {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({ params }: Props) {
  const snippet = await prisma.snippet.findUnique({
    where: {
    
    id: Number(params.id)
    },
  });

  if (!snippet) {
    return <div>Snippet not found.</div>;
  }

  return <EditForm snippet={snippet} />;
}
