import Image from "next/image"
import style from '../../styles/modules/_captioned-graphic.module.scss';

export default function CaptionedGraphic (props) {
    return(
        <div className="captioned--graphic--wrapper grid--gc--s1--e6">
            <Image objectFit="contain" className="margin--bottom--sm" src={props.image} width={props.width} height={props.height} alt={props.alt}/>
            <div className={[style['graphic--content--container'], style['items--flex--med--align']].join(' ')}>
                <div className="graphic--content flex--align">
                    <h6 className="subtitle-2 text--bold">{props.subtitle1}:&#160; </h6>
                    <p className="body-2">{props.info1}</p>
                </div>
                <div className="graphic--content flex--align">
                    <h6 className="subtitle-2 text--bold">{props.subtitle2}:&#160; </h6>
                    <p className="body-2">{props.info2}</p>
                </div>
                <div className="graphic--content flex--align">
                    <h6 className="subtitle-2 text--bold">{props.subtitle3}:&#160; </h6>
                    <p className="body-2">{props.info3}</p>
                </div>
            </div>
        </div>
    )
}