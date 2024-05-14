// MenuContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
	isMenuVisible: boolean;
	toggleMenuVisibility: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error("useMenu doit être utilisé dans un MenuProvider");
	}
	return context;
};

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleMenuVisibility = () => {
		setIsMenuVisible(prev => !prev);
	};

	return (
		<MenuContext.Provider value={{ isMenuVisible, toggleMenuVisibility }}>
			{children}
		</MenuContext.Provider>
	);
};
