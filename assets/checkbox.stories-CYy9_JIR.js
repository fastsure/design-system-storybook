import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { C as Checkbox } from "./checkbox-DNQxGC9E.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-CthloIl8.js";
import "./index-BRpwWxnq.js";
import "./index-C3tZBoHN.js";
import "./index-Chc9Z_o1.js";
import "./index-CKstfSuL.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
const meta = {
  title: "Controls/Checkbox",
  component: Checkbox,
  args: {
    label: "Label"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["md", "lg"]
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=163-5032"
    }
  }
};
const Unchecked = {};
const Checked = {
  args: {
    defaultChecked: true
  }
};
const Indeterminate = {
  args: {
    checked: "indeterminate"
  }
};
const DisabledUnchecked = {
  args: {
    disabled: true
  }
};
const DisabledChecked = {
  args: {
    disabled: true,
    defaultChecked: true
  }
};
const DisabledIndeterminate = {
  args: {
    disabled: true,
    checked: "indeterminate"
  }
};
const Sizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, auto)",
    gap: 24
  }, children: ["md", "lg"].map((size) => [{}, {
    defaultChecked: true
  }, {
    checked: "indeterminate"
  }, {
    disabled: true
  }, {
    disabled: true,
    defaultChecked: true
  }, {
    disabled: true,
    checked: "indeterminate"
  }].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { ...args, size, ...state }, `${size}-${index}`))) })
};
const WithoutLabel = {
  args: {
    label: void 0,
    "aria-label": "Select row"
  }
};
function ControlledCheckbox(args) {
  const [checked, setChecked] = reactExports.useState("indeterminate");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { ...args, checked, onCheckedChange: setChecked });
}
const Controlled = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledCheckbox, { ...args })
};
Unchecked.parameters = {
  ...Unchecked.parameters,
  docs: {
    ...Unchecked.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Unchecked.parameters?.docs?.source
    }
  }
};
Checked.parameters = {
  ...Checked.parameters,
  docs: {
    ...Checked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultChecked: true\n  }\n}",
      ...Checked.parameters?.docs?.source
    }
  }
};
Indeterminate.parameters = {
  ...Indeterminate.parameters,
  docs: {
    ...Indeterminate.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    checked: 'indeterminate'\n  }\n}",
      ...Indeterminate.parameters?.docs?.source
    }
  }
};
DisabledUnchecked.parameters = {
  ...DisabledUnchecked.parameters,
  docs: {
    ...DisabledUnchecked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...DisabledUnchecked.parameters?.docs?.source
    }
  }
};
DisabledChecked.parameters = {
  ...DisabledChecked.parameters,
  docs: {
    ...DisabledChecked.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    defaultChecked: true\n  }\n}",
      ...DisabledChecked.parameters?.docs?.source
    }
  }
};
DisabledIndeterminate.parameters = {
  ...DisabledIndeterminate.parameters,
  docs: {
    ...DisabledIndeterminate.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    checked: 'indeterminate'\n  }\n}",
      ...DisabledIndeterminate.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(6, auto)',\n    gap: 24\n  }}>\n      {(['md', 'lg'] as const).map(size => [{}, {\n      defaultChecked: true\n    }, {\n      checked: 'indeterminate' as const\n    }, {\n      disabled: true\n    }, {\n      disabled: true,\n      defaultChecked: true\n    }, {\n      disabled: true,\n      checked: 'indeterminate' as const\n    }].map((state, index) => <Checkbox key={`${size}-${index}`} {...args} size={size} {...state} />))}\n    </div>\n}",
      ...Sizes.parameters?.docs?.source
    },
    description: {
      story: "Figma sizes: `md` (14px label, default) and `lg` (16px label). The box is 18px in both.",
      ...Sizes.parameters?.docs?.description
    }
  }
};
WithoutLabel.parameters = {
  ...WithoutLabel.parameters,
  docs: {
    ...WithoutLabel.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: undefined,\n    'aria-label': 'Select row'\n  }\n}",
      ...WithoutLabel.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <ControlledCheckbox {...args} />\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Unchecked", "Checked", "Indeterminate", "DisabledUnchecked", "DisabledChecked", "DisabledIndeterminate", "Sizes", "WithoutLabel", "Controlled"];
export {
  Checked,
  Controlled,
  DisabledChecked,
  DisabledIndeterminate,
  DisabledUnchecked,
  Indeterminate,
  Sizes,
  Unchecked,
  WithoutLabel,
  __namedExportsOrder,
  meta as default
};
