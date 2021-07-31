import React from "react";

export const ComposeLayouts = ({
  layouts,
  children,
  ...layoutProps
}) => {
  if (!layouts.length) return children;

  return layouts.reverse().reduce((acc, Layout) => <Layout {...layoutProps}>{acc}</Layout>, children);
};
