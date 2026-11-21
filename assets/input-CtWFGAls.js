import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { F as FieldFrame } from "./field-frame-ByWdCNl8.js";
import { S as SpinnerIcon } from "./icons-v2G8WFHO.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Label = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function Label2(props, forwardedRef) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.label,
      {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event) => {
          const target = event.target;
          if (target.closest("button, input, select, textarea")) return;
          props.onMouseDown?.(event);
          if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
      }
    );
  }, "Label")
);
const INPUT_SIZE = {
  xl: "fs:h-6 fs:text-body-3",
  lg: "fs:h-5 fs:text-body-4"
};
const LABEL_FLOATED = {
  xl: "fs:text-body-4",
  lg: "fs:text-body-5"
};
const LABEL_RESTING = {
  xl: "fs:text-body-3",
  lg: "fs:text-body-4"
};
function hasText(value) {
  return value !== void 0 && value !== null && String(value) !== "";
}
function Input({
  size = "xl",
  invalid = false,
  loading = false,
  label,
  leading,
  trailing,
  className,
  inputClassName,
  id,
  disabled,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  ref,
  ...props
}) {
  const autoId = reactExports.useId();
  const inputId = id ?? autoId;
  const isControlled = value !== void 0;
  const [uncontrolledFilled, setUncontrolledFilled] = reactExports.useState(hasText(defaultValue));
  const [isFocused, setIsFocused] = reactExports.useState(false);
  const isFilled = isControlled ? hasText(value) : uncontrolledFilled;
  const isFloated = isFilled || isFocused;
  const hasLabel = Boolean(label);
  const handleChange = (event) => {
    if (!isControlled) setUncontrolledFilled(event.target.value !== "");
    onChange?.(event);
  };
  const handleFocus = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };
  const handleBlur = (event) => {
    setIsFocused(false);
    onBlur?.(event);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FieldFrame,
    {
      size,
      invalid,
      disabled,
      "data-loading": loading ? "" : void 0,
      className,
      children: [
        leading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs:flex fs:shrink-0 fs:text-muted", children: leading }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs:relative fs:flex fs:min-w-0 fs:flex-1 fs:flex-col fs:justify-center", children: [
          hasLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: inputId,
              className: cn(
                "fs:block fs:truncate fs:font-sans fs:text-muted",
                isFloated ? LABEL_FLOATED[size] : cn(
                  LABEL_RESTING[size],
                  "fs:absolute fs:inset-x-0 fs:top-1/2 fs:-translate-y-1/2"
                )
              ),
              children: label
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref,
              id: inputId,
              disabled,
              value,
              defaultValue,
              placeholder,
              "aria-invalid": invalid || void 0,
              "aria-busy": loading || void 0,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              className: cn(
                "fs:m-0 fs:w-full fs:min-w-0 fs:appearance-none fs:border-0 fs:bg-transparent fs:p-0 fs:font-sans fs:text-inherit fs:outline-none fs:placeholder:text-muted fs:disabled:cursor-not-allowed",
                INPUT_SIZE[size],
                hasLabel && !isFloated && "fs:placeholder:text-transparent",
                inputClassName
              ),
              ...props
            }
          )
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerIcon, { className: "fs:text-muted" }) : trailing ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs:flex fs:shrink-0 fs:text-muted", children: trailing }) : null
      ]
    }
  );
}
Input.__docgenInfo = { "description": "Text input with the Fastsure field surface. Default, Hover, Focused (typing), Filled, Error,\nDisabled and Loading all come from real element state plus the `invalid` / `loading` props.\nNative attributes go to the `<input>`; `className` goes to the frame.", "methods": [], "displayName": "Input", "props": { "size": { "required": false, "tsType": { "name": "FieldSize" }, "description": "Figma `size`: `lg` = 56px, `xl` = 64px.", "defaultValue": { "value": "'xl'", "computed": false } }, "invalid": { "required": false, "tsType": { "name": "boolean" }, "description": "Shows the Figma Error border and sets `aria-invalid`.", "defaultValue": { "value": "false", "computed": false } }, "loading": { "required": false, "tsType": { "name": "boolean" }, "description": "Shows a spinner in place of the trailing adornment and sets `aria-busy`.", "defaultValue": { "value": "false", "computed": false } }, "label": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Floating label: sits at placeholder size while empty and moves above the value when focused or filled." }, "leading": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Adornment before the text (icon)." }, "trailing": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Adornment after the text (icon or button)." }, "inputClassName": { "required": false, "tsType": { "name": "string" }, "description": "Class names for the native `<input>`; `className` styles the outer frame." } }, "composes": ["Omit"] };
export {
  Input as I,
  Label as L
};
