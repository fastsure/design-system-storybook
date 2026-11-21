import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot, a as Slottable } from "./index-CthloIl8.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { r as resolveVariantClasses, C as CONTROL_BASE_CLASSES, s as solidVariantClasses } from "./button-variants-Bf-G52yW.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      className: cn("fs:animate-spin", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeOpacity: "0.25", strokeWidth: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12a9 9 0 0 0-9-9", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "3" })
      ]
    }
  );
}
Spinner.__docgenInfo = { "description": "Circular loading indicator that follows the current text colour. Decorative: hidden from AT.", "methods": [], "displayName": "Spinner" };
const variantClasses = {
  ...solidVariantClasses,
  "ghost-primary": {
    base: "fs:bg-transparent fs:text-brand-light",
    interactive: "fs:hover:bg-alpha-white-3 fs:active:bg-alpha-white-2",
    disabled: "fs:opacity-40"
  }
};
const sizeClasses = {
  xs: { control: "fs:h-control-xs fs:px-s-2 fs:gap-s-1 fs:text-label-4", icon: "fs:size-icon-xs" },
  sm: { control: "fs:h-control-sm fs:px-s-4 fs:gap-s-2 fs:text-label-3", icon: "fs:size-icon-sm" },
  md: { control: "fs:h-control-md fs:px-s-6 fs:gap-s-3 fs:text-label-2", icon: "fs:size-icon-md" },
  lg: { control: "fs:h-control-lg fs:px-s-6 fs:gap-s-3 fs:text-label-2", icon: "fs:size-icon-md" }
};
function IconSlot({ className, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "aria-hidden": "true",
      className: cn(
        "fs:inline-flex fs:shrink-0 fs:items-center fs:justify-center fs:[&>svg]:size-full",
        className
      ),
      children
    }
  );
}
function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  asChild = false,
  disabled = false,
  className,
  onClick,
  type,
  children,
  ref,
  ...props
}) {
  const Component = asChild ? Slot : "button";
  const isInert = disabled || loading;
  const sizing = sizeClasses[size];
  const handleClick = (event) => {
    if (isInert) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      ref,
      type: asChild ? void 0 : type ?? "button",
      disabled,
      "aria-busy": loading || void 0,
      "aria-disabled": isInert || void 0,
      onClick: handleClick,
      className: cn(
        CONTROL_BASE_CLASSES,
        "fs:rounded-button",
        sizing.control,
        resolveVariantClasses(variantClasses[variant], { isDisabled: disabled, isInert }),
        fullWidth && "fs:w-full",
        className
      ),
      ...props,
      children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { className: cn("fs:shrink-0", sizing.icon) }) : leadingIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, { className: sizing.icon, children: leadingIcon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
        trailingIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, { className: sizing.icon, children: trailingIcon })
      ]
    }
  );
}
Button.__docgenInfo = { "description": 'Pill-less action button (Figma "Button"). Supports seven colour treatments, four sizes,\ndisabled and loading states, optional icons and `asChild` for links.', "methods": [], "displayName": "Button", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "SolidVariant | 'ghost-primary'", "elements": [{ "name": "union", "raw": "'primary' | 'secondary' | 'default' | 'alpha-black' | 'alpha-white' | 'ghost-white'", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'default'" }, { "name": "literal", "value": "'alpha-black'" }, { "name": "literal", "value": "'alpha-white'" }, { "name": "literal", "value": "'ghost-white'" }] }, { "name": "literal", "value": "'ghost-primary'" }] }, "description": 'Figma "Type". Defaults to `primary`.', "defaultValue": { "value": "'primary'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'xs' | 'sm' | 'md' | 'lg'", "elements": [{ "name": "literal", "value": "'xs'" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": 'Figma "Size": xs 32, sm 40, md 48, lg 56 px high. Defaults to `md`.', "defaultValue": { "value": "'md'", "computed": false } }, "loading": { "required": false, "tsType": { "name": "boolean" }, "description": 'Shows a spinner in place of the leading icon and ignores clicks (Figma "Loading").', "defaultValue": { "value": "false", "computed": false } }, "leadingIcon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon shown before the label. Decorative: hidden from assistive technology." }, "trailingIcon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon shown after the label. Decorative: hidden from assistive technology." }, "fullWidth": { "required": false, "tsType": { "name": "boolean" }, "description": "Stretch to the width of the container.", "defaultValue": { "value": "false", "computed": false } }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the child element (for example a link) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "defaultValue": { "value": "false", "computed": false }, "required": false } }, "composes": ["ComponentProps"] };
const VARIANTS = ["primary", "secondary", "default", "alpha-black", "alpha-white", "ghost-primary", "ghost-white"];
const SIZES = ["xs", "sm", "md", "lg"];
const ON_DARK = ["alpha-white", "ghost-white"];
const meta = {
  title: "Buttons/Button",
  component: Button,
  args: {
    children: "ดูแพ็กเกจประกัน"
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS
    },
    size: {
      control: "inline-radio",
      options: SIZES
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=142-1330"
    }
  }
};
const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--fs-space-3)"
};
const darkStyle = {
  ...rowStyle,
  padding: "var(--fs-space-3)",
  borderRadius: "var(--fs-radius-button)",
  background: "var(--fs-color-deep-sea-700)"
};
function ArrowIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 8h10M9 4l4 4-4 4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function PlusIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 3v10M3 8h10", strokeLinecap: "round" }) });
}
function Surface({
  variant,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: ON_DARK.includes(variant) ? darkStyle : rowStyle, children });
}
const Playground = {};
const VariantsAndSizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: "var(--fs-space-4)"
  }, children: VARIANTS.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsx(Surface, { variant, children: SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { ...args, variant, size, leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {}), trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}), children: [
    variant,
    " ",
    size
  ] }, size)) }, variant)) })
};
const States = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: "var(--fs-space-4)"
  }, children: VARIANTS.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Surface, { variant, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...args, variant, children: "Default" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...args, variant, disabled: true, children: "Disabled" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...args, variant, loading: true, children: "Loading" })
  ] }, variant)) })
};
const LoadingSizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: rowStyle, children: SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { ...args, size, loading: true, children: [
    "Loading ",
    size
  ] }, size)) })
};
const WithIcons = {
  args: {
    leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {}),
    trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {})
  }
};
const FullWidth = {
  args: {
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
};
const AsLink = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...args, asChild: true, trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#plans", children: "View plans" }) })
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
VariantsAndSizes.parameters = {
  ...VariantsAndSizes.parameters,
  docs: {
    ...VariantsAndSizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 'var(--fs-space-4)'\n  }}>\n      {VARIANTS.map(variant => <Surface key={variant} variant={variant}>\n          {SIZES.map(size => <Button key={size} {...args} variant={variant} size={size} leadingIcon={<PlusIcon />} trailingIcon={<ArrowIcon />}>\n              {variant} {size}\n            </Button>)}\n        </Surface>)}\n    </div>\n}",
      ...VariantsAndSizes.parameters?.docs?.source
    },
    description: {
      story: 'Every Figma "Type" at every size.',
      ...VariantsAndSizes.parameters?.docs?.description
    }
  }
};
States.parameters = {
  ...States.parameters,
  docs: {
    ...States.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 'var(--fs-space-4)'\n  }}>\n      {VARIANTS.map(variant => <Surface key={variant} variant={variant}>\n          <Button {...args} variant={variant}>\n            Default\n          </Button>\n          <Button {...args} variant={variant} disabled>\n            Disabled\n          </Button>\n          <Button {...args} variant={variant} loading>\n            Loading\n          </Button>\n        </Surface>)}\n    </div>\n}",
      ...States.parameters?.docs?.source
    },
    description: {
      story: "Default (use the toolbar or hover/press in the browser for Hover and Pressed), Disabled and Loading.",
      ...States.parameters?.docs?.description
    }
  }
};
LoadingSizes.parameters = {
  ...LoadingSizes.parameters,
  docs: {
    ...LoadingSizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={rowStyle}>\n      {SIZES.map(size => <Button key={size} {...args} size={size} loading>\n          Loading {size}\n        </Button>)}\n    </div>\n}",
      ...LoadingSizes.parameters?.docs?.source
    }
  }
};
WithIcons.parameters = {
  ...WithIcons.parameters,
  docs: {
    ...WithIcons.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    leadingIcon: <PlusIcon />,\n    trailingIcon: <ArrowIcon />\n  }\n}",
      ...WithIcons.parameters?.docs?.source
    }
  }
};
FullWidth.parameters = {
  ...FullWidth.parameters,
  docs: {
    ...FullWidth.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    fullWidth: true\n  },\n  parameters: {\n    layout: 'padded'\n  }\n}",
      ...FullWidth.parameters?.docs?.source
    }
  }
};
AsLink.parameters = {
  ...AsLink.parameters,
  docs: {
    ...AsLink.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <Button {...args} asChild trailingIcon={<ArrowIcon />}>\n      <a href="#plans">View plans</a>\n    </Button>\n}',
      ...AsLink.parameters?.docs?.source
    },
    description: {
      story: "`asChild` styles the link as a button and keeps its link semantics.",
      ...AsLink.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Playground", "VariantsAndSizes", "States", "LoadingSizes", "WithIcons", "FullWidth", "AsLink"];
export {
  AsLink,
  FullWidth,
  LoadingSizes,
  Playground,
  States,
  VariantsAndSizes,
  WithIcons,
  __namedExportsOrder,
  meta as default
};
