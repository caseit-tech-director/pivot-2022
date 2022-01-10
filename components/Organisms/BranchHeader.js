import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_header.module.scss';

export default function BranchHeader(props) {
  return (
    <MediumLayout>
      <div className="section--header--wrapper flex--justify--center">
        <h2>{props.header}</h2>
        <p className="overline">{props.overline}</p>
      </div>
      <div className="grid--gc--s7--end flex--justify--center">
        <p className="body-1">{props.paragraph}</p>
      </div>
    </MediumLayout>
  );
}
