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
						color: "#0ea5e9", // blue
						letterSpacing: 2,
					}}>
					Thato Mchunu
				</span>
				<ul
					style={{
						display: "flex",
						gap: 18,
						listStyle: "none",
						margin: 0,
						padding: 0,
					}}>
					{navLinks.map((link) => {
						const Icon = link.icon;
						const isActive = location.pathname === link.path;
						return (
							<li key={link.name}>
								<Link
									to={link.path}
									style={{
										display: "flex",
										alignItems: "center",
										gap: 6,
										textDecoration: "none",
										color: isActive ? "#0ea5e9" : "#222", // blue for active
										fontWeight: 500,
										fontSize: 15,
										padding: "6px 10px",
										borderRadius: 6,
										background: isActive ? "#e0f2fe" : "transparent", // light blue for active
										transition: "background 0.2s, color 0.2s",
									}}>
									<Icon
										style={{
											width: 18,
											height: 18,
											verticalAlign: "middle",
										}}
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
