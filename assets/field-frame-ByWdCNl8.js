import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
const SIZE_CLASSES = {
  lg: "fs:h-control-lg fs:px-s-3",
  xl: "fs:h-control-xl fs:px-s-4"
};
function fieldFrameClasses({
  size,
  invalid = false,
  disabled = false,
  focusStyle = "within"
}) {
  return cn(
    "fs:box-border fs:flex fs:w-full fs:items-center fs:gap-s-2 fs:rounded-control fs:border fs:border-solid fs:font-sans fs:outline-none",
    SIZE_CLASSES[size],
    disabled ? "fs:cursor-not-allowed fs:border-line fs:bg-surface-muted fs:text-muted" : cn(
      "fs:bg-panel fs:text-ink fs:hover:bg-surface-subtle",
      invalid ? "fs:border-danger" : "fs:border-line",
      focusStyle === "within" ? "fs:focus-within:shadow-focus" : "fs:focus-visible:shadow-focus",
      focusStyle === "within" && !invalid && "fs:focus-within:border-active"
    )
  );
}
function FieldFrame({ size, invalid, disabled, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-size": size,
      "data-invalid": invalid ? "" : void 0,
      "data-disabled": disabled ? "" : void 0,
      className: cn(fieldFrameClasses({ size, invalid, disabled }), className),
      ...props
    }
  );
}
FieldFrame.__docgenInfo = { "description": "The bordered surface that wraps a native control and its adornments.", "methods": [], "displayName": "FieldFrame", "composes": ["ComponentProps", "Omit"] };
export {
  FieldFrame as F,
  fieldFrameClasses as f
};
