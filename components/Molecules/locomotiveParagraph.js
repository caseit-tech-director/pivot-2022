import LargeLayout from '../Layout/LargeLayout';
import style from '../../styles/modules/_locomotive.module.scss';

export default function LocomotiveParagraph(props) {
  return (
    <div className="bg-color--primary">
      <LargeLayout className={style['content--container']}>
        <div className={style['extra--heading']}>
          <h4>{props.text}</h4>
        </div>
      </LargeLayout>
    </div>
  );
}
