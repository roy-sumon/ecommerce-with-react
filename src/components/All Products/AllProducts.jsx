import React, { useEffect, useState } from "react";
import { getPost } from "../../Api/GetData";
import Cart from "../Cart/Cart";
import { AiFillProduct } from "react-icons/ai";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div>
        <p className="text-red-500 font-semibold flex items-center gap-2">
          <AiFillProduct className="size-8" />
          Our Products
        </p>
        <h2 className="font-bold text-xl">Explore Our Products</h2>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.length > 0 ? (
          data.slice(0, showAll ? data.length : 4).map((currData) => {
            return <Cart key={currData.id} currData={currData} />;
          })
        ) : (
          <p>No products available.</p>
        )}
      </ul>
      <div className="text-center my-2">
        {data.length > 4 && !showAll && (
          <button
            className="bg-red-500 text-white px-5 font-semibold duration-300 hover:bg-red-600 py-2 rounded"
            onClick={handleViewAll}
          >
            View All Products
          </button>
        )}
        {data.length > 4 && showAll && (
          <button
            className="bg-red-500 text-white px-5 duration-300 font-semibold hover:bg-red-600 py-2 rounded"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
