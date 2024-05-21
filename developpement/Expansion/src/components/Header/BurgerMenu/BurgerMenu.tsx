import { useRef, forwardRef } from "react";
import gsap from "gsap";
import { useMenu } from "../MenuContext";
import "./BurgerMenu.scss";

const BurgerMenu = forwardRef<HTMLButtonElement>((_, ref) => {
	const burgerRef = useRef<HTMLDivElement>(null);
	const crossRef = useRef<HTMLDivElement>(null);
	const { toggleMenuVisibility } = useMenu();

	const toggleNavigation = () => {
		toggleMenuVisibility(); // This will update the context state
		if (document.body.hasAttribute("data-menu")) {
			document.body.removeAttribute("data-menu");
			gsap.to(crossRef.current, { autoAlpha: 0, duration: 0.3 });
			gsap.to(burgerRef.current, { autoAlpha: 1, duration: 0.3 });
		} else {
			document.body.setAttribute("data-menu", "true");
			gsap.to(burgerRef.current, { autoAlpha: 0, duration: 0.3 });
			gsap.to(crossRef.current, { autoAlpha: 1, duration: 0.3 });
		}
	};

	return (
		<button className="navBtn" onClick={toggleNavigation} ref={ref}>
			<div ref={burgerRef} style={{ opacity: 1 }}>
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
			<div ref={crossRef} style={{ opacity: 0 }}>
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
});

export default BurgerMenu;
