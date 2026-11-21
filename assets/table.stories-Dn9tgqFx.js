import { j as jsxRuntimeExports } from "./jsx-runtime-TULtkvNU.js";
import { c as cn } from "./cn-JQCre-CP.js";
import "./index-DvlYfcwf.js";
function Table({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs:w-full fs:overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "table",
    {
      ref,
      className: cn(
        "fs:w-full fs:border-collapse fs:text-left fs:text-body-4 fs:text-ink",
        className
      ),
      ...props
    }
  ) });
}
function TableHeader({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      ref,
      className: cn(
        "fs:border-0 fs:border-b fs:border-solid fs:border-line fs:text-label-3 fs:text-muted",
        className
      ),
      ...props
    }
  );
}
function TableBody({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("fs:divide-y fs:divide-line-soft", className), ...props });
}
function TableRow({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { ref, className: cn(className), ...props });
}
function TableHead({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { ref, className: cn("fs:px-s-3 fs:py-s-2 fs:font-medium", className), ...props });
}
function TableCell({ className, ref, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ref, className: cn("fs:px-s-3 fs:py-s-3 fs:align-top", className), ...props });
}
Table.__docgenInfo = { "description": "", "methods": [], "displayName": "Table" };
TableHeader.__docgenInfo = { "description": "", "methods": [], "displayName": "TableHeader" };
TableBody.__docgenInfo = { "description": "", "methods": [], "displayName": "TableBody" };
TableRow.__docgenInfo = { "description": "", "methods": [], "displayName": "TableRow" };
TableHead.__docgenInfo = { "description": "", "methods": [], "displayName": "TableHead" };
TableCell.__docgenInfo = { "description": "", "methods": [], "displayName": "TableCell" };
const plans = [{
  name: "Class 1",
  cover: "500,000",
  premium: "12,500"
}, {
  name: "Class 2+",
  cover: "300,000",
  premium: "8,900"
}, {
  name: "Class 3+",
  cover: "200,000",
  premium: "5,500"
}];
const meta = {
  title: "Feedback/Table",
  component: Table,
  parameters: {
    // Carried over from the old monorepo; there is no Figma frame yet.
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iPwbM7hPmhnPWN4mz4n85g/Fastsure?node-id=5-564"
    }
  }
};
const Default = {
  args: {
    "aria-label": "Sample plans"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 480
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Sum insured (THB)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Premium (THB)" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: plan.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: plan.cover }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: plan.premium })
    ] }, plan.name)) })
  ] }) })
};
const Overflowing = {
  args: {
    "aria-label": "Sample plans"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    width: 240
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { ...args, style: {
    minWidth: 480
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Sum insured (THB)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Premium (THB)" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "Class 1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "500,000" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "12,500" })
    ] }) })
  ] }) })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    'aria-label': 'Sample plans'\n  },\n  render: args => <div style={{\n    width: 480\n  }}>\n      <Table {...args}>\n        <TableHeader>\n          <TableRow>\n            <TableHead>Plan</TableHead>\n            <TableHead>Sum insured (THB)</TableHead>\n            <TableHead>Premium (THB)</TableHead>\n          </TableRow>\n        </TableHeader>\n        <TableBody>\n          {plans.map(plan => <TableRow key={plan.name}>\n              <TableCell>{plan.name}</TableCell>\n              <TableCell>{plan.cover}</TableCell>\n              <TableCell>{plan.premium}</TableCell>\n            </TableRow>)}\n        </TableBody>\n      </Table>\n    </div>\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
Overflowing.parameters = {
  ...Overflowing.parameters,
  docs: {
    ...Overflowing.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    'aria-label': 'Sample plans'\n  },\n  render: args => <div style={{\n    width: 240\n  }}>\n      <Table {...args} style={{\n      minWidth: 480\n    }}>\n        <TableHeader>\n          <TableRow>\n            <TableHead>Plan</TableHead>\n            <TableHead>Sum insured (THB)</TableHead>\n            <TableHead>Premium (THB)</TableHead>\n          </TableRow>\n        </TableHeader>\n        <TableBody>\n          <TableRow>\n            <TableCell>Class 1</TableCell>\n            <TableCell>500,000</TableCell>\n            <TableCell>12,500</TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </div>\n}",
      ...Overflowing.parameters?.docs?.source
    },
    description: {
      story: "The wrapper scrolls sideways when the table is wider than its container.",
      ...Overflowing.parameters?.docs?.description
    }
  }
};
const __namedExportsOrder = ["Default", "Overflowing"];
export {
  Default,
  Overflowing,
  __namedExportsOrder,
  meta as default
};
