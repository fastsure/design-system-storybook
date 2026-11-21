import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { P as Progress } from "./index-C6Uk9NqJ.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-BRpwWxnq.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-CthloIl8.js";
import "./index-DvlYfcwf.js";
const RING_INSET = 8;
const STROKE_RATIO = 0.1304;
const SPINNER_ARC = 0.75;
const MAX_VALUE = 100;
const ringBySize = {
  sm: { box: 56, stroke: (56 - 2 * RING_INSET) * STROKE_RATIO, sizeClass: "fs:size-14" },
  md: { box: 76, stroke: (76 - 2 * RING_INSET) * STROKE_RATIO, sizeClass: "fs:size-19" },
  lg: { box: 96, stroke: (96 - 2 * RING_INSET) * STROKE_RATIO, sizeClass: "fs:size-24" }
};
function CircleProgress({
  size = "sm",
  value = null,
  className,
  ref,
  ...props
}) {
  const { box, stroke, sizeClass } = ringBySize[size];
  const isDeterminate = value !== null;
  const radius = (box - 2 * RING_INSET - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const fraction = isDeterminate ? Math.min(Math.max(value, 0), MAX_VALUE) / MAX_VALUE : SPINNER_ARC;
  const center = box / 2;
  const startAngle = isDeterminate ? -90 : 180;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Progress,
    {
      ref,
      value,
      max: MAX_VALUE,
      className: cn("fs:relative fs:inline-block fs:shrink-0 fs:text-accent", sizeClass, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          "data-testid": "circle-progress-svg",
          "aria-hidden": "true",
          viewBox: `0 0 ${box} ${box}`,
          fill: "none",
          className: cn("fs:block fs:size-full", !isDeterminate && "fs:animate-spin"),
          children: [
            isDeterminate && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: center,
                cy: center,
                r: radius,
                stroke: "currentColor",
                strokeWidth: stroke,
                className: "fs:opacity-20"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                "data-testid": "circle-progress-arc",
                "data-circumference": circumference,
                cx: center,
                cy: center,
                r: radius,
                stroke: "currentColor",
                strokeWidth: stroke,
                strokeLinecap: "round",
                strokeDasharray: `${circumference * fraction} ${circumference}`,
                transform: `rotate(${startAngle} ${center} ${center})`
              }
            )
          ]
        }
      )
    }
  );
}
CircleProgress.__docgenInfo = { "description": "Circular progress: an indeterminate spinner (no `value`) or a determinate ring.\nPass an `aria-label` that says what is loading. The colour follows `currentColor`.", "methods": [], "displayName": "CircleProgress", "props": { "size": { "required": false, "tsType": { "name": "union", "raw": "'sm' | 'md' | 'lg'", "elements": [{ "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "Figma `Size`: sm 56 / md 76 / lg 96 px.", "defaultValue": { "value": "'sm'", "computed": false } }, "value": { "required": false, "tsType": { "name": "union", "raw": "number | null", "elements": [{ "name": "number" }, { "name": "null" }] }, "description": "0 to 100 for a determinate ring. Leave out for the indeterminate spinner.", "defaultValue": { "value": "null", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Feedback/CircleProgress",
  component: CircleProgress,
  args: {
    "aria-label": "Loading",
    size: "sm"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 5
      }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=567-10564"
    }
  }
};
const Small = {
  args: {
    size: "sm"
  }
};
const Medium = {
  args: {
    size: "md"
  }
};
const Large = {
  args: {
    size: "lg"
  }
};
const Determinate = {
  args: {
    size: "md",
    value: 65,
    "aria-label": "Uploading"
  }
};
const AllSizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 32
  }, children: [
    ["sm", "md", "lg"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleProgress, { ...args, size }, size)),
    ["sm", "md", "lg"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(CircleProgress, { ...args, size, value: 65, "aria-label": "Uploading" }, `${size}-ring`))
  ] })
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm'\n  }\n}",
      ...Small.parameters?.docs?.source
    },
    description: {
      story: "Indeterminate spinner, Figma `SM(56)`.",
      ...Small.parameters?.docs?.description
    }
  }
};
Medium.parameters = {
  ...Medium.parameters,
  docs: {
    ...Medium.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md'\n  }\n}",
      ...Medium.parameters?.docs?.source
    },
    description: {
      story: "Figma `MD(76)`.",
      ...Medium.parameters?.docs?.description
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...Large.parameters?.docs?.source
    },
    description: {
      story: "Figma `LG(96)`.",
      ...Large.parameters?.docs?.description
    }
  }
};
Determinate.parameters = {
  ...Determinate.parameters,
  docs: {
    ...Determinate.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md',\n    value: 65,\n    'aria-label': 'Uploading'\n  }\n}",
      ...Determinate.parameters?.docs?.source
    },
    description: {
      story: "Determinate ring with a value from 0 to 100.",
      ...Determinate.parameters?.docs?.description
    }
  }
};
AllSizes.parameters = {
  ...AllSizes.parameters,
  docs: {
    ...AllSizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    gap: 32\n  }}>\n      {(['sm', 'md', 'lg'] as const).map(size => <CircleProgress key={size} {...args} size={size} />)}\n      {(['sm', 'md', 'lg'] as const).map(size => <CircleProgress key={`${size}-ring`} {...args} size={size} value={65} aria-label=\"Uploading\" />)}\n    </div>\n}",
      ...AllSizes.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Small", "Medium", "Large", "Determinate", "AllSizes"];
export {
  AllSizes,
  Determinate,
  Large,
  Medium,
  Small,
  __namedExportsOrder,
  meta as default
};
