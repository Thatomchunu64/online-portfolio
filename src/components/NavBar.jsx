/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	HomeIcon,
	UserCircleIcon,
	FolderOpenIcon,
	WrenchScrewdriverIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
	{ name: "Home", path: "/", icon: HomeIcon },
	{ name: "About", path: "/about", icon: UserCircleIcon },
	{ name: "Projects", path: "/projects", icon: FolderOpenIcon },
	{ name: "Services", path: "/services", icon: WrenchScrewdriverIcon },
	{ name: "Contact", path: "/contact", icon: EnvelopeIcon },
];

const NavBar = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = React.useState(false);
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setMenuOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav
			style={{
				width: "100%",
				borderBottom: "1px solid #eee",
				background: "#fff",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 100,
			}}>
			<div
				style={{
					maxWidth: 1200,
					margin: "0 auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0.5rem 1.5rem",
					height: 56,
				}}>
				<span
					style={{
						fontWeight: 700,
						fontSize: 22,
						color: "#0ea5e9",
						letterSpacing: 2,
					}}>
					Thato Mchunu
				</span>
				{/* Hamburger menu for mobile */}
				<button
					aria-label="Toggle navigation menu"
					onClick={() => setMenuOpen((open) => !open)}
					style={{
						display: isMobile ? "block" : "none",
						background: "none",
						border: "none",
						fontSize: 28,
						cursor: "pointer",
						marginLeft: 12,
					}}>
					<span
						style={{
							display: "block",
							width: 28,
							height: 3,
							background: "#0ea5e9",
							margin: "6px 0",
						}}
					/>
					<span
						style={{
							display: "block",
							width: 28,
							height: 3,
							background: "#0ea5e9",
							margin: "6px 0",
						}}
					/>
					<span
						style={{
							display: "block",
							width: 28,
							height: 3,
							background: "#0ea5e9",
							margin: "6px 0",
						}}
					/>
				</button>
				<ul
					style={{
						display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
						flexDirection: isMobile ? "column" : "row",
						gap: isMobile ? 0 : 18,
						listStyle: "none",
						margin: 0,
						padding: 0,
						position: isMobile ? "absolute" : "static",
						top: 56,
						right: 0,
						background: isMobile ? "#fff" : "none",
						width: isMobile ? "100vw" : "auto",
						boxShadow: isMobile && menuOpen ? "0 4px 16px #bae6fd55" : "none",
						zIndex: 200,
					}}>
					{navLinks.map((link) => {
						const Icon = link.icon;
						const isActive = location.pathname === link.path;
						return (
							<li key={link.name} style={{ width: isMobile ? "100%" : "auto" }}>
								<Link
									to={link.path}
									onClick={() => isMobile && setMenuOpen(false)}
									style={{
										display: "flex",
										alignItems: "center",
										gap: 6,
										textDecoration: "none",
										color: isActive ? "#0ea5e9" : "#222",
										fontWeight: 500,
										fontSize: 15,
										padding: isMobile ? "16px 20px" : "6px 10px",
										borderRadius: 6,
										background: isActive ? "#e0f2fe" : "transparent",
										transition: "background 0.2s, color 0.2s",
										width: isMobile ? "100%" : "auto",
										justifyContent: isMobile ? "flex-start" : "center",
									}}>
									<Icon
										style={{ width: 18, height: 18, verticalAlign: "middle" }}
									/>
									<span>{link.name}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
