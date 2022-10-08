import { UICompWithChildren } from "../../../util/types";

const Page: UICompWithChildren = ({ children, additionalClasses = "" }) => {
    return (
        <section className={`ui-page-component ${additionalClasses}`}>
            { children }
        </section>
    )
}

export default Page;