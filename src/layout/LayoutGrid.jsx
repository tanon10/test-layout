const classes = {
  main: "layout-grid",
};
export const LayoutGrid = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
