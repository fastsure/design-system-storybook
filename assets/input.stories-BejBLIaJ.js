import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { a as SearchIcon } from "./icons-v2G8WFHO.js";
import { I as Input } from "./input-CtWFGAls.js";
import "./chevron-left-BWW28d3Y.js";
import "./chevron-right-DiVTNE_B.js";
import "./close-BYyk_y45.js";
import "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
import "./iframe-CG1WmBjX.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-CthloIl8.js";
import "./field-frame-ByWdCNl8.js";
const meta = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=150-2199"
    }
  },
  args: {
    label: "Car brand",
    size: "xl"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["lg", "xl"]
    }
  },
  decorators: [(Story, {
    parameters
  }) => parameters.wide ? /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 360
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const Filled = {
  args: {
    defaultValue: "Toyota"
  }
};
const Focused = {
  play: ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
};
const Error = {
  args: {
    invalid: true,
    defaultValue: "Toyota"
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const FilledDisabled = {
  args: {
    disabled: true,
    defaultValue: "Toyota"
  }
};
const Loading = {
  args: {
    loading: true
  }
};
const WithoutLabel = {
  args: {
    label: void 0,
    placeholder: "Car brand",
    "aria-label": "Car brand"
  }
};
const WithAdornments = {
  args: {
    leading: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, {}),
    trailing: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "THB" })
  }
};
const SIZES = ["lg", "xl"];
const STATES = [{
  name: "Default",
  props: {}
}, {
  name: "Filled",
  props: {
    defaultValue: "Toyota"
  }
}, {
  name: "Error",
  props: {
    invalid: true,
    defaultValue: "Toyota"
  }
}, {
  name: "Disabled",
  props: {
    disabled: true
  }
}, {
  name: "Filled disabled",
  props: {
    disabled: true,
    defaultValue: "Toyota"
  }
}, {
  name: "Loading",
  props: {
    loading: true
  }
}];
const SizesAndStates = {
  parameters: {
    wide: true
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 360px)",
    gap: 24
  }, children: SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: size === "lg" ? "LG (56)" : "XL (64)" }),
    STATES.map((state) => /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...args, size, ...state.props, "aria-label": state.name }, state.name))
  ] }, size)) })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
Filled.parameters = {
  ...Filled.parameters,
  docs: {
    ...Filled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: 'Toyota'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Focused.parameters = {
  ...Focused.parameters,
  docs: {
    ...Focused.parameters?.docs,
    source: {
      originalSource: "{\n  play: ({\n    canvasElement\n  }) => {\n    canvasElement.querySelector('input')?.focus();\n  }\n}",
      ...Focused.parameters?.docs?.source
    },
    description: {
      story: "Click into the field (or Tab to it) to see the mint border and the focus ring.",
      ...Focused.parameters?.docs?.description
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    invalid: true,\n    defaultValue: 'Toyota'\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
FilledDisabled.parameters = {
  ...FilledDisabled.parameters,
  docs: {
    ...FilledDisabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    defaultValue: 'Toyota'\n  }\n}",
      ...FilledDisabled.parameters?.docs?.source
    }
  }
};
Loading.parameters = {
  ...Loading.parameters,
  docs: {
    ...Loading.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    loading: true\n  }\n}",
      ...Loading.parameters?.docs?.source
    }
  }
};
WithoutLabel.parameters = {
  ...WithoutLabel.parameters,
  docs: {
    ...WithoutLabel.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: undefined,\n    placeholder: 'Car brand',\n    'aria-label': 'Car brand'\n  }\n}",
      ...WithoutLabel.parameters?.docs?.source
    }
  }
};
WithAdornments.parameters = {
  ...WithAdornments.parameters,
  docs: {
    ...WithAdornments.parameters?.docs,
    source: {
      originalSource: '{\n  args: {\n    leading: <SearchIcon />,\n    trailing: <span aria-hidden="true">THB</span>\n  }\n}',
      ...WithAdornments.parameters?.docs?.source
    }
  }
};
SizesAndStates.parameters = {
  ...SizesAndStates.parameters,
  docs: {
    ...SizesAndStates.parameters?.docs,
    source: {
      originalSource: "{\n  parameters: {\n    wide: true\n  },\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(2, 360px)',\n    gap: 24\n  }}>\n      {SIZES.map(size => <div key={size} style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: 12\n    }}>\n          <strong>{size === 'lg' ? 'LG (56)' : 'XL (64)'}</strong>\n          {STATES.map(state => <Input key={state.name} {...args} size={size} {...state.props} aria-label={state.name} />)}\n        </div>)}\n    </div>\n}",
      ...SizesAndStates.parameters?.docs?.source
    },
    description: {
      story: "Every size against every state. Hover and Focus are real CSS states: point at or Tab into a field.",
      ...SizesAndStates.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Default", "Filled", "Focused", "Error", "Disabled", "FilledDisabled", "Loading", "WithoutLabel", "WithAdornments", "SizesAndStates"];
export {
  Default,
  Disabled,
  Error,
  Filled,
  FilledDisabled,
  Focused,
  Loading,
  SizesAndStates,
  WithAdornments,
  WithoutLabel,
  __namedExportsOrder,
  meta as default
};
