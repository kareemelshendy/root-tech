import * as React from "react";
import { SVGProps, memo } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.967.987a3.373 3.373 0 0 0-4.77 0 3.375 3.375 0 0 0 0 4.772l10.131 10.136L.989 26.239a3.373 3.373 0 1 0 4.77 4.772L16.1 20.667l10.142 10.145a3.372 3.372 0 0 0 4.77 0 3.375 3.375 0 0 0 0-4.771L20.87 15.895l9.935-9.937a3.373 3.373 0 1 0-4.77-4.772l-9.935 9.937L5.967.987Z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgCloseIcon);
export default Memo;
