import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot } from "./index-CthloIl8.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function VisuallyHidden({ asChild = false, className, ref, ...props }) {
  const Component = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref, className: cn("fs:sr-only", className), ...props });
}
VisuallyHidden.__docgenInfo = { "description": "Hides content visually while keeping it available to screen readers\n(for example the label of an icon-only button).", "methods": [], "displayName": "VisuallyHidden", "props": { "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the child element instead of a `span`, merging props onto it.", "defaultValue": { "value": "false", "computed": false } } }, "composes": ["ComponentProps"] };
const meta = {
  title: "Primitives/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    // Utility with no Figma frame; real components link their Figma node here.
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=5-564"
    }
  }
};
const InsideIconButton = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { children: "Close dialog" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "x" })
  ] })
};
const AsChild = {
  args: {
    asChild: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "story-name", children: "Full name" })
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { ...args }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "story-name", placeholder: "Full name" })
  ] })
};
InsideIconButton.parameters = {
  ...InsideIconButton.parameters,
  docs: {
    ...InsideIconButton.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => <button type="button">\n      <VisuallyHidden>Close dialog</VisuallyHidden>\n      <span aria-hidden="true">x</span>\n    </button>\n}',
      ...InsideIconButton.parameters?.docs?.source
    },
    description: {
      story: 'The text is invisible but a screen reader announces "Close dialog".',
      ...InsideIconButton.parameters?.docs?.description
    }
  }
};
AsChild.parameters = {
  ...AsChild.parameters,
  docs: {
    ...AsChild.parameters?.docs,
    source: {
      originalSource: '{\n  args: {\n    asChild: true,\n    children: <label htmlFor="story-name">Full name</label>\n  },\n  render: args => <div>\n      <VisuallyHidden {...args} />\n      <input id="story-name" placeholder="Full name" />\n    </div>\n}',
      ...AsChild.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["InsideIconButton", "AsChild"];
export {
  AsChild,
  InsideIconButton,
  __namedExportsOrder,
  meta as default
};
