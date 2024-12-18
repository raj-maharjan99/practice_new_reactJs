import React from "react";
import { useLocation } from "react-router-dom";

const Full = () => {
  const location = useLocation();
  console.log(location);
  return <div>Full</div>;
};

export default Full;
