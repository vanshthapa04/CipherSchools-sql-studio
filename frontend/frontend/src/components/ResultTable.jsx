function ResultTable({ data }) {

    if (!data || data.length === 0) {
      return <p>No results yet</p>;
    }
  
    const columns = Object.keys(data[0]);
  
    return (
      <table className="w-full border mt-4">
  
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="border px-2 py-1">
                {col}
              </th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col} className="border px-2 py-1">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
  
      </table>
    );
  }
  
  export default ResultTable;