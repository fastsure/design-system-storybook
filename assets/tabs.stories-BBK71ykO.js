import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { a as useControllableState, c as composeEventHandlers } from "./index-C3tZBoHN.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { c as createRovingFocusGroupScope, R as RovingFocusGroup, a as RovingFocusGroupItem } from "./index-C8AuNBI3.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { u as useDirection } from "./index-BhINkQjI.js";
import { u as useId } from "./index-kBfGp3iT.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-COvgDa9e.js";
import "./index-CthloIl8.js";
import "./index-B6QV7ban.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-DvlYfcwf.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var ActivationMode = {
  Automatic: "automatic",
  Manual: "manual"
};
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Tabs2(props, forwardedRef) {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = ActivationMode.Automatic,
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }, "Tabs")
);
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function TabsList2(props, forwardedRef) {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RovingFocusGroup,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }, "TabsList")
);
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function TabsTrigger2(props, forwardedRef) {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RovingFocusGroupItem,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                event.currentTarget.focus();
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (disabled || event.target !== event.currentTarget) {
                return;
              }
              if ([" ", "Enter"].includes(event.key)) {
                context.onValueChange(value);
              }
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== ActivationMode.Manual;
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }, "TabsTrigger")
);
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function TabsContent2(props, forwardedRef) {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }, "TabsContent")
);
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");
const TabsContext = reactExports.createContext({ variant: "pill", size: "md" });
function Tabs({ variant = "pill", size = "md", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContext, { value: { variant, size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs$1, { ...props }) });
}
const listClasses = {
  pill: "fs:rounded-full fs:bg-panel fs:p-s-1",
  line: "fs:border-0 fs:border-b fs:border-solid fs:border-line-soft fs:bg-panel"
};
function TabsList({ className, ...props }) {
  const { variant } = reactExports.use(TabsContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TabsList$1,
    {
      className: cn("fs:flex fs:items-center", listClasses[variant], className),
      ...props
    }
  );
}
const triggerBase = "fs:box-border fs:inline-flex fs:cursor-pointer fs:items-center fs:justify-center fs:whitespace-nowrap fs:bg-transparent fs:focus-visible:shadow-focus fs:focus-visible:outline-none fs:disabled:cursor-not-allowed fs:disabled:text-muted";
const triggerClasses = {
  pill: {
    md: "fs:h-control-sm fs:flex-1 fs:rounded-full fs:border-0 fs:px-s-4 fs:text-body-4 fs:text-ink fs:data-[state=active]:bg-paper fs:data-[state=active]:text-label-3",
    lg: "fs:h-control-md fs:flex-1 fs:rounded-full fs:border-0 fs:px-s-4 fs:text-body-3 fs:text-ink fs:data-[state=active]:bg-paper fs:data-[state=active]:text-label-2"
  },
  line: {
    md: "fs:h-control-md fs:gap-s-2 fs:border-0 fs:border-b-2 fs:border-solid fs:border-transparent fs:px-s-2 fs:text-label-3 fs:text-brand fs:data-[state=active]:border-accent fs:data-[state=active]:text-accent",
    lg: "fs:h-control-lg fs:gap-s-2 fs:border-0 fs:border-b-2 fs:border-solid fs:border-transparent fs:px-s-7 fs:text-label-2 fs:text-brand fs:data-[state=active]:border-accent fs:data-[state=active]:text-accent"
  }
};
function TabsTrigger({ className, icon, children, ...props }) {
  const { variant, size } = reactExports.use(TabsContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    TabsTrigger$1,
    {
      className: cn(triggerBase, triggerClasses[variant][size], className),
      ...props,
      children: [
        children,
        icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "fs:inline-flex fs:shrink-0 fs:items-center", children: icon }) : null
      ]
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TabsContent$1,
    {
      className: cn("fs:focus-visible:shadow-focus fs:focus-visible:outline-none", className),
      ...props
    }
  );
}
Tabs.__docgenInfo = { "description": "Groups a `TabsList` with its `TabsContent` panels. Wraps Radix Tabs.", "methods": [], "displayName": "Tabs", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "'pill' | 'line'", "elements": [{ "name": "literal", "value": "'pill'" }, { "name": "literal", "value": "'line'" }] }, "description": "Figma `style`: `pill` (rounded selection) or `line` (underline).", "defaultValue": { "value": "'pill'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'md' | 'lg'", "elements": [{ "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }] }, "description": "Figma `size`: `md` (14px) or `lg` (16px).", "defaultValue": { "value": "'md'", "computed": false } } }, "composes": ["ComponentProps"] };
TabsList.__docgenInfo = { "description": "The row of tabs. Give it an `aria-label`.", "methods": [], "displayName": "TabsList" };
TabsTrigger.__docgenInfo = { "description": "One tab. Arrow keys move between tabs, as Radix Tabs provides.", "methods": [], "displayName": "TabsTrigger", "props": { "icon": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Icon after the label (Figma `Icon start`)." } }, "composes": ["ComponentProps"] };
TabsContent.__docgenInfo = { "description": "The panel shown for one tab.", "methods": [], "displayName": "TabsContent" };
const car = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 22 22", width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 13l2-6h12l2 6v4H3zM6 17v2M16 17v2" }) });
const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    // Tab Button (157:5757) and Tab Group (1719:40216).
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=1719-40216"
    }
  },
  args: {
    defaultValue: "lost"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { ...args, style: {
    width: 360
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "aria-label": "Coverage type", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "lost", children: "Vehicle lost" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "third", children: "Third party" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "lost", children: "Sample panel for vehicle lost." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "third", children: "Sample panel for third party." })
  ] })
};
const PillMd = {
  args: {
    variant: "pill",
    size: "md"
  }
};
const PillLg = {
  args: {
    variant: "pill",
    size: "lg"
  }
};
const LineMd = {
  args: {
    variant: "line",
    size: "md"
  }
};
const LineLg = {
  args: {
    variant: "line",
    size: "lg"
  }
};
const DisabledWithIcons = {
  args: {
    variant: "line",
    size: "lg"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { ...args, style: {
    width: 460
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "aria-label": "Coverage type", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "lost", icon: car, children: "Vehicle lost" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "third", icon: car, children: "Third party" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "own", icon: car, disabled: true, children: "Own damage" })
  ] }) })
};
PillMd.parameters = {
  ...PillMd.parameters,
  docs: {
    ...PillMd.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'pill',\n    size: 'md'\n  }\n}",
      ...PillMd.parameters?.docs?.source
    },
    description: {
      story: "Figma `style=Pill`, `size=MD(14)`.",
      ...PillMd.parameters?.docs?.description
    }
  }
};
PillLg.parameters = {
  ...PillLg.parameters,
  docs: {
    ...PillLg.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'pill',\n    size: 'lg'\n  }\n}",
      ...PillLg.parameters?.docs?.source
    },
    description: {
      story: "Figma `style=Pill`, `size=LG(16)`.",
      ...PillLg.parameters?.docs?.description
    }
  }
};
LineMd.parameters = {
  ...LineMd.parameters,
  docs: {
    ...LineMd.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'line',\n    size: 'md'\n  }\n}",
      ...LineMd.parameters?.docs?.source
    },
    description: {
      story: "Figma `style=Line`, `size=MD(14)`.",
      ...LineMd.parameters?.docs?.description
    }
  }
};
LineLg.parameters = {
  ...LineLg.parameters,
  docs: {
    ...LineLg.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'line',\n    size: 'lg'\n  }\n}",
      ...LineLg.parameters?.docs?.source
    },
    description: {
      story: "Figma `style=Line`, `size=LG(16)`.",
      ...LineLg.parameters?.docs?.description
    }
  }
};
DisabledWithIcons.parameters = {
  ...DisabledWithIcons.parameters,
  docs: {
    ...DisabledWithIcons.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'line',
    size: 'lg'
  },
  render: args => <Tabs {...args} style={{
    width: 460
  }}>
      <TabsList aria-label="Coverage type">
        <TabsTrigger value="lost" icon={car}>
          Vehicle lost
        </TabsTrigger>
        <TabsTrigger value="third" icon={car}>
          Third party
        </TabsTrigger>
        <TabsTrigger value="own" icon={car} disabled>
          Own damage
        </TabsTrigger>
      </TabsList>
    </Tabs>
}`,
      ...DisabledWithIcons.parameters?.docs?.source
    },
    description: {
      story: "Figma `state=Disabled` and `Icon start`.",
      ...DisabledWithIcons.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["PillMd", "PillLg", "LineMd", "LineLg", "DisabledWithIcons"];
export {
  DisabledWithIcons,
  LineLg,
  LineMd,
  PillLg,
  PillMd,
  __namedExportsOrder,
  meta as default
};
