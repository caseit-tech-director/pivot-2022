import style from '../../styles/modules/_banner.module.scss';

export default function BannerHeader(props) {
  return (
      <div className={style['banner--header--wrapper']}>
        <h5>{props.title}</h5>
        <p className="overline">{props.overline}</p>
      </div>
  );
}
