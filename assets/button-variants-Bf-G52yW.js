import { c as cn } from "./cn-JQCre-CP.js";
const GREY_DISABLED = "fs:bg-disabled-surface fs:text-disabled-foreground fs:border-0";
const FADED_DISABLED = "fs:opacity-40";
const solidVariantClasses = {
  primary: {
    base: "fs:bg-accent fs:text-accent-foreground",
    interactive: "fs:hover:bg-accent-hover fs:active:bg-accent-pressed",
    disabled: GREY_DISABLED
  },
  secondary: {
    base: "fs:bg-secondary fs:text-secondary-foreground",
    interactive: "fs:hover:bg-secondary-hover fs:active:bg-secondary-pressed",
    disabled: GREY_DISABLED
  },
  default: {
    base: "fs:bg-panel fs:text-ink fs:border fs:border-line",
    interactive: "fs:hover:bg-surface-subtle fs:active:bg-surface-muted",
    disabled: GREY_DISABLED
  },
  "alpha-black": {
    base: "fs:bg-alpha-black-1 fs:text-ink",
    interactive: "fs:hover:bg-alpha-black-2 fs:active:bg-alpha-black-3",
    disabled: FADED_DISABLED
  },
  "alpha-white": {
    base: "fs:bg-alpha-white-1 fs:text-accent-foreground",
    interactive: "fs:hover:bg-alpha-white-2 fs:active:bg-alpha-white-3",
    disabled: FADED_DISABLED
  },
  "ghost-white": {
    base: "fs:bg-transparent fs:text-accent-foreground",
    interactive: "fs:hover:bg-alpha-white-1 fs:active:bg-alpha-white-2",
    disabled: FADED_DISABLED
  }
};
function resolveVariantClasses(classes, state) {
  return cn(
    classes.base,
    !state.isInert && classes.interactive,
    state.isDisabled && classes.disabled
  );
}
const CONTROL_BASE_CLASSES = cn(
  "fs:box-border fs:inline-flex fs:items-center fs:justify-center fs:border-0 fs:border-solid",
  "fs:p-0 fs:m-0 fs:font-sans fs:whitespace-nowrap fs:no-underline fs:select-none",
  "fs:cursor-pointer fs:transition-colors fs:outline-none",
  "fs:focus-visible:shadow-focus",
  "fs:aria-disabled:cursor-not-allowed fs:disabled:cursor-not-allowed"
);
export {
  CONTROL_BASE_CLASSES as C,
  resolveVariantClasses as r,
  solidVariantClasses as s
};
