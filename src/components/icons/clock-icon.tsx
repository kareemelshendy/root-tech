import * as React from "react";
import { SVGProps, memo } from "react";
const SvgClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M45 85.313C22.762 85.313 4.687 67.237 4.687 45 4.688 22.762 22.762 4.687 45 4.687c22.237 0 40.313 18.075 40.313 40.313 0 22.237-18.076 40.313-40.313 40.313Zm0-75c-19.125 0-34.688 15.562-34.688 34.687S25.876 79.688 45 79.688 79.688 64.124 79.688 45 64.124 10.312 45 10.312Z"
    />
    <path
      fill="currentColor"
      d="M58.913 59.737c-.488 0-.975-.112-1.425-.412l-11.626-6.938c-2.887-1.724-5.025-5.512-5.025-8.85V28.163a2.833 2.833 0 0 1 2.813-2.813 2.833 2.833 0 0 1 2.813 2.813v15.375c0 1.35 1.124 3.337 2.287 4.012l11.625 6.938c1.35.787 1.763 2.512.975 3.862-.563.9-1.5 1.387-2.438 1.387Z"
    />
  </svg>
);
const Memo = memo(SvgClockIcon);
export default Memo;
