import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { C as CloseIcon } from "./close-BYyk_y45.js";
import { r as reactExports } from "./iframe-CG1WmBjX.js";
import { u as useLayoutEffect2, a as useControllableState, c as composeEventHandlers } from "./index-C3tZBoHN.js";
import { u as useComposedRefs, c as createSlot } from "./index-CthloIl8.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { u as useId } from "./index-kBfGp3iT.js";
import { P as Portal, u as useDismissableLayerSurface, D as DismissableLayer } from "./index-CjNaXE6_.js";
import { b as useFocusScopeBranchRegistry, R as ReactRemoveScroll, h as hideOthers, u as useFocusGuards, c as FocusScopeBranchProvider, F as FocusScope } from "./Combination-KqIjBU4E.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { P as Primitive } from "./index-BYQC1JlH.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { c as cva } from "./index-BPNhyx9d.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-B6QV7ban.js";
import "./index-D29dSsUG.js";
import "./index-U0VmxhcO.js";
import "./index-DvlYfcwf.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name((props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  const [titleCount, setTitleCount] = reactExports.useState(0);
  const [descriptionCount, setDescriptionCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      titlePresent: titleCount > 0,
      descriptionPresent: descriptionCount > 0,
      setTitleCount,
      setDescriptionCount,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      branchNodes,
      branchRegistry,
      children
    }
  );
}, "Dialog");
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function DialogTrigger2(props, forwardedRef) {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }, "DialogTrigger")
);
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { asChild: true, container, children: child }) })) });
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function DialogOverlay2(props, forwardedRef) {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }, "DialogOverlay")
);
var Slot = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function DialogOverlayImpl2(props, forwardedRef) {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const registerDismissableSurface = useDismissableLayerSurface();
    const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactRemoveScroll,
        {
          as: Slot,
          allowPinchZoom: true,
          shards: reactExports.useMemo(
            () => [context.contentRef, ...context.branchNodes.map((node) => ({ current: node }))],
            [context.contentRef, context.branchNodes]
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            {
              "data-state": getState(context.open),
              ...overlayProps,
              ref: composedRefs,
              style: { pointerEvents: "auto", ...overlayProps.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
);
var CONTENT_NAME = "DialogContent";
var DialogContent = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function DialogContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "DialogContent")
);
var DialogContentModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function DialogContentModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
);
var DialogContentNonModal = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function DialogContentNonModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "DialogContentNonModal")
);
var DialogContentImpl = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function DialogContentImpl2(props, forwardedRef) {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      "aria-describedby": ariaDescribedby,
      children,
      ...contentProps
    } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FocusScopeBranchProvider, { registry: context.branchRegistry, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        branches: context.branchNodes,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            role: "dialog",
            id: context.contentId,
            "aria-labelledby": context.titlePresent ? context.titleId : void 0,
            "aria-describedby": context.descriptionPresent ? concatAriaDescribedby(ariaDescribedby, context.descriptionId) : ariaDescribedby,
            "data-state": getState(context.open),
            ...contentProps,
            ref: forwardedRef,
            deferPointerDownOutside: true,
            onDismiss: () => context.onOpenChange(false),
            children
          }
        )
      }
    ) });
  }, "DialogContentImpl")
);
var DialogTitle = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function DialogTitle2(props, forwardedRef) {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext("DialogTitle", __scopeDialog);
    const { setTitleCount } = context;
    useLayoutEffect2(() => {
      setTitleCount((count) => count + 1);
      return () => setTitleCount((count) => count - 1);
    }, [setTitleCount]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }, "DialogTitle")
);
var DialogDescription = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function DialogDescription2(props, forwardedRef) {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext("DialogDescription", __scopeDialog);
    const { setDescriptionCount } = context;
    useLayoutEffect2(() => {
      setDescriptionCount((count) => count + 1);
      return () => setDescriptionCount((count) => count - 1);
    }, [setDescriptionCount]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }, "DialogDescription")
);
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function DialogClose2(props, forwardedRef) {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }, "DialogClose")
);
function concatAriaDescribedby(...values) {
  const ids = /* @__PURE__ */ new Set();
  for (const value of values) {
    if (typeof value !== "string") continue;
    for (const id of String(value).trim().split(/\s+/)) {
      if (id) ids.add(id);
    }
  }
  return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name(concatAriaDescribedby, "concatAriaDescribedby");
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
const overlayClasses = cn(
  "fs:fixed fs:inset-0 fs:z-modal fs:bg-alpha-black-3",
  "fs:data-[state=open]:animate-fade-in fs:data-[state=closed]:animate-fade-out",
  "fs:motion-reduce:animate-none!"
);
const SHEET_MOTION = "fs:data-[state=open]:animate-sheet-in fs:data-[state=closed]:animate-sheet-out fs:motion-reduce:animate-none!";
const CARD_MOTION = "fs:data-[state=open]:animate-card-in fs:data-[state=closed]:animate-card-out fs:motion-reduce:animate-none!";
const RESPONSIVE_CARD_MOTION = "fs:md:data-[state=open]:animate-card-in fs:md:data-[state=closed]:animate-card-out";
const contentVariants = cva(
  "fs:fixed fs:z-modal fs:box-border fs:flex fs:flex-col fs:overflow-y-auto fs:bg-panel fs:outline-none",
  {
    variants: {
      device: {
        mobile: cn(
          "fs:inset-x-0 fs:bottom-0 fs:max-h-170 fs:gap-s-4 fs:rounded-t-sheet fs:px-s-5 fs:pt-s-6 fs:pb-s-5",
          SHEET_MOTION
        ),
        desktop: cn(
          "fs:top-1/2 fs:left-1/2 fs:w-155 fs:max-w-full fs:-translate-x-1/2 fs:-translate-y-1/2 fs:gap-s-5 fs:rounded-card fs:px-s-7 fs:py-s-6 fs:shadow-3",
          CARD_MOTION
        ),
        responsive: cn(
          "fs:inset-x-0 fs:bottom-0 fs:max-h-170 fs:gap-s-4 fs:rounded-t-sheet fs:px-s-5 fs:pt-s-6 fs:pb-s-5 fs:md:inset-x-auto fs:md:top-1/2 fs:md:bottom-auto fs:md:left-1/2 fs:md:w-155 fs:md:max-w-full fs:md:-translate-x-1/2 fs:md:-translate-y-1/2 fs:md:gap-s-5 fs:md:rounded-card fs:md:px-s-7 fs:md:py-s-6 fs:md:shadow-3",
          SHEET_MOTION,
          RESPONSIVE_CARD_MOTION
        )
      }
    },
    defaultVariants: { device: "responsive" }
  }
);
const headerVariants = cva("fs:flex fs:items-center fs:justify-between fs:gap-s-4");
const titleVariants = cva("fs:m-0 fs:flex-1", {
  variants: {
    device: {
      mobile: "fs:text-heading-4-semibold fs:text-brand",
      desktop: "fs:text-heading-2 fs:text-ink",
      responsive: "fs:text-heading-4-semibold fs:text-brand fs:md:text-heading-2 fs:md:text-ink"
    }
  },
  defaultVariants: { device: "responsive" }
});
const closeButtonVariants = cva(
  "fs:inline-flex fs:shrink-0 fs:cursor-pointer fs:items-center fs:justify-center fs:rounded-full fs:border-0 fs:bg-transparent fs:p-0 fs:text-ink fs:outline-none fs:hover:bg-surface-muted fs:focus-visible:shadow-focus",
  {
    variants: {
      device: {
        mobile: "fs:size-8",
        desktop: "fs:size-10",
        responsive: "fs:size-8 fs:md:size-10"
      }
    },
    defaultVariants: { device: "responsive" }
  }
);
const descriptionClasses = "fs:m-0 fs:text-body-4 fs:text-ink-soft";
const footerVariants = cva("fs:flex fs:gap-s-3", {
  variants: {
    device: {
      mobile: "fs:flex-col",
      desktop: "fs:flex-row fs:justify-end",
      responsive: "fs:flex-col fs:md:flex-row fs:md:justify-end"
    }
  },
  defaultVariants: { device: "responsive" }
});
const DEFAULT_DEVICE = "responsive";
const DEFAULT_CLOSE_LABEL = "Close";
const ModalDeviceContext = reactExports.createContext(DEFAULT_DEVICE);
const Modal = Dialog;
const ModalTrigger = DialogTrigger;
const ModalClose = DialogClose;
function ModalContent({
  device = DEFAULT_DEVICE,
  className,
  children,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, { className: overlayClasses }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContent,
      {
        ref,
        className: cn(contentVariants({ device }), className),
        ...props,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalDeviceContext, { value: device, children })
      }
    )
  ] });
}
function ModalHeader({
  showClose = true,
  closeLabel = DEFAULT_CLOSE_LABEL,
  className,
  children,
  ref,
  ...props
}) {
  const device = reactExports.useContext(ModalDeviceContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: cn(headerVariants(), className), ...props, children: [
    children,
    showClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { "aria-label": closeLabel, className: closeButtonVariants({ device }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, { className: "fs:size-icon-lg" }) }) : null
  ] });
}
function ModalTitle({
  className,
  ref,
  ...props
}) {
  const device = reactExports.useContext(ModalDeviceContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogTitle,
    {
      ref,
      className: cn(titleVariants({ device }), className),
      ...props
    }
  );
}
function ModalDescription({
  className,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogDescription,
    {
      ref,
      className: cn(descriptionClasses, className),
      ...props
    }
  );
}
function ModalFooter({ className, ref, ...props }) {
  const device = reactExports.useContext(ModalDeviceContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn(footerVariants({ device }), className), ...props });
}
ModalContent.__docgenInfo = { "description": "Overlay plus the sheet or card. Must contain a `ModalTitle` (and a `ModalDescription`).", "methods": [], "displayName": "ModalContent", "props": { "device": { "required": false, "tsType": { "name": "union", "raw": "'mobile' | 'desktop' | 'responsive'", "elements": [{ "name": "literal", "value": "'mobile'" }, { "name": "literal", "value": "'desktop'" }, { "name": "literal", "value": "'responsive'" }] }, "description": "Figma `Device`: `mobile` bottom sheet, `desktop` centred card, `responsive` switches at `md`.", "defaultValue": { "value": "'responsive'", "computed": false } } }, "composes": ["ComponentProps"] };
ModalHeader.__docgenInfo = { "description": "Title row. Put a `ModalTitle` inside; a close button is added unless `showClose` is false.", "methods": [], "displayName": "ModalHeader", "props": { "showClose": { "required": false, "tsType": { "name": "boolean" }, "description": "Show the round close button at the end of the header. Defaults to true.", "defaultValue": { "value": "true", "computed": false } }, "closeLabel": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the close button.", "defaultValue": { "value": "'Close'", "computed": false } } }, "composes": ["ComponentProps"] };
ModalTitle.__docgenInfo = { "description": "", "methods": [], "displayName": "ModalTitle" };
ModalDescription.__docgenInfo = { "description": "", "methods": [], "displayName": "ModalDescription" };
ModalFooter.__docgenInfo = { "description": "Action row: stacked full-width buttons on Mobile, a right-aligned row on Desktop.", "methods": [], "displayName": "ModalFooter" };
const buttonStyle = {
  height: 48,
  padding: "0 24px",
  borderRadius: 8,
  font: "inherit",
  cursor: "pointer"
};
const primaryStyle = {
  ...buttonStyle,
  border: 0,
  background: "var(--fs-color-orange-500)",
  color: "var(--fs-color-gray-0)"
};
const secondaryStyle = {
  ...buttonStyle,
  border: "1px solid var(--fs-color-gray-300)",
  background: "var(--fs-color-gray-0)"
};
function Example({
  device,
  defaultOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { defaultOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: secondaryStyle, children: "Open modal" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContent, { device, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalTitle, { children: "Customise your premium" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalDescription, { children: "Choose the sum insured that suits you. The annual premium updates as you change it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: secondaryStyle, children: "Read more" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: primaryStyle, children: "Select this plan" })
      ] })
    ] })
  ] });
}
const meta = {
  title: "Feedback/Modal",
  component: ModalContent,
  argTypes: {
    device: {
      control: "inline-radio",
      options: ["mobile", "desktop", "responsive"]
    }
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 520
      }
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=2407-133446"
    }
  }
};
const Mobile = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Example, { device: "mobile", defaultOpen: true }),
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
};
const Desktop = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Example, { device: "desktop", defaultOpen: true })
};
const Responsive = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Example, { device: "responsive", defaultOpen: true })
};
const WithTrigger = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Example, { device: "responsive" })
};
const WithoutCloseButton = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContent, { device: "desktop", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { showClose: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalTitle, { children: "Confirm your choice" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalDescription, { children: "This sends your quote to the insurer." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: primaryStyle, children: "Confirm" }) }) })
  ] }) })
};
Mobile.parameters = {
  ...Mobile.parameters,
  docs: {
    ...Mobile.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <Example device="mobile" defaultOpen />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,
      ...Mobile.parameters?.docs?.source
    },
    description: {
      story: "Figma `Device=Mobile`: a bottom sheet with 24px top corners.",
      ...Mobile.parameters?.docs?.description
    }
  }
};
Desktop.parameters = {
  ...Desktop.parameters,
  docs: {
    ...Desktop.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => <Example device="desktop" defaultOpen />\n}',
      ...Desktop.parameters?.docs?.source
    },
    description: {
      story: "Figma `Device=Desktop`: a 620px card centred over the dimmed page.",
      ...Desktop.parameters?.docs?.description
    }
  }
};
Responsive.parameters = {
  ...Responsive.parameters,
  docs: {
    ...Responsive.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => <Example device="responsive" defaultOpen />\n}',
      ...Responsive.parameters?.docs?.source
    },
    description: {
      story: "Default: bottom sheet below the `md` breakpoint, centred card from `md` up.",
      ...Responsive.parameters?.docs?.description
    }
  }
};
WithTrigger.parameters = {
  ...WithTrigger.parameters,
  docs: {
    ...WithTrigger.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => <Example device="responsive" />\n}',
      ...WithTrigger.parameters?.docs?.source
    },
    description: {
      story: "Closed until the trigger is pressed; Escape or the close button dismiss it.",
      ...WithTrigger.parameters?.docs?.description
    }
  }
};
WithoutCloseButton.parameters = {
  ...WithoutCloseButton.parameters,
  docs: {
    ...WithoutCloseButton.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => <Modal defaultOpen>\n      <ModalContent device="desktop">\n        <ModalHeader showClose={false}>\n          <ModalTitle>Confirm your choice</ModalTitle>\n        </ModalHeader>\n        <ModalDescription>This sends your quote to the insurer.</ModalDescription>\n        <ModalFooter>\n          <ModalClose asChild>\n            <button type="button" style={primaryStyle}>\n              Confirm\n            </button>\n          </ModalClose>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}',
      ...WithoutCloseButton.parameters?.docs?.source
    },
    description: {
      story: "Without the close button, for flows that need an explicit choice.",
      ...WithoutCloseButton.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Mobile", "Desktop", "Responsive", "WithTrigger", "WithoutCloseButton"];
export {
  Desktop,
  Mobile,
  Responsive,
  WithTrigger,
  WithoutCloseButton,
  __namedExportsOrder,
  meta as default
};
