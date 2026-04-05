import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function SqlEditor({ onRun }) {
  const [query, setQuery] = useState("SELECT NOW();");

  return (
    <div className="flex flex-col h-full">

      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="sql"
          value={query}
          onChange={(value) => setQuery(value)}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>

      <button
        onClick={() => onRun(query)}
        className="mt-3 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:scale-105 transition"
      >
        Run Query ⚡
      </button>

    </div>
  );
}