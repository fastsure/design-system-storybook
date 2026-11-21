import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot } from "./index-CthloIl8.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function Content({ icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "fs:inline-flex fs:size-icon-lg fs:items-center fs:justify-center",
        children: icon
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children })
  ] });
}
function BottomNavItem({
  active = false,
  icon,
  asChild = false,
  className,
  children,
  type = "button",
  ref,
  ...props
}) {
  const classes = cn(
    "fs:box-border fs:flex fs:min-w-0 fs:flex-1 fs:cursor-pointer fs:flex-col fs:items-center fs:gap-s-1 fs:rounded-full fs:border-0 fs:bg-transparent fs:py-s-2 fs:text-center fs:text-label-3 fs:text-brand fs:no-underline",
    "fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
    active && "fs:bg-accent-tint fs:text-accent",
    className
  );
  const sharedProps = {
    ...props,
    ref,
    className: classes,
    "aria-current": active ? "page" : void 0
  };
  if (asChild && reactExports.isValidElement(children)) {
    const content = /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { icon, children: children.props.children });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ...sharedProps, children: reactExports.cloneElement(children, void 0, content) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type, ...sharedProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { icon, children }) });
}
function BottomNav({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: cn(
        "fs:box-border fs:flex fs:w-full fs:items-stretch fs:gap-s-1 fs:border-0 fs:border-t fs:border-solid fs:border-line-soft fs:bg-panel fs:px-s-4 fs:py-s-1",
        className
      ),
      ...props
    }
  );
}
BottomNavItem.__docgenInfo = { "description": "One destination of the mobile bottom navigation: an icon over a short label.", "methods": [], "displayName": "BottomNavItem", "props": { "active": { "required": false, "tsType": { "name": "boolean" }, "description": 'Figma `state=Active`: highlights the item and sets `aria-current="page"`.', "defaultValue": { "value": "false", "computed": false } }, "icon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon above the label (20px)." }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the single child element (for example a router `Link`) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "type": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } }, "composes": ["Omit"] };
BottomNav.__docgenInfo = { "description": "The bar that holds the `BottomNavItem`s. Give it an `aria-label`. Positioning (for example\n`fs:fixed fs:bottom-0 fs:inset-x-0`) and hiding it on desktop are left to the app.", "methods": [], "displayName": "BottomNav" };
const home = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9.5 10 3l7 6.5V17H3z" }) });
const orders = /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "3", width: "12", height: "14", rx: "2" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 8h6M7 12h4" })
] });
const account = /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "7", r: "3" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 17c1-3 3-4 6-4s5 1 6 4" })
] });
const meta = {
  title: "Navigation/BottomNavItem",
  component: BottomNavItem,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1671-53624"
    }
  },
  args: {
    icon: home,
    children: "Home"
  }
};
const Default = {};
const Active = {
  args: {
    active: true
  }
};
const Bar = {
  parameters: {
    layout: "fullscreen"
  },
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  },
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(BottomNav, { "aria-label": "Main", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavItem, { asChild: true, active: true, icon: home, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", children: "Home" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavItem, { asChild: true, icon: orders, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#orders", children: "Orders" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavItem, { asChild: true, icon: account, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#account", children: "Account" }) })
  ] })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    },
    description: {
      story: "Figma `state=Default`.",
      ...Default.parameters?.docs?.description
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
      story: 'Figma `state=Active`: sets `aria-current="page"`.',
      ...Active.parameters?.docs?.description
    }
  }
};
Bar.parameters = {
  ...Bar.parameters,
  docs: {
    ...Bar.parameters?.docs,
    source: {
      originalSource: `{
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mobile',
      isRotated: false
    }
  },
  render: () => <BottomNav aria-label="Main">
      <BottomNavItem asChild active icon={home}>
        <a href="#home">Home</a>
      </BottomNavItem>
      <BottomNavItem asChild icon={orders}>
        <a href="#orders">Orders</a>
      </BottomNavItem>
      <BottomNavItem asChild icon={account}>
        <a href="#account">Account</a>
      </BottomNavItem>
    </BottomNav>
}`,
      ...Bar.parameters?.docs?.source
    },
    description: {
      story: "The whole bar on a phone, with links rendered through `asChild`.",
      ...Bar.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Default", "Active", "Bar"];
export {
  Active,
  Bar,
  Default,
  __namedExportsOrder,
  meta as default
};
