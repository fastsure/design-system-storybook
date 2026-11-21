import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot } from "./index-CthloIl8.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function Separator({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "presentation",
      className: cn("fs:h-px fs:w-full fs:bg-deep-sea-50 fs:opacity-20", className)
    }
  );
}
function Footer({ brand: brand2, children, bottom: bottom2, className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      ref,
      className: cn(
        "fs:box-border fs:flex fs:w-full fs:flex-col fs:gap-s-6 fs:bg-brand fs:p-s-5 fs:text-gray-0",
        "fs:md:p-s-7 fs:lg:px-s-20 fs:lg:py-s-6",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fs:flex fs:flex-col fs:gap-s-6 fs:lg:flex-row fs:lg:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs:flex fs:flex-col fs:gap-s-4", children: brand2 }),
          children ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "fs:lg:hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-slot": "footer-columns",
                className: "fs:grid fs:grid-cols-2 fs:gap-x-s-2 fs:gap-y-s-6 fs:md:grid-cols-3 fs:md:gap-s-4 fs:lg:w-136",
                children
              }
            )
          ] }) : null
        ] }),
        bottom2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "fs:hidden fs:lg:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-slot": "footer-bottom",
              className: "fs:flex fs:flex-col fs:items-center fs:gap-s-2 fs:text-body-5 fs:lg:flex-row fs:lg:justify-between",
              children: bottom2
            }
          )
        ] }) : null
      ]
    }
  );
}
function FooterColumn({ title, children, className, ...props }) {
  const titleId = reactExports.useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "group",
      "aria-labelledby": titleId,
      className: cn("fs:flex fs:min-w-0 fs:flex-col fs:gap-s-2 fs:md:gap-s-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: titleId, className: "fs:m-0 fs:text-body-5 fs:text-alpha-white-3 fs:md:text-body-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "fs:m-0 fs:flex fs:list-none fs:flex-col fs:gap-s-2 fs:p-0 fs:md:gap-s-3", children: reactExports.Children.toArray(children).map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: child }, index)) })
      ]
    }
  );
}
function FooterLink({
  asChild = false,
  className,
  type = "button",
  ref,
  ...props
}) {
  const classes = cn(
    "fs:inline-flex fs:cursor-pointer fs:items-center fs:justify-center fs:gap-s-1 fs:border-0 fs:bg-transparent fs:p-0 fs:text-label-4 fs:text-gray-0 fs:no-underline fs:hover:underline fs:md:text-label-3",
    "fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
    className
  );
  if (asChild) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ref, className: classes, ...props });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref, type, className: classes, ...props });
}
Footer.__docgenInfo = { "description": "The deep-sea site footer. Mobile and tablet stack the brand block above the columns; from the\ndesktop breakpoint the brand sits beside them and the bottom bar spreads across the width.\nThe app supplies all content, so it holds no company text of its own.", "methods": [], "displayName": "Footer", "props": { "brand": { "required": true, "tsType": { "name": "ReactNode" }, "description": "Company block: logo, contact channels and legal notices." }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "The link columns, normally `FooterColumn`s." }, "bottom": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Bottom bar: copyright text and legal links." } }, "composes": ["ComponentProps"] };
FooterColumn.__docgenInfo = { "description": "A titled list of links inside the `Footer`.", "methods": [], "displayName": "FooterColumn", "props": { "title": { "required": true, "tsType": { "name": "ReactNode" }, "description": "Column heading, for example the section name." } }, "composes": ["Omit"] };
FooterLink.__docgenInfo = { "description": "A white text link for the `Footer`.", "methods": [], "displayName": "FooterLink", "props": { "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the single child element (for example a router `Link`) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "type": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } }, "composes": ["ComponentProps"] };
const mutedStyle = {
  margin: 0,
  color: "rgba(255, 255, 255, 0.7)"
};
const brand = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
    fontSize: 24
  }, children: "Sample Logo" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
    margin: 0
  }, children: "@sample_support" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
    margin: 0
  }, children: "support@example.com" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: mutedStyle, children: "Sample legal notice. Insurance products are offered by a sample broker, licence no. 0000000000." })
] });
const columns = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterColumn, { title: "Buy insurance online", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#petrol", children: "Petrol car insurance" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ev", children: "EV insurance" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#business", children: "Business vehicle insurance" }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterColumn, { title: "Manage vehicles", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#vehicles", children: "Your vehicles" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#orders", children: "Order history" }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(FooterColumn, { title: "Other", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", children: "About us" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Contact us" }) })
  ] })
] });
const bottom = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
    margin: 0,
    opacity: 0.8
  }, children: "Sample copyright 2026" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#terms", children: "Terms of use" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#privacy", children: "Privacy policy" }) })
  ] })
] });
const meta = {
  title: "Navigation/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1671-39748"
    }
  },
  args: {
    brand,
    children: columns,
    bottom
  }
};
const Mobile = {
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
};
const Desktop = {
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
};
const BrandOnly = {
  args: {
    children: void 0,
    bottom: void 0
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
      originalSource: "{\n  globals: {\n    viewport: {\n      value: 'mobile',\n      isRotated: false\n    }\n  }\n}",
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
      originalSource: "{\n  globals: {\n    viewport: {\n      value: 'desktop',\n      isRotated: false\n    }\n  }\n}",
      ...Desktop.parameters?.docs?.source
    },
    description: {
      story: "Figma `device=Desktop`.",
      ...Desktop.parameters?.docs?.description
    }
  }
};
BrandOnly.parameters = {
  ...BrandOnly.parameters,
  docs: {
    ...BrandOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    children: undefined,\n    bottom: undefined\n  },\n  globals: {\n    viewport: {\n      value: 'mobile',\n      isRotated: false\n    }\n  }\n}",
      ...BrandOnly.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Mobile", "Desktop", "BrandOnly"];
export {
  BrandOnly,
  Desktop,
  Mobile,
  __namedExportsOrder,
  meta as default
};
