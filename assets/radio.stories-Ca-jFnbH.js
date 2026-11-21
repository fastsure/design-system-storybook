import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { a as useControllableState, c as composeEventHandlers } from "./index-C3tZBoHN.js";
import { u as useComposedRefs } from "./index-CthloIl8.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as createRovingFocusGroupScope, R as RovingFocusGroup, a as RovingFocusGroupItem } from "./index-C8AuNBI3.js";
import { u as useDirection } from "./index-BhINkQjI.js";
import { u as useSize } from "./index-Chc9Z_o1.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-COvgDa9e.js";
import "./index-kBfGp3iT.js";
import "./index-B6QV7ban.js";
import "./index-DvlYfcwf.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProviderImpl, useRadioContext] = createRadioContext(RADIO_NAME);
function RadioProvider(props) {
  const {
    __scopeRadio,
    checked = false,
    children,
    disabled,
    form,
    name,
    onCheck,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const [userClick, setUserClick] = reactExports.useState(null);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    required,
    name,
    form,
    value,
    control,
    setControl,
    userClick,
    onUserClick: setUserClick,
    isFormControl,
    bubbleInput,
    setBubbleInput,
    onCheck: /* @__PURE__ */ __name(() => onCheck?.(), "onCheck")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioProviderImpl, { scope: __scopeRadio, ...context, children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children });
}
__name(RadioProvider, "RadioProvider");
var TRIGGER_NAME = "RadioTrigger";
var RadioTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function RadioTrigger2({ __scopeRadio, onClick, ...radioProps }, forwardedRef) {
    const {
      checked,
      disabled,
      value,
      setControl,
      onCheck,
      onUserClick,
      isFormControl,
      bubbleInput
    } = useRadioContext(TRIGGER_NAME, __scopeRadio);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": checked,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...radioProps,
        ref: composedRefs,
        onClick: composeEventHandlers(onClick, (event) => {
          const hasConsumerStoppedPropagation = event.isPropagationStopped();
          if (!checked) {
            onUserClick({ hasConsumerStoppedPropagation });
            onCheck();
          }
          if (bubbleInput && isFormControl) {
            if (!hasConsumerStoppedPropagation) {
              event.stopPropagation();
            }
          }
        })
      }
    );
  }, "RadioTrigger")
);
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function RadioIndicator2(props, forwardedRef) {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }, "RadioIndicator")
);
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function RadioBubbleInput2({ __scopeRadio, onClick, ...props }, forwardedRef) {
    const {
      control,
      checked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput,
      userClick
    } = useRadioContext(BUBBLE_INPUT_NAME, __scopeRadio);
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
      if (!setChecked) return;
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
        const isPendingUserChange = checked && pendingUserClick !== null;
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
        type: "radio",
        "aria-hidden": true,
        defaultChecked: defaultCheckedRef.current,
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
  }, "RadioBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
