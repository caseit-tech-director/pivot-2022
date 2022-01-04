import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_header.module.scss';

export default function BranchHeader(props) {
  return (
    <MediumLayout>
      <div className="section--header--wrapper flex--justify--center">
        <h2>{props.header}</h2>
        <p className="overline">{props.overline}</p>
      </div>
      <div className="grid--anchor--right--s5--e2 flex--justify--center">
        {props.paragraph}
      </div>
    </MediumLayout>
  );
}
