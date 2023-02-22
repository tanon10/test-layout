const classes = {
  main: "article-author",
  content: "article-author__content",
  info: "article-author__content__info",
};

export const ArticleAuthor = ({ imgAuthor, author, article }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <img src={imgAuthor} />
        <div className={classes.info}>
          <h4>{author}</h4>
          <hr />
          <h3>{article}</h3>
        </div>
      </div>
    </div>
  );
};
