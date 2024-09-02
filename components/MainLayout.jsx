function MainLayout({ children, className }) {
    return (
        <main
            id="main-layout"
            className={`mt-[7rem] min-h-[calc(100vh-152px)] max-sm:px-5 sm:px-[10rem] md:mt-[10em] md:min-h-[calc(100vh-200px)] lg:px-[20rem] ${className}`}
        >
            {children}
        </main>
    )
}
export default MainLayout
