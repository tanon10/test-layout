const classes = {
  main: "navbar",
};
export const Navbar = ({ title, bg }) => {
  return (
    <nav className={classes.main} style={{ background: bg }}>
      <h1>{title}</h1>
    </nav>
  );
};
