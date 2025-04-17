import React from "react";
import { Link } from "react-router-dom";

function CategoryLinkLaptop({ data }) {
  return (
    <Link
      to="/categories"
      className="flex flex-col gap-3 items-center flex-1 undefined"
    >
      <span className="flex bg-blue-50 p-4 rounded-full text-blue-500">
        {data.Icon ? (
          <data.Icon alt="547" className="text-[30px]" />
        ) : (
          <img src={data.image} alt="547" className="text-[30px]" />
        )}
      </span>
      <span className="text-center text-sm">{data.name}</span>
    </Link>
  );
}

export default CategoryLinkLaptop;
