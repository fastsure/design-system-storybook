import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { P as Progress$1 } from "./index-C6Uk9NqJ.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-BRpwWxnq.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-CthloIl8.js";
import "./index-DvlYfcwf.js";
const DEFAULT_STEPS = 3;
function clamp(value, max) {
  return Math.min(Math.max(value, 0), max);
}
function Progress({
  step = 1,
  steps = DEFAULT_STEPS,
  className,
  ref,
  ...props
}) {
  const current = clamp(step, steps);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Progress$1,
    {
      ref,
      value: current,
      max: steps,
      getValueLabel: (value, max) => `Step ${value} of ${max}`,
      className: cn("fs:flex fs:h-1.25 fs:w-full fs:gap-0.5 fs:overflow-hidden", className),
      ...props,
      children: Array.from({ length: steps }, (_, index) => {
        const isFilled = index < current;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-testid": "progress-segment",
            "data-filled": isFilled,
            className: cn(
              "fs:h-full fs:min-w-px fs:flex-1 fs:first:rounded-l-full fs:last:rounded-r-full",
              isFilled ? "fs:bg-accent" : "fs:bg-surface-muted"
            )
          },
          index
        );
      })
    }
  );
}
Progress.__docgenInfo = { "description": "Segmented linear progress for a multi-step flow. Each step is one segment; the segments up to\nthe current step are filled. Always pass an `aria-label` that names what is progressing.", "methods": [], "displayName": "Progress", "props": { "step": { "required": false, "tsType": { "name": "number" }, "description": "Current step, 1-based (Figma `Step`). Values outside `0..steps` are clamped.", "defaultValue": { "value": "1", "computed": false } }, "steps": { "required": false, "tsType": { "name": "number" }, "description": "Number of segments (Figma shows 3).", "defaultValue": { "value": "3", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Feedback/Progress",
  component: Progress,
  args: {
    "aria-label": "Quote progress",
    step: 1
  },
  argTypes: {
    step: {
      control: {
        type: "number",
        min: 0,
        max: 5
      }
    },
    steps: {
      control: {
        type: "number",
        min: 1,
        max: 6
      }
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 358
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=204-5278"
    }
  }
};
const Step1 = {
  args: {
    step: 1
  }
};
const Step2 = {
  args: {
    step: 2
  }
};
const Step3 = {
  args: {
    step: 3
  }
};
const FiveSteps = {
  args: {
    step: 3,
    steps: 5
  }
};
const AllSteps = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: 16
  }, children: [1, 2, 3].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { ...args, step, "aria-label": `Step ${step} of 3` }, step)) })
};
Step1.parameters = {
  ...Step1.parameters,
  docs: {
    ...Step1.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    step: 1\n  }\n}",
      ...Step1.parameters?.docs?.source
    }
  }
};
Step2.parameters = {
  ...Step2.parameters,
  docs: {
    ...Step2.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    step: 2\n  }\n}",
      ...Step2.parameters?.docs?.source
    }
  }
};
Step3.parameters = {
  ...Step3.parameters,
  docs: {
    ...Step3.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    step: 3\n  }\n}",
      ...Step3.parameters?.docs?.source
    }
  }
};
FiveSteps.parameters = {
  ...FiveSteps.parameters,
  docs: {
    ...FiveSteps.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    step: 3,\n    steps: 5\n  }\n}",
      ...FiveSteps.parameters?.docs?.source
    },
    description: {
      story: "The segment count is configurable beyond Figma's three.",
      ...FiveSteps.parameters?.docs?.description
    }
  }
};
AllSteps.parameters = {
  ...AllSteps.parameters,
  docs: {
    ...AllSteps.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gap: 16\n  }}>\n      {[1, 2, 3].map(step => <Progress key={step} {...args} step={step} aria-label={`Step ${step} of 3`} />)}\n    </div>\n}",
      ...AllSteps.parameters?.docs?.source
    },
    description: {
      story: "All three Figma `Step` variants stacked.",
      ...AllSteps.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Step1", "Step2", "Step3", "FiveSteps", "AllSteps"];
export {
  AllSteps,
  FiveSteps,
  Step1,
  Step2,
  Step3,
  __namedExportsOrder,
  meta as default
};
