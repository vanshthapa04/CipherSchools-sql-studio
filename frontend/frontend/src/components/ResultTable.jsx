function ResultTable({ data }) {

  if (!data || data.length === 0) {
    return (
      <p className="text-gray-400">
        No results yet
      </p>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">

      <table className="w-full border border-gray-700 text-left">

        <thead className="bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border border-gray-700 px-4 py-2"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-900">
              {columns.map((col) => (
                <td
                  key={col}
                  className="border border-gray-700 px-4 py-2"
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ResultTable;