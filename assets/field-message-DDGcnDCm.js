import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
function FieldMessage({ tone, className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      role: tone === "error" ? "alert" : void 0,
      className: cn(
        "fs:m-0 fs:font-sans fs:text-body-5",
        tone === "error" ? "fs:text-danger" : "fs:text-muted",
        className
      ),
      ...props,
      children
    }
  );
}
function joinIds(...ids) {
  const joined = ids.filter(Boolean).join(" ");
  return joined === "" ? void 0 : joined;
}
FieldMessage.__docgenInfo = { "description": "Helper or error text under a field (Figma Body/5, error colour `error/fg/1`).", "methods": [], "displayName": "FieldMessage", "props": { "tone": { "required": true, "tsType": { "name": "union", "raw": "'error' | 'helper'", "elements": [{ "name": "literal", "value": "'error'" }, { "name": "literal", "value": "'helper'" }] }, "description": "" }, "children": { "required": true, "tsType": { "name": "ReactNode" }, "description": "" } }, "composes": ["Omit"] };
export {
  FieldMessage as F,
  joinIds as j
};
