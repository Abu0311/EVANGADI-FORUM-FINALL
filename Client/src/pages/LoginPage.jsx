
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function Login({ toggle }) {
	const navigate = useNavigate();
	const emailDom = useRef(null);
	const passwordDom = useRef(null);
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		const emailValue = emailDom.current.value;
		const passValue = passwordDom.current.value;
		if (!emailValue || !passValue) {
			alert("Please provide all required information");
			return;
		}

		try {
			setLoading(true);
			const { data } = await axios.post("users/login", {
				email: emailValue,
				password: passValue,
			});
			alert("Login successful");

			localStorage.setItem("token", data.token);
			navigate("/questions");
			console.log(data);
		} catch (error) {
			alert(error?.response?.data?.msg);
			console.log(error.response.data);
		} finally {
			setLoading(false);
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<>
			<div className="w-1/3 mt-20 ml-20 bg-gray-200 pb-2 mb-10 px-5">
				<div className="text-center text-xl mt">Login to your account</div>
				<div className="p-1">
					<span>Don’t have an account? </span>
					<span
						onClick={() => {
							toggle(false);
						}}
						className=" text-orange-500 text-right hover:cursor-pointer"
					>
						Create a new account
					</span>
				</div>
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							// htmlFor="username"
						>
							Email address
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Email"
							ref={emailDom}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							// htmlFor="password"
						>
							Password
						</label>
						<div className="relative">
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="******************"
								ref={passwordDom}
							/>
							<div
								className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <IoIosEyeOff /> : <IoIosEye />}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={loading}
						>
							{loading ? "Loading..." : "Sign In"}
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
				{loading && (
					<div className="w-12 h-12 mx-auto mt-4 transition-transform duration-400">
						<img
							src="https://www.evangadi.com/themes/humans/assets/images/misc/preloader.gif"
							alt="Loading..."
						/>
					</div>
				)}
				;
			</div>
		</>
	);
}

export default Login;




// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../axiosConfig";


// // import { IoIosEye } from "react-icons/io";

// function Login({ toggle }) {
// 	const navigate = useNavigate();
// 	const emailDom = useRef(null);
// 	const passwordDom = useRef(null);

// 	async function handleSubmit(e) {
// 		e.preventDefault();

// 		const emailValue = emailDom.current.value;
// 		const passValue = passwordDom.current.value;
// 		if (!emailValue || !passValue) {
// 			alert("please provide all required information");
// 			return;
// 		}
// 		try {
// 			const { data } = await axios.post("users/login", {
// 				email: emailValue,
// 				password: passValue,
// 			});
// 			alert("login successfull,");

// 			localStorage.setItem("token", data.token);
// 			navigate("/questions");
// 			console.log(data);
// 		} catch (error) {
// 			alert(error?.response?.data?.msg);
// 			console.log(error.response.data);
// 		}
// 	}

// 	return (
// 		<>
// 			<div className="url('https://www.evangadi.com/themes/humans/assets/images/misc/preloader.gif')"></div>
// 			<div className="w-1/3 mt-20 ml-20 bg-gray-200 pb-2 mb-10 px-5">
// 				<div className="text-center text-xl mt">Login to your account</div>
// 				<div className="p-1">
// 					<span>Don’t have an account? </span>
// 					<span
// 						onClick={() => {
// 							toggle(false);
// 						}}
// 						className=" text-orange-500 text-right hover:cursor-pointer"
// 					>
// 						Create a new account
// 					</span>
// 				</div>
// 				<form
// 					onSubmit={handleSubmit}
// 					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
// 				>
// 					<div className="mb-4">
// 						<label
// 							className="block text-gray-700 text-sm font-bold mb-2"
// 							// htmlFor="username"
// 						>
// 							Email adress
// 						</label>
// 						<input
// 							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// 							id="email"
// 							type="email"
// 							placeholder="email"
// 							ref={emailDom}
// 						/>
// 					</div>
// 					<div className="mb-6">
// 						<label
// 							className="block text-gray-700 text-sm font-bold mb-2"
// 							// htmlFor="password"
// 						>
// 							Password
// 						</label>
// 						<input
// 							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
// 							id="password"
// 							type="password"
// 							placeholder="******************"
// 							ref={passwordDom}
// 						/>
// 					</div>
// 					<div className="flex items-center justify-between">
// 						<button
// 							className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// 							type="submit"
// 						>
// 							Sign In
// 						</button>
// 						<a
// 							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
// 							href="#"
// 						>
// 							Forgot Password?
// 						</a>
// 					</div>
// 				</form>
// 				<div className="url('https://www.evangadi.com/themes/humans/assets/images/misc/preloader.gif')"></div>
// 				;
// 			</div>
// 		</>
// 	);
// }

// export default Login;
