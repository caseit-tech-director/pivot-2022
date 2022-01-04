export default function SectionHeader(props) {
  return (
    <div className="section--header--wrapper">
      <h2>{props.header}</h2>
      <p className="overline">{props.overline}</p>
    </div>
  );
}
