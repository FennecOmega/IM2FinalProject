import "../../index.css";
import React, { useState } from "react";

function InventoryDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: "",
  });

  const data = [
    // attributes from database?? Still not able to search/filter
  ];

  const filteredData = data.filter((item) =>
    item.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddIngredient = () => {
    // Logic to handle adding the new ingredient to database
    // For now this is temporary
    console.log("New Ingredient:", newIngredient);

    setNewIngredient({ name: "", quantity: "" });
    setShowPopup(false);
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-16 text-center border-4 border-green-700 rounded-2xl">
        <div className="flex justify-between p-4">
          {!showSearchBar && (
            <button
              onClick={() => setShowSearchBar(true)}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
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
              className="w-full p-2 border rounded-md"
            />
          )}

          <button
            onClick={() => setShowPopup(true)}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Add New
          </button>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded-md">
              <h2 className="mb-4 text-xl font-semibold">Add New Ingredient</h2>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={newIngredient.name}
                  onChange={(e) =>
                    setNewIngredient({ ...newIngredient, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="text"
                  value={newIngredient.quantity}
                  onChange={(e) =>
                    setNewIngredient({
                      ...newIngredient,
                      quantity: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <button
                onClick={handleAddIngredient}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Add
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 ml-2 text-black bg-gray-300 rounded-md"
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
                        Ingredient
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4 rounded-2xl">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* Only a sample data, should be from database*/}
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Banana</td>
                      <td className="px-6 py-4 whitespace-nowrap">5</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Test</td>
                      <td className="px-6 py-4 whitespace-nowrap">5</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryDisplay;
