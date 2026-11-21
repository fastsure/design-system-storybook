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
function CloseIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M17.293 5.293C17.683 4.902 18.316 4.902 18.707 5.293C19.097 5.683 19.097 6.316 18.707 6.707L6.707 18.707C6.316 19.097 5.683 19.097 5.293 18.707C4.902 18.316 4.902 17.683 5.293 17.293L17.293 5.293Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M5.293 5.293C5.683 4.902 6.316 4.902 6.707 5.293L18.707 17.293C19.097 17.683 19.097 18.316 18.707 18.707C18.316 19.097 17.683 19.097 17.293 18.707L5.293 6.707C4.902 6.316 4.902 5.683 5.293 5.293Z",
        fill: "currentColor"
      }
    )
  ] });
}
export {
  CloseIcon as C
};
