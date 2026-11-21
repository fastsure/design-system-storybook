import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { C as ChevronLeftIcon } from "./chevron-left-BWW28d3Y.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
const deviceClasses = {
  mobile: {
    root: "fs:py-s-2",
    title: "fs:text-heading-5-semibold fs:text-brand",
    content: "fs:py-s-2"
  },
  desktop: {
    root: "fs:py-s-3",
    title: "fs:text-heading-2 fs:text-ink",
    content: "fs:py-s-1"
  }
};
function Spacer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "aria-hidden": "true",
      "data-slot": "page-header-spacer",
      className: "fs:size-control-sm fs:shrink-0"
    }
  );
}
function DefaultBackButton({ label, onBack }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      onClick: onBack,
      className: "fs:box-border fs:inline-flex fs:size-control-sm fs:shrink-0 fs:cursor-pointer fs:items-center fs:justify-center fs:rounded-full fs:border-0 fs:bg-transparent fs:p-0 fs:text-brand fs:hover:bg-surface-muted fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeftIcon, { className: "fs:size-icon-lg" })
    }
  );
}
function PageHeader({
  device = "mobile",
  title,
  titleAs: Title = "h1",
  backButton,
  onBack,
  backLabel = "Back",
  actions,
  className,
  ref,
  ...props
}) {
  const classes = deviceClasses[device];
  const start = backButton === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultBackButton, { label: backLabel, onBack }) : backButton;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      ref,
      className: cn(
        "fs:box-border fs:flex fs:w-full fs:items-center fs:gap-s-3 fs:bg-panel fs:px-s-5",
        classes.root,
        className
      ),
      ...props,
      children: [
        start ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Spacer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("fs:flex fs:min-w-0 fs:flex-1 fs:justify-center", classes.content), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { className: cn("fs:m-0 fs:text-center", classes.title), children: title }) }),
        actions ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Spacer, {})
      ]
    }
  );
}
PageHeader.__docgenInfo = { "description": "Top bar of a page: a back button, a centred title and optional actions.", "methods": [], "displayName": "PageHeader", "props": { "device": { "required": false, "tsType": { "name": "union", "raw": "'mobile' | 'desktop'", "elements": [{ "name": "literal", "value": "'mobile'" }, { "name": "literal", "value": "'desktop'" }] }, "description": "Figma `device`: `mobile` (16px semibold title) or `desktop` (22px medium title).", "defaultValue": { "value": "'mobile'", "computed": false } }, "title": { "required": true, "tsType": { "name": "ReactNode" }, "description": "The page title, centred." }, "titleAs": { "required": false, "tsType": { "name": "union", "raw": "'h1' | 'h2' | 'h3' | 'p'", "elements": [{ "name": "literal", "value": "'h1'" }, { "name": "literal", "value": "'h2'" }, { "name": "literal", "value": "'h3'" }, { "name": "literal", "value": "'p'" }] }, "description": "Element used for the title. Defaults to `h1`.", "defaultValue": { "value": "'h1'", "computed": false } }, "backButton": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Replaces the default back button (for example with a router `Link`).\nPass `null` to show no back button." }, "onBack": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "Called when the default back button is pressed." }, "backLabel": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the default back button.", "defaultValue": { "value": "'Back'", "computed": false } }, "actions": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Figma `Icon End Slot`: buttons at the end of the header." } }, "composes": ["Omit"] };
const share = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Share", style: {
  width: 40,
  height: 40,
  borderRadius: 999,
  border: 0,
  background: "transparent"
}, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 3v10M6 7l4-4 4 4M4 12v5h12v-5" }) }) });
const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=2261-76736"
    }
  },
  args: {
    title: "Page header"
  }
};
const Mobile = {
  args: {
    device: "mobile"
  },
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
};
const Desktop = {
  args: {
    device: "desktop",
    title: "Sample car 2007"
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
};
const WithActions = {
  args: {
    actions: share
  },
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
};
const WithoutBackButton = {
  args: {
    backButton: null
  },
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
};
const CustomBackLink = {
  args: {
    backButton: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", children: "Home" })
  },
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
};
Mobile.parameters = {
  ...Mobile.parameters,
  docs: {
    ...Mobile.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'mobile'\n  },\n  globals: {\n    viewport: {\n      value: 'mobile',\n      isRotated: false\n    }\n  }\n}",
      ...Mobile.parameters?.docs?.source
    },
    description: {
      story: "Figma `device=Mobile`.",
      ...Mobile.parameters?.docs?.description
    }
  }
};
Desktop.parameters = {
  ...Desktop.parameters,
  docs: {
    ...Desktop.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    device: 'desktop',\n    title: 'Sample car 2007'\n  },\n  globals: {\n    viewport: {\n      value: 'desktop',\n      isRotated: false\n    }\n  }\n}",
      ...Desktop.parameters?.docs?.source
    },
    description: {
      story: "Figma `device=Desktop`.",
      ...Desktop.parameters?.docs?.description
    }
  }
};
WithActions.parameters = {
  ...WithActions.parameters,
  docs: {
    ...WithActions.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    actions: share\n  },\n  globals: {\n    viewport: {\n      value: 'mobile',\n      isRotated: false\n    }\n  }\n}",
      ...WithActions.parameters?.docs?.source
    }
  }
};
WithoutBackButton.parameters = {
  ...WithoutBackButton.parameters,
  docs: {
    ...WithoutBackButton.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    backButton: null\n  },\n  globals: {\n    viewport: {\n      value: 'mobile',\n      isRotated: false\n    }\n  }\n}",
      ...WithoutBackButton.parameters?.docs?.source
    }
  }
};
CustomBackLink.parameters = {
  ...CustomBackLink.parameters,
  docs: {
    ...CustomBackLink.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    backButton: <a href="#home">Home</a>
  },
  globals: {
    viewport: {
      value: 'mobile',
      isRotated: false
    }
  }
}`,
      ...CustomBackLink.parameters?.docs?.source
    },
    description: {
      story: "Replace the back button with your own link.",
      ...CustomBackLink.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Mobile", "Desktop", "WithActions", "WithoutBackButton", "CustomBackLink"];
export {
  CustomBackLink,
  Desktop,
  Mobile,
  WithActions,
  WithoutBackButton,
  __namedExportsOrder,
  meta as default
};
