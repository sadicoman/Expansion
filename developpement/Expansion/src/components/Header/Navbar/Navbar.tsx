import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./Navbar.scss";
import { useMenu } from "../MenuContext";
import gsap from "gsap";
import LinkButton from "../../Common/LinkButton/LinkButton";

type NavItem = {
	name: string;
	link: string;
};

// Notez que `props` a été retiré ici car il n'est pas utilisé.
const Navbar = forwardRef<HTMLElement>((_, ref) => {
	const [activeMenu, setActiveMenu] = useState("Bienvenue");
	const menuItems: NavItem[] = [
		{ name: "Bienvenue", link: "#bienvenue" },
		{ name: "Nos métiers", link: "#nos-metiers" },
		{ name: "Notre méthodologie", link: "#notre-methodologie" },
		{ name: "L’agence", link: "#lagence" },
		{ name: "Blog", link: "#blog" },
	];

	const { isMenuVisible } = useMenu();
	const navInternalRef = useRef<HTMLElement>(null);
	const combinedRef = (ref as React.RefObject<HTMLElement>) || navInternalRef;

	useEffect(() => {
		if (combinedRef.current && isMenuVisible) {
			const elems = combinedRef.current.querySelectorAll("li");
			gsap.fromTo(
				elems,
				{ opacity: 0, x: 50 },
				{ opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
			);
		}
	}, [isMenuVisible, combinedRef]); // Inclusion de `combinedRef` dans les dépendances de `useEffect`

	return (
		<nav className="menu" ref={combinedRef}>
			<ul className="menu__liste">
				{menuItems.map(item => (
					<li
						key={item.name}
						className={`menu__el ${item.name === activeMenu ? "menu__el--actif" : ""}`}
					>
						<a
							className="menu__lien"
							href={item.link}
							onClick={() => setActiveMenu(item.name)}
						>
							{item.name}
						</a>
					</li>
				))}
			</ul>
			<ul className="menu__liste menu__liste--contact">
				<li className="menu__el">
					<a className="menu__lien" href="#Contact">
						Contact
					</a>
				</li>
				<li className="menu__el">
					<LinkButton text="Prendre un rendez-vous" href="#" />
				</li>
			</ul>
		</nav>
	);
});

export default Navbar;
