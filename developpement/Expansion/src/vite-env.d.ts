/// <reference types="vite/client" />
import "react";

declare module "react" {
	interface CSSProperties {
		"--i"?: string; // Assurez-vous que le type correspond à l'utilisation
	}
}
