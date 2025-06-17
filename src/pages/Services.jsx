/** @format */

import React, { useEffect } from "react";
import {
	FaLaptopCode,
	FaMobileAlt,
	FaPalette,
	FaCogs,
	FaHandsHelping,
} from "react-icons/fa";
import { gradientKeyframes } from "./style";

/**
 * Services.jsx
 * Responsive services page for Thato Mchunu's portfolio.
 * - Modern, animated, and mobile-friendly.
 * - Uses inline styles and shared style.js for consistency.
 * - All layout and cards adapt to mobile and desktop.
 * - Well-commented for maintainability.
 */

const services = [
	{
		icon: <FaLaptopCode style={{ color: "#0ea5e9", fontSize: 38 }} />,
		title: "Website Development",
		desc: "Modern, responsive websites tailored to your needs.",
	},
	{
		icon: <FaMobileAlt style={{ color: "#38bdf8", fontSize: 38 }} />,
		title: "Full-Stack Apps",
		desc: "Complete web applications with frontend and backend.",
	},
	{
		icon: <FaPalette style={{ color: "#a78bfa", fontSize: 38 }} />,
		title: "UI/UX Design",
		desc: "Clean, user-friendly interfaces and experiences.",
	},
	{
		icon: <FaCogs style={{ color: "#f59e42", fontSize: 38 }} />,
		title: "API Integration",
		desc: "Connect your app to third-party services and APIs.",
	},
	{
		icon: <FaHandsHelping style={{ color: "#10b981", fontSize: 38 }} />,
		title: "Ongoing Support",
		desc: "Maintenance and updates for your web projects.",
	},
];

const Services = () => {
	// Inject keyframes for animated gradient
	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = gradientKeyframes;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<section
			id="services"
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background:
					"linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)",
				backgroundSize: "600% 600%",
				animation: "gradientBG 12s ease infinite",
				padding: "60px 0 40px 0",
				paddingLeft: 8,
				paddingRight: 8,
			}}>
			{/* Main heading, responsive */}
			<h2
				style={{
					fontFamily: "Poppins, sans-serif",
					fontWeight: 900,
					fontSize: 32,
					color: "#fff",
					textShadow: "0 2px 12px #0ea5e955, 0 1px 0 #2222",
					marginBottom: 18,
					textAlign: "center",
					letterSpacing: 1,
				}}>
				My Services
			</h2>
			{/* Responsive cards row */}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: 24,
					justifyContent: "center",
					maxWidth: 1100,
					width: "100%",
				}}>
				{services.map((service, idx) => (
					<div
						key={service.title}
						style={{
							background: "rgba(255,255,255,0.85)",
							borderRadius: 20,
							padding: "32px 18px 24px 18px",
							minWidth: 220,
							maxWidth: 270,
							flex: "1 1 220px",
							margin: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							transition: "transform 0.25s",
							animation: `fadeInUp 0.7s ${0.1 + idx * 0.1}s both`,
							boxSizing: "border-box",
						}}>
						{/* Icon */}
						<div style={{ marginBottom: 14 }}>{service.icon}</div>
						{/* Card title */}
						<h3
							style={{
								color: "#0ea5e9",
								fontWeight: 700,
								fontSize: 20,
								marginBottom: 8,
								textAlign: "center",
							}}>
							{service.title}
						</h3>
						{/* Card description */}
						<p
							style={{
								color: "#222",
								fontSize: 15.5,
								textAlign: "center",
								marginBottom: 0,
							}}>
							{service.desc}
						</p>
					</div>
				))}
			</div>
			{/* Fade-in animation keyframes */}
			<style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
		</section>
	);
};

export default Services;
