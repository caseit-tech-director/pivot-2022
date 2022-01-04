export default function AboutArticle(props) {
  return (
    <article id="aboutArticle" className="grid--gc--s7--e11">
      <h3 id="aboutArticleTitle">{props.title}</h3>
      <p id="aboutArticleContent">{props.paragraph}</p>
    </article>
  );
}
