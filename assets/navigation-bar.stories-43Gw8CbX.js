import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { S as Slot } from "./index-CthloIl8.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function NavigationBar({
  logo: logo2,
  links: links2,
  linksLabel = "Main",
  actions,
  className,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      ref,
      className: cn(
        "fs:box-border fs:flex fs:h-control-lg fs:w-full fs:items-center fs:justify-center fs:overflow-clip fs:bg-mint-500 fs:px-s-7 fs:py-s-1",
        "fs:md:h-auto fs:md:py-s-2 fs:lg:justify-between fs:lg:px-s-20 fs:lg:py-s-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs:flex fs:shrink-0 fs:items-center", children: logo2 }),
        links2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": linksLabel, className: "fs:hidden fs:items-center fs:gap-s-4 fs:lg:flex", children: links2 }) : null,
        actions ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs:hidden fs:shrink-0 fs:items-center fs:gap-s-3 fs:lg:flex", children: actions }) : null
      ]
    }
  );
}
function NavigationBarLink({
  active = false,
  iconEnd,
  asChild = false,
  className,
  children,
  type = "button",
  ref,
  ...props
}) {
  const classes = cn(
    "fs:box-border fs:inline-flex fs:h-control-md fs:cursor-pointer fs:items-center fs:justify-center fs:gap-s-3 fs:whitespace-nowrap fs:rounded-button fs:border-0 fs:bg-transparent fs:px-s-6 fs:py-3.5 fs:text-label-2 fs:text-brand-light fs:no-underline",
    "fs:hover:bg-alpha-white-1 fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
    active && "fs:rounded-none fs:border-b-3 fs:border-solid fs:border-secondary fs:hover:bg-transparent",
    className
  );
  const end = iconEnd ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "fs:inline-flex fs:size-icon-md fs:shrink-0 fs:items-center", children: iconEnd }) : null;
  const sharedProps = {
    ...props,
    ref,
    className: classes,
    "aria-current": active ? "page" : void 0
  };
  if (asChild && reactExports.isValidElement(children)) {
    const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      children.props.children,
      end
    ] });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ...sharedProps, children: reactExports.cloneElement(children, void 0, content) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type, ...sharedProps, children: [
    children,
    end
  ] });
}
NavigationBar.__docgenInfo = { "description": "The mint site header. Below the desktop breakpoint (Figma `type=Mobile` and `Desktop Logo`) it\nshows the centred logo only; from `lg` (Figma `type=Desktop`) it lays out logo, links and actions.\nThe app supplies the content, so it holds no routes of its own.", "methods": [], "displayName": "NavigationBar", "props": { "logo": { "required": true, "tsType": { "name": "ReactNode" }, "description": "The brand logo, usually wrapped in a link to the home page." }, "links": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Main navigation, normally `NavigationBarLink`s. Shown from the desktop breakpoint." }, "linksLabel": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the links navigation landmark.", "defaultValue": { "value": "'Main'", "computed": false } }, "actions": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Call-to-action area at the end (sign in, account menu). Shown from the desktop breakpoint." } }, "composes": ["ComponentProps"] };
NavigationBarLink.__docgenInfo = { "description": "A link (or menu trigger) for the `links` slot of the `NavigationBar`.", "methods": [], "displayName": "NavigationBarLink", "props": { "active": { "required": false, "tsType": { "name": "boolean" }, "description": 'The current section: underlines the link in lime and sets `aria-current="page"`.', "defaultValue": { "value": "false", "computed": false } }, "iconEnd": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon after the label, for example a chevron for a link that opens a menu." }, "asChild": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the single child element (for example a router `Link`) instead of a `button`.", "defaultValue": { "value": "false", "computed": false } }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" }, "type": { "defaultValue": { "value": "'button'", "computed": false }, "required": false } }, "composes": ["Omit"] };
const logo = /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", style: {
  color: "#fff",
  fontWeight: 700,
  fontSize: 24,
  textDecoration: "none"
}, children: "Sample Logo" });
const chevron = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", width: "18", height: "18", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m5 7 4 4 4-4" }) });
const links = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { iconEnd: chevron, children: "Buy insurance" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "Business vehicles" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "About us" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "Help" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "Contact us" })
] });
const signIn = /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: {
  height: 48,
  padding: "0 24px",
  borderRadius: 8,
  border: 0,
  background: "#dafb4a",
  font: "inherit"
}, children: "Sign in" });
const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1671-51649"
    }
  },
  args: {
    logo,
    links,
    actions: signIn
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
const DesktopActiveLink = {
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  args: {
    links: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { active: true, iconEnd: chevron, children: "Buy insurance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "Business vehicles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { children: "About us" })
    ] })
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
const WithAsChildLinks = {
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  args: {
    links: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { asChild: true, active: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#buy", children: "Buy insurance" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBarLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", children: "About us" }) })
    ] })
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
      story: "Figma `type=Desktop`, `state=Default`: logo, links and a call to action.",
      ...Desktop.parameters?.docs?.description
    }
  }
};
DesktopActiveLink.parameters = {
  ...DesktopActiveLink.parameters,
  docs: {
    ...DesktopActiveLink.parameters?.docs,
    source: {
      originalSource: "{\n  globals: {\n    viewport: {\n      value: 'desktop',\n      isRotated: false\n    }\n  },\n  args: {\n    links: <>\n        <NavigationBarLink active iconEnd={chevron}>\n          Buy insurance\n        </NavigationBarLink>\n        <NavigationBarLink>Business vehicles</NavigationBarLink>\n        <NavigationBarLink>About us</NavigationBarLink>\n      </>\n  }\n}",
      ...DesktopActiveLink.parameters?.docs?.source
    },
    description: {
      story: "Figma `type=Desktop`, `state=Insurance`: the current section is underlined in lime.",
      ...DesktopActiveLink.parameters?.docs?.description
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
      story: "Figma `type=Mobile`: only the centred logo shows below the desktop breakpoint.",
      ...Mobile.parameters?.docs?.description
    }
  }
};
WithAsChildLinks.parameters = {
  ...WithAsChildLinks.parameters,
  docs: {
    ...WithAsChildLinks.parameters?.docs,
    source: {
      originalSource: `{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  args: {
    links: <>
        <NavigationBarLink asChild active>
          <a href="#buy">Buy insurance</a>
        </NavigationBarLink>
        <NavigationBarLink asChild>
          <a href="#about">About us</a>
        </NavigationBarLink>
      </>
  }
}`,
      ...WithAsChildLinks.parameters?.docs?.source
    },
    description: {
      story: "Links rendered through a router link component with `asChild`.",
      ...WithAsChildLinks.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Desktop", "DesktopActiveLink", "Mobile", "WithAsChildLinks"];
export {
  Desktop,
  DesktopActiveLink,
  Mobile,
  WithAsChildLinks,
  __namedExportsOrder,
  meta as default
};
