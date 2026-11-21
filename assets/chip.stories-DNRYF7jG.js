import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { C as CloseIcon } from "./close-BYyk_y45.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
const SELECTED_CLASSES = { root: "fs:border-active", label: "fs:text-mint-700" };
const UNSELECTED_CLASSES = { root: "fs:border-paper", label: "fs:text-ink" };
const BUTTON_RESET = "fs:box-border fs:m-0 fs:border-0 fs:bg-transparent fs:font-sans fs:text-label-3 fs:whitespace-nowrap fs:cursor-pointer fs:outline-none fs:focus-visible:shadow-focus fs:rounded-full fs:disabled:cursor-not-allowed";
function Chip({
  selected = false,
  icon,
  onRemove,
  removeLabel = "Remove",
  disabled = false,
  className,
  type = "button",
  children,
  ref,
  ...props
}) {
  const look = selected ? SELECTED_CLASSES : UNSELECTED_CLASSES;
  const isRemovable = onRemove !== void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "fs:box-border fs:inline-flex fs:items-center fs:rounded-full fs:border fs:border-solid fs:bg-panel",
        look.root,
        disabled && "fs:opacity-40",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            ref,
            type,
            disabled,
            "aria-pressed": selected,
            className: cn(
              BUTTON_RESET,
              "fs:inline-flex fs:items-center fs:justify-center fs:gap-s-1 fs:py-s-2",
              isRemovable ? "fs:pl-s-4 fs:pr-s-2" : "fs:px-s-4",
              look.label
            ),
            ...props,
            children: [
              icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: "fs:inline-flex fs:size-icon-sm fs:shrink-0 fs:[&>svg]:size-full",
                  children: icon
                }
              ),
              children
            ]
          }
        ),
        isRemovable && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled,
            "aria-label": removeLabel,
            onClick: onRemove,
            className: cn(
              BUTTON_RESET,
              "fs:inline-flex fs:items-center fs:justify-center fs:py-s-2 fs:pl-s-1 fs:pr-s-3",
              look.label
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, { className: "fs:size-icon-sm" })
          }
        )
      ]
    }
  );
}
Chip.__docgenInfo = { "description": 'Selectable pill (Figma "Chip"): a toggle button with an optional icon and remove button.', "methods": [], "displayName": "Chip", "props": { "selected": { "required": false, "tsType": { "name": "boolean" }, "description": 'Selected look (Figma "Selected=True"), exposed to assistive technology as `aria-pressed`.', "defaultValue": { "value": "false", "computed": false } }, "icon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon shown before the label. Decorative: hidden from assistive technology." }, "onRemove": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "When set, a remove button is shown after the label and calls this on click." }, "removeLabel": { "required": false, "tsType": { "name": "string" }, "description": 'Accessible name of the remove button. Defaults to "Remove".', "defaultValue": { "value": "'Remove'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Applied to the outer element; `ref` and the other props go to the label button." }, "disabled": { "defaultValue": { "value": "false", "computed": false }, "required": false }, "type": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } }, "composes": ["ComponentProps"] };
function FunnelIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 3h12l-4.5 5.5V13l-3-1.5V8.5L2 3z", strokeLinejoin: "round" }) });
}
const meta = {
  title: "Buttons/Chip",
  component: Chip,
  args: {
    children: "ชั้น 1"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=142-1268"
    }
  }
};
const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--fs-space-3)"
};
const Playground = {};
const SelectedStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "grid",
    gap: "var(--fs-space-3)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, children: "Unselected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, selected: true, children: "Selected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, disabled: true, children: "Disabled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, selected: true, disabled: true, children: "Selected disabled" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelIcon, {}), children: "Unselected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelIcon, {}), selected: true, children: "Selected" })
    ] })
  ] })
};
const Removable = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, onRemove: () => void 0, removeLabel: "Remove floor 1", children: "ชั้น 1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { ...args, selected: true, onRemove: () => void 0, removeLabel: "Remove floor 2", children: "ชั้น 2" })
  ] })
};
const Toggleable = {
  render: function Render(args) {
    const [floors, setFloors] = reactExports.useState([1]);
    const toggle = (floor) => setFloors((current) => current.includes(floor) ? current.filter((value) => value !== floor) : [...current, floor]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: rowStyle, children: [1, 2, 3].map((floor) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { ...args, selected: floors.includes(floor), onClick: () => toggle(floor), children: [
      "ชั้น ",
      floor
    ] }, floor)) });
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...Playground.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Playground.parameters?.docs?.source
    }
  }
};
SelectedStates.parameters = {
  ...SelectedStates.parameters,
  docs: {
    ...SelectedStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 'var(--fs-space-3)'\n  }}>\n      <div style={rowStyle}>\n        <Chip {...args}>Unselected</Chip>\n        <Chip {...args} selected>\n          Selected\n        </Chip>\n        <Chip {...args} disabled>\n          Disabled\n        </Chip>\n        <Chip {...args} selected disabled>\n          Selected disabled\n        </Chip>\n      </div>\n      <div style={rowStyle}>\n        <Chip {...args} icon={<FunnelIcon />}>\n          Unselected\n        </Chip>\n        <Chip {...args} icon={<FunnelIcon />} selected>\n          Selected\n        </Chip>\n      </div>\n    </div>\n}",
      ...SelectedStates.parameters?.docs?.source
    },
    description: {
      story: 'Figma "Selected=False" and "Selected=True", with and without the leading icon, plus Disabled.',
      ...SelectedStates.parameters?.docs?.description
    }
  }
};
Removable.parameters = {
  ...Removable.parameters,
  docs: {
    ...Removable.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <div style={rowStyle}>\n      <Chip {...args} onRemove={() => undefined} removeLabel="Remove floor 1">\n        ชั้น 1\n      </Chip>\n      <Chip {...args} selected onRemove={() => undefined} removeLabel="Remove floor 2">\n        ชั้น 2\n      </Chip>\n    </div>\n}',
      ...Removable.parameters?.docs?.source
    }
  }
};
Toggleable.parameters = {
  ...Toggleable.parameters,
  docs: {
    ...Toggleable.parameters?.docs,
    source: {
      originalSource: "{\n  render: function Render(args) {\n    const [floors, setFloors] = useState<readonly number[]>([1]);\n    const toggle = (floor: number) => setFloors(current => current.includes(floor) ? current.filter(value => value !== floor) : [...current, floor]);\n    return <div style={rowStyle}>\n        {[1, 2, 3].map(floor => <Chip key={floor} {...args} selected={floors.includes(floor)} onClick={() => toggle(floor)}>\n            ชั้น {floor}\n          </Chip>)}\n      </div>;\n  }\n}",
      ...Toggleable.parameters?.docs?.source
    },
    description: {
      story: "Click a chip to toggle it.",
      ...Toggleable.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Playground", "SelectedStates", "Removable", "Toggleable"];
export {
  Playground,
  Removable,
  SelectedStates,
  Toggleable,
  __namedExportsOrder,
  meta as default
};
