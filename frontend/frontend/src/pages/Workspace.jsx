import { useParams } from "react-router-dom";
import { useState } from "react";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import HintBox from "../components/HintBox";

function Workspace() {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-3xl font-bold">Assignment {id}</h1>

      <p className="text-gray-400">
        Write a SQL query to fetch all users from the users table.
      </p>

      <SqlEditor setResults={setResults} />

      <div>
  <h2 className="text-xl font-semibold mb-2">Query Results</h2>
  <ResultTable data={results} />
</div>

      <HintBox />

    </div>
  );
}

export default Workspace;