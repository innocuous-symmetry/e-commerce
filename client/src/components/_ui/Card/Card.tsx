import { UICardType } from "../../../util/types"

const Card: UICardType = ({ children, additionalClasses = "", width = 45 }) => {
    return (
        <section className={`ui-card-component ${additionalClasses} width-${width}`}>
            { children }
        </section>
    )
}

export default Card;