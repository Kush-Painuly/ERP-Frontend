import React from "react";

const Main = ({ children }) => {
  return (
    <div className="flex-1 p-4 md:p-8 min-h-auto">{children}</div>
  );
};

export default Main;
