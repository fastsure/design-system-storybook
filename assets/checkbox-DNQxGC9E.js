import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { u as useComposedRefs } from "./index-CthloIl8.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { c as composeEventHandlers, a as useControllableState } from "./index-C3tZBoHN.js";
import { u as useSize } from "./index-Chc9Z_o1.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as cn } from "./cn-JQCre-CP.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
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
    caller: CHECKBOX_NAME
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
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    userClick,
    onUserClick: setUserClick,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
__name(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      onUserClick,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control?.form;
      if (form) {
        const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          const hasConsumerStoppedPropagation = event.isPropagationStopped();
          onUserClick({
            requestedChecked: isIndeterminate(checked) ? true : !checked,
            hasConsumerStoppedPropagation
          });
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            if (!hasConsumerStoppedPropagation) event.stopPropagation();
          }
        })
      }
    );
  }, "CheckboxTrigger")
);
var Checkbox$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Checkbox2(props, forwardedRef) {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
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
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }, "Checkbox")
);
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxIndicator2(props, forwardedRef) {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
);
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
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
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
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
          input.indeterminate = isIndeterminate(checked);
          setChecked.call(input, isIndeterminate(checked) ? false : checked);
        }
        input.dispatchEvent(
          new Event("click", { bubbles: !userClick.hasConsumerStoppedPropagation })
        );
      } else if (checkedChanged) {
        const pendingUserClick = pendingUserClickRef.current;
        pendingUserClickRef.current = null;
        const isPendingUserChange = pendingUserClick?.requestedChecked === checked;
        shouldStopClickPropagationRef.current = true;
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(
          new Event("click", {
            bubbles: !(isPendingUserChange && pendingUserClick.hasConsumerStoppedPropagation)
          })
        );
        shouldStopClickPropagationRef.current = false;
      }
    }, [bubbleInput, checked, userClick]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
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
  }, "CheckboxBubbleInput")
);
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name(isIndeterminate, "isIndeterminate");
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name(getState, "getState");
const LABEL_GAP = { md: "fs:gap-s-2", lg: "fs:gap-s-3" };
const LABEL_TEXT = { md: "fs:text-body-4", lg: "fs:text-body-3" };
const BOX_CLASS = cn(
  "fs:group fs:box-border fs:inline-flex fs:size-icon-md fs:shrink-0 fs:cursor-pointer fs:items-center fs:justify-center",
  "fs:rounded-xs fs:border-control fs:border-solid fs:border-gray-500 fs:bg-gray-0 fs:p-0 fs:text-gray-0",
  "fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
  "fs:data-[state=checked]:border-active fs:data-[state=checked]:bg-mint-500",
  "fs:data-[state=indeterminate]:border-active fs:data-[state=indeterminate]:bg-mint-500",
  "fs:disabled:cursor-not-allowed fs:disabled:border-gray-300 fs:disabled:bg-gray-100 fs:disabled:text-gray-600",
  "fs:disabled:data-[state=checked]:border-gray-300 fs:disabled:data-[state=checked]:bg-gray-300",
  "fs:disabled:data-[state=indeterminate]:border-gray-300 fs:disabled:data-[state=indeterminate]:bg-gray-300"
);
function CheckMark(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 18 18",
      fill: "currentColor",
      className: "fs:size-full fs:group-data-[state=indeterminate]:hidden",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.4698 3.96985C14.7627 3.67702 15.2375 3.67698 15.5303 3.96985C15.823 4.26273 15.8231 4.73755 15.5303 5.03039L7.28035 13.2804C6.98751 13.5732 6.51271 13.5731 6.2198 13.2804L2.4698 9.53039C2.17691 9.2375 2.17691 8.76274 2.4698 8.46985C2.7627 8.17702 3.23748 8.17698 3.53035 8.46985L6.75007 11.6896L14.4698 3.96985Z" })
    }
  );
}
function DashMark(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 18 18",
      fill: "currentColor",
      className: "fs:hidden fs:size-full fs:group-data-[state=indeterminate]:block",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 8C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H13Z" })
    }
  );
}
function Checkbox({
  label,
  size = "md",
  className,
  disabled,
  ref,
  ...props
}) {
  const hasLabel = label !== void 0 && label !== null && label !== false;
  const box = /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      ref,
      disabled,
      className: cn(BOX_CLASS, !hasLabel && className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxIndicator, { className: "fs:flex fs:size-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckMark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashMark, {})
      ] })
    }
  );
  if (!hasLabel) return box;
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
        box,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(LABEL_TEXT[size], disabled ? "fs:text-gray-600" : "fs:text-ink"), children: label })
      ]
    }
  );
}
Checkbox.__docgenInfo = { "description": "Checkbox built on Radix Checkbox. `checked` is `true`, `false` or `'indeterminate'`; use\n`checked` + `onCheckedChange` to control it or `defaultChecked` to leave it uncontrolled.", "methods": [], "displayName": "Checkbox", "props": { "label": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Text next to the box. Without it only the box renders, so pass `aria-label`." }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "@default 'md'", "defaultValue": { "value": "'md'", "computed": false } } }, "composes": ["Omit"] };
export {
  Checkbox as C
};
