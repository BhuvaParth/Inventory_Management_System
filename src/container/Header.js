import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-black text-lg font-bold">
                Project Inventory
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                  <>
                    <Link
                      to="/inventoryForm"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black"
                    >
                      Add Inventory
                    </Link>
                    <Link
                      to="/suppliersection"
                      className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black"
                    >
                      Supplier Section
                    </Link>
                  </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
