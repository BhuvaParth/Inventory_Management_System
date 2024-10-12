import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inventorydashboard() {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem("inventory")) || [];
    setInventory(storedInventory);
  }, []);

  const handleDelete = (id) => {
    const updatedInventory = inventory.filter((_, i) => i !== id);
    setInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
  };

  const handleEdit = (id) => {
    const editItemData = inventory[id];
    navigate(`/edit/${id}`, { state: { item: editItemData, index: id } });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">List Of Inventory</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-start">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Item Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Supplier Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Supplier Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.itemName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.supplier.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {item.supplier.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 text-red-600 hover:underline"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
