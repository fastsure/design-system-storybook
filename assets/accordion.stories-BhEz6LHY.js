import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { a as createCollection2 } from "./index-COvgDa9e.js";
import { u as useComposedRefs } from "./index-CthloIl8.js";
import { a as useControllableState, c as composeEventHandlers, u as useLayoutEffect2 } from "./index-C3tZBoHN.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { u as useId } from "./index-kBfGp3iT.js";
import { u as useDirection } from "./index-BhINkQjI.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-DvlYfcwf.js";
var DEFAULT_SIZE$1 = 24;
var VIEW_BOX$1 = "0 0 24 24";
function IconBase$1({
  size = DEFAULT_SIZE$1,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX$1,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function MinusIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase$1, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M19 11C19.55 11 20 11.448 20 12C20 12.552 19.55 13 19 13H5C4.45 13 4 12.552 4 12C4 11.448 4.45 11 5 11H19Z",
      fill: "currentColor"
    }
  ) });
}
var DEFAULT_SIZE = 24;
var VIEW_BOX = "0 0 24 24";
function IconBase({
  size = DEFAULT_SIZE,
  title,
  children,
  ...props
}) {
  const accessibility = title ? { role: "img" } : { "aria-hidden": true };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: VIEW_BOX,
      fill: "none",
      focusable: "false",
      ...accessibility,
      ...props,
      children: [
        title ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: title }) : null,
        children
      ]
    }
  );
}
function PlusIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconBase, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M12 4C12.552 4 13 4.448 13 5V11H19C19.552 11 20 11.448 20 12C20 12.552 19.552 13 19 13H13V19C13 19.552 12.552 20 12 20C11.448 20 11 19.552 11 19V13H5C4.448 13 4 12.552 4 12C4 11.448 4.448 11 5 11H11V5C11 4.448 11.448 4 12 4Z",
      fill: "currentColor"
    }
  ) });
}
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$1(function Collapsible2(props, forwardedRef) {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }, "Collapsible")
);
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$1(function CollapsibleTrigger2(props, forwardedRef) {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.open ? context.contentId : void 0,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
);
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name$1(function CollapsibleContent2(props, forwardedRef) {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }, "CollapsibleContent")
);
var CollapsibleContentImpl = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleContentImpl2(props, forwardedRef) {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
}, "CollapsibleContentImpl"));
function getState$1(open) {
  return open ? "open" : "closed";
}
__name$1(getState$1, "getState");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var AccordionType = {
  Multiple: "multiple"
};
var Orientation = {
  Vertical: "vertical",
  Horizontal: "horizontal"
};
var Direction = {
  LTR: "ltr"
};
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, { useGetCollection, createCollectionScope }] = createCollection2(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Accordion2(props, forwardedRef) {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === AccordionType.Multiple ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }, "Accordion")
);
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function AccordionImplSingle2(props, forwardedRef) {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = /* @__PURE__ */ __name(() => {
      }, "onValueChange"),
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: reactExports.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: reactExports.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }, "AccordionImplSingle")
);
var AccordionImplMultiple = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function AccordionImplMultiple2(props, forwardedRef) {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
}, "AccordionImplMultiple"));
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function AccordionImpl2(props, forwardedRef) {
    const {
      __scopeAccordion,
      disabled,
      dir,
      orientation = Orientation.Vertical,
      ...accordionProps
    } = props;
    const accordionRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getCollection = useGetCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === Direction.LTR;
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) {
        return;
      }
      const collection = getCollection();
      const target = event.target;
      const triggerCollection = collection.filter(([, item]) => !item.element.disabled);
      const triggerIndex = triggerCollection.findIndex(([, item]) => item.element === target);
      const triggerCount = triggerCollection.size;
      if (triggerIndex === -1) {
        return;
      }
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = /* @__PURE__ */ __name(() => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      }, "moveNext");
      const movePrev = /* @__PURE__ */ __name(() => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      }, "movePrev");
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === Orientation.Horizontal) {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === Orientation.Vertical) {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === Orientation.Horizontal) {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === Orientation.Vertical) {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection.at(clampedIndex)?.element.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }, "AccordionImpl")
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function AccordionItem2(props, forwardedRef) {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Collapsible,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }, "AccordionItem")
);
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function AccordionHeader2(props, forwardedRef) {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }, "AccordionHeader")
);
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function AccordionTrigger2(props, forwardedRef) {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleTrigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }, "AccordionTrigger")
);
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function AccordionContent2(props, forwardedRef) {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleContent,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }, "AccordionContent")
);
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
const AccordionSizeContext = reactExports.createContext("lg");
function Accordion({ size = "lg", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSizeContext, { value: size, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion$1, { ...props }) });
}
function AccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionItem$1,
    {
      className: cn("fs:border-0 fs:border-b fs:border-solid fs:border-line", className),
      ...props
    }
  );
}
const triggerSizeClasses = {
  lg: "fs:text-label-2",
  md: "fs:text-label-3"
};
function PlusMinusIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PlusIcon,
      {
        "data-slot": "accordion-plus",
        className: "fs:size-icon-lg fs:shrink-0 fs:in-data-[state=open]:hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MinusIcon,
      {
        "data-slot": "accordion-minus",
        className: "fs:hidden fs:size-icon-lg fs:shrink-0 fs:in-data-[state=open]:block"
      }
    )
  ] });
}
function AccordionTrigger({ className, children, ...props }) {
  const size = reactExports.use(AccordionSizeContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionHeader, { className: "fs:m-0 fs:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AccordionTrigger$1,
    {
      className: cn(
        "fs:box-border fs:flex fs:w-full fs:cursor-pointer fs:items-center fs:justify-between fs:gap-s-4 fs:border-0 fs:bg-transparent fs:p-0 fs:py-s-4 fs:text-left fs:text-brand-light",
        "fs:focus-visible:shadow-focus fs:focus-visible:outline-none",
        triggerSizeClasses[size],
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(PlusMinusIcon, {})
      ]
    }
  ) });
}
const contentSizeClasses = {
  lg: "fs:text-body-3",
  md: "fs:text-body-4"
};
function AccordionContent({ className, children, ...props }) {
  const size = reactExports.use(AccordionSizeContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent$1, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("fs:pb-s-4 fs:text-ink-soft", contentSizeClasses[size], className), children }) });
}
Accordion.__docgenInfo = { "description": "A stack of collapsible sections. Wraps Radix Accordion (`type` and `collapsible` as there).", "methods": [], "displayName": "Accordion", "props": { "size": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'md'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'md'" }] }, "description": "Figma `size`: `lg` (16px) or `md` (14px).", "defaultValue": { "value": "'lg'", "computed": false } }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "The `AccordionItem`s." } } };
AccordionItem.__docgenInfo = { "description": "One section: a trigger and its content, separated from the next by a line.", "methods": [], "displayName": "AccordionItem", "props": { "value": { "required": true, "tsType": { "name": "string" }, "description": "Unique id of the item. Matches the accordion's `value` / `defaultValue` when open." }, "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "Stops this item from being opened or closed." }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "An `AccordionTrigger` followed by an `AccordionContent`." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Extra classes for the item." } } };
AccordionTrigger.__docgenInfo = { "description": "The heading button of an item. Enter and Space toggle it; arrow keys move between items.", "methods": [], "displayName": "AccordionTrigger", "props": { "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "The heading text. The plus / minus icon is added after it." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Extra classes for the button." } } };
AccordionContent.__docgenInfo = { "description": "The collapsible panel of an item.", "methods": [], "displayName": "AccordionContent", "props": { "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "The panel body, shown when the item is open." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Extra classes for the body wrapper." }, "forceMount": { "required": false, "tsType": { "name": "literal", "value": "true" }, "description": "Keeps the panel in the DOM while closed. Needed to animate it with CSS or React." } } };
const meta = {
  title: "Content/Accordion",
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1848-40628"
    },
    docs: {
      description: {
        component: "Compose `Accordion` > `AccordionItem` > `AccordionTrigger` + `AccordionContent`. Behaviour comes from Radix Accordion, so every Radix prop (`type`, `collapsible`, `value`, `onValueChange`, `orientation`, ...) works as documented there."
      }
    }
  },
  argTypes: {
    type: {
      description: "Radix: `single` keeps one item open, `multiple` lets several stay open.",
      control: "inline-radio",
      options: ["single", "multiple"],
      table: {
        type: {
          summary: "'single' | 'multiple'"
        }
      }
    },
    collapsible: {
      description: 'Only with `type="single"`: lets the open item be closed again.',
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      }
    },
    value: {
      description: "Controlled open item(s): a string for `single`, a string array for `multiple`.",
      control: false,
      table: {
        type: {
          summary: "string | string[]"
        }
      }
    },
    defaultValue: {
      description: "Item(s) open on first render when uncontrolled.",
      control: "object",
      table: {
        type: {
          summary: "string | string[]"
        }
      }
    },
    onValueChange: {
      description: "Called with the new open item(s) when one is opened or closed.",
      action: "valueChange",
      table: {
        type: {
          summary: "(value: string | string[]) => void"
        }
      }
    },
    disabled: {
      description: "Disables every item.",
      control: "boolean",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      }
    },
    orientation: {
      description: "Direction of the arrow-key navigation between triggers.",
      control: "inline-radio",
      options: ["vertical", "horizontal"],
      table: {
        type: {
          summary: "'vertical' | 'horizontal'"
        },
        defaultValue: {
          summary: "vertical"
        }
      }
    },
    dir: {
      description: "Reading direction.",
      control: "inline-radio",
      options: ["ltr", "rtl"],
      table: {
        type: {
          summary: "'ltr' | 'rtl'"
        }
      }
    },
    size: {
      description: "Figma `size`: `lg` is 16px text, `md` is 14px.",
      control: "inline-radio",
      options: ["lg", "md"],
      table: {
        type: {
          summary: "'lg' | 'md'"
        },
        defaultValue: {
          summary: "lg"
        }
      }
    },
    children: {
      description: "The `AccordionItem`s.",
      control: false,
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    }
  },
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "one",
    size: "lg"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { ...args, style: {
    width: 383
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "one", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "What does the policy cover?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Sample answer text that explains the coverage in a sentence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "two", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "How do I make a claim?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Sample answer text about claims." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "three", disabled: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "Can I change my plan later? (disabled item)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Sample answer text about changing plans." })
    ] })
  ] })
};
const Lg = {
  args: {
    size: "lg"
  }
};
const Md = {
  args: {
    size: "md"
  }
};
const AllowMultiple = {
  args: {
    type: "multiple",
    collapsible: void 0,
    defaultValue: ["one", "two"]
  }
};
Lg.parameters = {
  ...Lg.parameters,
  docs: {
    ...Lg.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...Lg.parameters?.docs?.source
    },
    description: {
      story: "Figma `size=LG(16)`: the first item is expanded, the others collapsed.",
      ...Lg.parameters?.docs?.description
    }
  }
};
Md.parameters = {
  ...Md.parameters,
  docs: {
    ...Md.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md'\n  }\n}",
      ...Md.parameters?.docs?.source
    },
    description: {
      story: "Figma `size=MD(14)`.",
      ...Md.parameters?.docs?.description
    }
  }
};
AllowMultiple.parameters = {
  ...AllowMultiple.parameters,
  docs: {
    ...AllowMultiple.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'multiple',\n    collapsible: undefined,\n    defaultValue: ['one', 'two']\n  }\n}",
      ...AllowMultiple.parameters?.docs?.source
    },
    description: {
      story: '`type="multiple"`: several items can stay open at once.',
      ...AllowMultiple.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Lg", "Md", "AllowMultiple"];
export {
  AllowMultiple,
  Lg,
  Md,
  __namedExportsOrder,
  meta as default
};
