import Image from "next/image"

export default function CaptionedGraphic (props) {
    return(
        <div className="captioned--graphic--wrapper grid--gc--s1--e6">
            <Image className="margin--bottom--sm" src={props.image} width={props.width} height={props.height} alt={props.alt}/>
            <div className="graphic--content--container items--flex--med--align">
                <div className="graphic--content">
                    <h6 className="subtitle-2 text--bold">Title</h6>
                    <p className="body-2">content</p>
                </div>
                <div className="graphic--content">
                    <h6 className="subtitle-2 text--bold">Title</h6>
                    <p className="body-2">content</p>
                </div>
                <div className="graphic--content">
                    <h6 className="subtitle-2 text--bold">Title</h6>
                    <p className="body-2">content</p>
                </div>
            </div>
        </div>
    )
}