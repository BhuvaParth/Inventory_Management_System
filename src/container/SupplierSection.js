import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupplierSection() {
  const [suppliers, setSuppliers] = useState([]);
  const [inventory, setInventory] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem("inventory")) || [];
    setInventory(storedInventory); 

    const uniqueSuppliers = storedInventory.reduce((acc, item) => {
      const { name, contact } = item.supplier;

      const supplierIdentifier = `${name}-${contact}`;

      const existingSupplierIndex = acc.findIndex(
        (supplier) => supplier.identifier === supplierIdentifier
      );

      if (existingSupplierIndex === -1) {
        acc.push({
          identifier: supplierIdentifier,
          name,
          contact,
          itemsSupplied: [item.itemName],
        });
      } else {
        acc[existingSupplierIndex].itemsSupplied.push(item.itemName);
      }

      return acc;
    }, []);

    setSuppliers(uniqueSuppliers);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Supplier Information
      </h1>
      <div className="space-y-4">
        {suppliers.map((supplier, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              Supplier Name :- {supplier.name}
            </h2>
            <p className="text-gray-600">Contact :- {supplier.contact}</p>
            <p className="text-gray-600">
              Items Supplied :- {supplier.itemsSupplied.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
