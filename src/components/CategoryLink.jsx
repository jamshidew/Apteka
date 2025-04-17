import React from "react";
import { Link } from "react-router-dom";

function CategoryLink({ data }) {
  return (
    <Link
      className="flex border rounded-lg overflow-hidden border-gray-200"
      to={`/categories`}
    >
      <span className="flex bg-blue-50 p-3 text-blue-500 items-center shrink-0">
        {data.Icon ? (
          <data.Icon alt="547" className="text-[30px]" />
        ) : (
          <img src={data.image} alt="547" className="text-[30px]" />
        )}
      </span>

      <span className="text-xs p-2 flex items-center leading-tight">
        {data.name}
      </span>
    </Link>
  );
}

export default CategoryLink;
