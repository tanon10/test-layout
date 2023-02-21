const classes = {
  main: "layout-content",
};

export const LayoutContent = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
