import React from "react";

export default function CreateExam() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-6">create a new exams</h2>

        <div className="border p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-6">exams information</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">module</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>

            <div>
              <label className="block text-sm mb-1">exam type</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>

            <div>
              <label className="block text-sm mb-1">duration</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>

            <div>
              <label className="block text-sm mb-1">date</label>
              <div className="grid grid-cols-3 gap-2">
                <input type="date" className="border px-3 py-2 rounded"/>
                
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">room</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>

            <div>
              <label className="block text-sm mb-1">supervisor</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>

            <div>
              <label className="block text-sm mb-1">student</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Value" />
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <button className="flex-1 bg-black text-white py-2 rounded">save</button>
            <button className="px-6 py-2 rounded border">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
