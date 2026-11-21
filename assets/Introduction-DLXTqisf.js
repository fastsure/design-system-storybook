import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { useMDXComponents } from "./react-CMUW6Agn.js";
import { M as Meta } from "./blocks-CN8OIvHG.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Introduction"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "fastsure-design-system",
      children: "Fastsure Design System"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'The shared React design system for the Fastsure customer site and FastOffice. It is built with React 19, Tailwind CSS v4\nand Radix UI, and it comes from the Fastsure Figma file (page "Components"). Every component story links its Figma node in\nthe Design panel, and the props use the same names as the Figma variants.'
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "packages",
      children: "Packages"
    }), "\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "Package"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "What it gives you"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "@fastsure/ui"
            })
          }), jsxRuntimeExports.jsxs(_components.td, {
            children: ["Components, the ", jsxRuntimeExports.jsx(_components.code, {
              children: "cn()"
            }), " helper and ", jsxRuntimeExports.jsx(_components.code, {
              children: "styles.css"
            }), "."]
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "@fastsure/tokens"
            })
          }), jsxRuntimeExports.jsxs(_components.td, {
            children: ["Typed design tokens, CSS custom properties (", jsxRuntimeExports.jsx(_components.code, {
              children: "--fs-*"
            }), ") and a Tailwind v4 theme."]
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "@fastsure/icons"
            })
          }), jsxRuntimeExports.jsxs(_components.td, {
            children: ["113 icon components, generated from the Figma icon set (", jsxRuntimeExports.jsx(_components.code, {
              children: "size"
            }), ", ", jsxRuntimeExports.jsx(_components.code, {
              children: "title"
            }), ", ", jsxRuntimeExports.jsx(_components.code, {
              children: "currentColor"
            }), ")."]
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "All three are private packages on GitHub Packages and are versioned together with Changesets."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "where-to-go-next",
      children: "Where to go next"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx("a", {
          href: "?path=/docs/installation--docs",
          children: "Installation"
        }), ": registry setup, stylesheet, fonts and\nNext.js notes."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx("a", {
          href: "?path=/docs/foundations-tokens--docs",
          children: "Tokens"
        }), ": colour, radius, spacing, text styles\nand shadows."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx("a", {
          href: "?path=/docs/foundations-icons--docs",
          children: "Icons"
        }), ": searchable gallery of every icon."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Components are listed in the sidebar. Each one has a live preview, a props table and a Figma link."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "principles",
      children: "Principles"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Tokens only."
        }), " Components never hard-code colours or sizes; they use the token theme."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "No side effects."
        }), " The stylesheet has no global reset and every Tailwind class carries an ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:"
        }), " prefix, so it is safe to\nload next to the host application's own styles."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Accessible by default."
        }), " Interactive components build on Radix primitives and are checked with axe."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
