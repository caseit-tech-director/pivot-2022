import LargeLayout from '../Layout/LargeLayout';
import style from '../../styles/modules/_locomotive.module.scss'

export default function LocomotiveParagraph(props) {
  return (
    <LargeLayout className="flex">
      <div className={style['extra--heading']}>
        <h4>{props.text}</h4>
      </div>
    </LargeLayout>
  );
}
