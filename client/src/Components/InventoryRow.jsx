function InventoryRow() {
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-6 py-4 font-medium whitespace-nowrap">1</td>
        <td className="px-6 py-4 whitespace-nowrap">Banana</td>
        <td className="px-6 py-4 whitespace-nowrap">Ingredient</td>
        <td className="px-6 py-4 whitespace-nowrap">5</td>
        <td className="px-6 py-4 whitespace-nowrap">September 6, 2024</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
      <tr className="border-b dark:border-neutral-500">
        <td className="px-6 py-4 font-medium whitespace-nowrap">2</td>
        <td className="px-6 py-4 whitespace-nowrap">Test</td>
        <td className="px-6 py-4 whitespace-nowrap">Miscellaneous</td>
        <td className="px-6 py-4 whitespace-nowrap">5</td>
        <td className="px-6 py-4 whitespace-nowrap">Banana</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default InventoryRow;
