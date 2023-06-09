import React from "react";

import "./Loading.css";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  return <div className="loading">{isLoading && <h3>Loading...</h3>}</div>;
};

export default Loading;
