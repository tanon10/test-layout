const classes = {
  main: "article-img",
  image: "article-img__image",
  content: "article-img__image__content",
};
export const ArticleImg = ({ urlImage, title, content, author }) => {
  return (
    <div className={classes.main}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${urlImage})` }}
      >
        <div className={classes.content}>
          <h4>{title}</h4>
          <h3>{content}</h3>
          <div>{author}</div>
        </div>
      </div>
    </div>
  );
};
