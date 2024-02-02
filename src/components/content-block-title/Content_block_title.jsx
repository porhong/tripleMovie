import React from "react";
import { Children } from "react";

const Content_block_title = ({ title, children }) => {
  return (
    <>
      <div className="w-fit text-2xl font-bold flex mt-10">
        <div className="self-center me-2">{children}</div>
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default Content_block_title;
