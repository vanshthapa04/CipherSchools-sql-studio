import { useState } from "react";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import api from "../api/api";

export default function Workspace() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [rowCount, setRowCount] = useState(0);
  const [time, setTime] = useState(0);

  const runQuery = async (query) => {
    try {
      setError("");

      const start = Date.now();
      const res = await api.post("/query", { query });
      const end = Date.now();

      setTime(end - start);
      setData(res.data.rows);
      setRowCount(res.data.rowCount);

    } catch (err) {
      setData([]);
      setRowCount(0);
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="h-screen bg-[#020617] text-gray-200 overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-3 border-b border-white/10 flex justify-between items-center bg-gray-900">
        <h1 className="text-lg font-semibold flex items-center gap-2 text-white">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          SQL Sandbox
        </h1>

        <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm shadow hover:scale-105 transition">
          New Query
        </button>
      </div>

      <div className="flex h-[calc(100vh-56px)]">

        {/* SIDEBAR */}
        <div className="w-1/5 p-4 border-r border-gray-800 bg-gray-900">
          <h3 className="text-xs uppercase text-gray-400 mb-4 tracking-wider">
            Schema
          </h3>

          <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-800 flex items-center gap-2 transition">
            <span className="text-blue-400">📄</span>
            <span className="text-gray-200">employees</span>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex flex-col flex-1 p-4 gap-4 h-full">

          {/* EDITOR */}
          <div className="h-1/2 bg-gray-900 rounded-xl p-4 border border-gray-800 flex flex-col">

            <SqlEditor onRun={runQuery} />

          </div>

          {/* RESULT */}
          <div className="h-1/2 bg-gray-900 rounded-xl p-4 border border-gray-800 flex flex-col overflow-hidden">

            {/* INFO */}
            <div className="flex justify-between text-sm text-gray-300 mb-3">
              <span>Rows: {rowCount}</span>
              <span>Time: {time} ms</span>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-3 p-3 bg-red-500/20 border border-red-500 rounded text-red-400">
                {error}
              </div>
            )}

            {/* TABLE */}
            <div className="flex-1 overflow-auto">
              <ResultTable data={data} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}