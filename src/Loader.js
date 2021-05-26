import React from "react";

const withLoader = (WrappedComponent) => {
  const loaderHOC = ({ isLoading, ...props }) => {
    if (!isLoading) return <WrappedComponent {...props} />;
    return <p>Loading details</p>;
  };

  return loaderHOC;
};
export default withLoader;
