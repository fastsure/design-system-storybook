import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var VisuallyHidden = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function VisuallyHidden2(props, forwardedRef) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }, "VisuallyHidden")
);
export {
  VISUALLY_HIDDEN_STYLES as V,
  VisuallyHidden as a
};
