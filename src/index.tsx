import { FC } from 'react';

export const ComposeLayouts: FC<{ layouts: any[] } & { [key: string]: any }> = ({
  layouts,
  children,
  ...layoutProps
}) => {
  if (!layouts.length) return children;

  return layouts.reverse().reduce((acc: any, Layout: any) => <Layout {...layoutProps}>{acc}</Layout>, children);
};
