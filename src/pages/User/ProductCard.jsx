import React from "react";

const ProductCard = ({
  name,
  strap_color,
  price,
  original_price,
  discount,
  assured,
  features,
  rating,
  image,
}) => {
  return (
    <div className="shadow-md flex flex-col gap-3">
      <img src={image} alt="Product image" className="h-64 object-contain" />
      <div className="p-4 ">
        <p>{name}</p>
        <p className="max-w-[200px]">{features.join(", ")}</p>
        <div className="flex gap-2 ">
          <p className="font-semibold">$ {price}</p>
          <p className="line-through text-slate-500">{original_price}</p>
          <p className="text-green-700">{discount} off</p>
        </div>
        <p className="bg-[#e9deff] text-[#7048c6] w-fit p-1 text-sm font-semibold">
          Top discount of the sale
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
