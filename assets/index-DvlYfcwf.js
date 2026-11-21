var palette = {
  gray: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f4f5f6",
    // 150 and 350 are literal greys in Figma (toggle track, disabled checked radio), not ramp steps.
    150: "#ececec",
    200: "#ecedee",
    300: "#dee0e3",
    350: "#c7c7c7",
    400: "#b8bcc1",
    500: "#979ea5",
    600: "#6d757e",
    700: "#5a6068",
    800: "#3e4247",
    900: "#1f2123",
    1e3: "#000000"
  },
  mint: {
    50: "#ecf4f3",
    100: "#daeceb",
    200: "#c2e5e3",
    300: "#a4dfdd",
    400: "#7eddd9",
    500: "#00d2c9",
    600: "#00aaa3",
    700: "#00837d",
    800: "#005b57",
    900: "#003331"
  },
  "deep-sea": {
    50: "#f2f6f7",
    100: "#cde0e6",
    200: "#a2ccd9",
    300: "#74bbd1",
    400: "#40acce",
    500: "#2392b4",
    600: "#13708d",
    700: "#084c61",
    800: "#063543",
    900: "#031e26"
  },
  "egg-shell": {
    50: "#fefcfb",
    100: "#f8f6f3",
    200: "#f5f1ee",
    300: "#f2ede9",
    400: "#dccfc5",
    500: "#c7b1a0",
    600: "#b1947c",
    700: "#99765a",
    800: "#755a45",
    900: "#503e2f"
  },
  orange: {
    50: "#fff2eb",
    100: "#ffd4bd",
    200: "#ffb68f",
    300: "#fe9861",
    400: "#fe7a34",
    500: "#fe5c06",
    600: "#cf4801",
    700: "#9b3601",
    800: "#672400",
    900: "#331200"
  },
  red: {
    50: "#ffeceb",
    100: "#ffc1bd",
    200: "#ff978f",
    300: "#fe6c61",
    400: "#fe4234",
    500: "#fe1706",
    600: "#cf0f01",
    700: "#9b0b01",
    800: "#670700",
    900: "#330400"
  },
  yellow: {
    50: "#feecc9",
    100: "#fee7ba",
    200: "#fedd9e",
    300: "#fdd077",
    400: "#fdc047",
    500: "#fcaf17",
    600: "#df9503",
    700: "#a86700",
    800: "#805501",
    900: "#4f3501"
  },
  lime: {
    50: "#e9edd7",
    100: "#dfeab0",
    200: "#daee81",
    300: "#dafb4a",
    400: "#d0f722",
    500: "#bae30b",
    600: "#96b60b",
    700: "#738b0a",
    800: "#506108",
    900: "#2e3806"
  },
  green: {
    50: "#d9eae2",
    100: "#c0e2d1",
    200: "#a5dcc0",
    300: "#87d9af",
    400: "#67d89f",
    500: "#44d98e",
    600: "#21c472",
    700: "#159856",
    800: "#0c6a3a",
    900: "#05391e"
  },
  blue: {
    50: "#ebf6ff",
    100: "#b8e1ff",
    200: "#86cbff",
    300: "#53b6ff",
    400: "#21a0ff",
    500: "#0088ed",
    600: "#006dbf",
    700: "#005390",
    800: "#003862",
    900: "#001d33"
  }
};
var alpha = {
  "black-1": "#00000033",
  "black-2": "#0000004d",
  "black-3": "#00000066",
  "white-1": "#ffffff33",
  "white-2": "#ffffff4d",
  "white-3": "#ffffff66",
  /** Figma `white-alpha/fg/2` (70%). */
  "white-70": "#ffffffb2"
};
var semanticRefs = {
  ink: ["gray", 900],
  "ink-soft": ["gray", 800],
  muted: ["gray", 600],
  line: ["gray", 300],
  "line-soft": ["gray", 200],
  panel: ["gray", 0],
  "surface-muted": ["gray", 100],
  "surface-subtle": ["gray", 50],
  paper: ["egg-shell", 300],
  accent: ["orange", 500],
  "accent-hover": ["orange", 400],
  "accent-pressed": ["orange", 600],
  "accent-soft": ["orange", 100],
  "accent-tint": ["orange", 50],
  "accent-foreground": ["gray", 0],
  secondary: ["lime", 300],
  "secondary-hover": ["lime", 200],
  "secondary-pressed": ["lime", 500],
  "secondary-foreground": ["deep-sea", 700],
  brand: ["deep-sea", 700],
  "brand-light": ["deep-sea", 600],
  "brand-dark": ["deep-sea", 800],
  "mint-ink": ["mint", 900],
  "disabled-surface": ["gray", 300],
  "disabled-foreground": ["gray", 600],
  /** Border of a focused, open or selected control (use as `fs:border-active`). */
  active: ["mint", 500],
  "track-off": ["gray", 150],
  "control-disabled-checked": ["gray", 350],
  "calendar-selected": ["mint", 500],
  "calendar-range": ["mint", 50],
  "calendar-range-ink": ["mint", 900],
  "search-surface": ["egg-shell", 100],
  "search-surface-hover": ["egg-shell", 50],
  "search-border": ["egg-shell", 300],
  "search-placeholder": ["gray", 700],
  danger: ["red", 500],
  "danger-ink": ["red", 600],
  "danger-tint": ["red", 50],
  success: ["green", 700],
  "success-tint": ["green", 50],
  warning: ["yellow", 500],
  info: ["blue", 500],
  "info-tint": ["blue", 50],
  focus: ["blue", 600],
  "focus-ring": ["blue", 200]
};
function resolveSemantic() {
  const entries = Object.entries(semanticRefs).map(
    ([name, [hue, step]]) => {
      const ramp = palette[hue];
      return [name, ramp[step]];
    }
  );
  return Object.fromEntries(entries);
}
var color = resolveSemantic();
var radius = {
  xs: "4px",
  button: "8px",
  control: "12px",
  card: "16px",
  sheet: "24px",
  full: "999px"
};
var space = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "32px",
  8: "40px",
  /** Figma calls this step `s-20`: the large page gutter of the desktop navigation bar. */
  20: "80px"
};
var borderWidth = {
  control: "1.5px"
};
var controlHeight = {
  xs: "32px",
  sm: "40px",
  md: "48px",
  lg: "56px",
  xl: "64px"
};
var iconSize = {
  xs: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px"
};
var duration = {
  fast: "150ms",
  normal: "250ms"
};
var easing = {
  standard: "cubic-bezier(0.2, 0, 0, 1)"
};
var zIndex = {
  modal: 1e3,
  overlay: 1100,
  toast: 1200
};
var fontFamily = {
  sans: '"Google Sans", "Noto Sans Thai", "Noto Sans", system-ui, sans-serif'
};
var text = {
  "heading-1": { size: "28px", lineHeight: "32px", weight: 500 },
  "heading-2": { size: "22px", lineHeight: "28px", weight: 500 },
  "heading-4": { size: "18px", lineHeight: "24px", weight: 500 },
  "heading-4-semibold": { size: "18px", lineHeight: "24px", weight: 600 },
  "heading-5": { size: "16px", lineHeight: "24px", weight: 500 },
  "heading-5-semibold": { size: "16px", lineHeight: "24px", weight: 600 },
  "semibold-1": { size: "28px", lineHeight: "32px", weight: 600 },
  "body-2": { size: "18px", lineHeight: "24px", weight: 400 },
  "body-3": { size: "16px", lineHeight: "24px", weight: 400 },
  "body-4": { size: "14px", lineHeight: "20px", weight: 400 },
  "body-5": { size: "12px", lineHeight: "16px", weight: 400 },
  "label-2": { size: "16px", lineHeight: "24px", weight: 500 },
  "label-3": { size: "14px", lineHeight: "20px", weight: 500 },
  "label-4": { size: "12px", lineHeight: "16px", weight: 500 }
};
var shadow = {
  3: "0 4px 16px 0 #00000014",
  focus: "0 0 0 2px #86cbff"
};
export {
  controlHeight as a,
  borderWidth as b,
  color as c,
  duration as d,
  easing as e,
  fontFamily as f,
  shadow as g,
  semanticRefs as h,
  iconSize as i,
  alpha as j,
  palette as p,
  radius as r,
  space as s,
  text as t,
  zIndex as z
};
