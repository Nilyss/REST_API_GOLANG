declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGVGElement>>;
  const src: string;
  export default src;
}
