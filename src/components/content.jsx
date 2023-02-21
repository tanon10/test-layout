const classes = {
  main: "content",
};

export const Content = ({ children }) => {
  return <div className={classes.main}>{children}</div>;
};
