import React from "react";

function Table({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {stats.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Table;
