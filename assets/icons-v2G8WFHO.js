import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { C as ChevronLeftIcon$1 } from "./chevron-left-BWW28d3Y.js";
import { C as ChevronRightIcon$1 } from "./chevron-right-DiVTNE_B.js";
import { C as CloseIcon } from "./close-BYyk_y45.js";
import { c as cn } from "./cn-JQCre-CP.js";
var DEFAULT_SIZE$5 = 24;
var VIEW_BOX$5 = "0 0 24 24";
function IconBase$5({
  size = DEFAULT_SIZE$5,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$5,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function CalendarDaysIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase$5, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M8.01 17C8.562 17 9.01 17.448 9.01 18C9.01 18.552 8.562 19 8.01 19H8C7.448 19 7 18.552 7 18C7 17.448 7.448 17 8 17H8.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12.01 17C12.562 17 13.01 17.448 13.01 18C13.01 18.552 12.562 19 12.01 19H12C11.448 19 11 18.552 11 18C11 17.448 11.448 17 12 17H12.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M16.01 17C16.562 17 17.01 17.448 17.01 18C17.01 18.552 16.562 19 16.01 19H16C15.448 19 15 18.552 15 18C15 17.448 15.448 17 16 17H16.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M8.01 13C8.562 13 9.01 13.448 9.01 14C9.01 14.552 8.562 15 8.01 15H8C7.448 15 7 14.552 7 14C7 13.448 7.448 13 8 13H8.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12.01 13C12.562 13 13.01 13.448 13.01 14C13.01 14.552 12.562 15 12.01 15H12C11.448 15 11 14.552 11 14C11 13.448 11.448 13 12 13H12.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M16.01 13C16.562 13 17.01 13.448 17.01 14C17.01 14.552 16.562 15 16.01 15H16C15.448 15 15 14.552 15 14C15 13.448 15.448 13 16 13H16.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M16 1C16.552 1 17 1.448 17 2V3H19C20.657 3 22 4.343 22 6V20C22 21.657 20.657 23 19 23H5C3.343 23 2 21.657 2 20V6C2 4.343 3.343 3 5 3H7V2C7 1.448 7.448 1 8 1C8.552 1 9 1.448 9 2V3H15V2C15 1.448 15.448 1 16 1ZM4 20C4 20.552 4.448 21 5 21H19C19.552 21 20 20.552 20 20V11H4V20ZM5 5C4.448 5 4 5.448 4 6V9H20V6C20 5.448 19.552 5 19 5H17V6C17 6.552 16.552 7 16 7C15.448 7 15 6.552 15 6V5H9V6C9 6.552 8.552 7 8 7C7.448 7 7 6.552 7 6V5H5Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      }
    )
  ] });
}
var DEFAULT_SIZE$4 = 24;
var VIEW_BOX$4 = "0 0 24 24";
function IconBase$4({
  size = DEFAULT_SIZE$4,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$4,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function CheckIcon$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase$4, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M19.2929 5.293C19.6834 4.903 20.3165 4.903 20.707 5.293C21.0972 5.684 21.0973 6.317 20.707 6.707L9.707 17.707C9.3165 18.098 8.6834 18.097 8.2929 17.707L3.2929 12.707C2.9024 12.317 2.9024 11.684 3.2929 11.293C3.6834 10.903 4.3165 10.903 4.707 11.293L8.9999 15.586L19.2929 5.293Z",
      fill: "currentColor"
    }
  ) });
}
var DEFAULT_SIZE$3 = 24;
var VIEW_BOX$3 = "0 0 24 24";
function IconBase$3({
  size = DEFAULT_SIZE$3,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$3,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function ChevronDownIcon$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase$3, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M17.293 8.293C17.683 7.902 18.316 7.902 18.707 8.293C19.097 8.683 19.097 9.316 18.707 9.707L12.707 15.707C12.316 16.098 11.683 16.098 11.293 15.707L5.293 9.707C4.902 9.316 4.902 8.683 5.293 8.293C5.683 7.902 6.316 7.902 6.707 8.293L12 13.586L17.293 8.293Z",
      fill: "currentColor"
    }
  ) });
}
var DEFAULT_SIZE$2 = 24;
var VIEW_BOX$2 = "0 0 24 24";
function IconBase$2({
  size = DEFAULT_SIZE$2,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$2,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function ChevronUpIcon$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase$2, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M11.3691 8.225C11.7618 7.904 12.3408 7.927 12.707 8.293L18.707 14.293C19.0975 14.684 19.0975 15.317 18.707 15.707C18.3164 16.098 17.6834 16.098 17.2929 15.707L11.9999 10.414L6.707 15.707C6.3164 16.098 5.6834 16.098 5.2929 15.707C4.9024 15.317 4.9024 14.684 5.2929 14.293L11.2929 8.293L11.3691 8.225Z",
      fill: "currentColor"
    }
  ) });
}
var DEFAULT_SIZE$1 = 24;
var VIEW_BOX$1 = "0 0 24 24";
function IconBase$1({
  size = DEFAULT_SIZE$1,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$1,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function PhoneIcon$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase$1, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M7 1C7.796 1 8.558 1.316 9.121 1.879C9.684 2.442 10 3.204 10 4V7C10 7.466 9.892 7.925 9.684 8.342C9.475 8.758 9.172 9.121 8.8 9.4L8.338 9.745C9.603 12.314 11.682 14.392 14.249 15.658L14.6 15.2L14.709 15.063C14.971 14.753 15.294 14.499 15.658 14.316C16.075 14.108 16.534 14 17 14H20C20.796 14 21.558 14.316 22.121 14.879C22.684 15.442 23 16.204 23 17V20C23 20.796 22.684 21.558 22.121 22.121C21.558 22.684 20.796 23 20 23C14.961 23 10.129 20.998 6.565 17.435C3.002 13.871 1 9.039 1 4C1 3.204 1.316 2.442 1.879 1.879C2.442 1.316 3.204 1 4 1H7ZM4 3C3.735 3 3.481 3.105 3.293 3.293C3.105 3.481 3 3.735 3 4C3 8.509 4.791 12.832 7.979 16.021C11.168 19.209 15.491 21 20 21C20.265 21 20.519 20.895 20.707 20.707C20.895 20.519 21 20.265 21 20V17C21 16.735 20.895 16.481 20.707 16.293C20.519 16.105 20.265 16 20 16H17C16.845 16 16.692 16.036 16.553 16.105C16.414 16.175 16.293 16.276 16.2 16.4L16.195 16.407L15.84 16.87C15.565 17.232 15.175 17.489 14.734 17.6C14.293 17.71 13.828 17.666 13.415 17.477C13.407 17.473 13.399 17.47 13.392 17.466C10.416 16.005 8.007 13.6 6.543 10.626L6.541 10.622C6.339 10.207 6.286 9.735 6.393 9.285C6.499 8.836 6.758 8.437 7.125 8.156L7.132 8.151L7.6 7.8C7.724 7.707 7.825 7.586 7.895 7.447C7.964 7.308 8 7.155 8 7V4C8 3.735 7.895 3.481 7.707 3.293C7.519 3.105 7.265 3 7 3H4Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor"
    }
  ) });
}
var DEFAULT_SIZE = 24;
var VIEW_BOX = "0 0 24 24";
function IconBase({
  size = DEFAULT_SIZE,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function SearchIcon$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M11 2C15.971 2 20 6.029 20 11C20 13.125 19.262 15.077 18.03 16.616L21.707 20.293C22.097 20.683 22.098 21.317 21.707 21.707C21.317 22.098 20.683 22.097 20.293 21.707L16.616 18.03C15.077 19.262 13.125 20 11 20C6.029 20 2 15.971 2 11C2 6.029 6.029 2 11 2ZM11 4C7.134 4 4 7.134 4 11C4 14.866 7.134 18 11 18C14.866 18 18 14.866 18 11C18 7.134 14.866 4 11 4Z",
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor"
    }
  ) });
}
function sized(Glyph) {
  return function SizedIcon({ className, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Glyph, { className: cn("fs:size-icon-lg fs:shrink-0", className), ...props });
  };
}
const SearchIcon = sized(SearchIcon$1);
const ClearIcon = sized(CloseIcon);
const ChevronDownIcon = sized(ChevronDownIcon$1);
const ChevronUpIcon = sized(ChevronUpIcon$1);
const ChevronLeftIcon = sized(ChevronLeftIcon$1);
const ChevronRightIcon = sized(ChevronRightIcon$1);
const CheckIcon = sized(CheckIcon$1);
const CalendarIcon = sized(CalendarDaysIcon);
const PhoneIcon = sized(PhoneIcon$1);
function SpinnerIcon({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      className: cn("fs:size-icon-lg fs:shrink-0 fs:animate-spin", className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    }
  );
}
SpinnerIcon.__docgenInfo = { "description": "Spinning arc for the `loading` state. Inline: the icon set has no spinner.", "methods": [], "displayName": "SpinnerIcon" };
export {
  ClearIcon as C,
  PhoneIcon as P,
  SpinnerIcon as S,
  SearchIcon as a,
  ChevronUpIcon as b,
  ChevronDownIcon as c,
  CheckIcon as d,
  ChevronLeftIcon as e,
  ChevronRightIcon as f,
  CalendarIcon as g
};
