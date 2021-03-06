import LargeLayout from '../Layout/LargeLayout';
import style from '../../styles/modules/_header.module.scss';

export default function BranchHeader(props) {
  return (
    <LargeLayout>
      <div className="section--header--wrapper flex--justify--center ">
        <h2>{props.header}</h2>
        <p className="overline">{props.overline}</p>
      </div>
      <div className="grid--gc--s7--end flex--justify--center">
        <p className="body-1">{props.paragraph}</p>
      </div>
    </LargeLayout>
  );
}
