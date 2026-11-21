import { f as fontFamily, c as color } from "./index-DvlYfcwf.js";
const docsFont = { fontFamily: fontFamily.sans };
const mutedText = { ...docsFont, color: color.muted, fontSize: 12 };
const gridStyle = (minWidth) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}px, 1fr))`,
  gap: 12
});
const cardStyle = {
  ...docsFont,
  border: `1px solid ${color.line}`,
  borderRadius: 12,
  background: color.panel,
  overflow: "hidden"
};
export {
  cardStyle as c,
  docsFont as d,
  gridStyle as g,
  mutedText as m
};
