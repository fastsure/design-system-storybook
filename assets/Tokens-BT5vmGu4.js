import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { useMDXComponents } from "./react-CMUW6Agn.js";
import { M as Meta } from "./blocks-CN8OIvHG.js";
import { h as semanticRefs, c as color, p as palette, j as alpha, a as controlHeight, i as iconSize, b as borderWidth, d as duration, e as easing, z as zIndex, r as radius, s as space, t as text, f as fontFamily, g as shadow } from "./index-DvlYfcwf.js";
import { g as gridStyle, d as docsFont, c as cardStyle, m as mutedText } from "./docs-styles-BVdCLQR6.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
function Swatch({ label, value, hint }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: cardStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `${label} ${value}`,
        style: {
          height: 56,
          background: `linear-gradient(${value}, ${value}), repeating-conic-gradient(${color.line} 0% 25%, ${color.panel} 0% 50%) 50% / 12px 12px`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 10px", display: "grid", gap: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { ...docsFont, fontSize: 13 }, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value }),
      hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: mutedText, children: hint }) : null
    ] })
  ] });
}
function PaletteSwatches() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 20 }, children: Object.entries(palette).map(([hue, steps]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": hue, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { ...docsFont, margin: "0 0 8px" }, children: hue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: gridStyle(112), children: Object.entries(steps).map(([step, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Swatch, { label: `${hue}-${step}`, value }, step)) })
  ] }, hue)) });
}
function SemanticSwatches() {
  const names = Object.keys(semanticRefs);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: gridStyle(152), children: names.map((name) => {
    const [hue, step] = semanticRefs[name];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Swatch, { label: name, value: color[name], hint: `${hue}-${step}` }, name);
  }) });
}
function AlphaSwatches() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: gridStyle(152), children: Object.entries(alpha).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Swatch, { label: name, value }, name)) });
}
PaletteSwatches.__docgenInfo = { "description": "Every primitive ramp (gray, mint, deep-sea, ...), one row per hue.", "methods": [], "displayName": "PaletteSwatches" };
SemanticSwatches.__docgenInfo = { "description": "Semantic colours (the names components use) with the palette step each one points at.", "methods": [], "displayName": "SemanticSwatches" };
AlphaSwatches.__docgenInfo = { "description": "", "methods": [], "displayName": "AlphaSwatches" };
const rowStyle = { display: "flex", alignItems: "center", gap: 12 };
function ControlHeights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 8 }, children: Object.entries(controlHeight).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: { ...mutedText, width: 120 }, children: [
      "h-control-",
      name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `control height ${name} ${value}`,
        style: {
          width: 160,
          height: value,
          background: color["accent-tint"],
          border: `1px solid ${color.accent}`,
          borderRadius: 8
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, name)) });
}
function IconSizes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end" }, children: Object.entries(iconSize).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gap: 8, justifyItems: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `icon size ${name} ${value}`,
        style: { width: value, height: value, background: color.brand, borderRadius: 4 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: mutedText, children: [
      "size-icon-",
      name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, name)) });
}
function BorderWidths() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: rowStyle, children: Object.entries(borderWidth).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...cardStyle, padding: 12, display: "grid", gap: 8 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `border width ${name} ${value}`,
        style: {
          width: 18,
          height: 18,
          border: `${value} solid ${color.muted}`,
          borderRadius: 4
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { ...docsFont, fontSize: 13 }, children: [
      "border-",
      name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, name)) });
}
function MotionAndLayers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
    Object.entries(duration).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: { ...mutedText, width: 160 }, children: [
        "duration-",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
    ] }, name)),
    Object.entries(easing).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: { ...mutedText, width: 160 }, children: [
        "ease-",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
    ] }, name)),
    Object.entries(zIndex).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: { ...mutedText, width: 160 }, children: [
        "z-",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
    ] }, name))
  ] });
}
ControlHeights.__docgenInfo = { "description": "", "methods": [], "displayName": "ControlHeights" };
IconSizes.__docgenInfo = { "description": "", "methods": [], "displayName": "IconSizes" };
BorderWidths.__docgenInfo = { "description": "", "methods": [], "displayName": "BorderWidths" };
MotionAndLayers.__docgenInfo = { "description": "", "methods": [], "displayName": "MotionAndLayers" };
function RadiusSamples() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: gridStyle(120), children: Object.entries(radius).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...cardStyle, padding: 12, display: "grid", gap: 8 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `radius ${name}`,
        style: {
          height: 64,
          background: color["accent-soft"],
          border: `2px solid ${color.accent}`,
          borderRadius: value
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { ...docsFont, fontSize: 13 }, children: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, name)) });
}
function SpacingScale() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 8 }, children: Object.entries(space).map(([step, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: { ...mutedText, width: 40 }, children: [
      "s-",
      step
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `spacing s-${step} ${value}`,
        style: { width: value, height: 16, background: color.accent, borderRadius: 2 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, step)) });
}
function TextStyles() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 4 }, children: Object.entries(text).map(([name, style]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        alignItems: "baseline",
        gap: 16,
        borderBottom: `1px solid ${color["line-soft"]}`,
        padding: "8px 0"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { ...docsFont, fontSize: 13 }, children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { style: mutedText, children: [
            style.size,
            " / ",
            style.lineHeight,
            " / ",
            style.weight
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontFamily: fontFamily.sans,
              fontSize: style.size,
              lineHeight: style.lineHeight,
              fontWeight: style.weight,
              color: color.ink
            },
            children: "ประกันออนไลน์ ง่าย เร็ว ชัวร์ — Online insurance, quick and sure"
          }
        )
      ]
    },
    name
  )) });
}
function ShadowSamples() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: gridStyle(180), children: Object.entries(shadow).map(([name, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 8, display: "grid", gap: 8 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "img",
        "aria-label": `shadow ${name}`,
        style: {
          height: 72,
          borderRadius: radius.card,
          background: color.panel,
          boxShadow: value
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { ...docsFont, fontSize: 13 }, children: [
      "shadow-",
      name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: mutedText, children: value })
  ] }, name)) });
}
RadiusSamples.__docgenInfo = { "description": "", "methods": [], "displayName": "RadiusSamples" };
SpacingScale.__docgenInfo = { "description": "", "methods": [], "displayName": "SpacingScale" };
TextStyles.__docgenInfo = { "description": "", "methods": [], "displayName": "TextStyles" };
ShadowSamples.__docgenInfo = { "description": "", "methods": [], "displayName": "ShadowSamples" };
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Foundations/Tokens"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tokens",
      children: "Tokens"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Design tokens come from the Figma file and live in ", jsxRuntimeExports.jsx(_components.code, {
        children: "@fastsure/tokens"
      }), " (", jsxRuntimeExports.jsx(_components.code, {
        children: "src/tokens.ts"
      }), " is the single source of truth). They\nare available three ways:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["TypeScript: ", jsxRuntimeExports.jsx(_components.code, {
          children: "import { color, radius, space, controlHeight, iconSize, text, shadow } from '@fastsure/tokens'"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["CSS custom properties: ", jsxRuntimeExports.jsx(_components.code, {
          children: "var(--fs-color-accent)"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "var(--fs-radius-card)"
        }), " (from ", jsxRuntimeExports.jsx(_components.code, {
          children: "@fastsure/tokens/tokens.css"
        }), ")"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Tailwind utilities with the ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:"
        }), " prefix: ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:bg-accent"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:rounded-card"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:px-s-6"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:text-label-2"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:shadow-3"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:h-control-md"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:size-icon-md"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:z-modal"
        }), ", ", jsxRuntimeExports.jsx(_components.code, {
          children: "fs:duration-normal"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Components use the semantic names. Use a palette step directly only when no semantic colour fits."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "semantic-colours",
      children: "Semantic colours"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Each semantic colour points at one palette step, shown under its name."
    }), "\n", jsxRuntimeExports.jsx(SemanticSwatches, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "palette",
      children: "Palette"
    }), "\n", jsxRuntimeExports.jsx(PaletteSwatches, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "alpha-overlays",
      children: "Alpha overlays"
    }), "\n", jsxRuntimeExports.jsx(AlphaSwatches, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "radius",
      children: "Radius"
    }), "\n", jsxRuntimeExports.jsx(RadiusSamples, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "spacing",
      children: "Spacing"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["A 4px grid, ", jsxRuntimeExports.jsx(_components.code, {
        children: "s-1"
      }), " to ", jsxRuntimeExports.jsx(_components.code, {
        children: "s-8"
      }), ", plus ", jsxRuntimeExports.jsx(_components.code, {
        children: "s-20"
      }), " (80px) for the desktop page gutter."]
    }), "\n", jsxRuntimeExports.jsx(SpacingScale, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "control-heights",
      children: "Control heights"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Use ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:h-control-*"
      }), " for the height of a button, input or tab. Never a Tailwind number such as ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:h-12"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(ControlHeights, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icon-sizes",
      children: "Icon sizes"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Use ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:size-icon-*"
      }), " for glyphs inside controls."]
    }), "\n", jsxRuntimeExports.jsx(IconSizes, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "border-width",
      children: "Border width"
    }), "\n", jsxRuntimeExports.jsx(BorderWidths, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "motion-and-layers",
      children: "Motion and layers"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Components animate with ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:duration-fast"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:duration-normal"
      }), " and ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:ease-standard"
      }), ", and stack with\n", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:z-modal"
      }), " (dialogs), ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:z-overlay"
      }), " (menus and popovers, above dialogs) and ", jsxRuntimeExports.jsx(_components.code, {
        children: "fs:z-toast"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(MotionAndLayers, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "text-styles",
      children: "Text styles"
    }), "\n", jsxRuntimeExports.jsx(TextStyles, {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "shadows",
      children: "Shadows"
    }), "\n", jsxRuntimeExports.jsx(ShadowSamples, {})]
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
