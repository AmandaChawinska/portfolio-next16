import React from "react";

const DynamicPages = async ({ params }) => {
  const name = (await params).name;
  return <div className="">DynamicPages {name}</div>;
};

export default DynamicPages;
