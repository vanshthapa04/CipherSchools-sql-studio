import { useState } from "react";

function HintBox() {
  const [hint, setHint] = useState("");

  const getHint = () => {
    setHint("Try using SELECT * FROM users;");
  };

  return (
    <div>
      <button
        onClick={getHint}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Get Hint
      </button>

      {hint && (
        <div className="mt-3 p-3 border rounded bg-gray-100">
          {hint}
        </div>
      )}
    </div>
  );
}

export default HintBox;