import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { F as FieldFrame } from "./field-frame-ByWdCNl8.js";
import { j as joinIds, F as FieldMessage } from "./field-message-DDGcnDCm.js";
import { P as PhoneIcon } from "./icons-v2G8WFHO.js";
import { u as useControllableState } from "./use-controllable-state-BElpv87d.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
import "./chevron-left-BWW28d3Y.js";
import "./chevron-right-DiVTNE_B.js";
import "./close-BYyk_y45.js";
const THAI_MOBILE_LENGTH = 10;
const COUNTRY_CODE = "66";
const SEPARATOR = "-";
const GROUP_ENDS = [3, 6];
function toDigits(text) {
  return text.replace(/\D/g, "");
}
function normalizeThaiMobile(text) {
  const digits = toDigits(text);
  const national = digits.startsWith(COUNTRY_CODE) && digits.length > THAI_MOBILE_LENGTH ? `0${digits.slice(COUNTRY_CODE.length)}` : digits;
  return national.slice(0, THAI_MOBILE_LENGTH);
}
function formatThaiMobile(digits) {
  const [first, second] = GROUP_ENDS;
  return [digits.slice(0, first), digits.slice(first, second), digits.slice(second)].filter((group) => group !== "").join(SEPARATOR);
}
function caretIndexAfterDigits(formatted, digitCount) {
  if (digitCount <= 0) return 0;
  let seen = 0;
  for (let index = 0; index < formatted.length; index += 1) {
    if (formatted[index] !== SEPARATOR) seen += 1;
    if (seen === digitCount) return index + 1;
  }
  return formatted.length;
}
function TelInput({
  value,
  defaultValue = "",
  onValueChange,
  size = "lg",
  invalid = false,
  errorMessage,
  className,
  disabled,
  id,
  ref,
  ...props
}) {
  const autoId = reactExports.useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;
  const isInvalid = invalid || Boolean(errorMessage);
  const [digits, setDigits] = useControllableState({
    value: value === void 0 ? void 0 : normalizeThaiMobile(value),
    defaultValue: normalizeThaiMobile(defaultValue),
    onChange: onValueChange
  });
  const formatted = formatThaiMobile(digits);
  const inputRef = reactExports.useRef(null);
  const pendingCaretDigits = reactExports.useRef(null);
  reactExports.useLayoutEffect(() => {
    const pending = pendingCaretDigits.current;
    pendingCaretDigits.current = null;
    const input = inputRef.current;
    if (pending === null || !input || document.activeElement !== input) return;
    const caret = caretIndexAfterDigits(formatted, pending);
    input.setSelectionRange(caret, caret);
  }, [formatted]);
  const handleChange = (event) => {
    const raw = event.target.value;
    const caret = event.target.selectionStart ?? raw.length;
    const digitsBeforeCaret = toDigits(raw.slice(0, caret)).length;
    const removedOnlySeparator = toDigits(raw) === digits && raw.length < formatted.length;
    const next = removedOnlySeparator ? digits.slice(0, Math.max(digitsBeforeCaret - 1, 0)) + digits.slice(digitsBeforeCaret) : normalizeThaiMobile(raw);
    pendingCaretDigits.current = removedOnlySeparator ? Math.max(digitsBeforeCaret - 1, 0) : Math.min(digitsBeforeCaret, next.length);
    setDigits(next);
  };
  const setRefs = (node) => {
    inputRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("fs:flex fs:w-full fs:flex-col fs:gap-s-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldFrame, { size, invalid: isInvalid, disabled, className: "fs:gap-s-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneIcon, { className: "fs:text-ink" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ...props,
          ref: setRefs,
          id: inputId,
          type: "tel",
          inputMode: "tel",
          autoComplete: "tel-national",
          value: formatted,
          disabled,
          "aria-invalid": isInvalid || void 0,
          "aria-describedby": joinIds(props["aria-describedby"], errorMessage && messageId),
          onChange: handleChange,
          className: "fs:m-0 fs:min-w-0 fs:flex-1 fs:appearance-none fs:border-0 fs:bg-transparent fs:p-0 fs:font-sans fs:text-body-3 fs:text-inherit fs:outline-none fs:placeholder:text-muted fs:disabled:cursor-not-allowed"
        }
      )
    ] }),
    errorMessage ? /* @__PURE__ */ jsxRuntimeExports.jsx(FieldMessage, { id: messageId, tone: "error", children: errorMessage }) : null
  ] });
}
TelInput.__docgenInfo = { "description": "Thai mobile number field. Shows `0XX-XXX-XXXX`, opens the phone keypad, and reports plain\ndigits. A pasted `+66` prefix is converted to `0`.", "methods": [], "displayName": "TelInput", "props": { "value": { "required": false, "tsType": { "name": "string" }, "description": "Digits only, for example `0801234567`. The field displays `080-123-4567`." }, "defaultValue": { "required": false, "tsType": { "name": "string" }, "description": "", "defaultValue": { "value": "''", "computed": false } }, "onValueChange": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(digits: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "digits" }], "return": { "name": "void" } } }, "description": "Called with the digits (no dashes, at most 10) on every change." }, "size": { "required": false, "tsType": { "name": "FieldSize" }, "description": "Figma has a single 56px size; `xl` is offered for layouts that pair it with 64px fields.", "defaultValue": { "value": "'lg'", "computed": false } }, "invalid": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "errorMessage": { "required": false, "tsType": { "name": "string" }, "description": "Error text under the field. Setting it also marks the field invalid." } }, "composes": ["Omit"] };
const meta = {
  title: "Inputs/TelInput",
  component: TelInput,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1099-29928"
    }
  },
  args: {
    placeholder: "กรอกเบอร์มือถือ",
    "aria-label": "เบอร์มือถือ",
    size: "lg"
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
    defaultValue: "0801234567"
  }
};
const Typing = {
  args: {
    defaultValue: "0801234567"
  },
  play: ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
};
const Error = {
  args: {
    defaultValue: "0801234567",
    errorMessage: "เบอร์มือถือไม่ถูกต้อง"
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
function EmitsDigitsDemo(props) {
  const [digits, setDigits] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelInput, { ...props, value: digits, onValueChange: setDigits }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
      "value: ",
      digits || "(empty)"
    ] })
  ] });
}
const EmitsDigits = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmitsDigitsDemo, { ...args })
};
const AllSizesAndStates = {
  parameters: {
    wide: true
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 360px)",
    gap: 24
  }, children: ["lg", "xl"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelInput, { ...args, size, "aria-label": "Default" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelInput, { ...args, size, "aria-label": "Filled", defaultValue: "0801234567" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelInput, { ...args, size, "aria-label": "Error", defaultValue: "0801234567", errorMessage: "เบอร์มือถือไม่ถูกต้อง" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelInput, { ...args, size, "aria-label": "Disabled", disabled: true })
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
      originalSource: "{\n  args: {\n    defaultValue: '0801234567'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Typing.parameters = {
  ...Typing.parameters,
  docs: {
    ...Typing.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '0801234567'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    canvasElement.querySelector('input')?.focus();\n  }\n}",
      ...Typing.parameters?.docs?.source
    },
    description: {
      story: "Click into the field to see the mint border; the display formats as you type.",
      ...Typing.parameters?.docs?.description
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultValue: '0801234567',\n    errorMessage: 'เบอร์มือถือไม่ถูกต้อง'\n  }\n}",
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
EmitsDigits.parameters = {
  ...EmitsDigits.parameters,
  docs: {
    ...EmitsDigits.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <EmitsDigitsDemo {...args} />\n}",
      ...EmitsDigits.parameters?.docs?.source
    }
  }
};
AllSizesAndStates.parameters = {
  ...AllSizesAndStates.parameters,
  docs: {
    ...AllSizesAndStates.parameters?.docs,
    source: {
      originalSource: `{
  parameters: {
    wide: true
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 360px)',
    gap: 24
  }}>
      {(['lg', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
          <TelInput {...args} size={size} aria-label="Default" />
          <TelInput {...args} size={size} aria-label="Filled" defaultValue="0801234567" />
          <TelInput {...args} size={size} aria-label="Error" defaultValue="0801234567" errorMessage="เบอร์มือถือไม่ถูกต้อง" />
          <TelInput {...args} size={size} aria-label="Disabled" disabled />
        </div>)}
    </div>
}`,
      ...AllSizesAndStates.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "Filled", "Typing", "Error", "Disabled", "EmitsDigits", "AllSizesAndStates"];
export {
  AllSizesAndStates,
  Default,
  Disabled,
  EmitsDigits,
  Error,
  Filled,
  Typing,
  __namedExportsOrder,
  meta as default
};
