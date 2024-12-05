import React from "react";

const Layout = ({ children, modal }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default Layout;
