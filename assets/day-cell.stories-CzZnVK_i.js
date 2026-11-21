import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { D as DayCell } from "./day-cell-DyHuRA65.js";
import "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
const meta = {
  title: "Inputs/DayCell",
  component: DayCell,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=700-12546"
    }
  },
  args: {
    children: "15",
    "aria-label": "15"
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "today", "selected", "range", "disabled", "other"]
    }
  }
};
const Default = {};
const Today = {
  args: {
    state: "today"
  }
};
const Selected = {
  args: {
    state: "selected"
  }
};
const Range = {
  args: {
    state: "range"
  }
};
const Disabled = {
  args: {
    state: "disabled"
  }
};
const Other = {
  args: {
    state: "other"
  }
};
const STATES = ["default", "today", "selected", "range", "disabled", "other"];
const AllStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    gap: 16,
    alignItems: "center"
  }, children: STATES.map((state) => /* @__PURE__ */ jsxRuntimeExports.jsx(DayCell, { ...args, state, "aria-label": `${state} day` }, state)) })
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
Today.parameters = {
  ...Today.parameters,
  docs: {
    ...Today.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'today'\n  }\n}",
      ...Today.parameters?.docs?.source
    }
  }
};
Selected.parameters = {
  ...Selected.parameters,
  docs: {
    ...Selected.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'selected'\n  }\n}",
      ...Selected.parameters?.docs?.source
    }
  }
};
Range.parameters = {
  ...Range.parameters,
  docs: {
    ...Range.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'range'\n  }\n}",
      ...Range.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'disabled'\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
Other.parameters = {
  ...Other.parameters,
  docs: {
    ...Other.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    state: 'other'\n  }\n}",
      ...Other.parameters?.docs?.source
    }
  }
};
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'flex',\n    gap: 16,\n    alignItems: 'center'\n  }}>\n      {STATES.map(state => <DayCell key={state} {...args} state={state} aria-label={`${state} day`} />)}\n    </div>\n}",
      ...AllStates.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "Today", "Selected", "Range", "Disabled", "Other", "AllStates"];
export {
  AllStates,
  Default,
  Disabled,
  Other,
  Range,
  Selected,
  Today,
  __namedExportsOrder,
  meta as default
};
