import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


const UserManageTable = ({ item, index, handleDelete}) => {
    const [accNoCopySuccess, setAccNoCopySuccess] = useState(false);

    const handleCopyClick = () => {
      // Create a temporary input element
      const tempInput = document.createElement("input");
  
      // Set its value to the acc_no
      tempInput.value = item.acc_no;
  
      // Append it to the body
      document.body.appendChild(tempInput);
  
      // Select the input's content
      tempInput.select();
  
      // Execute the copy command
      document.execCommand("copy");
  
      // Remove the temporary input
      document.body.removeChild(tempInput);
  
      // Set the copy success state
      setAccNoCopySuccess(true);
  
      // Reset the copy success state after a short delay
      setTimeout(() => {
        setAccNoCopySuccess(false);
      }, 2000);
    };
    return (
        <tr className="bg-white shadow text-black border">
            <td className="shadow text-black border text-center">{index}</td>
            <td className="shadow text-black border flex justify-center items-center"><img className="w-[40px] h-[40px] rounded-full border" src={item.img} alt="" /></td>
            <td className="shadow text-black border text-center">{item.user_name}</td>
            <td
                className={`shadow text-black border text-center ${accNoCopySuccess ? "text-green-500" : ""}`}
                onClick={()=>handleCopyClick(item._id)}
                style={{ cursor: "pointer" }}
            >
                {item.acc_no}
            </td>
            <td className="shadow flex justify-center  text-xl text-red-500" onClick={() => handleDelete(item._id)}>
                <RiDeleteBin6Line />
            </td>

        </tr>
    );
};

export default UserManageTable;