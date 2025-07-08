import React, { useContext } from "react";
import { tableContext } from "../Context/Context";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

const List = () => {
  const { passwordArray, handleDelete, handleEdit, deleteAll, setPasswordArray } = useContext(tableContext);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return ( 
    <div className="tableDiv   w-full overflow-y-auto h-[88%] ">
    <div className="tableContainer   w-[90%] mx-auto my-4 text-white ">
      <ToastContainer />
      <div className="heading flex  justify-between items-center px-1 mb-2">
        <h1 className="text-xl">
          All <span className="text-violet-600 font-medium">Passwords</span>
        </h1>
        <button
          onClick={deleteAll}
          className="flex gap-1 items-center font-semibold text-white hover:text-red-500 hover:scale-105 transition-all cursor-pointer"
        >
          Delete All <MdDeleteOutline />
        </button>
      </div>

      {passwordArray.length === 0 ? (
        <p className="text-gray-400 text-sm">No passwords to show.</p>
      ) : (
        <div className=" rounded-md "> {/* scroll part */}
          <table className="table-fixed w-full ">
            <thead className="bg-violet-700 sticky top-0 z-10">
              <tr>
                <th className="w-[50%] py-1">Website</th>
                <th className="w-[20%] py-1">Username</th>
                <th className="w-[20%] py-1">Password</th>
                <th className="w-[10%] py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item) => (
                <tr key={item.id} className="bg-[#0a0a14] text-sm">
                  <td className="overflow-hidden p-1.5 "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}>
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-all ease-in"
                    >
                      {item.site}
                    </a>
                  </td>
                  <td className="p-1.5 "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}>
                    <div className="flex items-center flex-row gap-1 justify-between overflow-hidden relative">
                      {item.username}
                      <MdContentCopy
                        onClick={() => copyText(item.username)}
                        className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all ease bg-[#0a0a14] h-full"
                      />
                    </div>
                  </td>
                  <td className="p-1.5 "
                        style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}>
                    <div className="flex items-center flex-row gap-1 justify-between overflow-hidden relative">
                      {item.password}
                      <MdContentCopy
                        onClick={() => copyText(item.password)}
                        className="text-violet-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-all ease bg-[#0a0a14] h-full"
                      />
                    </div>
                  </td>
                  <td style={{
                          boxShadow:
                            "inset 0 1px 3px rgba(124, 58, 237, 0.08), inset 0 0 2px rgba(255, 255, 255, 0.03)",
                        }}>
                    <div className="flex gap-3 justify-center">
                      {/* <FiEdit3
                        onClick={() => {
                          const itemToEdit = handleEdit(item.id);
                          // Navigate to form or populate in state (optional)
                          toast("Now edit from homepage", { autoClose: 1500 });
                        }}
                        className="text-violet-500 hover:scale-110 transition-all ease cursor-pointer"
                      /> */}
                      <MdDeleteOutline
                        onClick={() => handleDelete(item.id)}
                        className="text-violet-500 hover:scale-110 transition-all ease cursor-pointer text-[17px]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>

  );
};

export default List;
