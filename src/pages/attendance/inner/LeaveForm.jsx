import Modal from "../../../custom/components/Modal";
import React from "react";

const LeaveForm = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-6 mt-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply for Leave
          </h2>
          <form className="space-y-4 flex flex-col ">
            <div >
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select name="status" id="status" className="w-full">
                <option value="Present">Present</option>
                <option value="halfday">Half-Day</option>
                <option value="casual">Casual Leave</option>
                <option value="paidleave">Paid-Leave</option>
                <option value="sick">Sick-Leave</option>
              </select>
            </div>
            <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From:</label>
                <input type="date" id="from" name="from" className="w-full block" />
            </div>
            <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To:</label>
                <input type="date" id="to" name="to" className="w-full block" />
            </div>
            <div className="flex items-center justify-center gap-4">
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason:</label>
                <textarea id="reason" name="reason" rows="2" cols="50"/>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LeaveForm;
