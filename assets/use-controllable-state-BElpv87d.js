import { r as reactExports } from "./iframe-CG1WmBjX.js";
function useControllableState({
  value,
  defaultValue,
  onChange
}) {
  const [internal, setInternal] = reactExports.useState(defaultValue);
  const isControlled = value !== void 0;
  const current = isControlled ? value : internal;
  const setValue = (next) => {
    if (!isControlled) setInternal(next);
    if (!Object.is(next, current)) onChange?.(next);
  };
  return [current, setValue];
}
export {
  useControllableState as u
};
