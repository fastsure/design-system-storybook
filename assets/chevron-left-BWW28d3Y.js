import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
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
function ChevronLeftIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M13.293 5.293C13.683 4.902 14.316 4.902 14.707 5.293C15.097 5.683 15.097 6.316 14.707 6.707L9.414 12L14.707 17.293C15.097 17.683 15.097 18.316 14.707 18.707C14.316 19.098 13.683 19.098 13.293 18.707L7.293 12.707C6.902 12.316 6.902 11.683 7.293 11.293L13.293 5.293Z",
      fill: "currentColor"
    }
  ) });
}
export {
  ChevronLeftIcon as C
};
