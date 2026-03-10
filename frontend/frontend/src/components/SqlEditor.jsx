import Editor from "@monaco-editor/react";
import { useState } from "react";
import api from "../api";

function SqlEditor({ setResults }) {
  const [query, setQuery] = useState("");

  const runQuery = async () => {
    try {
      const res = await api.post("/query", {
        query: query
      });

      setResults(res.data.rows);

    } catch (error) {
      console.error(error);
      alert("Query failed");
    }
  };

  return (
    <div>

      <h2 className="text-xl font-semibold mb-2">SQL Editor</h2>

      <Editor
        height="300px"
        defaultLanguage="sql"
        defaultValue={query}
        onChange={(value) => setQuery(value)}
      />

      <button
        onClick={runQuery}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Run Query
      </button>

    </div>
  );
}

export default SqlEditor;