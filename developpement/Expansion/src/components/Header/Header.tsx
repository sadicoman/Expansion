import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
	return (
		<>
			<header className="header">
				<img className="logo" src="assets/images/logo-l.svg" alt="Logo" />
				<BurgerMenu />
				<Navbar />
			</header>
		</>
	);
};

export default Header;
