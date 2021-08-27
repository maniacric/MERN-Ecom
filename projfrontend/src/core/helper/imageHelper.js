import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://image.shutterstock.com/image-illustration/not-available-red-rubber-stamp-260nw-586791809.jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "60%", maxWidth: "80%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;