const classes = {
  main: "article-img",
  content: "article-img__content",
  imagen: "article-img__image",
};
export const ArticleImg = ({ urlImage, title, content, author }) => {
  return (
    <div className={classes.main}>
      <img className={classes.imagen} src={urlImage} alt={title} />
      <div className={classes.content}>
        <h4>{title}</h4>
        <h3>{content}</h3>
        <div>{author}</div>
      </div>
    </div>
  );
};
