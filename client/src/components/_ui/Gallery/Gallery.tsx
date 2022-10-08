import { UIGalleryType } from "../../../util/types"

const Gallery: UIGalleryType = ({ children, columns, additionalClasses = "" }) => {
    const widthFromCols = Math.ceil(90 / columns);

    return (
        <section className={`ui-gallery-component item-width-${widthFromCols} ${additionalClasses}`}>
            { children }
        </section>
    )
}

export default Gallery;