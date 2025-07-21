import { error } from "console";
import React from "react";

const page = () => {
  throw new Error("Something went wrong");
  return <div>About</div>;
};

export default page;
