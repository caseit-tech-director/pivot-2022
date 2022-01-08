import style from '../../styles/modules/_banner.module.scss';

export default function BannerHeader(props) {
  return (
      <div className={style['banner--header--wrapper']}>
        <div className={style['banner--header--content']}>
          <h5 className={style['banner--title']}>{props.title}</h5>
          <p className="overline">{props.overline}</p>
        </div>
      </div>
  );
}
