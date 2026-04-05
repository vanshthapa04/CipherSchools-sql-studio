export default function ResultTable({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No results</p>;
  }

  const cols = Object.keys(data[0]);

  return (
    <div className="overflow-auto rounded-lg border border-gray-800">
      <table className="min-w-full text-sm">

        <thead className="bg-gray-800 sticky top-0">
          <tr>
            {cols.map((c) => (
              <th key={c} className="px-4 py-2 text-left text-gray-200">
                {c}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-800/60 transition">
              {cols.map((c) => (
                <td key={c} className="px-4 py-2 border-t border-gray-800 text-gray-300">
                  {row[c]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}