import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
function Card({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "article",
    {
      ref,
      className: cn(
        "fs:box-border fs:rounded-card fs:border fs:border-solid fs:border-line-soft fs:bg-panel fs:p-s-5",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, children, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h2",
    {
      ref,
      className: cn("fs:m-0 fs:text-heading-4-semibold fs:text-brand", className),
      ...props,
      children
    }
  );
}
function CardDescription({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      className: cn("fs:mx-0 fs:mt-s-2 fs:mb-0 fs:text-body-4 fs:text-muted", className),
      ...props
    }
  );
}
Card.__docgenInfo = { "description": "", "methods": [], "displayName": "Card" };
CardTitle.__docgenInfo = { "description": "", "methods": [], "displayName": "CardTitle" };
CardDescription.__docgenInfo = { "description": "", "methods": [], "displayName": "CardDescription" };
const meta = {
  title: "Feedback/Card",
  component: Card,
  parameters: {
    // Carried over from the old monorepo; there is no Figma frame yet.
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=5-564"
    }
  }
};
const Default = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { ...args, style: {
    width: 320
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Class 1 insurance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Full cover for your car, repairs at the dealer garage." })
  ] })
};
const TextOnly = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { ...args, style: {
    width: 320
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { style: {
    marginTop: 0
  }, children: "A card with just some text inside." }) })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <Card {...args} style={{\n    width: 320\n  }}>\n      <CardTitle>Class 1 insurance</CardTitle>\n      <CardDescription>Full cover for your car, repairs at the dealer garage.</CardDescription>\n    </Card>\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
TextOnly.parameters = {
  ...TextOnly.parameters,
  docs: {
    ...TextOnly.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <Card {...args} style={{\n    width: 320\n  }}>\n      <CardDescription style={{\n      marginTop: 0\n    }}>A card with just some text inside.</CardDescription>\n    </Card>\n}",
      ...TextOnly.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "TextOnly"];
export {
  Default,
  TextOnly,
  __namedExportsOrder,
  meta as default
};
