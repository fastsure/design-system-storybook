import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot, a as Slottable } from "./index-CthloIl8.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
const variantClasses = {
  primary: "fs:text-accent",
  secondary: "fs:text-brand-light",
  grayscale: "fs:text-gray-700",
  white: "fs:text-accent-foreground"
};
const sizeClasses = {
  sm: { text: "fs:text-label-4", icon: "fs:size-icon-xs" },
  md: { text: "fs:text-label-3", icon: "fs:size-icon-xs" },
  lg: { text: "fs:text-label-2", icon: "fs:size-icon-sm" }
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
function TextButton({
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
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
  const sizing = sizeClasses[size];
  const handleClick = (event) => {
    if (disabled) {
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
      "aria-disabled": disabled || void 0,
      onClick: handleClick,
      className: cn(
        "fs:box-border fs:inline-flex fs:items-center fs:justify-center fs:gap-s-1 fs:border-0",
        "fs:bg-transparent fs:p-0 fs:m-0 fs:font-sans fs:whitespace-nowrap fs:no-underline",
        "fs:cursor-pointer fs:rounded-button fs:outline-none fs:focus-visible:shadow-focus",
        "fs:aria-disabled:cursor-not-allowed fs:disabled:cursor-not-allowed",
        sizing.text,
        variantClasses[variant],
        // Figma has no hover frame for the text button; an underline is the usual link affordance.
        disabled ? "fs:opacity-40" : "fs:hover:underline",
        className
      ),
      ...props,
      children: [
        leadingIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, { className: sizing.icon, children: leadingIcon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
        trailingIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, { className: sizing.icon, children: trailingIcon })
      ]
    }
  );
}
TextButton.__docgenInfo = { "description": 'Borderless, backgroundless action that reads as a link (Figma "Text Button").', "methods": [], "displayName": "TextButton", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'grayscale' | 'white'", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'grayscale'" }, { "name": "literal", "value": "'white'" }] }, "description": 'Figma "Type". Defaults to `primary`.', "defaultValue": { "value": "'primary'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'sm' | 'md' | 'lg'", "elements": [{ "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": 'Figma "Size": sm 12, md 14, lg 16 px text. Defaults to `md`.', "defaultValue": { "value": "'md'", "computed": false } }, "leadingIcon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon shown before the label. Decorative: hidden from assistive technology." }, "trailingIcon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon shown after the label. Decorative: hidden from assistive technology." }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the child element (for example a link) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "defaultValue": { "value": "false", "computed": false }, "required": false } }, "composes": ["ComponentProps"] };
const VARIANTS = ["primary", "secondary", "grayscale", "white"];
const SIZES = ["sm", "md", "lg"];
function ArrowIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 8h10M9 4l4 4-4 4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const meta = {
  title: "Buttons/TextButton",
  component: TextButton,
  args: {
    children: "Text Link"
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
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1671-40595"
    }
  }
};
const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--fs-space-6)",
  padding: "var(--fs-space-3)"
};
const darkStyle = {
  ...rowStyle,
  borderRadius: "var(--fs-radius-button)",
  background: "var(--fs-color-deep-sea-700)"
};
const Playground = {};
const VariantsSizesAndStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: "var(--fs-space-2)"
  }, children: VARIANTS.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: variant === "white" ? darkStyle : rowStyle, children: [
    SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TextButton, { ...args, variant, size, children: [
      variant,
      " ",
      size
    ] }, size)),
    SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TextButton, { ...args, variant, size, leadingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}), trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}), children: [
      "With icons ",
      size
    ] }, `icons-${size}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextButton, { ...args, variant, disabled: true, children: "Disabled" })
  ] }, variant)) })
};
const AsLink = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextButton, { ...args, asChild: true, trailingIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#terms", children: "Terms and conditions" }) })
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
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 'var(--fs-space-2)'\n  }}>\n      {VARIANTS.map(variant => <div key={variant} style={variant === 'white' ? darkStyle : rowStyle}>\n          {SIZES.map(size => <TextButton key={size} {...args} variant={variant} size={size}>\n              {variant} {size}\n            </TextButton>)}\n          {SIZES.map(size => <TextButton key={`icons-${size}`} {...args} variant={variant} size={size} leadingIcon={<ArrowIcon />} trailingIcon={<ArrowIcon />}>\n              With icons {size}\n            </TextButton>)}\n          <TextButton {...args} variant={variant} disabled>\n            Disabled\n          </TextButton>\n        </div>)}\n    </div>\n}",
      ...VariantsSizesAndStates.parameters?.docs?.source
    },
    description: {
      story: 'Every Figma "Type" at every size, with and without icons, plus Disabled.',
      ...VariantsSizesAndStates.parameters?.docs?.description
    }
  }
};
AsLink.parameters = {
  ...AsLink.parameters,
  docs: {
    ...AsLink.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <TextButton {...args} asChild trailingIcon={<ArrowIcon />}>\n      <a href="#terms">Terms and conditions</a>\n    </TextButton>\n}',
      ...AsLink.parameters?.docs?.source
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
