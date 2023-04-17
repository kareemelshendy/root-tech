import * as React from "react";
import { SVGProps, memo } from "react";
const SvgMobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 42 42"
    {...props}
  >
    <path
      fill="currentColor"
      d="M26.25 39.813h-10.5c-7.717 0-10.063-2.346-10.063-10.063v-17.5c0-7.718 2.346-10.063 10.063-10.063h10.5c7.718 0 10.063 2.345 10.063 10.063v17.5c0 7.718-2.346 10.063-10.063 10.063Zm-10.5-35c-6.265 0-7.438 1.19-7.438 7.437v17.5c0 6.248 1.173 7.438 7.438 7.438h10.5c6.265 0 7.438-1.19 7.438-7.438v-17.5c0-6.247-1.173-7.438-7.438-7.438h-10.5Z"
    />
    <path
      fill="currentColor"
      d="M24.5 10.938h-7a1.322 1.322 0 0 1-1.313-1.313c0-.717.595-1.313 1.313-1.313h7c.718 0 1.313.596 1.313 1.313s-.595 1.313-1.313 1.313ZM21 34.755a4.026 4.026 0 1 1 .001-8.051A4.026 4.026 0 0 1 21 34.755Zm0-5.442c-.77 0-1.4.63-1.4 1.4 0 .77.63 1.4 1.4 1.4.77 0 1.4-.63 1.4-1.4 0-.77-.63-1.4-1.4-1.4Z"
    />
  </svg>
);
const Memo = memo(SvgMobileIcon);
export default Memo;
