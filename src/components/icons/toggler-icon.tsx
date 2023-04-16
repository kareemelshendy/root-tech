import * as React from "react";
import { SVGProps, memo } from "react";
const SvgTogglerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 43 27"
    {...props}
  >
    <rect width={42.188} height={6.75} fill="currentColor" rx={3.375} />
    <rect
      width={42.188}
      height={6.75}
      y={10.125}
      fill="currentColor"
      rx={3.375}
    />
    <rect
      width={42.188}
      height={6.75}
      y={20.25}
      fill="currentColor"
      rx={3.375}
    />
  </svg>
);
const Memo = memo(SvgTogglerIcon);
export default Memo;
