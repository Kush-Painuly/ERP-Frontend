import React from "react";

const ConfirmationBox = ({ handleDeleteHandler }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50 fixed inset-0 z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Are you sure you want to delete this item?
          </h2>
          <div className="flex justify-between">
            <button
              onClick={() => handleDeleteHandler(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => handleDeleteHandler(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationBox;
