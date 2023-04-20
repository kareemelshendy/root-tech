import * as React from "react";
import { SVGProps, memo } from "react";
const SvgDollarCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M50.25 65.325h-9.412c-6.15 0-11.138-5.175-11.138-11.55a2.833 2.833 0 0 1 2.813-2.813 2.833 2.833 0 0 1 2.812 2.813c0 3.263 2.475 5.925 5.513 5.925h9.412c2.438 0 4.463-2.175 4.463-4.8 0-3.262-1.163-3.9-3.075-4.575L36.525 45c-2.925-1.013-6.862-3.188-6.862-9.9 0-5.775 4.537-10.425 10.087-10.425h9.413c6.15 0 11.137 5.175 11.137 11.55a2.833 2.833 0 0 1-2.812 2.813 2.833 2.833 0 0 1-2.813-2.813c0-3.263-2.475-5.925-5.512-5.925H39.75c-2.437 0-4.462 2.175-4.462 4.8 0 3.262 1.162 3.9 3.075 4.575L53.475 45c2.925 1.013 6.863 3.188 6.863 9.9C60.3 60.638 55.8 65.325 50.25 65.325Z"
    />
    <path
      fill="currentColor"
      d="M45 70.313a2.833 2.833 0 0 1-2.813-2.813v-45A2.833 2.833 0 0 1 45 19.687a2.833 2.833 0 0 1 2.813 2.813v45A2.833 2.833 0 0 1 45 70.313Z"
    />
    <path
      fill="currentColor"
      d="M45 85.313C22.762 85.313 4.687 67.237 4.687 45 4.688 22.762 22.762 4.687 45 4.687c22.237 0 40.313 18.075 40.313 40.313 0 22.237-18.076 40.313-40.313 40.313Zm0-75c-19.125 0-34.688 15.562-34.688 34.687S25.876 79.688 45 79.688 79.688 64.124 79.688 45 64.124 10.312 45 10.312Z"
    />
  </svg>
);
const Memo = memo(SvgDollarCircleIcon);
export default Memo;
