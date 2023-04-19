import * as React from "react";
import { SVGProps, memo } from "react";
const SvgDatabaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 76 76"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.91 0A6.907 6.907 0 0 0 0 6.91v10.363a3.456 3.456 0 0 0 3.455 3.454h69.09A3.456 3.456 0 0 0 76 17.273V6.909A6.907 6.907 0 0 0 69.09 0H6.91ZM3.454 27.636A3.456 3.456 0 0 0 0 31.091v13.818a3.456 3.456 0 0 0 3.455 3.455h69.09A3.456 3.456 0 0 0 76 44.909V31.091a3.456 3.456 0 0 0-3.454-3.455H3.455Zm0 27.637A3.456 3.456 0 0 0 0 58.727v10.364A6.907 6.907 0 0 0 6.91 76h62.18A6.907 6.907 0 0 0 76 69.09V58.728a3.456 3.456 0 0 0-3.454-3.454H3.455Z"
    />
  </svg>
);
const Memo = memo(SvgDatabaseIcon);
export default Memo;
