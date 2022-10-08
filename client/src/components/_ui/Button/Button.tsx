import { UIButtonType } from "../../../util/types"

const Button: UIButtonType = ({ onClick, children = "Button", additionalClasses = "" }) => {
    return (
        <>
        <button className={`ui-button-component ${additionalClasses}`} onClick={onClick}>
            { children }
        </button>
        </>
    )
}

export default Button;