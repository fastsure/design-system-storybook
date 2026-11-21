import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
const CELL_STATE = {
  default: "fs:text-ink",
  today: "fs:text-accent",
  selected: "fs:font-bold fs:text-gray-0",
  range: "fs:bg-calendar-range fs:text-calendar-range-ink",
  disabled: "fs:cursor-not-allowed fs:text-gray-300",
  other: "fs:text-muted"
};
const DISC_STATE = {
  default: "fs:group-hover:bg-surface-muted",
  today: "fs:group-hover:bg-surface-muted",
  selected: "fs:bg-calendar-selected",
  range: "",
  disabled: "",
  other: "fs:group-hover:bg-surface-muted"
};
function DayCell({
  state = "default",
  className,
  children,
  disabled,
  ...props
}) {
  const isDisabled = disabled ?? state === "disabled";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-state": state,
      disabled: isDisabled,
      className: cn(
        "fs:group fs:relative fs:m-0 fs:flex fs:size-control-sm fs:cursor-pointer fs:items-center fs:justify-center fs:border-0 fs:bg-transparent fs:p-0 fs:font-sans fs:text-body-4 fs:outline-none",
        CELL_STATE[state],
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "fs:flex fs:size-9 fs:items-center fs:justify-center fs:rounded-full fs:group-focus-visible:shadow-focus",
              isDisabled ? "" : DISC_STATE[state]
            ),
            children
          }
        ),
        state === "today" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "fs:absolute fs:bottom-1.5 fs:left-1/2 fs:size-1 fs:-translate-x-1/2 fs:rounded-full fs:bg-accent"
          }
        ) : null
      ]
    }
  );
}
DayCell.__docgenInfo = { "description": "One day in the calendar grid: a 40px cell with a 36px disc for the selected day and a dot\nunder today. The calendar maps its own day modifiers to `state`.", "methods": [], "displayName": "DayCell", "props": { "state": { "required": false, "tsType": { "name": "union", "raw": "'default' | 'today' | 'selected' | 'range' | 'disabled' | 'other'", "elements": [{ "name": "literal", "value": "'default'" }, { "name": "literal", "value": "'today'" }, { "name": "literal", "value": "'selected'" }, { "name": "literal", "value": "'range'" }, { "name": "literal", "value": "'disabled'" }, { "name": "literal", "value": "'other'" }] }, "description": "", "defaultValue": { "value": "'default'", "computed": false } } }, "composes": ["Omit"] };
export {
  DayCell as D
};
