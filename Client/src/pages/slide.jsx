// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
// import login from "./LoginPage"
// import register from "./RegisterPage"
// function SlideMenu() {
// 	const token = localStorage.getItem("token");
// 	const [isMenuOpen, setMenuOpen] = useState(false);
// 	const toggleMenu = () => {
// 		setMenuOpen(!isMenuOpen);
// 	};
// 	const logingOut = () => {
// 		localStorage.removeItem("token");
// 		navigate("/login");
// 	};

// 	return (
// 		<>
// 			<button
// 				onClick={toggleMenu}
// 				className="hover:border-gray-300 hover:rounded-md hover:border-3"
// 			>
// 				<MenuIcon />
// 			</button>
// 			<div
// 				className={`w-60 h-48 fixed top-0 ${
// 					isMenuOpen
// 						? "right-0 transition-transform duration-300 ease-in"
// 						: "transform translate-x-full"
// 				} bg-white p-5 text-black`}
// 			>
// 				<button onClick={toggleMenu} className="bg-white text-black mb-3">
// 					<CloseIcon />
// 				</button>
// 				<ul>
// 					<li className="hover:text-orange-500">
// 						<Link to="/Login">Home</Link>
// 					</li>
// 					<li className="hover:text-orange-500">
// 						<Link to="#">How it works</Link>
// 					</li>
// 					<li className="hover:text-orange-500">
// 						<Link to="#" className="signin" onClick={logingOut}>
// 							{!token ? "SIGN IN" : "LOG OUT"}
// 						</Link>
// 					</li>
// 				</ul>
// 			</div>
// 			<login />
// 			<register />
// 		</>
// 	);
// }

// export default SlideMenu;

import React, { useState } from "react";
import Login from "./LoginPage";
import RegisterPage from "./RegisterPage";

function ParentComponent() {
	const [activePage, setActivePage] = useState("LoginPage");

	const handlePageChange = (page) => {
		setActivePage(page);
	};

	return (
		<div>
			<button onClick={() => handlePageChange("LoginPage")}>LoginPage</button>
			<button onClick={() => handlePageChange("RegisterPage")}>
				RegisterPage
			</button>

			<div className={`page ${activePage === "LoginPage" ? "" : "slide-left"}`}>
				<Login/>
			</div>

			<div
				className={`page ${activePage === "RegisterPage" ? "" : "slide-right"}`}
			>
				<RegisterPage/>
			</div>
		</div>
	);
}

export default ParentComponent;
