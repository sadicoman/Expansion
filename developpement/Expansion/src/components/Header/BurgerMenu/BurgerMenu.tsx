import React, { useEffect, useRef } from "react";
import { useMenu } from "../MenuContext";
import "./BurgerMenu.scss";

const BurgerMenu: React.FC = () => {
	const bergurRef = useRef<HTMLDivElement>(null);
	const croixRef = useRef<HTMLDivElement>(null);
	const { toggleMenuVisibility } = useMenu();

	const toggleNavigation = () => {
		toggleMenuVisibility(); // This will update the context state
		if (document.body.hasAttribute("data-menu")) {
			document.body.removeAttribute("data-menu");
			if (bergurRef.current) bergurRef.current.style.display = "inherit";
			if (croixRef.current) croixRef.current.style.display = "none";
		} else {
			document.body.setAttribute("data-menu", "true");
			if (bergurRef.current) bergurRef.current.style.display = "none";
			if (croixRef.current) croixRef.current.style.display = "inherit";
		}
	};

	useEffect(() => {
		const handleBodyClick = event => {
			if ((event.target as Element).classList.contains("menu__liste")) {
				if (document.body.hasAttribute("data-menu")) {
					document.body.removeAttribute("data-menu");
					if (croixRef.current) croixRef.current.style.display = "none";
					if (bergurRef.current) bergurRef.current.style.display = "inherit";
				}
			}
		};

		if (window.matchMedia("(max-width: 767px)").matches) {
			document.body.addEventListener("click", handleBodyClick);
		}

		return () => {
			document.body.removeEventListener("click", handleBodyClick);
		};
	}, []);

	return (
		<button className="navBtn" onClick={toggleNavigation}>
			<div ref={bergurRef} style={{ display: "inherit" }}>
				<svg
					className="navBtn__svg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="60px"
					height="60px"
				>
					<path d="M0 0h24v24H0z" fill="none"></path>
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
				</svg>
			</div>
			<div ref={croixRef} style={{ display: "none" }}>
				<svg
					className="navBtn__svg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="60px"
					height="60px"
				>
					<path d="M0 0h24v24H0z" fill="none"></path>
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
				</svg>
			</div>
		</button>
	);
};

export default BurgerMenu;
