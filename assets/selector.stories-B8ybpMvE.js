import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as createRovingFocusGroupScope, R as RovingFocusGroup, a as RovingFocusGroupItem } from "./index-C8AuNBI3.js";
import { a as useControllableState, c as composeEventHandlers } from "./index-C3tZBoHN.js";
import { u as useDirection } from "./index-BhINkQjI.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-CthloIl8.js";
import "./index-COvgDa9e.js";
import "./index-kBfGp3iT.js";
import "./index-B6QV7ban.js";
import "./index-DvlYfcwf.js";
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
var NAME = "Toggle";
var Toggle = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name$1(function Toggle2(props, forwardedRef) {
    const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
    const [pressed, setPressed] = useControllableState({
      prop: pressedProp,
      onChange: onPressedChange,
      defaultProp: defaultPressed ?? false,
      caller: NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-pressed": pressed,
        "data-state": pressed ? "on" : "off",
        "data-disabled": props.disabled ? "" : void 0,
        ...buttonProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => {
          if (!props.disabled) {
            setPressed(!pressed);
          }
        })
      }
    );
  }, "Toggle")
);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var TOGGLE_GROUP_NAME = "ToggleGroup";
var ToggleGroupType = {
  Single: "single",
  Multiple: "multiple"
};
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ToggleGroup2(props, forwardedRef) {
  const { type, ...toggleGroupProps } = props;
  if (type === ToggleGroupType.Single) {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImplSingle, { role: "radiogroup", ...singleProps, ref: forwardedRef });
  }
  if (type === ToggleGroupType.Multiple) {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImplMultiple, { role: "toolbar", ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
}, "ToggleGroup"));
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ToggleGroupImplSingle2(props, forwardedRef) {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? "",
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: ToggleGroupType.Single,
      value: reactExports.useMemo(() => value ? [value] : [], [value]),
      onItemActivate: setValue,
      onItemDeactivate: reactExports.useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
}, "ToggleGroupImplSingle"));
var ToggleGroupImplMultiple = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ToggleGroupImplMultiple2(props, forwardedRef) {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = /* @__PURE__ */ __name(() => {
    }, "onValueChange"),
    ...toggleGroupMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  const handleButtonActivate = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: ToggleGroupType.Multiple,
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
}, "ToggleGroupImplMultiple"));
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ToggleGroupImpl2(props, forwardedRef) {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      RovingFocusGroup,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }, "ToggleGroupImpl")
);
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ToggleGroupItem2(props, forwardedRef) {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = reactExports.useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      RovingFocusGroupItem,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }, "ToggleGroupItem")
);
var ToggleGroupItemImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ToggleGroupItemImpl2(props, forwardedRef) {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === ToggleGroupType.Single ? singleProps : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }, "ToggleGroupItemImpl")
);
const SelectorContext = reactExports.createContext({ variant: "text", size: "md" });
const ITEM_BASE_CLASSES = cn(
  "fs:group fs:box-border fs:m-0 fs:border fs:border-solid fs:rounded-button fs:bg-panel",
  "fs:font-sans fs:cursor-pointer fs:transition-colors fs:outline-none",
  "fs:focus-visible:shadow-focus",
  "fs:enabled:hover:bg-mint-50 fs:data-[state=on]:bg-mint-50 fs:data-[state=on]:border-active",
  "fs:disabled:opacity-40 fs:disabled:cursor-not-allowed"
);
const VARIANT_CLASSES = {
  text: "fs:flex fs:flex-col fs:items-start fs:justify-center fs:gap-s-1 fs:min-h-12 fs:p-s-3 fs:text-left fs:border-line-soft",
  "brand-card": "fs:flex fs:size-25 fs:items-center fs:justify-center fs:p-0 fs:border-line"
};
const TITLE_CLASSES = {
  md: "fs:text-label-3",
  lg: "fs:text-label-2"
};
function Selector({
  variant = "text",
  size = "md",
  className,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorContext, { value: { variant, size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroup,
    {
      ref,
      className: cn("fs:flex fs:flex-wrap fs:gap-s-2", className),
      ...props
    }
  ) });
}
function SelectorItem({
  variant,
  size,
  description,
  className,
  children,
  ref,
  ...props
}) {
  const context = reactExports.useContext(SelectorContext);
  const resolvedVariant = variant ?? context.variant;
  const resolvedSize = size ?? context.size;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleGroupItem,
    {
      ref,
      className: cn(ITEM_BASE_CLASSES, VARIANT_CLASSES[resolvedVariant], className),
      ...props,
      children: resolvedVariant === "text" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("fs:text-brand", TITLE_CLASSES[resolvedSize]), children }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs:text-body-5 fs:text-gray-700 fs:group-data-[state=on]:text-muted", children: description })
      ] }) : children
    }
  );
}
Selector.__docgenInfo = { "description": 'Segmented single or multiple choice (Figma "Selector"), built on Radix ToggleGroup so it\ngets roving focus and arrow-key navigation. Give the group an accessible name.', "methods": [], "displayName": "Selector", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "'text' | 'brand-card'", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "literal", "value": "'brand-card'" }] }, "description": 'Figma "Type": a text card or a square logo card. Defaults to `text`.', "defaultValue": { "value": "'text'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": 'Figma "Size" of a text card\'s title: md 14, lg 16 px. Defaults to `md`.', "defaultValue": { "value": "'md'", "computed": false } } } };
SelectorItem.__docgenInfo = { "description": "One choice of a Selector. For `brand-card`, pass the logo as children and an `aria-label`.", "methods": [], "displayName": "SelectorItem", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "'text' | 'brand-card'", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "literal", "value": "'brand-card'" }] }, "description": 'Figma "Type": a text card or a square logo card. Defaults to `text`.' }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": 'Figma "Size" of a text card\'s title: md 14, lg 16 px. Defaults to `md`.' }, "description": { "required": false, "tsType": { "name": "ReactNode" }, "description": 'Secondary line under the title (Figma "Show info text"). Text cards only.' } }, "composes": ["ComponentProps"] };
const meta = {
  title: "Buttons/Selector",
  component: Selector,
  args: {
    type: "single",
    "aria-label": "Usage",
    defaultValue: "personal"
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["text", "brand-card"]
    },
    size: {
      control: "inline-radio",
      options: ["md", "lg"]
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1849-50100"
    }
  }
};
const itemWidth = {
  width: 189
};
function LogoPlaceholder({
  letter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", style: {
    display: "grid",
    placeItems: "center",
    width: 68,
    height: 68,
    borderRadius: "var(--fs-radius-button)",
    background: "var(--fs-color-gray-100)",
    color: "var(--fs-color-gray-700)",
    font: "inherit"
  }, children: letter });
}
const TextMd = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { ...args, size: "md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "personal", description: "ใช้ในครัวเรือน", style: itemWidth, children: "ส่วนตัว" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "business", description: "ใช้เพื่อธุรกิจ", style: itemWidth, children: "ธุรกิจ" })
  ] })
};
const TextLg = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { ...args, size: "lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "personal", description: "ใช้ในครัวเรือน", style: itemWidth, children: "ส่วนตัว" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "business", description: "ใช้เพื่อธุรกิจ", style: itemWidth, children: "ธุรกิจ" })
  ] })
};
const TextWithoutDescription = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "personal", style: itemWidth, children: "ส่วนตัว" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "business", style: itemWidth, children: "ธุรกิจ" })
  ] })
};
const States = {
  args: {
    defaultValue: "business"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "personal", description: "Default", style: itemWidth, children: "Personal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "business", description: "Selected", style: itemWidth, children: "Business" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "other", description: "Disabled", disabled: true, style: itemWidth, children: "Other" })
  ] })
};
const Multiple = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { type: "multiple", "aria-label": "Extra cover", defaultValue: ["fire"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "fire", description: "Fire and lightning", style: itemWidth, children: "Fire" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "flood", description: "Flood and storm", style: itemWidth, children: "Flood" })
  ] })
};
const BrandCard = {
  args: {
    "aria-label": "Car brand",
    defaultValue: "b"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Selector, { ...args, variant: "brand-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "a", "aria-label": "Brand A", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPlaceholder, { letter: "A" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "b", "aria-label": "Brand B", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPlaceholder, { letter: "B" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorItem, { value: "c", "aria-label": "Brand C", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPlaceholder, { letter: "C" }) })
  ] })
};
TextMd.parameters = {
  ...TextMd.parameters,
  docs: {
    ...TextMd.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <Selector {...args} size="md">\n      <SelectorItem value="personal" description="ใช้ในครัวเรือน" style={itemWidth}>\n        ส่วนตัว\n      </SelectorItem>\n      <SelectorItem value="business" description="ใช้เพื่อธุรกิจ" style={itemWidth}>\n        ธุรกิจ\n      </SelectorItem>\n    </Selector>\n}',
      ...TextMd.parameters?.docs?.source
    }
  }
};
TextLg.parameters = {
  ...TextLg.parameters,
  docs: {
    ...TextLg.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <Selector {...args} size="lg">\n      <SelectorItem value="personal" description="ใช้ในครัวเรือน" style={itemWidth}>\n        ส่วนตัว\n      </SelectorItem>\n      <SelectorItem value="business" description="ใช้เพื่อธุรกิจ" style={itemWidth}>\n        ธุรกิจ\n      </SelectorItem>\n    </Selector>\n}',
      ...TextLg.parameters?.docs?.source
    }
  }
};
TextWithoutDescription.parameters = {
  ...TextWithoutDescription.parameters,
  docs: {
    ...TextWithoutDescription.parameters?.docs,
    source: {
      originalSource: '{\n  render: args => <Selector {...args}>\n      <SelectorItem value="personal" style={itemWidth}>\n        ส่วนตัว\n      </SelectorItem>\n      <SelectorItem value="business" style={itemWidth}>\n        ธุรกิจ\n      </SelectorItem>\n    </Selector>\n}',
      ...TextWithoutDescription.parameters?.docs?.source
    },
    description: {
      story: "Title only, without the info text.",
      ...TextWithoutDescription.parameters?.docs?.description
    }
  }
};
States.parameters = {
  ...States.parameters,
  docs: {
    ...States.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    defaultValue: 'business'
  },
  render: args => <Selector {...args}>
      <SelectorItem value="personal" description="Default" style={itemWidth}>
        Personal
      </SelectorItem>
      <SelectorItem value="business" description="Selected" style={itemWidth}>
        Business
      </SelectorItem>
      <SelectorItem value="other" description="Disabled" disabled style={itemWidth}>
        Other
      </SelectorItem>
    </Selector>
}`,
      ...States.parameters?.docs?.source
    },
    description: {
      story: "Default, Hover (use the pointer) and Selected; the second item is Disabled.",
      ...States.parameters?.docs?.description
    }
  }
};
Multiple.parameters = {
  ...Multiple.parameters,
  docs: {
    ...Multiple.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <Selector type="multiple" aria-label="Extra cover" defaultValue={['fire']}>
      <SelectorItem value="fire" description="Fire and lightning" style={itemWidth}>
        Fire
      </SelectorItem>
      <SelectorItem value="flood" description="Flood and storm" style={itemWidth}>
        Flood
      </SelectorItem>
    </Selector>
}`,
      ...Multiple.parameters?.docs?.source
    },
    description: {
      story: '`type="multiple"` lets several items be on at once.',
      ...Multiple.parameters?.docs?.description
    }
  }
};
BrandCard.parameters = {
  ...BrandCard.parameters,
  docs: {
    ...BrandCard.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    'aria-label': 'Car brand',
    defaultValue: 'b'
  },
  render: args => <Selector {...args} variant="brand-card">
      <SelectorItem value="a" aria-label="Brand A">
        <LogoPlaceholder letter="A" />
      </SelectorItem>
      <SelectorItem value="b" aria-label="Brand B">
        <LogoPlaceholder letter="B" />
      </SelectorItem>
      <SelectorItem value="c" aria-label="Brand C" disabled>
        <LogoPlaceholder letter="C" />
      </SelectorItem>
    </Selector>
}`,
      ...BrandCard.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["TextMd", "TextLg", "TextWithoutDescription", "States", "Multiple", "BrandCard"];
export {
  BrandCard,
  Multiple,
  States,
  TextLg,
  TextMd,
  TextWithoutDescription,
  __namedExportsOrder,
  meta as default
};
