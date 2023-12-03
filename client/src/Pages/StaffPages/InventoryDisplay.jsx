import "../../index.css";
import React, { useState } from 'react';

function InventoryDisplay() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: '',
  });

  const data = [
    // attributes from database?? Still not able to search/filter
  ];

  const filteredData = data.filter(item =>
    item.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddIngredient = () => {
    // Logic to handle adding the new ingredient to database
    // For now this is temporary
    console.log('New Ingredient:', newIngredient);

    setNewIngredient({ name: '', quantity: '' });
    setShowPopup(false);
  };

  return (
    <>
      <div class="mx-auto mt-16 max-w-lg rounded-2xl border-4 border-green-700 text-center">

        <div className="flex justify-between p-4">
          {!showSearchBar && (
            <button onClick={() => setShowSearchBar(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
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
              className="p-2 border rounded-md w-full"
            />
          )}

          <button onClick={() => setShowPopup(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add New
          </button>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-4">Add New Ingredient</h2>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={newIngredient.name}
                  onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="text"
                  value={newIngredient.quantity}
                  onChange={(e) => setNewIngredient({ ...newIngredient, quantity: e.target.value })}
                  className="border rounded-md p-2 w-full"
                />
              </label>
              <button onClick={handleAddIngredient} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
              <button onClick={() => setShowPopup(false)} className="bg-gray-300 text-black px-4 py-2 rounded-md ml-2">Cancel</button>
            </div>
          </div>
        )}


          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead class="border-b bg-neutral-50 font-medium  dark:border-neutral-500 dark:text-neutral-800">
                      <tr>
                        <th scope="col" class="px-6 py-4 rounded-2xl">#</th>
                        <th scope="col" class="px-6 py-4">Ingredient</th>
                        <th scope="col" class="px-6 py-4">Quantity</th>
                        <th scope="col" class="px-6 py-4 rounded-2xl">Action</th>
                      </tr>
                    </thead>

                    {/* Only a sample data, should be from database*/}
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Banana</td>
                        <td class="whitespace-nowrap px-6 py-4">5</td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <button>Edit</button>
                            <button>Delete</button>
                          </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td class="whitespace-nowrap px-6 py-4">Test</td>
                        <td class="whitespace-nowrap px-6 py-4">5</td>
                          <td class="whitespace-nowrap px-6 py-4">
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
