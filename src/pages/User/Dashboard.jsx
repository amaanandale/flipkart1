import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  const [isHappy, setIsHappy] = useState(false);
  const [price, setPrice] = useState(true);
  const [searchText, setSearch] = useState("");

  const products = [
    {
      name: "Noise Colorfit Icon 2 1.8''",
      strap_color: "Blue",
      price: 1099,
      original_price: 5999,
      discount: "81%",
      assured: true,
      features: ["Incoming Call Notification", "Blue Strap", "Regular Size"],
      rating: "Bestseller",
      image:
        "https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/e/w/m/-original-imagxp8utmyyysut.jpeg?q=50",
    },
    {
      name: "Fastrack Revoltt FS1 1.46.9''",
      strap_color: "Black",
      price: 999,
      original_price: 3799,
      discount: "73%",
      assured: true,
      features: ["Sponsored", "Black Strap", "Free Size"],
      rating: "",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/p/d/-original-imah4nbwc5hbnsvc.jpeg?q=70",
    },
    {
      name: "Noise Icon 2 1.8''",
      strap_color: "Pink",
      price: 1099,
      original_price: 5999,
      discount: "81%",
      assured: true,
      features: ["Incoming Call Notification", "Pink Strap", "Regular Size"],
      rating: "Trending",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/w/4/-original-imagxp8uu5pequex.jpeg?q=70",
    },
    {
      name: "Noise Icon Buzz 1.69''",
      strap_color: "Jet Black",
      price: 999,
      original_price: 4999,
      discount: "80%",
      assured: true,
      features: ["Jet Black Strap", "Regular Size"],
      rating: "Trending",
      image:
        "https://rukminim2.flixcart.com/image/612/612/l5ld8y80/smartwatch/n/i/m/-original-imagg8dddyyzjnxn.jpeg?q=70",
    },
    {
      name: "Noise Icon Buzz 1.69''",
      strap_color: "Jet Black",
      price: 999,
      original_price: 4999,
      discount: "80%",
      assured: true,
      features: ["Jet Black Strap", "Regular Size"],
      rating: "Trending",
      image:
        "https://rukminim2.flixcart.com/image/612/612/l5ld8y80/smartwatch/n/i/m/-original-imagg8dddyyzjnxn.jpeg?q=70",
    },
  ];

  return (
    <div className="flex flex-col flex-wrap  gap-9">
      <div className="flex justify-center gap-2">
        <input
          type="checkbox"
          checked={price}
          onChange={(e) => setPrice(e.target.checked)}
        />
        <p>less then $1000</p>
      </div>
      <input
        type="text"
        className="border"
        value={searchText}
        onChange={(e) => setSearch(e.target.value)}
      />

      {price ? (
        <div className="flex flex-wrap  gap-9">
          {products
            .filter((prod) => prod.price < 1000)
            .map((obj) => (
              <ProductCard {...obj} />
            ))}
        </div>
      ) : (
        <div className="flex flex-wrap  gap-9">
          {products.map((obj) => (
            <ProductCard {...obj} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
