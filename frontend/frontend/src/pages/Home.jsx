import { Link } from "react-router-dom";

function Home() {
  const assignments = [
    {
      id: 1,
      title: "Find all users",
      description: "Write a query to get all users from the table",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">SQL Assignments</h1>

      {assignments.map((a) => (
        <Link key={a.id} to={`/workspace/${a.id}`}>
          <div className="border p-4 rounded mb-3 hover:bg-gray-100 cursor-pointer">
            <h2 className="font-semibold">{a.title}</h2>
            <p className="text-sm text-gray-600">{a.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;