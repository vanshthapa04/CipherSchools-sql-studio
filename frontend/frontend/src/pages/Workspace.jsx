import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import HintBox from "../components/HintBox";
import api from "../api";

function Workspace() {
  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    api.get(`/assignments/${id}`).then((res) => {
      setAssignment(res.data);
    });
  }, [id]);

  if (!assignment) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-start pt-16">
      <div className="w-full max-w-4xl px-6 space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            {assignment.title}
          </h1>

          <p className="text-gray-400 mt-3">
            {assignment.question}
          </p>
        </div>

        <SqlEditor setResults={setResults} />

        <div>
          <h2 className="text-xl font-semibold mb-3">
            Query Results
          </h2>

          <ResultTable data={results} />
        </div>

        <HintBox question={assignment.question} />

      </div>
    </div>
  );
}

export default Workspace;