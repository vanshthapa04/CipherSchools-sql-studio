import { useState } from "react";
import api from "../api";

function HintBox({ question }) {

  const [hint, setHint] = useState("");

  const getHint = async () => {

    try {

      const res = await api.post("/hint", {
        question: question
      });

      setHint(res.data.hint);

    } catch (error) {

      console.error(error);
      alert("Failed to get hint");

    }

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
        <div className="mt-3 p-3 border rounded bg-gray-900 text-gray-200 border-gray-700">
          {hint}
        </div>
      )}

    </div>
  );
}

export default HintBox;