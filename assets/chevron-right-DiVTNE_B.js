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
function ChevronRightIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M9.293 5.293C9.683 4.902 10.316 4.902 10.707 5.293L16.707 11.293C17.097 11.683 17.097 12.316 16.707 12.707L10.707 18.707C10.316 19.098 9.683 19.098 9.293 18.707C8.902 18.316 8.902 17.683 9.293 17.293L14.586 12L9.293 6.707C8.902 6.316 8.902 5.683 9.293 5.293Z",
      fill: "currentColor"
    }
  ) });
}
export {
  ChevronRightIcon as C
};
