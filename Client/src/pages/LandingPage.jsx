import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import bg from "../assets/Image/bg-svg-f.svg"

function LandingPage() {
	const [login, setlogin] = useState(true);
	return (
		<div
			className="flex justify-around bg-slate-50"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				paddingTop: "130px",
				paddingBottom: "170px",
			}}
		>
			{login ? (
				<LoginPage toggle={setlogin} />
			) : (
				<RegisterPage toggle={setlogin} />
			)};
			<div className="w-1/2 mt-20">
				<h3 className="text-xl text-orange-500">About</h3>
				<h1 className="text-4xl text-blue-950">Evangadi Networks</h1>
				<br />
				<p className="text-s mr-40">
					No matter what stage of life you are in, whether you’re just starting
					elementary school or being promoted to CEO of a Fortune 500 company,
					you have much to offer to those who are trying to follow in your
					footsteps.
				</p>
				<br />
				<p className="text-s mr-40">
					Wheather you are willing to share your knowledge or you are just
					looking to meet mentors of your own, please start by joining the
					network here.
				</p>
				<br />
				<div>
					<a
						href="#"
						className="inline-block text-lg px-8 mr-10 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-orange-700 mt-4 lg:mt-0 bg-orange-400"
					>
						HOW IT WORKS
					</a>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

// import React, { useState } from "react";
// import Login from "./LoginPage";
// import Register from "./RegisterPage";
// import bg from "../assets/Image/bg-svg-f.svg";

// function LandingPage() {
// 	const [activecomponent, setactivecomponent] = useState(Login);

// 	const togglePage = (component) => {
// 		setactivecomponent(component);
// 	};

// 	return (
// 		<div
// 			className="flex justify-around bg-slate-50 overflow-hidden"
// 			style={{
// 				backgroundImage: `url(${bg})`,
// 				backgroundSize: "cover",
// 				backgroundRepeat: "no-repeat",
// 				paddingTop: "130px",
// 				paddingBottom: "170px",
// 			}}
// 		>
// 			<div className="container mx-auto">
// 				<div className="flex flex-wrap justify-between w-80 h-full mx-40 pt-40">
// 					<div
// 						className={
// 							"w-full lg:w-1/2 overflow relative bg-white shadow-lg p-3 rounded-lg h-560"
// 						}
// 					>
// 						<div
// 							className={`w-1/2 mt-20 transition-transform duration-500 transform ${
// 								activecomponent == "login "
// 									? "translate-x-0"
// 									: "-translate-x-full"
// 							}`}
// 						>
// 							{activecomponent === "login" && <Login togglePage={togglePage} />}
// 						</div>
// 						<div
// 							className={`w-1/2 mt-20 transition-transform duration-500 transform ${
// 								activecomponent == "Register "
// 									? "translate-x-0"
// 									: "-translate-x-full"
// 							}`}
// 						>
// 							{activecomponent === "Register" && (
// 								<Register togglePage={togglePage} />
// 							)}
// 						</div>
// 						<h3 className="text-xl text-orange-500">About</h3>
// 						<h1 className="text-4xl text-blue-950">Evangadi Networks</h1>
// 						<br />
// 						<p className="text-s mr-40">
// 							No matter what stage of life you are in, whether you’re just
// 							starting elementary school or being promoted to CEO of a Fortune
// 							500 company, you have much to offer to those who are trying to
// 							follow in your footsteps.
// 						</p>
// 						<br />
// 						<p className="text-s mr-40">
// 							Whether you are willing to share your knowledge or you are just
// 							looking to meet mentors of your own, please start by joining the
// 							network here.
// 						</p>
// 						<br />
// 						<div>
// 							<a
// 								href="#"
// 								className="inline-block text-lg px-8 mr-10 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-orange-700 mt-4 lg:mt-0 bg-orange-400"
// 							>
// 								HOW IT WORKS
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
			{/* <div
				className={`w-1/2 mt-20 transition-transform duration-500 transform ${
					login ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{login ? (
					<LoginPage toggle={togglePage} />
				) : (
					<RegisterPage toggle={togglePage} />
				)}
				<h3 className="text-xl text-orange-500">About</h3>
				<h1 className="text-4xl text-blue-950">Evangadi Networks</h1>
				<br />
				<p className="text-s mr-40">
					No matter what stage of life you are in, whether you’re just starting
					elementary school or being promoted to CEO of a Fortune 500 company,
					you have much to offer to those who are trying to follow in your
					footsteps.
				</p>
				<br />
				<p className="text-s mr-40">
					Whether you are willing to share your knowledge or you are just
					looking to meet mentors of your own, please start by joining the
					network here.
				</p>
				<br />
				<div>
					<a
						href="#"
						className="inline-block text-lg px-8 mr-10 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-orange-700 mt-4 lg:mt-0 bg-orange-400"
					>
						HOW IT WORKS
					</a>
				</div>
			</div> */}
		{/* </div>
	);
}

export default LandingPage; */}
