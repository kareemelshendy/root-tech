import * as React from "react";
import { SVGProps, memo } from "react";
const SvgWindowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path
      fill="currentColor"
      d="m84 8-39 4.824v30.338h39V8Zm-42.714 5.284L6 17.648v25.514h35.286V13.284ZM6 46.838v25.514l35.286 4.364V46.838H6Zm39 0v30.338L84 82V46.838H45Z"
    />
  </svg>
);
const Memo = memo(SvgWindowsIcon);
export default Memo;
