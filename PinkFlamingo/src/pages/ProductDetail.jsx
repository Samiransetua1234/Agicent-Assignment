import React, { useState } from "react";
import { useSelector } from "react-redux";
import RatingSystem from "../components/RatingSystem";

export default function ProductDetail() {
  const [count, setCount] = useState(1);
  const product = useSelector((state) => state.data.product_details);
  const {
    id,
    img,
    brand,
    scent,
    availability,
    title,
    key_info,
    desc,
    mrp,
    disc_price,
    rating,
    product_info,
    reviews,
  } = product;

  
  return (
    <div className="flex flex-col py-8 px-20 justify-center items-center w-screen">
      <p className="text-lg w-full text-start text-[#C1C1C1]">{`Product > Dhoop Cones > Jar Cones`}</p>
      <div className="flex flex-row w-full justify-between gap-10">
        <div className="flex flex-row gap-3 justify-center h-[28rem] w-1/2 ">
          <div className="flex flex-col justify-between">
            <img src={img[1]} alt="image1" className="" />
            <img src={img[2]} alt="image2" className="" />
            <img src={img[3]} alt="image3" className="" />
            <img src={img[4]} alt="image4" className="" />
            </div>
          <img src={img[1]} alt="image0" className=" row-span-4 col-span-3  w-[32rem] p-1" />
        </div>
        <div className="flex flex-col gap-3 w-1/2 px-4 py-2">
          <div className="text-sm font-thin">
            <p>
              <span className="font-medium">Brand:</span>
              {brand}
            </p>
            <p>
              <span className="font-medium">Scent:</span>
              {scent}
            </p>
            <p>
              <span className="font-medium">Availability:</span>
              {`Only ${availability} in stock`}
            </p>
          </div>
          <div className='flex flex-col'>
          <h1 className="text-2xl font-bold">{title}</h1>
            <RatingSystem rating={rating} />
          </div>
          <div className="px-4 mb-8">
            <ul className="list-disc">
              <li>{key_info.p1}</li>
              <li>{key_info.p2}</li>
              <li>{key_info.p3}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">USD(incl. of all taxes)</p>
            <div className="flex flex-row gap-5">
              <p className="font-bold ">{`$${disc_price.toFixed(2)}`}</p>
              <p className="font-bold text-[#D9D9D9] line-through">{`$${mrp.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between lg:justify-start gap-6">
            <div className="flex flex-row gap-3 items-center font-semibold">
              <button onClick={() => setCount(count === 1 ? 1 : count - 1)} className="outline-none text-xl">
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)} className="outline-none text-xl">+</button>
            </div>
            <button className="pbuttonbg py-1 text-sm font-semibold px-6 text-white border-none rounded-md">
              Buy Now
            </button>
            <button className="btn bg-clip-text text-sm font-semibold border-solid border-2 border-[#DC8064] py-1 px-4 text-transparent rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[70vw]">
        <div className="flex flex-row justify-center py-3 gap-10">
          <p>Description</p>
          <p>Product Information</p>
          <p>Reviews</p>
        </div>
        <div className="overflow-auto h-44">
          <div className="px-5 py-3">{desc}</div>
          {/* <div>
            {product_info}
          </div>
          <div>
            {reviews}
          </div> */}
        </div>
      </div>
    </div>
  );
}
