import { UICardType } from "../../../util/types"

const Card: UICardType = ({ children = <></>, additionalClasses = "" }) => {
    return (
        <section className={`ui-card-component ${additionalClasses}`}>
            { children }
        </section>
    )
}

export default Card;