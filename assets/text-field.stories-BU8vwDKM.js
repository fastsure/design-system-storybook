import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { I as Input, L as Label } from "./input-CtWFGAls.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { F as FieldFrame } from "./field-frame-ByWdCNl8.js";
import { j as joinIds, F as FieldMessage } from "./field-message-DDGcnDCm.js";
import "./index-BYQC1JlH.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-CthloIl8.js";
import "./icons-v2G8WFHO.js";
import "./chevron-left-BWW28d3Y.js";
import "./chevron-right-DiVTNE_B.js";
import "./close-BYyk_y45.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
const OWN_KEYS = ["helperText", "errorMessage", "invalid", "className", "multiline"];
function omit(source, keys) {
  const entries = Object.entries(source).filter(([key]) => !keys.includes(key));
  return Object.fromEntries(entries);
}
function TextField(props) {
  const autoId = reactExports.useId();
  const { helperText, errorMessage, invalid = false, className } = props;
  const id = props.id ?? autoId;
  const messageId = `${id}-message`;
  const isInvalid = invalid || Boolean(errorMessage);
  const message = errorMessage || helperText;
  const describedBy = joinIds(props["aria-describedby"], message ? messageId : void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("fs:flex fs:w-full fs:flex-col fs:gap-s-2", className), children: [
    props.multiline ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      MultilineControl,
      {
        ...omit(props, OWN_KEYS),
        id,
        invalid: isInvalid,
        "aria-describedby": describedBy
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ...omit(props, OWN_KEYS),
        id,
        invalid: isInvalid,
        "aria-describedby": describedBy
      }
    ),
    message ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldMessage, { id: messageId, tone: errorMessage ? "error" : "helper", children: message }) : null
  ] });
}
const TEXTAREA_SIZE = {
  xl: "fs:text-body-3",
  lg: "fs:text-body-4"
};
function MultilineControl({
  label,
  size = "xl",
  invalid,
  id,
  disabled,
  rows = 2,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FieldFrame,
    {
      size,
      invalid,
      disabled,
      className: "fs:h-auto fs:min-h-24 fs:flex-col fs:items-stretch fs:gap-s-1 fs:py-3.5",
      children: [
        label ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Label,
          {
            htmlFor: id,
            className: cn(
              "fs:font-sans fs:text-muted",
              size === "xl" ? "fs:text-body-4" : "fs:text-body-5"
            ),
            children: label
          }
        ) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            ref,
            id,
            rows,
            disabled,
            "aria-invalid": invalid || void 0,
            className: cn(
              "fs:m-0 fs:w-full fs:resize-none fs:appearance-none fs:border-0 fs:bg-transparent fs:p-0 fs:font-sans fs:text-inherit fs:outline-none fs:placeholder:text-muted fs:disabled:cursor-not-allowed",
              TEXTAREA_SIZE[size]
            ),
            ...props
          }
        )
      ]
    }
  );
}
TextField.__docgenInfo = { "description": "Label, control and helper / error text wired together: `id`, `aria-describedby` and\n`aria-invalid` are set for you.", "methods": [], "displayName": "TextField" };
const meta = {
  title: "Inputs/TextField",
  component: TextField,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1497-34916"
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
const WithHelperText = {
  args: {
    helperText: "As shown on the registration book"
  }
};
const Error = {
  args: {
    defaultValue: "Toyota",
    errorMessage: "Please choose a car brand"
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
const Multiline = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { multiline: true, label: "Notes", size: args.size })
};
const SIZES = ["lg", "xl"];
const SizesAndStates = {
  parameters: {
    wide: true
  },
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 360px)",
    gap: 24
  }, children: SIZES.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, label: "Car brand" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, label: "Car brand", defaultValue: "Toyota" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, label: "Car brand", errorMessage: "Please choose a car brand" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, label: "Car brand", disabled: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, label: "Car brand", disabled: true, defaultValue: "Toyota" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, multiline: true, label: "Notes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { size, multiline: true, label: "Notes", errorMessage: "Required" })
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
WithHelperText.parameters = {
  ...WithHelperText.parameters,
  docs: {
    ...WithHelperText.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    helperText: 'As shown on the registration book'\n  }\n}",
      ...WithHelperText.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: 'Toyota',\n    errorMessage: 'Please choose a car brand'\n  }\n}",
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
Multiline.parameters = {
  ...Multiline.parameters,
  docs: {
    ...Multiline.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <TextField multiline label="Notes" size={args.size} />\n}',
      ...Multiline.parameters?.docs?.source
    }
  }
};
SizesAndStates.parameters = {
  ...SizesAndStates.parameters,
  docs: {
    ...SizesAndStates.parameters?.docs,
    source: {
      originalSource: `{
  parameters: {
    wide: true
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 360px)',
    gap: 24
  }}>
      {SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
          <TextField size={size} label="Car brand" />
          <TextField size={size} label="Car brand" defaultValue="Toyota" />
          <TextField size={size} label="Car brand" errorMessage="Please choose a car brand" />
          <TextField size={size} label="Car brand" disabled />
          <TextField size={size} label="Car brand" disabled defaultValue="Toyota" />
          <TextField size={size} multiline label="Notes" />
          <TextField size={size} multiline label="Notes" errorMessage="Required" />
        </div>)}
    </div>
}`,
      ...SizesAndStates.parameters?.docs?.source
    },
    description: {
      story: "Single-line and multi-line fields at both sizes, plain and in error.",
      ...SizesAndStates.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Default", "Filled", "WithHelperText", "Error", "Disabled", "FilledDisabled", "Multiline", "SizesAndStates"];
export {
  Default,
  Disabled,
  Error,
  Filled,
  FilledDisabled,
  Multiline,
  SizesAndStates,
  WithHelperText,
  __namedExportsOrder,
  meta as default
};
