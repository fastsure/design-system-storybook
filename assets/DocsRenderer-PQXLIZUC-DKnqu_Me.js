const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-CMUW6Agn.js","./iframe-CG1WmBjX.js","./preload-helper-UZRgTS1n.js","./iframe-BXiKWx84.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-UZRgTS1n.js";
import { e, r as reactExports } from "./iframe-CG1WmBjX.js";
import { renderElement, unmountElement } from "./react-18-D-fIeDqr.js";
import { H as HeadersMdx, A as AnchorMdx, C as CodeOrSourceMdx, D as Docs } from "./blocks-CN8OIvHG.js";
import "./index-U0VmxhcO.js";
import "./jsx-runtime-TULtkvNU.js";
import "./index-D29dSsUG.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : e.createElement(e.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter?.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./react-CMUW6Agn.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(e.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, e.createElement(MDXProvider, { components }, e.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
