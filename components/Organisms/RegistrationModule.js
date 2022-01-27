import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_banner.module.scss';
import Button from '../Molecules/button';
import Link from 'next/link';

export default function RegistrationModule(props) {
  return (
    <MediumLayout className="flex--inherit">
      <div className="center--bannner centered--section--header center--text grid--simple--spread">
        <h6 className="margin--bottom--xs">{props.header}</h6>
        <p className="overline">{props.overline}</p>
        <div className={style['registration--cta--wrapper']}>
          <Button text={'JOIN THE COMPETITION'} />
          {/* <Button text={'BECOME AN ORGANIZER'} /> */}
        </div>
      </div>
    </MediumLayout>
  );
}
