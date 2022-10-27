/// <reference types="vite/client" />

declare var __DEV__: boolean;

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface SGHTMLElement extends HTMLElement {
  version: string;
}

