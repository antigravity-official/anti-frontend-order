import * as $ from './Layout.styles';

export type LayoutProps = {
  children: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
  return <$.LayoutWrapper>{props.children}</$.LayoutWrapper>;
};

export default Layout;
