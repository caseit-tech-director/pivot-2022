import MediumLayout from './Layout/MediumLayout';
import style from '../styles/modules/_header.module.scss';
import SectionHeader from '../components/SectionHeader';

export default function BranchHeader(props) {
  return (
    <MediumLayout>
      <div className="section--header--wrapper">
        <h2>{props.header}</h2>
        <p className="overline">{props.overline}</p>
      </div>
      <div className={style['branch--paragraph--wrapper']}>
        {props.paragraph}
      </div>
    </MediumLayout>
  );
}
