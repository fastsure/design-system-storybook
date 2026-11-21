import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { j as joinIds, F as FieldMessage } from "./field-message-DDGcnDCm.js";
import { u as useControllableState } from "./use-controllable-state-BElpv87d.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
function onlyDigits(text) {
  return text.replace(/\D/g, "");
}
function setDigitAt(code, index, digit) {
  return code.slice(0, index) + digit + code.slice(index + 1);
}
function removeDigitAt(code, index) {
  return code.slice(0, index) + code.slice(index + 1);
}
function applyDigits(code, startIndex, digits, length) {
  const from = digits.length >= length ? 0 : Math.min(startIndex, code.length);
  return (code.slice(0, from) + digits).slice(0, length);
}
const DEFAULT_LENGTH = 6;
const defaultDigitLabel = (position, total) => `Digit ${position} of ${total}`;
function OtpInput({
  value,
  defaultValue = "",
  onValueChange,
  onComplete,
  length = DEFAULT_LENGTH,
  disabled = false,
  invalid = false,
  errorMessage,
  autoFocus = false,
  name,
  groupLabel = "One-time code",
  getDigitLabel = defaultDigitLabel,
  className,
  id,
  ...props
}) {
  const autoId = reactExports.useId();
  const baseId = id ?? autoId;
  const messageId = `${baseId}-message`;
  const isInvalid = invalid || Boolean(errorMessage);
  const cells = reactExports.useRef([]);
  const [code, setCode] = useControllableState({
    value: value === void 0 ? void 0 : onlyDigits(value).slice(0, length),
    defaultValue: onlyDigits(defaultValue).slice(0, length),
    onChange: onValueChange
  });
  const activeIndex = Math.min(code.length, length - 1);
  reactExports.useEffect(() => {
    if (autoFocus) cells.current[0]?.focus();
  }, [autoFocus]);
  const focusCell = (index) => {
    cells.current[Math.max(0, Math.min(index, length - 1))]?.focus();
  };
  const pendingFocus = reactExports.useRef(null);
  reactExports.useLayoutEffect(() => {
    if (pendingFocus.current === null) return;
    focusCell(pendingFocus.current);
    pendingFocus.current = null;
  });
  const commit = (next, focusIndex) => {
    if (next === code) {
      focusCell(focusIndex);
      return;
    }
    pendingFocus.current = focusIndex;
    setCode(next);
    if (next.length === length) onComplete?.(next);
  };
  const handleChange = (index, event) => {
    const native = event.nativeEvent;
    const typed = native.inputType === "insertText" ? onlyDigits(native.data ?? "") : "";
    const incoming = typed !== "" ? typed.slice(-1) : onlyDigits(event.target.value);
    const at = Math.min(index, code.length);
    if (incoming === "") {
      if (event.target.value === "" && index < code.length)
        commit(removeDigitAt(code, index), index);
      return;
    }
    if (incoming.length > 1) {
      const next = applyDigits(code, at, incoming, length);
      commit(next, Math.min(next.length, length - 1));
      return;
    }
    commit(setDigitAt(code, at, incoming), Math.min(at + 1, length - 1));
  };
  const handlePaste = (index, event) => {
    event.preventDefault();
    const digits = onlyDigits(event.clipboardData.getData("text"));
    if (digits === "") return;
    const next = applyDigits(code, Math.min(index, code.length), digits, length);
    commit(next, Math.min(next.length, length - 1));
  };
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index >= code.length && index > 0) {
      event.preventDefault();
      commit(removeDigitAt(code, index - 1), index - 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusCell(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusCell(index + 1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("fs:flex fs:w-full fs:flex-col fs:gap-s-3", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "group",
        "aria-label": groupLabel,
        id: baseId,
        className: "fs:flex fs:w-full fs:gap-s-2",
        ...props,
        children: Array.from({ length }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: (node) => {
              cells.current[index] = node;
            },
            value: code[index] ?? "",
            disabled,
            inputMode: "numeric",
            pattern: "[0-9]*",
            autoComplete: index === 0 ? "one-time-code" : "off",
            "aria-label": getDigitLabel(index + 1, length),
            "aria-invalid": isInvalid || void 0,
            "aria-describedby": joinIds(errorMessage && messageId),
            tabIndex: index === activeIndex ? 0 : -1,
            onChange: (event) => handleChange(index, event),
            onKeyDown: (event) => handleKeyDown(index, event),
            onPaste: (event) => handlePaste(index, event),
            onFocus: () => {
              if (index > code.length) focusCell(code.length);
            },
            className: cn(
              "fs:m-0 fs:box-border fs:h-control-xl fs:min-w-0 fs:flex-1 fs:appearance-none fs:rounded-control fs:border fs:border-solid fs:px-s-2 fs:text-center fs:font-sans fs:text-heading-2 fs:outline-none",
              disabled ? "fs:cursor-not-allowed fs:border-line fs:bg-surface-muted fs:text-muted" : cn(
                "fs:bg-panel fs:text-ink fs:focus:shadow-focus",
                isInvalid ? "fs:border-danger" : "fs:border-line fs:hover:bg-surface-subtle fs:focus:border-active"
              )
            )
          },
          index
        ))
      }
    ),
    name ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name, value: code }) : null,
    errorMessage ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldMessage, { id: messageId, tone: "error", className: "fs:text-center fs:text-danger-ink", children: errorMessage }) : null
  ] });
}
OtpInput.__docgenInfo = { "description": "One-time-code field with a box per digit. Typing advances, Backspace goes back, arrow keys\nmove, pasting or SMS autofill fills every box, and a single tab stop keeps keyboard use simple.", "methods": [], "displayName": "OtpInput", "props": { "value": { "required": false, "tsType": { "name": "string" }, "description": "The code typed so far (digits only)." }, "defaultValue": { "required": false, "tsType": { "name": "string" }, "description": "", "defaultValue": { "value": "''", "computed": false } }, "onValueChange": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "value" }], "return": { "name": "void" } } }, "description": "Called with the digits on every change." }, "onComplete": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "value" }], "return": { "name": "void" } } }, "description": "Called once all digits are filled." }, "length": { "required": false, "tsType": { "name": "number" }, "description": "Number of digits. Default 6.", "defaultValue": { "value": "6", "computed": false } }, "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "invalid": { "required": false, "tsType": { "name": "boolean" }, "description": "Red borders, `aria-invalid` on every digit.", "defaultValue": { "value": "false", "computed": false } }, "errorMessage": { "required": false, "tsType": { "name": "string" }, "description": "Error text under the digits (Figma: centred, `error-main`). Also marks the field invalid." }, "autoFocus": { "required": false, "tsType": { "name": "boolean" }, "description": "Focus the first digit on mount.", "defaultValue": { "value": "false", "computed": false } }, "name": { "required": false, "tsType": { "name": "string" }, "description": "Form field name; adds a hidden input carrying the whole code." }, "groupLabel": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the group. Pass a translated string.", "defaultValue": { "value": "'One-time code'", "computed": false } }, "getDigitLabel": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(position: number, total: number) => string", "signature": { "arguments": [{ "type": { "name": "number" }, "name": "position" }, { "type": { "name": "number" }, "name": "total" }], "return": { "name": "string" } } }, "description": "Accessible name of one digit. Pass a translated function.", "defaultValue": { "value": "(position: number, total: number): string =>\n`Digit ${position} of ${total}`", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Inputs/OtpInput",
  component: OtpInput,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=2433-149777"
    }
  },
  args: {
    groupLabel: "รหัส OTP",
    getDigitLabel: (position, total) => `หลักที่ ${position} จาก ${total}`
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 360
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {
  args: {
    autoFocus: true
  }
};
const Filled = {
  args: {
    defaultValue: "122345"
  }
};
const PartiallyFilled = {
  args: {
    defaultValue: "12"
  }
};
const Error = {
  args: {
    defaultValue: "122345",
    errorMessage: "รหัส OTP หมดอายุ ขอรหัส OTP อีกครั้ง"
  }
};
const Disabled = {
  args: {
    defaultValue: "12",
    disabled: true
  }
};
const FourDigits = {
  args: {
    length: 4
  }
};
function ControlledDemo(props) {
  const [code, setCode] = reactExports.useState("");
  const [completed, setCompleted] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtpInput, { ...props, value: code, onValueChange: setCode, onComplete: setCompleted }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
      "value: ",
      code || "(empty)",
      "; completed: ",
      completed || "(not yet)"
    ] })
  ] });
}
const Controlled = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledDemo, { ...args })
};
const AllStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 24
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtpInput, { ...args }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtpInput, { ...args, defaultValue: "122345" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtpInput, { ...args, defaultValue: "122345", errorMessage: "รหัส OTP หมดอายุ ขอรหัส OTP อีกครั้ง" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OtpInput, { ...args, disabled: true })
  ] })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    autoFocus: true\n  }\n}",
      ...Default.parameters?.docs?.source
    },
    description: {
      story: "The first box is focused, as in Figma: type, paste a code, or let the SMS autofill it.",
      ...Default.parameters?.docs?.description
    }
  }
};
Filled.parameters = {
  ...Filled.parameters,
  docs: {
    ...Filled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '122345'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
PartiallyFilled.parameters = {
  ...PartiallyFilled.parameters,
  docs: {
    ...PartiallyFilled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '12'\n  }\n}",
      ...PartiallyFilled.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '122345',\n    errorMessage: 'รหัส OTP หมดอายุ ขอรหัส OTP อีกครั้ง'\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '12',\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
FourDigits.parameters = {
  ...FourDigits.parameters,
  docs: {
    ...FourDigits.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    length: 4\n  }\n}",
      ...FourDigits.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <ControlledDemo {...args} />\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <OtpInput {...args} />
      <OtpInput {...args} defaultValue="122345" />
      <OtpInput {...args} defaultValue="122345" errorMessage="รหัส OTP หมดอายุ ขอรหัส OTP อีกครั้ง" />
      <OtpInput {...args} disabled />
    </div>
}`,
      ...AllStates.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "Filled", "PartiallyFilled", "Error", "Disabled", "FourDigits", "Controlled", "AllStates"];
export {
  AllStates,
  Controlled,
  Default,
  Disabled,
  Error,
  Filled,
  FourDigits,
  PartiallyFilled,
  __namedExportsOrder,
  meta as default
};
