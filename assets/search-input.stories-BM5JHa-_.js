import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { a as SearchIcon, C as ClearIcon } from "./icons-v2G8WFHO.js";
import { u as useControllableState } from "./use-controllable-state-BElpv87d.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DvlYfcwf.js";
import "./chevron-left-BWW28d3Y.js";
import "./chevron-right-DiVTNE_B.js";
import "./close-BYyk_y45.js";
function SearchInput({
  value,
  defaultValue = "",
  onValueChange,
  onClear,
  clearLabel = "Clear",
  className,
  disabled,
  onKeyDown,
  ref,
  ...props
}) {
  const [text, setText] = useControllableState({ value, defaultValue, onChange: onValueChange });
  const inputRef = reactExports.useRef(null);
  const canClear = text !== "" && !disabled;
  const clear = () => {
    setText("");
    onClear?.();
    inputRef.current?.focus();
  };
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.key === "Escape" && canClear) {
      event.preventDefault();
      clear();
    }
  };
  const setRefs = (node) => {
    inputRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-disabled": disabled ? "" : void 0,
      className: cn(
        "fs:box-border fs:flex fs:h-control-md fs:w-full fs:items-center fs:gap-s-3 fs:rounded-button fs:border fs:border-solid fs:p-s-3 fs:font-sans",
        disabled ? "fs:cursor-not-allowed fs:border-line fs:bg-surface-muted fs:text-muted" : "fs:border-search-border fs:bg-search-surface fs:text-ink fs:hover:bg-search-surface-hover fs:focus-within:border-active fs:focus-within:bg-search-surface-hover fs:focus-within:shadow-focus",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, { className: "fs:text-ink" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: setRefs,
            type: "search",
            value: text,
            disabled,
            onChange: (event) => setText(event.target.value),
            onKeyDown: handleKeyDown,
            className: "fs:m-0 fs:min-w-0 fs:flex-1 fs:appearance-none fs:border-0 fs:bg-transparent fs:p-0 fs:font-sans fs:text-body-4 fs:text-inherit fs:outline-none fs:placeholder:text-search-placeholder fs:disabled:cursor-not-allowed fs:[&::-webkit-search-cancel-button]:appearance-none",
            ...props
          }
        ),
        canClear ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": clearLabel,
            onClick: clear,
            className: "fs:m-0 fs:flex fs:shrink-0 fs:cursor-pointer fs:rounded-full fs:border-0 fs:bg-transparent fs:p-0 fs:text-muted fs:outline-none fs:hover:text-ink fs:focus-visible:shadow-focus",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClearIcon, {})
          }
        ) : null
      ]
    }
  );
}
SearchInput.__docgenInfo = { "description": 'Search field: search icon, text and a clear button that appears once there is text.\nEscape also clears. Wrap it in a `role="search"` landmark when it filters a page.', "methods": [], "displayName": "SearchInput", "props": { "value": { "required": false, "tsType": { "name": "string" }, "description": "" }, "defaultValue": { "required": false, "tsType": { "name": "string" }, "description": "", "defaultValue": { "value": "''", "computed": false } }, "onValueChange": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "value" }], "return": { "name": "void" } } }, "description": "Called with the new text on every change, including when it is cleared." }, "onClear": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "Called after the clear button (or Escape) empties the field." }, "clearLabel": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the clear button. Pass a translated string.", "defaultValue": { "value": "'Clear'", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Inputs/SearchInput",
  component: SearchInput,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=214-4867"
    }
  },
  args: {
    placeholder: "ค้นหา",
    "aria-label": "ค้นหา",
    clearLabel: "ล้างคำค้นหา"
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 360
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const Filled = {
  args: {
    defaultValue: "ประกันรถยนต์"
  }
};
const Typing = {
  play: ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const AllStates = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { ...args, "aria-label": "Default" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { ...args, "aria-label": "Filled", defaultValue: "ประกันรถยนต์" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchInput, { ...args, "aria-label": "Disabled", disabled: true })
  ] })
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
      originalSource: "{\n  args: {\n    defaultValue: 'ประกันรถยนต์'\n  }\n}",
      ...Filled.parameters?.docs?.source
    }
  }
};
Typing.parameters = {
  ...Typing.parameters,
  docs: {
    ...Typing.parameters?.docs,
    source: {
      originalSource: "{\n  play: ({\n    canvasElement\n  }) => {\n    canvasElement.querySelector('input')?.focus();\n  }\n}",
      ...Typing.parameters?.docs?.source
    },
    description: {
      story: "Click into the field to see the mint border; typing shows the clear button.",
      ...Typing.parameters?.docs?.description
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
AllStates.parameters = {
  ...AllStates.parameters,
  docs: {
    ...AllStates.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <SearchInput {...args} aria-label="Default" />
      <SearchInput {...args} aria-label="Filled" defaultValue="ประกันรถยนต์" />
      <SearchInput {...args} aria-label="Disabled" disabled />
    </div>
}`,
      ...AllStates.parameters?.docs?.source
    },
    description: {
      story: "Hover is a real CSS state: point at the field.",
      ...AllStates.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Default", "Filled", "Typing", "Disabled", "AllStates"];
export {
  AllStates,
  Default,
  Disabled,
  Filled,
  Typing,
  __namedExportsOrder,
  meta as default
};