__name(getState, "getState");
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function RadioGroup2(props, forwardedRef) {
    const {
      __scopeRadioGroup,
      name,
      form,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    const [control, setControl] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialValueRef = reactExports.useRef(value);
    reactExports.useEffect(() => {
      const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
      if (associatedForm instanceof HTMLFormElement) {
        const reset = /* @__PURE__ */ __name(() => setValue(initialValueRef.current), "reset");
        associatedForm.addEventListener("reset", reset);
        return () => associatedForm.removeEventListener("reset", reset);
      }
    }, [control, form, setValue]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        form,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RovingFocusGroup,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: composedRefs
              }
            )
          }
        )
      }
    );
  }, "RadioGroup")
);
var ITEM_PROVIDER_NAME = "RadioGroupItemProvider";
var ITEM_TRIGGER_NAME = "RadioGroupItemTrigger";
function RadioGroupItemProvider(props) {
  const {
    __scopeRadioGroup,
    value,
    disabled,
    children,
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const context = useRadioGroupContext(ITEM_PROVIDER_NAME, __scopeRadioGroup);
  const radioScope = useRadioScope(__scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioProvider,
    {
      ...radioScope,
      checked: context.value === value,
      disabled: isDisabled,
      required: context.required,
      name: context.name,
      form: context.form,
      value,
      onCheck: () => context.onValueChange(value),
      internal_do_not_use_render,
      children
    }
  );
}
__name(RadioGroupItemProvider, "RadioGroupItemProvider");
var RadioGroupItemTrigger = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function RadioGroupItemTrigger2(props, forwardedRef) {
  const { __scopeRadioGroup, ...triggerProps } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = useRadioScope(__scopeRadioGroup);
  const { checked, disabled } = useRadioContext(ITEM_TRIGGER_NAME, radioScope.__scopeRadio);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const isArrowKeyPressedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      if (ARROW_KEYS.includes(event.key)) {
        isArrowKeyPressedRef.current = true;
      }
    }, "handleKeyDown");
    const handleKeyUp = /* @__PURE__ */ __name(() => isArrowKeyPressedRef.current = false, "handleKeyUp");
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusGroupItem,
    {
      asChild: true,
      ...rovingFocusGroupScope,
      focusable: !disabled,
      active: checked,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioTrigger,
        {
          ...radioScope,
          ...triggerProps,
          ref: composedRefs,
          onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
            if (event.key === "Enter") event.preventDefault();
          }),
          onFocus: composeEventHandlers(triggerProps.onFocus, () => {
            if (isArrowKeyPressedRef.current) {
              ref.current?.click();
            }
          })
        }
      )
    }
  );
}, "RadioGroupItemTrigger"));
var RadioGroupItem$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function RadioGroupItem2(props, forwardedRef) {
    const { __scopeRadioGroup, value, disabled, ...itemProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupItemProvider,
      {
        __scopeRadioGroup,
        value,
        disabled,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadioGroupItemTrigger,
            {
              ...itemProps,
              ref: forwardedRef,
              __scopeRadioGroup
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RadioGroupItemBubbleInput,
            {
              __scopeRadioGroup
            }
          )
        ] })
      }
    );
  }, "RadioGroupItem")
);
var RadioGroupItemBubbleInput = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function RadioGroupItemBubbleInput2(props, forwardedRef) {
  const { __scopeRadioGroup, ...bubbleProps } = props;
  const radioScope = useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioBubbleInput, { ...radioScope, ...bubbleProps, ref: forwardedRef });
}, "RadioGroupItemBubbleInput"));
var RadioGroupIndicator = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function RadioGroupIndicator2(props, forwardedRef) {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }, "RadioGroupIndicator")
);
const LABEL_GAP = { md: "fs:gap-s-2", lg: "fs:gap-s-3" };
const LABEL_TEXT = { md: "fs:text-body-4", lg: "fs:text-body-3" };
const CIRCLE_CLASS = cn(
  "fs:box-border fs:inline-flex fs:size-icon-md fs:shrink-0 fs:cursor-pointer fs:items-center fs:justify-center",
  "fs:rounded-full fs:border-control fs:border-solid fs:border-gray-500 fs:bg-gray-0 fs:p-0",
  "fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
  "fs:data-[state=checked]:border-active fs:data-[state=checked]:bg-mint-500",
  "fs:disabled:cursor-not-allowed fs:disabled:border-gray-300 fs:disabled:bg-gray-100",
  "fs:disabled:data-[state=checked]:border-control-disabled-checked fs:disabled:data-[state=checked]:bg-control-disabled-checked"
);
const DOT_CLASS = cn(
  "fs:block fs:size-2 fs:rounded-full fs:bg-gray-0",
  "fs:group-disabled:bg-gray-600"
);
function RadioGroup({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup$1,
    {
      ref,
      className: cn("fs:grid fs:gap-s-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  label,
  size = "md",
  className,
  disabled,
  ref,
  ...props
}) {
  const hasLabel = label !== void 0 && label !== null && label !== false;
  const circle = /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroupItem$1,
    {
      ref,
      disabled,
      className: cn("fs:group", CIRCLE_CLASS, !hasLabel && className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupIndicator, { className: DOT_CLASS })
    }
  );
  if (!hasLabel) return circle;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      className: cn(
        "fs:inline-flex fs:items-center",
        LABEL_GAP[size],
        disabled ? "fs:cursor-not-allowed" : "fs:cursor-pointer",
        className
      ),
      children: [
        circle,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(LABEL_TEXT[size], disabled ? "fs:text-gray-600" : "fs:text-ink"), children: label })
      ]
    }
  );
}
RadioGroup.__docgenInfo = { "description": "Container for `RadioGroupItem`s, built on Radix RadioGroup (arrow keys move the selection).", "methods": [], "displayName": "RadioGroup" };
RadioGroupItem.__docgenInfo = { "description": "One radio of a `RadioGroup`; `value` is required.", "methods": [], "displayName": "RadioGroupItem", "props": { "label": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Text next to the circle. Without it only the circle renders, so pass `aria-label`." }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "@default 'md'", "defaultValue": { "value": "'md'", "computed": false } } }, "composes": ["Omit"] };
const meta = {
  title: "Controls/Radio",
  component: RadioGroup,
  args: {
    "aria-label": "Plan",
    defaultValue: "plus"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=629-11439"
    }
  }
};
const Default = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Basic" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Plus" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "pro", label: "Pro" })
  ] })
};
const Sizes = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gap: 24
  }, children: ["md", "lg"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, "aria-label": `Plan (${size})`, style: {
    display: "flex",
    gap: 24
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Label", size }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Label", size })
  ] }, size)) })
};
const DisabledItem = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Basic" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Plus" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "pro", label: "Pro (unavailable)", disabled: true })
  ] })
};
const DisabledGroup = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, disabled: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Basic" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Plus" })
  ] })
};
const LargeLabels = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Basic", size: "lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Plus", size: "lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "pro", label: "Pro", size: "lg" })
  ] })
};
function ControlledRadioGroup(args) {
  const [value, setValue] = reactExports.useState("basic");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "grid",
    gap: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { ...args, value, onValueChange: setValue, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "basic", label: "Basic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "plus", label: "Plus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "Selected: ",
      value
    ] })
  ] });
}
const Controlled = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ControlledRadioGroup, { ...args })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <RadioGroup {...args}>\n      <RadioGroupItem value="basic" label="Basic" />\n      <RadioGroupItem value="plus" label="Plus" />\n      <RadioGroupItem value="pro" label="Pro" />\n    </RadioGroup>\n}',
      ...Default.parameters?.docs?.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...Sizes.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {(['md', 'lg'] as const).map(size => <RadioGroup key={size} {...args} aria-label={\`Plan (\${size})\`} style={{
      display: 'flex',
      gap: 24
    }}>
          <RadioGroupItem value="basic" label="Label" size={size} />
          <RadioGroupItem value="plus" label="Label" size={size} />
        </RadioGroup>)}
    </div>
}`,
      ...Sizes.parameters?.docs?.source
    },
    description: {
      story: "Figma sizes: `md` (14px label, default) and `lg` (16px label). The circle is 18px in both.",
      ...Sizes.parameters?.docs?.description
    }
  }
};
DisabledItem.parameters = {
  ...DisabledItem.parameters,
  docs: {
    ...DisabledItem.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <RadioGroup {...args}>\n      <RadioGroupItem value="basic" label="Basic" />\n      <RadioGroupItem value="plus" label="Plus" />\n      <RadioGroupItem value="pro" label="Pro (unavailable)" disabled />\n    </RadioGroup>\n}',
      ...DisabledItem.parameters?.docs?.source
    }
  }
};
DisabledGroup.parameters = {
  ...DisabledGroup.parameters,
  docs: {
    ...DisabledGroup.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <RadioGroup {...args} disabled>\n      <RadioGroupItem value="basic" label="Basic" />\n      <RadioGroupItem value="plus" label="Plus" />\n    </RadioGroup>\n}',
      ...DisabledGroup.parameters?.docs?.source
    }
  }
};
LargeLabels.parameters = {
  ...LargeLabels.parameters,
  docs: {
    ...LargeLabels.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <RadioGroup {...args}>\n      <RadioGroupItem value="basic" label="Basic" size="lg" />\n      <RadioGroupItem value="plus" label="Plus" size="lg" />\n      <RadioGroupItem value="pro" label="Pro" size="lg" />\n    </RadioGroup>\n}',
      ...LargeLabels.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => <ControlledRadioGroup {...args} />\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default", "Sizes", "DisabledItem", "DisabledGroup", "LargeLabels", "Controlled"];
export {
  Controlled,
  Default,
  DisabledGroup,
  DisabledItem,
  LargeLabels,
  Sizes,
  __namedExportsOrder,
  meta as default
};
