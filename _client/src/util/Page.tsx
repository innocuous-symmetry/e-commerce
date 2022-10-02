function Page({ children, classes }: any) {
    return (
        <section className={`page ${classes}`}>
            {children}
        </section>
    )
}

export default Page;