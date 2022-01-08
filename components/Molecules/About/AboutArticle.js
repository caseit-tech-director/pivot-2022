export default function AboutArticle(props) {
  return (
    <article id="aboutArticle" className="grid--gc--s7--e11">
      <h3 className="margin--bottom--sm " id="aboutArticleTitle">{props.title}</h3>
      <p className="margin--bottom--xs " id="aboutArticleContent">{props.paragraph}</p>
      <a href="">Learn about the organizers -></a>
    </article>
  );
}
