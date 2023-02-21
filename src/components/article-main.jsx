const classes = {
  main: "article-main",
  content: "article-main__content",
  imagen: "article-main__image",
};
export const Article = ({ urlImage, title, content }) => {
  return (
    <div className={classes.main}>
      <div className={classes.imagen}>
        <img src={urlImage} alt={title} />
      </div>
      <div className={classes.content}>
        <h3 itemProp="title">{title}</h3>
        <p itemProp="description">{content}</p>
      </div>
    </div>
  );
};
