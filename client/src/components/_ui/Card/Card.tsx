import { UICompWithChildren } from "../../../util/types"

const Card: UICompWithChildren = ({ children, additionalClasses = "" }) => {
    return (
        <section className={`ui-card-component ${additionalClasses}`}>
            { children }
        </section>
    )
}

export default Card;