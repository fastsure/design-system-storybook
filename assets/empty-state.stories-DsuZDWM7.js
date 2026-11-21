import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cva } from "./index-BPNhyx9d.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
const rootVariants = cva(
  "fs:box-border fs:flex fs:flex-col fs:items-center fs:justify-center fs:text-center",
  {
    variants: {
      device: {
        mobile: "fs:gap-s-7 fs:py-s-4",
        desktop: "fs:gap-s-8 fs:px-s-8 fs:py-s-5",
        responsive: "fs:gap-s-7 fs:py-s-4 fs:md:gap-s-8 fs:md:px-s-8 fs:md:py-s-5"
      }
    },
    defaultVariants: { device: "responsive" }
  }
);
const contentVariants = cva("fs:flex fs:w-full fs:flex-col fs:items-center", {
  variants: {
    device: {
      mobile: "fs:gap-s-2",
      desktop: "fs:gap-s-4",
      responsive: "fs:gap-s-2 fs:md:gap-s-4"
    }
  },
  defaultVariants: { device: "responsive" }
});
const titleVariants = cva("fs:m-0 fs:text-brand", {
  variants: {
    device: {
      mobile: "fs:text-heading-4-semibold",
      desktop: "fs:text-semibold-1",
      responsive: "fs:text-heading-4-semibold fs:md:text-semibold-1"
    }
  },
  defaultVariants: { device: "responsive" }
});
const descriptionVariants = cva("fs:m-0 fs:text-ink-soft", {
  variants: {
    device: {
      mobile: "fs:text-body-4",
      desktop: "fs:text-body-2",
      responsive: "fs:text-body-4 fs:md:text-body-2"
    }
  },
  defaultVariants: { device: "responsive" }
});
function EmptyState({
  device,
  illustration,
  title,
  description,
  action,
  className,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: cn(rootVariants({ device }), className), ...props, children: [
    illustration ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-slot": "illustration",
        className: "fs:flex fs:size-20 fs:shrink-0 fs:items-center fs:justify-center",
        children: illustration
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: contentVariants({ device }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { "data-slot": "title", className: titleVariants({ device }), children: title }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-slot": "description", className: descriptionVariants({ device }), children: description }) : null
    ] }),
    action ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "action", children: action }) : null
  ] });
}
EmptyState.__docgenInfo = { "description": "Placeholder for a list or search that has nothing to show.", "methods": [], "displayName": "EmptyState", "props": { "illustration": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Artwork shown above the text, such as an inline SVG. Decorative, so mark it `aria-hidden`." }, "title": { "required": true, "tsType": { "name": "ReactNode" }, "description": "" }, "description": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "action": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Call to action under the text, usually a `Button`." } }, "composes": ["Omit", "VariantProps"] };
function PlaceholderArt() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { "aria-hidden": "true", width: "100", height: "64", viewBox: "0 0 100 64", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 44V30l10-18h46l14 18h18v14" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 44h88" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "26", cy: "48", r: "8", fill: "white" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "74", cy: "48", r: "8", fill: "white" })
  ] });
}
function ClearButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: {
    height: 40,
    padding: "0 16px",
    borderRadius: 8,
    border: "1px solid var(--fs-color-gray-300)",
    background: "var(--fs-color-gray-0)",
    font: "inherit",
    cursor: "pointer"
  }, children: "Clear filters" });
}
const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  args: {
    illustration: /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderArt, {}),
    title: "No brand found",
    description: "Try another word, such as Honda or Toyota",
    action: /* @__PURE__ */ jsxRuntimeExports.jsx(ClearButton, {})
  },
  argTypes: {
    device: {
      control: "inline-radio",
      options: ["mobile", "desktop", "responsive"]
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=2261-86726"
    }
  }
};
const Mobile = {
  args: {
    device: "mobile"
  }
};
const Desktop = {
  args: {
    device: "desktop"
  }
};
const Responsive = {};
const WithoutAction = {
  args: {
    device: "mobile",
    action: void 0
  }
};
const TitleOnly = {
  args: {
    device: "mobile",
    description: void 0,
    action: void 0
  }
};
Mobile.parameters = {
  ...Mobile.parameters,
  docs: {
    ...Mobile.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'mobile'\n  }\n}",
      ...Mobile.parameters?.docs?.source
    },
    description: {
      story: "Figma `Device=Mobile`.",
      ...Mobile.parameters?.docs?.description
    }
  }
};
Desktop.parameters = {
  ...Desktop.parameters,
  docs: {
    ...Desktop.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'desktop'\n  }\n}",
      ...Desktop.parameters?.docs?.source
    },
    description: {
      story: "Figma `Device=Desktop`.",
      ...Desktop.parameters?.docs?.description
    }
  }
};
Responsive.parameters = {
  ...Responsive.parameters,
  docs: {
    ...Responsive.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Responsive.parameters?.docs?.source
    },
    description: {
      story: "Mobile layout that becomes the Desktop layout from the `md` breakpoint.",
      ...Responsive.parameters?.docs?.description
    }
  }
};
WithoutAction.parameters = {
  ...WithoutAction.parameters,
  docs: {
    ...WithoutAction.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'mobile',\n    action: undefined\n  }\n}",
      ...WithoutAction.parameters?.docs?.source
    },
    description: {
      story: "Figma `Show button=false`.",
      ...WithoutAction.parameters?.docs?.description
    }
  }
};
TitleOnly.parameters = {
  ...TitleOnly.parameters,
  docs: {
    ...TitleOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'mobile',\n    description: undefined,\n    action: undefined\n  }\n}",
      ...TitleOnly.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Mobile", "Desktop", "Responsive", "WithoutAction", "TitleOnly"];
export {
  Desktop,
  Mobile,
  Responsive,
  TitleOnly,
  WithoutAction,
  __namedExportsOrder,
  meta as default
};
