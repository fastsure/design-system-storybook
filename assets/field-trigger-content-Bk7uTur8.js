import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { S as SpinnerIcon } from "./icons-v2G8WFHO.js";
const ADORNMENT = "fs:flex fs:shrink-0 fs:items-center";
function FieldTriggerContent({
  size,
  label,
  labelId,
  hasValue,
  disabled = false,
  loading = false,
  leading,
  icon,
  children
}) {
  const valueText = size === "xl" ? "fs:text-body-3" : "fs:text-body-4";
  const labelText = size === "xl" ? "fs:text-body-4" : "fs:text-body-5";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    leading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(ADORNMENT, "fs:text-muted"), children: leading }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs:flex fs:min-w-0 fs:flex-1 fs:flex-col fs:justify-center fs:text-left", children: [
      label ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          id: labelId,
          className: cn(
            labelText,
            hasValue && !loading ? "fs:truncate fs:text-muted" : "fs:sr-only"
          ),
          children: label
        }
      ) : null,
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerIcon, { className: "fs:text-muted" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            valueText,
            "fs:truncate",
            hasValue && !disabled ? "fs:text-ink" : "fs:text-muted",
            loading && "fs:sr-only"
          ),
          children
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(ADORNMENT, "fs:text-muted"), children: icon })
  ] });
}
FieldTriggerContent.__docgenInfo = { "description": "Inner layout shared by the Dropdown and DatePicker triggers.", "methods": [], "displayName": "FieldTriggerContent", "props": { "size": { "required": true, "tsType": { "name": "FieldSize" }, "description": "" }, "label": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Floating label: shown small above the value once a value is set, otherwise screen-reader only." }, "labelId": { "required": false, "tsType": { "name": "union", "raw": "string | undefined", "elements": [{ "name": "string" }, { "name": "undefined" }] }, "description": "" }, "hasValue": { "required": true, "tsType": { "name": "boolean" }, "description": "" }, "disabled": { "required": false, "tsType": { "name": "union", "raw": "boolean | undefined", "elements": [{ "name": "boolean" }, { "name": "undefined" }] }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "loading": { "required": false, "tsType": { "name": "union", "raw": "boolean | undefined", "elements": [{ "name": "boolean" }, { "name": "undefined" }] }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "leading": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "icon": { "required": true, "tsType": { "name": "ReactNode" }, "description": "Trailing icon (chevron, calendar)." }, "children": { "required": true, "tsType": { "name": "ReactNode" }, "description": "The value or placeholder node." } } };
export {
  FieldTriggerContent as F
};
