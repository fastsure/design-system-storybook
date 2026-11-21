import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot } from "./index-CthloIl8.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { r as resolveVariantClasses, C as CONTROL_BASE_CLASSES, s as solidVariantClasses } from "./button-variants-Bf-G52yW.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
const variantClasses = {
  ...solidVariantClasses,
  // Figma draws the icon button outline one step lighter than the text Button outline.
  default: {
    ...solidVariantClasses.default,
    base: cn(solidVariantClasses.default.base, "fs:border-line-soft")
  },
  "ghost-black": {
    base: "fs:bg-transparent fs:text-ink",
    interactive: "fs:hover:bg-accent-tint fs:active:bg-accent-soft",
    disabled: "fs:opacity-40"
  }
};
const sizeClasses = {
  xs: "fs:size-control-xs",
  sm: "fs:size-control-sm",
  md: "fs:size-control-md",
  lg: "fs:size-13"
};
function IconButton({
  variant = "primary",
  size = "md",
  asChild = false,
  disabled = false,
  className,
  onClick,
  type,
  ref,
  ...props
}) {
  const Component = asChild ? Slot : "button";
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref,
      type: asChild ? void 0 : type ?? "button",
      disabled,
      "aria-disabled": disabled || void 0,
      onClick: handleClick,
      className: cn(
        CONTROL_BASE_CLASSES,
        "fs:shrink-0 fs:rounded-full fs:[&_svg]:size-5",
        sizeClasses[size],
        resolveVariantClasses(variantClasses[variant], { isDisabled: disabled, isInert: disabled }),
        className
      ),
      ...props
    }
  );
}
IconButton.__docgenInfo = { "description": 'Round icon-only action button (Figma "Icon Button"). The icon is passed as `children`.', "methods": [], "displayName": "IconButton", "props": { "aria-label": { "required": true, "tsType": { "name": "string" }, "description": "Accessible name. Required because the button has no visible text." }, "variant": { "required": false, "tsType": { "name": "union", "raw": "SolidVariant | 'ghost-black'", "elements": [{ "name": "union", "raw": "'primary' | 'secondary' | 'default' | 'alpha-black' | 'alpha-white' | 'ghost-white'", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'default'" }, { "name": "literal", "value": "'alpha-black'" }, { "name": "literal", "value": "'alpha-white'" }, { "name": "literal", "value": "'ghost-white'" }] }, { "name": "literal", "value": "'ghost-black'" }] }, "description": 'Figma "Type". Defaults to `primary`.', "defaultValue": { "value": "'primary'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'xs' | 'sm' | 'md' | 'lg'", "elements": [{ "name": "literal", "value": "'xs'" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": 'Figma "Size": xs 32, sm 40, md 48, lg 52 px square. Defaults to `md`.', "defaultValue": { "value": "'md'", "computed": false } }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the child element (for example a link) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "defaultValue": { "value": "false", "computed": false }, "required": false } }, "composes": ["ComponentProps"] };
const VARIANTS = ["primary", "secondary", "default", "alpha-black", "alpha-white", "ghost-black", "ghost-white"];
const SIZES = ["xs", "sm", "md", "lg"];
const ON_DARK = ["alpha-white", "ghost-white"];
function PlusIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 3v10M3 8h10", strokeLinecap: "round" }) });
}
const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Add",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {})
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
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=215-6028"
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
function Surface({
  variant,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: ON_DARK.includes(variant) ? darkStyle : rowStyle, children });
}
const Playground = {};
const VariantsSizesAndStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: "var(--fs-space-4)"
  }, children: VARIANTS.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Surface, { variant, children: [
    SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { ...args, "aria-label": `${variant} ${size}`, variant, size }, size)),
    SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { ...args, "aria-label": `${variant} ${size} disabled`, variant, size, disabled: true }, `disabled-${size}`))
  ] }, variant)) })
};
const AsLink = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { ...args, asChild: true, "aria-label": "Go to plans", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#plans", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon, {}) }) })
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
VariantsSizesAndStates.parameters = {
  ...VariantsSizesAndStates.parameters,
  docs: {
    ...VariantsSizesAndStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 'var(--fs-space-4)'\n  }}>\n      {VARIANTS.map(variant => <Surface key={variant} variant={variant}>\n          {SIZES.map(size => <IconButton key={size} {...args} aria-label={`${variant} ${size}`} variant={variant} size={size} />)}\n          {SIZES.map(size => <IconButton key={`disabled-${size}`} {...args} aria-label={`${variant} ${size} disabled`} variant={variant} size={size} disabled />)}\n        </Surface>)}\n    </div>\n}",
      ...VariantsSizesAndStates.parameters?.docs?.source
    },
    description: {
      story: 'Every Figma "Type" at every size, in Default and Disabled.',
      ...VariantsSizesAndStates.parameters?.docs?.description
    }
  }
};
AsLink.parameters = {
  ...AsLink.parameters,
  docs: {
    ...AsLink.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <IconButton {...args} asChild aria-label="Go to plans">\n      <a href="#plans">\n        <PlusIcon />\n      </a>\n    </IconButton>\n}',
      ...AsLink.parameters?.docs?.source
    },
    description: {
      story: "`asChild` styles a link as an icon button; the link keeps its semantics.",
      ...AsLink.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Playground", "VariantsSizesAndStates", "AsLink"];
export {
  AsLink,
  Playground,
  VariantsSizesAndStates,
  __namedExportsOrder,
  meta as default
};
