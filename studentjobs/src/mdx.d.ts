// mdx.d.ts — let TypeScript understand MDX modules
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
