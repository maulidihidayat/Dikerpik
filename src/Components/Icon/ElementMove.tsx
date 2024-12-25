import React from "react";
import { IconType } from "./typeIcon";

const ElementMove = ({ width, height, fill, lineColor }: IconType) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        width="300"
        height="20"
      >
        <path
          d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
          fill="none"
          stroke="purple"
          strokeWidth="25"
          strokeDasharray="500"
          strokeDashoffset="500"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="500"
            to="0"
            dur="1s"
            fill="freeze"
            begin="0s; stroke-dashoffset.end + 2s"
            repeatCount="infinite"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="1s"
            fill="freeze"
            begin="1s; opacity.end + 2s"
          />
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="500"
            dur="0s"
            fill="freeze"
            begin="2s; stroke-dashoffset.end + 2s"
          />
          <animate
            attributeName="opacity"
            values="0;1"
            dur="0s"
            fill="freeze"
            begin="52s; opacity.end + 2s"
          />
        </path>
      </svg>
    </div>
  );
};

export default ElementMove;
