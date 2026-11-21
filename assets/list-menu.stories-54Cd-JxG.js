import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { C as ChevronRightIcon } from "./chevron-right-DiVTNE_B.js";
import { S as Slot } from "./index-CthloIl8.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
const sizeClasses = {
  lg: {
    row: "fs:min-h-13 fs:gap-s-3 fs:p-s-3 fs:rounded-control",
    text: "fs:text-label-2"
  },
  md: {
    row: "fs:min-h-12 fs:gap-s-2 fs:px-s-2 fs:py-s-3 fs:rounded-button",
    text: "fs:text-label-3"
  }
};
function RowContent({ iconStart, iconEnd, description, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    iconStart ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "fs:inline-flex fs:size-icon-lg fs:shrink-0 fs:items-center",
        children: iconStart
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs:flex fs:min-w-0 fs:flex-1 fs:flex-col fs:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs:text-body-5 fs:font-normal fs:text-muted", children: description }) : null
    ] }),
    iconEnd === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRightIcon, { "data-slot": "list-menu-chevron", className: "fs:size-icon-lg fs:shrink-0" }) : iconEnd
  ] });
}
function ListMenu({
  size = "lg",
  border = false,
  active = false,
  iconStart,
  iconEnd,
  description,
  asChild = false,
  className,
  children,
  type = "button",
  ref,
  ...props
}) {
  const classes = cn(
    "fs:box-border fs:flex fs:w-full fs:cursor-pointer fs:items-center fs:border-line-soft fs:bg-transparent fs:font-medium fs:text-brand-light fs:no-underline",
    "fs:hover:bg-accent-tint fs:hover:text-accent fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
    border && "fs:border fs:border-solid fs:bg-panel fs:hover:border-line",
    active && "fs:bg-accent-tint fs:text-accent",
    sizeClasses[size].row,
    sizeClasses[size].text,
    className
  );
  const sharedProps = {
    ...props,
    ref,
    className: classes,
    "aria-current": active ? "true" : void 0
  };
  if (asChild && reactExports.isValidElement(children)) {
    const content = /* @__PURE__ */ jsxRuntimeExports.jsx(RowContent, { iconStart, iconEnd, description, children: children.props.children });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ...sharedProps, children: reactExports.cloneElement(children, void 0, content) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type, ...sharedProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RowContent, { iconStart, iconEnd, description, children }) });
}
ListMenu.__docgenInfo = { "description": "A menu row with an icon, a label, an optional description and a trailing chevron.\nIt is a `button` by default; use `asChild` with a link to navigate.", "methods": [], "displayName": "ListMenu", "props": { "size": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'md'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'md'" }] }, "description": "Figma `size`: `lg` (16px label, 52px row) or `md` (14px label, 48px row).", "defaultValue": { "value": "'lg'", "computed": false } }, "border": { "required": false, "tsType": { "name": "boolean" }, "description": "Draws the Figma `border` variant: white row with a 1px outline.", "defaultValue": { "value": "false", "computed": false } }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "Shows the hover look permanently and sets `aria-current` (the current page).", "defaultValue": { "value": "false", "computed": false } }, "iconStart": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon before the label." }, "iconEnd": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon after the label. A chevron by default; pass `null` to hide it." }, "description": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Second line under the label." }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the single child element (for example a router `Link`) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "type": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } }, "composes": ["Omit"] };
const doc = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 2.5h6l4 4v11H5z" }) });
const meta = {
  title: "Navigation/ListMenu",
  component: ListMenu,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1671-53536"
    }
  },
  args: {
    iconStart: doc,
    children: "View insurance packages"
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 390
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Lg = {
  args: {
    size: "lg"
  }
};
const Md = {
  args: {
    size: "md"
  }
};
const Bordered = {
  args: {
    border: true
  }
};
const Active = {
  args: {
    active: true
  }
};
const WithDescription = {
  args: {
    description: "Compare coverage and prices"
  }
};
const WithoutChevron = {
  args: {
    iconEnd: null
  }
};
const AsLink = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListMenu, { ...args, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#packages", children: "View insurance packages" }) })
};
Lg.parameters = {
  ...Lg.parameters,
  docs: {
    ...Lg.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...Lg.parameters?.docs?.source
    },
    description: {
      story: "Figma `size=LG(16)`, `state=Default`.",
      ...Lg.parameters?.docs?.description
    }
  }
};
Md.parameters = {
  ...Md.parameters,
  docs: {
    ...Md.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md'\n  }\n}",
      ...Md.parameters?.docs?.source
    },
    description: {
      story: "Figma `size=MD(14)`.",
      ...Md.parameters?.docs?.description
    }
  }
};
Bordered.parameters = {
  ...Bordered.parameters,
  docs: {
    ...Bordered.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    border: true\n  }\n}",
      ...Bordered.parameters?.docs?.source
    },
    description: {
      story: "Figma `border=true`.",
      ...Bordered.parameters?.docs?.description
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...Active.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    active: true\n  }\n}",
      ...Active.parameters?.docs?.source
    },
    description: {
      story: "Figma `state=Hover`: also the current page. Hover any row to see it.",
      ...Active.parameters?.docs?.description
    }
  }
};
WithDescription.parameters = {
  ...WithDescription.parameters,
  docs: {
    ...WithDescription.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    description: 'Compare coverage and prices'\n  }\n}",
      ...WithDescription.parameters?.docs?.source
    }
  }
};
WithoutChevron.parameters = {
  ...WithoutChevron.parameters,
  docs: {
    ...WithoutChevron.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    iconEnd: null\n  }\n}",
      ...WithoutChevron.parameters?.docs?.source
    }
  }
};
AsLink.parameters = {
  ...AsLink.parameters,
  docs: {
    ...AsLink.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <ListMenu {...args} asChild>\n      <a href="#packages">View insurance packages</a>\n    </ListMenu>\n}',
      ...AsLink.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Lg", "Md", "Bordered", "Active", "WithDescription", "WithoutChevron", "AsLink"];
export {
  Active,
  AsLink,
  Bordered,
  Lg,
  Md,
  WithDescription,
  WithoutChevron,
  __namedExportsOrder,
  meta as default
};
