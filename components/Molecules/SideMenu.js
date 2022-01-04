export default function SideMenu(props) {
  return (
    <div className="scroll--menu">
      <div className="scroll--menu--title">
        <h6 className="subtitle-1">Subtitle</h6>
      </div>
      <ul>
        <li>
          <a href="">{props.link1}</a>
        </li>
        <li>
          <a href="">{props.link2}</a>
        </li>
        <li>
          <a href="">{props.link3}</a>
        </li>
        <li>
          <a href="">{props.link4}</a>
        </li>
        <li>
          <a href="">{props.link5}</a>
        </li>
        <li>
          <a href="">{props.link6}</a>
        </li>
      </ul>
    </div>
  );
}
