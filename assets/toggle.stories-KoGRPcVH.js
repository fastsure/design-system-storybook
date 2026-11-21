import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as composeEventHandlers, a as useControllableState } from "./index-C3tZBoHN.js";
import { u as useComposedRefs } from "./index-CthloIl8.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { u as useSize } from "./index-Chc9Z_o1.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-DvlYfcwf.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProviderImpl, useSwitchContext] = createSwitchContext(SWITCH_NAME);
function SwitchProvider(props) {
  const {
    __scopeSwitch,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: SWITCH_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const [userClick, setUserClick] = reactExports.useState(null);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    setChecked,
    disabled,
    control,
    setControl,
    name,
    form,
    value,
    userClick,
    onUserClick: setUserClick,
    required,
    defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchProviderImpl, { scope: __scopeSwitch, ...context, children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children });
}
__name(SwitchProvider, "SwitchProvider");
var TRIGGER_NAME = "SwitchTrigger";
var SwitchTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function SwitchTrigger2({ __scopeSwitch, onClick, ...switchProps }, forwardedRef) {
    const {
      control,
      form,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      onUserClick,
      isFormControl,
      bubbleInput
    } = useSwitchContext(TRIGGER_NAME, __scopeSwitch);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.form;
      if (associatedForm instanceof HTMLFormElement) {
        const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
        associatedForm.addEventListener("reset", reset);
        return () => associatedForm.removeEventListener("reset", reset);
      }
    }, [control, form, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...switchProps,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          const hasConsumerStoppedPropagation = event.isPropagationStopped();
          onUserClick({ requestedChecked: !checked, hasConsumerStoppedPropagation });
          setChecked((prevChecked) => !prevChecked);
          if (bubbleInput && isFormControl) {
            if (!hasConsumerStoppedPropagation) {
              event.stopPropagation();
            }
          }
        })
      }
    );
  }, "SwitchTrigger")
);
var Switch = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Switch2(props, forwardedRef) {
    const {
      __scopeSwitch,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchProvider,
      {
        __scopeSwitch,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchTrigger,
            {
              ...switchProps,
              ref: forwardedRef,
              __scopeSwitch
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchBubbleInput,
            {
              __scopeSwitch
            }
          )
        ] })
      }
    );
  }, "Switch")
);
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function SwitchThumb2(props, forwardedRef) {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }, "SwitchThumb")
);
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function SwitchBubbleInput2({ __scopeSwitch, onClick, ...props }, forwardedRef) {
    const {
      control,
      userClick,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useSwitchContext(BUBBLE_INPUT_NAME, __scopeSwitch);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const controlSize = useSize(control);
    const shouldStopClickPropagationRef = reactExports.useRef(false);
    const prevCheckedRef = reactExports.useRef(checked);
    const handledUserClickRef = reactExports.useRef(userClick);
    const pendingUserClickRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (!setChecked) {
        return;
      }
      const checkedChanged = prevCheckedRef.current !== checked;
      prevCheckedRef.current = checked;
      const isNewUserClick = userClick !== null && userClick !== handledUserClickRef.current;
      handledUserClickRef.current = userClick;
      if (isNewUserClick) {
        pendingUserClickRef.current = checkedChanged ? null : userClick;
        if (checkedChanged) {
          setChecked.call(input, checked);
        }
        input.dispatchEvent(
          new Event("click", { bubbles: !userClick.hasConsumerStoppedPropagation })
        );
      } else if (checkedChanged) {
        const pendingUserClick = pendingUserClickRef.current;
        pendingUserClickRef.current = null;
        const isPendingUserChange = pendingUserClick?.requestedChecked === checked;
        shouldStopClickPropagationRef.current = true;
        setChecked.call(input, checked);
        input.dispatchEvent(
          new Event("click", {
            bubbles: !(isPendingUserChange && pendingUserClick.hasConsumerStoppedPropagation)
          })
        );
        shouldStopClickPropagationRef.current = false;
      }
    }, [bubbleInput, checked, userClick]);
    const defaultCheckedRef = reactExports.useRef(checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          if (shouldStopClickPropagationRef.current) {
            event.stopPropagation();
          }
        }),
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "SwitchBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
__name(getState, "getState");
const TRACK_SIZE = {
  lg: "fs:h-6 fs:w-12",
  md: "fs:h-5 fs:w-10"
};
const THUMB_SIZE = {
  lg: "fs:size-5 fs:data-[state=checked]:translate-x-6.5",
  md: "fs:size-4 fs:data-[state=checked]:translate-x-5.5"
};
function Toggle({ size = "lg", className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Switch,
    {
      ref,
      className: cn(
        "fs:relative fs:box-border fs:inline-flex fs:shrink-0 fs:cursor-pointer fs:items-center fs:rounded-full fs:border-0 fs:bg-track-off fs:p-0",
        "fs:transition-colors fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
        "fs:data-[state=checked]:bg-accent",
        "fs:disabled:cursor-not-allowed fs:disabled:data-[state=checked]:bg-orange-200",
        TRACK_SIZE[size],
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchThumb,
        {
          className: cn(
            "fs:pointer-events-none fs:block fs:translate-x-0.5 fs:rounded-full fs:bg-gray-0 fs:transition-transform",
            "fs:data-disabled:data-[state=unchecked]:bg-gray-300",
            THUMB_SIZE[size]
          )
        }
      )
    }
  );
}
Toggle.__docgenInfo = { "description": "On / off switch built on Radix Switch. Name it with a `<label htmlFor>` (pass `id`) or\n`aria-label`; it works controlled (`checked`) or uncontrolled (`defaultChecked`).", "methods": [], "displayName": "Toggle", "props": { "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "@default 'lg'", "defaultValue": { "value": "'lg'", "computed": false } } }, "composes": ["ComponentProps"] };
const meta = {
  title: "Controls/Toggle",
  component: Toggle,
  args: {
    "aria-label": "Notifications"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["lg", "md"]
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=142-2789"
    }
  }
};
const Off = {};
const On = {
  args: {
    defaultChecked: true
  }
};
const DisabledOff = {
  args: {
    disabled: true
  }
};
const DisabledOn = {
  args: {
    disabled: true,
    defaultChecked: true
  }
};
const Sizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: 24
  }, children: ["lg", "md"].map((size) => [{}, {
    defaultChecked: true
  }, {
    disabled: true
  }, {
    disabled: true,
    defaultChecked: true
  }].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { ...args, size, ...state }, `${size}-${index}`))) })
};
const WithLabel = {
  args: {
    id: "story-toggle",
    "aria-label": void 0
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { ...args }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "story-toggle", children: "Push notifications" })
  ] })
};
function ControlledToggle(args) {
  const [on, setOn] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { ...args, checked: on, onCheckedChange: setOn }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: on ? "On" : "Off" })
  ] });
}
const Controlled = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledToggle, { ...args })
};
Off.parameters = {
  ...Off.parameters,
  docs: {
    ...Off.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Off.parameters?.docs?.source
    }
  }
};
On.parameters = {
  ...On.parameters,
  docs: {
    ...On.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultChecked: true\n  }\n}",
      ...On.parameters?.docs?.source
    }
  }
};
DisabledOff.parameters = {
  ...DisabledOff.parameters,
  docs: {
    ...DisabledOff.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...DisabledOff.parameters?.docs?.source
    }
  }
};
DisabledOn.parameters = {
  ...DisabledOn.parameters,
  docs: {
    ...DisabledOn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    defaultChecked: true\n  }\n}",
      ...DisabledOn.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(4, auto)',\n    gap: 24\n  }}>\n      {(['lg', 'md'] as const).map(size => [{}, {\n      defaultChecked: true\n    }, {\n      disabled: true\n    }, {\n      disabled: true,\n      defaultChecked: true\n    }].map((state, index) => <Toggle key={`${size}-${index}`} {...args} size={size} {...state} />))}\n    </div>\n}",
      ...Sizes.parameters?.docs?.source
    },
    description: {
      story: "Figma sizes: `lg` is 48 x 24 (default), `md` is 40 x 20.",
      ...Sizes.parameters?.docs?.description
    }
  }
};
WithLabel.parameters = {
  ...WithLabel.parameters,
  docs: {
    ...WithLabel.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    id: 'story-toggle',
    'aria-label': undefined
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      <Toggle {...args} />
      <label htmlFor="story-toggle">Push notifications</label>
    </div>
}`,
      ...WithLabel.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <ControlledToggle {...args} />\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Off", "On", "DisabledOff", "DisabledOn", "Sizes", "WithLabel", "Controlled"];
export {
  Controlled,
  DisabledOff,
  DisabledOn,
  Off,
  On,
  Sizes,
  WithLabel,
  __namedExportsOrder,
  meta as default
};
