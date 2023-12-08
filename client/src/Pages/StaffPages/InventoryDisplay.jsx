import "../../index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [newInventory, setNewInventory] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/send-product-list")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddInventory = () => {
    // Logic to handle adding the new Inventory to database
    // For now this is temporary
    console.log("New Inventory:", newInventory);

    setNewInventory({ name: "", quantity: "" });
    setShowPopup(false);
  };

  return (
    <>
    <div className=" w-5/6 mx-auto items-center flex-1 mb-24">
      <div className="max-w-full mx-auto mt-20 text-center border-4 border-yellow-400 rounded-2xl">
        <div className="flex justify-between p-4">
          {!showSearchBar && (
            <button
              onClick={() => setShowSearchBar(true)}
              className="px-4 py-2 text-white bg-amber-900 hover:bg-amber-600 rounded-md"
            >
              Search
            </button>
          )}

          {showSearchBar && (
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => setShowSearchBar(false)}
              className="w-2/3 px-2 py-2 border rounded-md"
            />
          )}

          <button
            onClick={() => setShowPopup(true)}
            className="px-4 py-2 text-white bg-amber-900 hover:text-amber-600 rounded-md"
          >
            Add New
          </button>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded-md">
              <h2 className="mb-4 text-xl font-semibold">Add New Inventory</h2>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={newInventory.name}
                  onChange={(e) =>
                    setNewInventory({ ...newInventory, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="text"
                  value={newInventory.quantity}
                  onChange={(e) =>
                    setNewInventory({
                      ...newInventory,
                      quantity: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <button
                onClick={handleAddInventory}
                className="px-4 py-2 text-white bg-green-500 rounded-md"
              >
                Add
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-sm font-light text-center">
                  <thead className="font-medium border-b bg-neutral-50 dark:border-neutral-500 dark:text-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-4 rounded-2xl">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Item
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Item type
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Expiry
                      </th>
                      <th scope="col" className="px-6 py-4 rounded-2xl">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/*Please turn this into a component*/}
                  <tbody>
                    {filteredData.map((data) => (
                      <InventoryRow />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default InventoryDisplay;
