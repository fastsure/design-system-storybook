import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { C as Checkbox } from "./checkbox-DNQxGC9E.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
import "./index-CthloIl8.js";
import "./index-BRpwWxnq.js";
import "./index-C3tZBoHN.js";
import "./index-Chc9Z_o1.js";
import "./index-CKstfSuL.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
const LABEL_TEXT = {
  lg: "fs:text-body-3",
  md: "fs:text-body-4"
};
const PRICE_TEXT = {
  lg: "fs:text-heading-4-semibold",
  md: "fs:text-label-3"
};
const ROW_CLASS = cn(
  "fs:group fs:box-border fs:flex fs:w-full fs:cursor-pointer fs:items-center fs:gap-s-4 fs:p-s-4",
  "fs:rounded-control fs:border fs:border-solid fs:border-line fs:bg-panel",
  "fs:has-[button[data-state=checked]]:border-active",
  "fs:has-[button:disabled]:cursor-not-allowed"
);
function ListCheckbox({
  label,
  description,
  price,
  priceUnit,
  size = "lg",
  className,
  ref,
  ...props
}) {
  const id = reactExports.useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  const priceId = `${id}-price`;
  const unitId = `${id}-unit`;
  const describedBy = [description ? descriptionId : null, price ? priceId : null, priceUnit ? unitId : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: cn(ROW_CLASS, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { ref, "aria-labelledby": labelId, "aria-describedby": describedBy, ...props }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs:flex fs:min-w-0 fs:flex-1 fs:flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          id: labelId,
          className: cn(
            LABEL_TEXT[size],
            "fs:text-ink fs:group-has-[button:disabled]:text-gray-600"
          ),
          children: label
        }
      ),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: descriptionId, className: "fs:text-body-5 fs:text-muted", children: description }) : null
    ] }),
    price || priceUnit ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs:flex fs:shrink-0 fs:items-end fs:gap-s-1", children: [
      price ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          id: priceId,
          className: cn(
            PRICE_TEXT[size],
            "fs:text-ink fs:group-has-[button[data-state=checked]]:text-accent fs:group-has-[button:disabled]:text-gray-600"
          ),
          children: price
        }
      ) : null,
      priceUnit ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: unitId, className: "fs:text-body-4 fs:text-ink-soft", children: priceUnit }) : null
    ] }) : null
  ] });
}
ListCheckbox.__docgenInfo = { "description": 'A selectable row (Figma "List Checkbox"): a checkbox with a label, optional description and\nprice. The whole row is a `<label>`, so clicking anywhere on it toggles the checkbox.', "methods": [], "displayName": "ListCheckbox", "props": { "label": { "required": true, "tsType": { "name": "ReactNode" }, "description": "Main text; it names the checkbox." }, "description": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Secondary line under the label." }, "price": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Price amount shown at the end of the row (Figma `Show price`)." }, "priceUnit": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Unit after the price, for example `/year`." }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "@default 'lg'", "defaultValue": { "value": "'lg'", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Controls/ListCheckbox",
  component: ListCheckbox,
  args: {
    label: "Compulsory insurance",
    price: "500.00",
    priceUnit: "/year"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["lg", "md"]
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 556,
    maxWidth: "100vw"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=2261-115573"
    }
  }
};
const Default = {};
const Selected = {
  args: {
    defaultChecked: true
  }
};
const WithDescription = {
  args: {
    description: "Required by law for every vehicle"
  }
};
const WithoutPrice = {
  args: {
    price: void 0,
    priceUnit: void 0
  }
};
const Disabled = {
  args: {
    disabled: true,
    defaultChecked: true
  }
};
const Sizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: 16
  }, children: ["lg", "md"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "grid",
    gap: 16
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListCheckbox, { ...args, size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListCheckbox, { ...args, size, defaultChecked: true })
  ] }, size)) })
};
function ControlledListCheckbox(args) {
  const [checked, setChecked] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListCheckbox, { ...args, checked, onCheckedChange: setChecked });
}
const Controlled = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledListCheckbox, { ...args })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
Selected.parameters = {
  ...Selected.parameters,
  docs: {
    ...Selected.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultChecked: true\n  }\n}",
      ...Selected.parameters?.docs?.source
    }
  }
};
WithDescription.parameters = {
  ...WithDescription.parameters,
  docs: {
    ...WithDescription.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    description: 'Required by law for every vehicle'\n  }\n}",
      ...WithDescription.parameters?.docs?.source
    }
  }
};
WithoutPrice.parameters = {
  ...WithoutPrice.parameters,
  docs: {
    ...WithoutPrice.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    price: undefined,\n    priceUnit: undefined\n  }\n}",
      ...WithoutPrice.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    defaultChecked: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 16\n  }}>\n      {(['lg', 'md'] as const).map(size => <div key={size} style={{\n      display: 'grid',\n      gap: 16\n    }}>\n          <ListCheckbox {...args} size={size} />\n          <ListCheckbox {...args} size={size} defaultChecked />\n        </div>)}\n    </div>\n}",
      ...Sizes.parameters?.docs?.source
    },
    description: {
      story: "Figma sizes: `lg` (default) and `md`, each unselected and selected.",
      ...Sizes.parameters?.docs?.description
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <ControlledListCheckbox {...args} />\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "Selected", "WithDescription", "WithoutPrice", "Disabled", "Sizes", "Controlled"];
export {
  Controlled,
  Default,
  Disabled,
  Selected,
  Sizes,
  WithDescription,
  WithoutPrice,
  __namedExportsOrder,
  meta as default
};
