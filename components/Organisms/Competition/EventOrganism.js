import MaxLayout from '../../Layout/MaxLayout';
import style from '../../../styles/modules/_events.module.scss';
import Image from 'next/image';

export default function EventOrganism(props) {
  return (
    <div className={style['event--organism--wrapper']}>
      <div className={style['hr--wrapper']}>
        <hr />
      </div>
      {/* <Image src={props.img} alt={props.alt} /> */}
      <div>
        <h6 className="overline">{props.overline}</h6>
        <p className="content body-2">{props.title}</p>
      </div>
      <div>
        <h6 className="overline">Sponsor:</h6>
        <p className="content body-2">{props.sponsor}</p>
      </div>
      <div>
        <h6 className="overline">Note:</h6>
        <p className="content body-2">{props.desc}</p>
      </div>
    </div>
  );
}
