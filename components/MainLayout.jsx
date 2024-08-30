function MainLayout({ children }) {
	return (
		<main
			id="main-layout"
			className="mt-[7rem] md:mt-[10em] max-sm:px-5 sm:px-[10rem] lg:px-[20rem]"
		>
			{children}
		</main>
	);
}
export default MainLayout;
