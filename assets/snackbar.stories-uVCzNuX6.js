import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { r as reactExports, R as React } from "./iframe-CG1WmBjX.js";
import { r as reactDomExports } from "./index-D29dSsUG.js";
import { a as useControllableState, c as composeEventHandlers, u as useLayoutEffect2 } from "./index-C3tZBoHN.js";
import { u as useComposedRefs } from "./index-CthloIl8.js";
import { c as createCollection } from "./index-COvgDa9e.js";
import { c as createContextScope } from "./index-BRpwWxnq.js";
import { D as DismissableLayer, P as Portal, a as DismissableLayerBranch } from "./index-CjNaXE6_.js";
import { P as Presence } from "./index-CKstfSuL.js";
import { P as Primitive, d as dispatchDiscreteCustomEvent } from "./index-BYQC1JlH.js";
import { u as useCallbackRef } from "./index-B6QV7ban.js";
import { a as VisuallyHidden } from "./index-BI4QyU-1.js";
import { c as cn } from "./cn-JQCre-CP.js";
import { c as cva } from "./index-BPNhyx9d.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-U0VmxhcO.js";
import "./index-DvlYfcwf.js";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var startTransition = React[" startTransition ".trim().toString()] || (() => void 0);
var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = createCollection("Toast");
var SwipeDirection = {
  Left: "left",
  Right: "right"
};
var ToastType = {
  Foreground: "foreground"
};
var [createToastContext, createToastScope] = createContextScope("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
function scheduleUpdate(update) {
  if (typeof startTransition === "function") {
    startTransition(update);
  } else {
    update();
  }
}
__name(scheduleUpdate, "scheduleUpdate");
var ToastProvider = /* @__PURE__ */ __name((props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = SwipeDirection.Right,
    swipeThreshold = 50,
    announcerContainer,
    children
  } = props;
  const [viewport, setViewport] = reactExports.useState(null);
  const [toastCount, setToastCount] = reactExports.useState(0);
  const isClosePausedRef = reactExports.useRef(false);
  const onViewportChange = reactExports.useCallback((node) => {
    scheduleUpdate(() => setViewport(node));
  }, []);
  const onToastAdd = reactExports.useCallback(() => {
    scheduleUpdate(() => setToastCount((prevCount) => prevCount + 1));
  }, []);
  const onToastRemove = reactExports.useCallback(() => {
    scheduleUpdate(() => setToastCount((prevCount) => prevCount - 1));
  }, []);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange,
      onToastAdd,
      onToastRemove,
      isClosePausedRef,
      announcerContainer,
      children
    }
  ) });
}, "ToastProvider");
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function ToastViewport2(props, forwardedRef) {
    const {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})",
      ...viewportProps
    } = props;
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = reactExports.useRef(null);
    const headFocusProxyRef = reactExports.useRef(null);
    const tailFocusProxyRef = reactExports.useRef(null);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    reactExports.useEffect(() => {
      const handleKeyDown = /* @__PURE__ */ __name((event) => {
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed) ref.current?.focus();
      }, "handleKeyDown");
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    reactExports.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = /* @__PURE__ */ __name(() => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        }, "handlePause");
        const handleResume = /* @__PURE__ */ __name(() => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        }, "handleResume");
        const handleFocusOutResume = /* @__PURE__ */ __name((event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        }, "handleFocusOutResume");
        const handlePointerLeaveResume = /* @__PURE__ */ __name(() => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        }, "handlePointerLeaveResume");
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = reactExports.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    reactExports.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = /* @__PURE__ */ __name((event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.current?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
            }
          }
        }, "handleKeyDown");
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DismissableLayerBranch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.ol, { tabIndex: -1, ...viewportProps, ref: composedRefs }) }),
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
);
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function ToastFocusProxy(props, forwardedRef) {
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      VisuallyHidden,
      {
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !context.viewport?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
      }
    );
  }, "ToastFocusProxy")
);
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast = /* @__PURE__ */ reactExports.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name(function Toast2(props, forwardedRef) {
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? true,
      onChange: onOpenChange,
      caller: TOAST_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToastImpl,
      {
        open,
        ...toastProps,
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      }
    ) });
  }, "Toast")
);
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function ToastImpl2(props, forwardedRef) {
    const {
      __scopeToast,
      type = ToastType.Foreground,
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      ...toastProps
    } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const [node, setNode] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setNode);
    const pointerStartRef = reactExports.useRef(null);
    const swipeDeltaRef = reactExports.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = reactExports.useRef(0);
    const closeTimerRemainingTimeRef = reactExports.useRef(duration);
    const closeTimerRef = reactExports.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      const isFocusInToast = node?.contains(document.activeElement);
      if (isFocusInToast) context.viewport?.focus();
      onClose();
    });
    const startTimer = reactExports.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    reactExports.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = /* @__PURE__ */ __name(() => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume?.();
        }, "handleResume");
        const handlePause = /* @__PURE__ */ __name(() => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause?.();
        }, "handlePause");
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    reactExports.useEffect(() => {
      closeTimerRemainingTimeRef.current = duration;
      if (open && !context.isClosePausedRef.current) {
        startTimer(duration);
      }
    }, [open, duration, context.isClosePausedRef, startTimer]);
    reactExports.useEffect(() => {
      return () => {
        window.clearTimeout(closeTimerRef.current);
      };
    }, []);
    reactExports.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = reactExports.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      announceTextContent && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === ToastType.Foreground ? "assertive" : "polite",
          children: announceTextContent
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, (event) => {
              const isFocusInToast = getItems().some(
                (item) => item.ref.current?.contains(event.target)
              );
              if (!isFocusInToast) {
                handleClose();
              }
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.li,
              {
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection,
                ...toastProps,
                ref: composedRefs,
                style: { userSelect: "none", touchAction: "none", ...props.style },
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape") return;
                  onEscapeKeyDown?.(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0) return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current) return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              }
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }, "ToastImpl")
);
var ToastAnnounce = /* @__PURE__ */ __name((props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = reactExports.useState(false);
  const [isAnnounced, setIsAnnounced] = reactExports.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  reactExports.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { asChild: true, container: context.announcerContainer || void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { ...announceProps, children: renderAnnounceText && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) }) });
}, "ToastAnnounce");
var ACTION_NAME = "ToastAction";
var ToastAction = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function ToastAction2(props, forwardedRef) {
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { altText, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, { ...actionProps, ref: forwardedRef }) });
  }, "ToastAction")
);
var CLOSE_NAME = "ToastClose";
var ToastClose = /* @__PURE__ */ reactExports.forwardRef(
  /* @__PURE__ */ __name(function ToastClose2(props, forwardedRef) {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      }
    ) });
  }, "ToastClose")
);
var ToastAnnounceExclude = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ __name(function ToastAnnounceExclude2(props, forwardedRef) {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0,
      ...announceExcludeProps,
      ref: forwardedRef
    }
  );
}, "ToastAnnounceExclude"));
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText) textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
__name(getAnnounceTextContent, "getAnnounceTextContent");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
__name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var isDeltaInDirection = /* @__PURE__ */ __name((delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === SwipeDirection.Left || direction === SwipeDirection.Right) {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
}, "isDeltaInDirection");
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
__name(useNextFrame, "useNextFrame");
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
__name(isHTMLElement, "isHTMLElement");
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
__name(getTabbableCandidates, "getTabbableCandidates");
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
__name(focusFirst, "focusFirst");
var DEFAULT_SIZE$3 = 24;
var VIEW_BOX$3 = "0 0 24 24";
function IconBase$3({
  size = DEFAULT_SIZE$3,
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
      viewBox: VIEW_BOX$3,
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
function CircleCheckIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase$3, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M14.293 9.293C14.683 8.902 15.317 8.902 15.707 9.293C16.097 9.683 16.098 10.317 15.707 10.707L11.707 14.707C11.317 15.098 10.683 15.097 10.293 14.707L8.293 12.707C7.902 12.317 7.902 11.683 8.293 11.293C8.683 10.902 9.317 10.902 9.707 11.293L11 12.586L14.293 9.293Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1ZM12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C16.971 21 21 16.971 21 12C21 7.029 16.971 3 12 3Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      }
    )
  ] });
}
var DEFAULT_SIZE$2 = 24;
var VIEW_BOX$2 = "0 0 24 24";
function IconBase$2({
  size = DEFAULT_SIZE$2,
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
      viewBox: VIEW_BOX$2,
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
function CircleQuestionMarkIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase$2, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12.0098 16C12.5621 16 13.0098 16.448 13.0098 17C13.0098 17.552 12.5621 18 12.0098 18H12C11.4477 18 11 17.552 11 17C11 16.448 11.4477 16 12 16H12.0098Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M9.8936 6.547C10.7077 6.068 11.6649 5.893 12.5957 6.053C13.5264 6.212 14.3712 6.697 14.9795 7.419C15.5875 8.141 15.921 9.056 15.9199 10L15.9072 10.28C15.7797 11.655 14.7344 12.575 13.9746 13.082C13.5392 13.372 13.1105 13.585 12.7949 13.726C12.6357 13.796 12.5009 13.85 12.4043 13.887C12.356 13.905 12.3166 13.92 12.2881 13.93C12.274 13.935 12.2626 13.939 12.2539 13.942C12.2497 13.944 12.2461 13.945 12.2432 13.946L12.2393 13.947L12.2373 13.948C11.7134 14.123 11.1453 13.839 10.9707 13.315C10.7969 12.792 11.0792 12.226 11.6016 12.051H11.6035C11.6061 12.05 11.6112 12.048 11.6182 12.046C11.6335 12.04 11.659 12.031 11.6924 12.019C11.7598 11.993 11.8605 11.953 11.9824 11.898C12.2292 11.789 12.5509 11.628 12.8652 11.418C13.5546 10.958 13.9197 10.469 13.9199 10V9.998C13.9205 9.526 13.7542 9.068 13.4502 8.707C13.146 8.346 12.7232 8.103 12.2578 8.023C11.7925 7.944 11.3133 8.031 10.9062 8.271C10.4993 8.51 10.19 8.886 10.0332 9.331C9.8499 9.852 9.2788 10.127 8.7578 9.943C8.2371 9.76 7.9634 9.189 8.1465 8.668C8.46 7.777 9.0792 7.025 9.8936 6.547Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 1C18.0751 1 23 5.925 23 12C23 18.075 18.0751 23 12 23C5.9249 23 1 18.075 1 12C1 5.925 5.9249 1 12 1ZM12 3C7.0294 3 3 7.029 3 12C3 16.971 7.0294 21 12 21C16.9706 21 21 16.971 21 12C21 7.029 16.9706 3 12 3Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      }
    )
  ] });
}
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
function InfoIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase$1, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 11C12.552 11 13 11.448 13 12V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V12C11 11.448 11.448 11 12 11Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12.01 7C12.562 7 13.01 7.448 13.01 8C13.01 8.552 12.562 9 12.01 9H12C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7H12.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1ZM12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C16.971 21 21 16.971 21 12C21 7.029 16.971 3 12 3Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      }
    )
  ] });
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
function TriangleAlertIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconBase, { ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12.01 16C12.562 16 13.01 16.448 13.01 17C13.01 17.552 12.562 18 12.01 18H12C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16H12.01Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 8C12.552 8 13 8.448 13 9V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9C11 8.448 11.448 8 12 8Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M11.99 1.986C12.521 1.986 13.043 2.127 13.501 2.395C13.958 2.661 14.337 3.044 14.599 3.504L22.597 17.5L22.689 17.674C22.892 18.085 22.998 18.539 22.998 18.999C22.998 19.525 22.861 20.043 22.598 20.499C22.335 20.955 21.956 21.333 21.5 21.597C21.045 21.86 20.527 21.999 20.001 22H4C3.475 22.003 2.957 21.868 2.5 21.608C2.04 21.347 1.657 20.968 1.391 20.512C1.124 20.055 0.984 19.536 0.982 19.007C0.981 18.479 1.12 17.961 1.383 17.504L9.382 3.504C9.643 3.044 10.023 2.661 10.48 2.395C10.939 2.128 11.46 1.986 11.99 1.986ZM11.99 3.986C11.814 3.986 11.64 4.033 11.487 4.122C11.334 4.211 11.207 4.339 11.12 4.493L11.119 4.496L3.119 18.496L3.116 18.5C3.028 18.653 2.982 18.827 2.982 19.003C2.983 19.179 3.03 19.352 3.118 19.504C3.207 19.656 3.335 19.783 3.488 19.87C3.641 19.957 3.815 20.002 3.991 20H19.999C20.174 20 20.347 19.954 20.499 19.866C20.651 19.778 20.777 19.652 20.864 19.5C20.952 19.348 20.998 19.175 20.998 19C20.998 18.825 20.952 18.652 20.864 18.5L20.862 18.496L12.862 4.496L12.86 4.493C12.773 4.34 12.647 4.211 12.494 4.122C12.341 4.033 12.167 3.986 11.99 3.986Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      }
    )
  ] });
}
const ICON_CLASS = "fs:size-icon-md fs:shrink-0";
function SnackbarIcon({ variant }) {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckIcon, { className: ICON_CLASS });
    case "error":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlertIcon, { className: ICON_CLASS });
    case "warning":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMarkIcon, { className: ICON_CLASS });
    case "info":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(InfoIcon, { className: ICON_CLASS });
  }
}
SnackbarIcon.__docgenInfo = { "description": "Figma glyphs `info`, `circle-check`, `triangle-alert` and `circle-question-mark`, drawn at 18px.\nDecorative: the message carries the meaning.", "methods": [], "displayName": "SnackbarIcon", "props": { "variant": { "required": true, "tsType": { "name": "union", "raw": "'info' | 'success' | 'error' | 'warning'", "elements": [{ "name": "literal", "value": "'info'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'error'" }, { "name": "literal", "value": "'warning'" }] }, "description": "" } } };
const snackbarVariants = cva(
  "fs:box-border fs:flex fs:min-h-10 fs:w-72.5 fs:max-w-full fs:items-center fs:gap-s-2 fs:rounded-button fs:p-s-3 fs:text-label-3",
  {
    variants: {
      variant: {
        info: "",
        success: "",
        error: "",
        warning: ""
      },
      appearance: {
        secondary: "",
        primary: ""
      }
    },
    compoundVariants: [
      {
        appearance: "secondary",
        variant: "info",
        class: "fs:bg-deep-sea-200 fs:text-deep-sea-900"
      },
      { appearance: "secondary", variant: "success", class: "fs:bg-green-200 fs:text-green-900" },
      { appearance: "secondary", variant: "error", class: "fs:bg-red-100 fs:text-red-700" },
      { appearance: "secondary", variant: "warning", class: "fs:bg-lime-200 fs:text-gray-900" },
      { appearance: "primary", variant: "info", class: "fs:bg-deep-sea-600 fs:text-gray-0" },
      { appearance: "primary", variant: "success", class: "fs:bg-green-700 fs:text-gray-0" },
      { appearance: "primary", variant: "error", class: "fs:bg-red-600 fs:text-gray-0" },
      { appearance: "primary", variant: "warning", class: "fs:bg-lime-400 fs:text-gray-900" }
    ],
    defaultVariants: { variant: "info", appearance: "secondary" }
  }
);
const DEFAULT_DURATION_MS = 4e3;
const DEFAULT_REGION_LABEL = "Notifications";
function Snackbar({
  variant = "info",
  appearance = "secondary",
  action,
  className,
  children,
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: cn(snackbarVariants({ variant, appearance }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarIcon, { variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs:min-w-0 fs:flex-1 fs:break-words", children }),
    action
  ] });
}
const SnackbarContext = reactExports.createContext(null);
function useSnackbar() {
  const api = reactExports.useContext(SnackbarContext);
  if (api === null) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return api;
}
const actionClasses = "fs:shrink-0 fs:cursor-pointer fs:rounded-button fs:border-0 fs:bg-transparent fs:p-0 fs:text-label-3 fs:text-current fs:underline fs:outline-none fs:focus-visible:shadow-focus";
function SnackbarToast({
  entry,
  duration,
  onClose
}) {
  const { id, message, variant = "info", appearance, action } = entry;
  const type = variant === "error" || variant === "warning" ? "foreground" : "background";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toast,
    {
      type,
      duration: entry.duration ?? duration,
      onOpenChange: (open) => {
        if (!open) onClose(id);
      },
      className: "fs:pointer-events-auto fs:list-none fs:data-[state=open]:animate-snackbar-in fs:motion-reduce:animate-none!",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Snackbar,
        {
          variant,
          appearance,
          action: action ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAction, { altText: action.label, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: actionClasses, onClick: action.onClick, children: action.label }) }) : void 0,
          children: message
        }
      )
    }
  );
}
function SnackbarProvider({
  children,
  duration = DEFAULT_DURATION_MS,
  label = DEFAULT_REGION_LABEL
}) {
  const [entries, setEntries] = reactExports.useState([]);
  const nextId = reactExports.useRef(0);
  const dismiss = reactExports.useCallback((id) => {
    setEntries((current) => current.filter((entry) => entry.id !== id));
  }, []);
  const show = reactExports.useCallback((options) => {
    nextId.current += 1;
    const id = `snackbar-${nextId.current}`;
    setEntries((current) => [...current, { ...options, id }]);
    return id;
  }, []);
  const api = reactExports.useMemo(() => ({ show, dismiss }), [show, dismiss]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContext, { value: api, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { duration, swipeDirection: "down", children: [
    children,
    entries.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarToast, { entry, duration, onClose: dismiss }, entry.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToastViewport,
      {
        label: `${label} ({hotkey})`,
        className: "fs:pointer-events-none fs:fixed fs:bottom-s-5 fs:left-1/2 fs:z-toast fs:m-0 fs:flex fs:w-max fs:max-w-full fs:-translate-x-1/2 fs:list-none fs:flex-col fs:items-center fs:gap-s-2 fs:p-0 fs:outline-none"
      }
    )
  ] }) });
}
Snackbar.__docgenInfo = { "description": "The snackbar visual: icon, message and optional action. `SnackbarProvider` renders these for you.", "methods": [], "displayName": "Snackbar", "props": { "variant": { "required": false, "tsType": { "name": "union", "raw": "'info' | 'success' | 'error' | 'warning'", "elements": [{ "name": "literal", "value": "'info'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'error'" }, { "name": "literal", "value": "'warning'" }] }, "description": "Figma `Type`. Defaults to `info`.", "defaultValue": { "value": "'info'", "computed": false } }, "appearance": { "required": false, "tsType": { "name": "union", "raw": "'secondary' | 'primary'", "elements": [{ "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'primary'" }] }, "description": "Figma `Style`: `secondary` (tinted, default) or `primary` (solid).", "defaultValue": { "value": "'secondary'", "computed": false } }, "action": { "required": false, "tsType": { "name": "ReactNode" }, "description": 'Optional action shown after the message, such as an "Undo" button.' } }, "composes": ["ComponentProps"] };
SnackbarProvider.__docgenInfo = { "description": "Mounts the toast region and provides `useSnackbar()` to the tree below it.", "methods": [], "displayName": "SnackbarProvider", "props": { "children": { "required": true, "tsType": { "name": "ReactNode" }, "description": "" }, "duration": { "required": false, "tsType": { "name": "number" }, "description": "Default auto-dismiss time in milliseconds.", "defaultValue": { "value": "4000", "computed": false } }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Accessible name of the notifications region (Radix appends the F8 hotkey hint).", "defaultValue": { "value": "'Notifications'", "computed": false } } } };
const messages = {
  info: "This is an info message",
  success: "Action completed successfully",
  error: "Something went wrong",
  warning: "Please check this before continuing"
};
const variants = Object.keys(messages);
const appearances = ["secondary", "primary"];
const meta = {
  title: "Feedback/Snackbar",
  component: Snackbar,
  args: {
    variant: "info",
    appearance: "secondary",
    children: messages.info
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variants
    },
    appearance: {
      control: "inline-radio",
      options: appearances
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=732-17456"
    }
  }
};
const Info = {};
const Success = {
  args: {
    variant: "success",
    children: messages.success
  }
};
const Error$1 = {
  args: {
    variant: "error",
    children: messages.error
  }
};
const Warning = {
  args: {
    variant: "warning",
    children: messages.warning
  }
};
const Primary = {
  args: {
    appearance: "primary",
    variant: "success",
    children: messages.success
  }
};
const WithAction = {
  args: {
    action: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: {
      all: "unset",
      cursor: "pointer",
      textDecoration: "underline"
    }, children: "Undo" }),
    children: "Quote deleted"
  }
};
const AllVariants = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gap: 20
  }, children: variants.flatMap((variant) => appearances.map((appearance) => /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { variant, appearance, children: messages[variant] }, `${variant}-${appearance}`))) })
};
function Playground() {
  const {
    show
  } = useSnackbar();
  const buttonStyle = {
    height: 40,
    padding: "0 16px",
    cursor: "pointer",
    font: "inherit"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }, children: [
    variants.map((variant) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", style: buttonStyle, onClick: () => show({
      message: messages[variant],
      variant
    }), children: [
      "Show ",
      variant
    ] }, variant)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", style: buttonStyle, onClick: () => show({
      message: "Quote deleted",
      appearance: "primary",
      variant: "success",
      action: {
        label: "Undo",
        onClick: () => void 0
      },
      duration: 8e3
    }), children: "Show with action" })
  ] });
}
const WithProvider = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Playground, {}) })
};
Info.parameters = {
  ...Info.parameters,
  docs: {
    ...Info.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Info.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'success',\n    children: messages.success\n  }\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Error$1.parameters = {
  ...Error$1.parameters,
  docs: {
    ...Error$1.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'error',\n    children: messages.error\n  }\n}",
      ...Error$1.parameters?.docs?.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...Warning.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'warning',\n    children: messages.warning\n  }\n}",
      ...Warning.parameters?.docs?.source
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    appearance: 'primary',\n    variant: 'success',\n    children: messages.success\n  }\n}",
      ...Primary.parameters?.docs?.source
    },
    description: {
      story: "Figma `Style=Primary` is the solid version of every type.",
      ...Primary.parameters?.docs?.description
    }
  }
};
WithAction.parameters = {
  ...WithAction.parameters,
  docs: {
    ...WithAction.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    action: <button type="button" style={{
      all: 'unset',
      cursor: 'pointer',
      textDecoration: 'underline'
    }}>
        Undo
      </button>,
    children: 'Quote deleted'
  }
}`,
      ...WithAction.parameters?.docs?.source
    }
  }
};
AllVariants.parameters = {
  ...AllVariants.parameters,
  docs: {
    ...AllVariants.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'repeat(2, auto)',\n    gap: 20\n  }}>\n      {variants.flatMap(variant => appearances.map(appearance => <Snackbar key={`${variant}-${appearance}`} variant={variant} appearance={appearance}>\n            {messages[variant]}\n          </Snackbar>))}\n    </div>\n}",
      ...AllVariants.parameters?.docs?.source
    },
    description: {
      story: "Every Figma variant: Secondary on the left, Primary on the right.",
      ...AllVariants.parameters?.docs?.description
    }
  }
};
WithProvider.parameters = {
  ...WithProvider.parameters,
  docs: {
    ...WithProvider.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => <SnackbarProvider>\n      <Playground />\n    </SnackbarProvider>\n}",
      ...WithProvider.parameters?.docs?.source
    },
    description: {
      story: "`show()` from `useSnackbar()` inside a `SnackbarProvider`; each one dismisses itself after 4s.",
      ...WithProvider.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Info", "Success", "Error", "Warning", "Primary", "WithAction", "AllVariants", "WithProvider"];
export {
  AllVariants,
  Error$1 as Error,
  Info,
  Primary,
  Success,
  Warning,
  WithAction,
  WithProvider,
  __namedExportsOrder,
  meta as default
};
