import { UIPageType } from "../../../util/types";

const Page: UIPageType = ({ children, additionalClasses = "" }) => {
    return (
        <section className={`ui-page-component ${additionalClasses}`}>
            { children }
        </section>
    )
}

export default Page;