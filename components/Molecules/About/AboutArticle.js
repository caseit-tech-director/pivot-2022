import Link from 'next/link';
export default function AboutArticle(props) {
  return (
    <article id="aboutArticle" className="grid--gc--s7--e11">
      <h3 className="margin--bottom--sm " id="aboutArticleTitle">
        {props.title}
      </h3>
      <p className="margin--bottom--xs body-1" id="aboutArticleContent">
        {props.paragraph}
      </p>
      <div className="arrow--link">
        <Link href="/about/organizers">
          Learn about the organizers -&gt;
        </Link>
      </div>
    </article>
  );
}
