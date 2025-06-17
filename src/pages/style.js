/** @format */

// Shared styles for Home.jsx (for use with inline style prop)
// NOTE: All boxShadow and border colors below have been removed or neutralized for a clean, shadowless look.

export const heroSection = {
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	background: "linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)", // blue gradient only, no purple
	backgroundSize: "600% 600%",
	animation: "gradientBG 12s ease infinite",
	paddingTop: 80,
	paddingBottom: 40,
	position: "relative",
	overflow: "hidden",
};

export const heroCard = {
	background: "#fff",
	borderRadius: 18,
	boxShadow: "none", // No shadow
	padding: "48px 32px",
	maxWidth: 600,
	width: "100%",
	textAlign: "center",
	marginBottom: 40,
	position: "relative",
	zIndex: 2,
};

export const heroTitle = {
	fontSize: 40,
	fontWeight: 800,
	marginBottom: 16,
	color: "#0ea5e9", // Use blue for consistency
	letterSpacing: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

export const heroDesc = {
	fontSize: 20,
	color: "#444",
	marginBottom: 32,
};

export const ctaRow = {
	display: "flex",
	gap: 18,
	justifyContent: "center",
	flexWrap: "wrap",
};

export const ctaBtn = {
	background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)", // blue gradient only
	color: "#fff",
	fontWeight: 700,
	fontSize: 17,
	padding: "12px 28px",
	borderRadius: 8,
	textDecoration: "none",
	boxShadow: "none", // No shadow
	transition: "background 0.2s, transform 0.2s",
	border: "none",
	cursor: "pointer",
	outline: "none",
};

export const ctaBtnAlt = {
	...ctaBtn,
	background: "#fff",
	color: "#0ea5e9",
	border: "2px solid #0ea5e9", // blue border only
};

export const ctaBtnResume = {
	...ctaBtn,
	background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
};

export const cardsRow = {
	display: "flex",
	gap: 24,
	flexWrap: "wrap",
	justifyContent: "center",
	maxWidth: 900,
	width: "100%",
	zIndex: 2,
};

export const card = {
	background: "#f3f4f6",
	borderRadius: 12,
	padding: "24px 20px",
	minWidth: 220,
	flex: 1,
	textAlign: "center",
	position: "relative",
	transition: "box-shadow 0.2s, transform 0.2s",
	boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.08)",
	cursor: "pointer",
};

export const cardTitle = {
	fontWeight: 700,
	color: "#6D28D9",
	marginBottom: 10,
	display: "flex",
	alignItems: "center",
	gap: 8,
	justifyContent: "center",
};

export const cardList = {
	color: "#444",
	fontSize: 15,
	margin: 0,
	padding: 0,
	listStyle: "none",
};

export const socialRow = {
	display: "flex",
	gap: 18,
	justifyContent: "center",
	marginTop: 24,
};

// Keyframes for animated gradient
export const gradientKeyframes = `
@keyframes gradientBG {
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
}`;
