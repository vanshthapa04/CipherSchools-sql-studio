import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    api.get("/assignments").then((res) => {
      setAssignments(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-start py-20">

      <div className="max-w-3xl w-full px-6">
        <h1 className="text-6xl text-red-500 text-center">TEST</h1>

        <h1 className="text-4xl font-bold mb-10 text-center">
          SQL Assignments
        </h1>

        <div className="space-y-5">

          {assignments.map((a) => (
            <Link key={a.id} to={`/workspace/${a.id}`}>

              <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition cursor-pointer">

                <h2 className="text-xl font-semibold text-blue-400">
                  {a.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {a.description}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;