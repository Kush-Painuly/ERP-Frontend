import React from "react";

const Documents = () => {

    const getDate=() =>{
        const date = new Date();
        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const currentDate = getDate();
  return (
    <>
      <h2 className="text-white font-medium text-3xl text-center uppercase">
        Documents
      </h2>
      <div className="p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                document
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Attachment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {currentDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Identity
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Adhaar Card
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ##
                </td>
            </tr>
            <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {currentDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Identity
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    PAN Card
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ##
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-5">
        <h2 className="text-white font-medium text-2xl text-center uppercase">Upload Documents</h2>
        <div className="border-2 border-white" >
            <p className="text-center p-1 text-white font-medium">Upload new documnents (* mandatory)</p>
            <form className="p-6">
                <select name="type" id="type" className="w-full p-1 rounded-lg font-medium pl-4 text-gray-700">
                    <option value="please pick a type" hidden>Please pick a type</option>
                    <option value="adhaarCard">Adhaar Card</option>
                    <option value="panCard">PAN Card</option>
                </select>
                <div className="flex items-center justify-center pt-4">
                    <label htmlFor="description" className="text-white font-bold pr-4">Description:</label>
                    <input type="text" id="description" name="description" className="w-1/2 p-1 rounded-md"/>
                </div>
                <div className="flex items-center justify-center pt-4">
                    <label htmlFor="document" className="text-white font-bold pr-4">Document:</label>
                    <input type="file" id="" name="document" className="w-1/2 p-1 rounded-xl"/>
                </div>
                <div className="text-center">
                    <button type="submit" className="w-full px-4 py-2 bg-white hover:bg-black text-black hover:text-white rounded-lg">Upload Document</button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default Documents;
