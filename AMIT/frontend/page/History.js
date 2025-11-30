import React from "react";
import Card from "../components/Card";

const History = () => {
  const history = JSON.parse(localStorage.getItem("history") || "[]");

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">History</h2>

      {history.length === 0 && <p>No history found.</p>}

      <div className="grid gap-4">
        {history.map((h, i) => (
          <Card key={i}>
            <p><strong>Type:</strong> {h.type}</p>
            <p><strong>Input:</strong> {h.input}</p>
            <p><strong>Result:</strong> {h.result}</p>
            <p><strong>Accuracy:</strong> {h.accuracy}</p>
            <p className="text-gray-400 text-sm">
              {new Date(h.date).toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;
