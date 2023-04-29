import * as React from "react";
import { SVGProps, memo } from "react";
const SvgSuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 78 78"
    {...props}
  >
    <path
      fill="#128C7E"
      fillRule="evenodd"
      d="M39 68.64c18.954 0 34.32-15.366 34.32-34.32S57.954 0 39 0C20.045 0 4.68 15.366 4.68 34.32c0 10.673 4.871 20.207 12.512 26.502.012.01.001.03-.014.024a.014.014 0 0 0-.018.014v10.644c0 2.98 3.14 4.913 5.8 3.572l12.012-6.055a4.256 4.256 0 0 1 2.148-.432c.623.034 1.25.051 1.88.051Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M50.3 24.346a2.42 2.42 0 0 1 .453 3.39l-12.01 15.747a2.417 2.417 0 0 1-3.632.242l-7.623-7.644a2.422 2.422 0 0 1 3.43-3.42l5.66 5.676 10.325-13.538a2.42 2.42 0 0 1 3.398-.453Z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgSuccessIcon);
export default Memo;
