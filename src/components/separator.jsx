const classes = {
  main: "separator",
};

export const Separator = ({ title }) => {
  return (
    <div className={classes.main}>
      <hr />
      <h1>{title}</h1>
      <hr />
    </div>
  );
};
