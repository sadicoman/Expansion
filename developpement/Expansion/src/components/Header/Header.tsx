import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLImageElement>(null);
	const burgerMenuRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (headerRef.current && logoRef.current && burgerMenuRef.current && navRef.current) {
			const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

			// Animation for the logo
			tl.fromTo(
				logoRef.current,
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8 },
			);

			// Animation for the BurgerMenu
			tl.fromTo(
				burgerMenuRef.current,
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8 },
				"-=0.8",
			);

			// Animation for each nav item
			tl.fromTo(
				navRef.current.querySelectorAll("li"),
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
				"-=0.3",
			);
		}
	}, []);

	return (
		<div className="container__header" ref={headerRef}>
			<header className="header">
				<a className="lien" href="#">
					<img ref={logoRef} className="logo" src="assets/images/logo-l.svg" alt="Logo" />
				</a>
				<BurgerMenu ref={burgerMenuRef} />
				<Navbar ref={navRef} />
			</header>
		</div>
	);
};

export default Header;
