export default function AboutArticle(props) {
  return (
    <article id="aboutArticle" className="grid--gc--s7--e11">
      <h3 className="margin--bottom--sm " id="aboutArticleTitle">{props.title}</h3>
      <p className="margin--bottom--xs " id="aboutArticleContent">{props.paragraph}</p>
      <a className="arrow--link" href="">Learn about the organizers -&gt;</a>
    </article>
  );
}
