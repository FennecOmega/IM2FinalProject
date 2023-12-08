import { useAuthContext } from "./hooks/useAuthContext.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import axios from "axios";

function InventoryRow({ Item, Edit, Delete }) {
  const { user } = useAuthContext(AuthContext);

  const getPrivileges = (user) => {
    axios.post({});
  };

  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-6 py-4 font-medium whitespace-nowrap">
          {Item.inventory_id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{Item.item_name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{Item.item_type}</td>
        <td className="px-6 py-4 whitespace-nowrap">{Item.qty}</td>
        <td className="px-6 py-4 whitespace-nowrap">{Item.expiry_date}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default InventoryRow;
