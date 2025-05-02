"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { saveSnippet } from "@/app/actions/index";
import type { Snippet } from "@prisma/client";


export default function EditForm({ snippet }: { snippet: Snippet }) {
  console.log(snippet,"snippet")
  const [code, setCode] = useState(snippet.code);
  console.log(code,"code");
  

  const changeEvenHandler = (value: string = "") => {
    setCode(value);
  };

  const savesnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <form action={savesnippetAction}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2>📝 Code Snippet Editor</h2>

        <div style={{ border: "1px solid #444", borderRadius: "6px", overflow: "hidden" }}>
          <Editor
            height="40vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={changeEvenHandler}
          />
        </div>

        <button
          style={{
            padding: "0.75rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save Snippet
        </button>
      </div>
    </form>
  );
}
