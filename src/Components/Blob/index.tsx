import React from "react";

interface BlobProps {
  width?: string;
  height?: string;
  background?: string;
  className?: string;
}

const Blob: React.FunctionComponent<BlobProps> = (props) => {
  const { width, height, background, className } = props;

  const styled = {
    width: width,
    height: height,
    background: background,
  };

  return (
    <div className={`blob ${className ? className : ""}`} style={styled}></div>
  );
};

export default Blob;
