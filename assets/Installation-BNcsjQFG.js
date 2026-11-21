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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Installation"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "installation",
      children: "Installation"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["The packages are private and published to GitHub Packages (scope ", jsxRuntimeExports.jsx(_components.code, {
        children: "@fastsure"
      }), "). You need a GitHub account that has been\ngiven access to the Fastsure packages."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "1-point-the-scope-at-github-packages",
      children: "1. Point the scope at GitHub Packages"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Create or extend the ", jsxRuntimeExports.jsx(_components.code, {
        children: ".npmrc"
      }), " next to the host project's ", jsxRuntimeExports.jsx(_components.code, {
        children: "package.json"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-ini",
        children: "@fastsure:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}\n"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "NODE_AUTH_TOKEN"
      }), " is read from the environment, so the token itself is never committed."]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Locally:"
        }), " create a personal access token (classic) with the ", jsxRuntimeExports.jsx(_components.code, {
          children: "read:packages"
        }), " scope and export it in your shell\n(", jsxRuntimeExports.jsx(_components.code, {
          children: "export NODE_AUTH_TOKEN=..."
        }), ")."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "In CI:"
        }), " set ", jsxRuntimeExports.jsx(_components.code, {
          children: "NODE_AUTH_TOKEN"
        }), " from a secret. In GitHub Actions the built-in ", jsxRuntimeExports.jsx(_components.code, {
          children: "GITHUB_TOKEN"
        }), " works when the workflow has\n", jsxRuntimeExports.jsx(_components.code, {
          children: "packages: read"
        }), " and the repository has been granted access to the package."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "2-install",
      children: "2. Install"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-bash",
        children: "pnpm add @fastsure/ui @fastsure/icons\n# tokens are a dependency of @fastsure/ui; add them directly only if you import them yourself\npnpm add @fastsure/tokens\n"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["React 19 is a peer dependency (", jsxRuntimeExports.jsx(_components.code, {
        children: "react"
      }), " and ", jsxRuntimeExports.jsx(_components.code, {
        children: "react-dom"
      }), ", version ", jsxRuntimeExports.jsx(_components.code, {
        children: "^19.0.0"
      }), ")."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "3-load-the-stylesheet-once",
      children: "3. Load the stylesheet once"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Import the compiled stylesheet in the entry of the app:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-ts",
        children: "import '@fastsure/ui/styles.css';\n"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["It contains the token variables and only the utilities the components use. It has no global reset and every class is\nprefixed ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:"
      }), ", so it does not restyle the rest of the page."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "4-fonts",
      children: "4. Fonts"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "The host application must load the fonts; the packages do not ship font files. The text styles use this stack:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-css",
        children: "font-family: 'Google Sans', 'Noto Sans Thai', 'Noto Sans', system-ui, sans-serif;\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Thai text needs Noto Sans Thai (weights 400 and 500 are used):"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n<link\n  href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600&display=swap"\n  rel="stylesheet"\n/>\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'Load "Google Sans" as well if you have the licence to serve it; without it the browser falls back to the next family.'
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "5-use-it",
      children: "5. Use it"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `import { Logo } from '@fastsure/ui/logo';
import { SearchIcon } from '@fastsure/icons';

export function Header() {
  return (
    <header>
      <Logo title="Fastsure" />
      <SearchIcon title="Search" />
    </header>
  );
}
`
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Every component is also available from its own sub-path (", jsxRuntimeExports.jsx(_components.code, {
        children: "@fastsure/ui/<component>"
      }), ") and every icon from\n", jsxRuntimeExports.jsx(_components.code, {
        children: "@fastsure/icons/<icon-name>"
      }), ", which keeps bundles small. The bare package imports are tree-shakeable too."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "nextjs",
      children: "Next.js"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Import ", jsxRuntimeExports.jsx(_components.code, {
          children: "@fastsure/ui/styles.css"
        }), " once in the root layout (", jsxRuntimeExports.jsx(_components.code, {
          children: "app/layout.tsx"
        }), ", or ", jsxRuntimeExports.jsx(_components.code, {
          children: "pages/_app.tsx"
        }), " on the Pages Router)."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["The packages are pre-built ES modules, so ", jsxRuntimeExports.jsx(_components.code, {
          children: "transpilePackages"
        }), " is not needed."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Interactive components start with ", jsxRuntimeExports.jsx(_components.code, {
          children: '"use client"'
        }), ", so you can import them from Server Components. Icons and the logo have\nno state and also work in Server Components."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Load Noto Sans Thai with ", jsxRuntimeExports.jsx(_components.code, {
          children: "next/font/google"
        }), " or the ", jsxRuntimeExports.jsx(_components.code, {
          children: "<link>"
        }), " above, and apply it to ", jsxRuntimeExports.jsx(_components.code, {
          children: "body"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Make sure the install step of your build sets ", jsxRuntimeExports.jsx(_components.code, {
          children: "NODE_AUTH_TOKEN"
        }), " (Vercel, Cloud Build and similar need it as a build\nenvironment variable)."]
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
