import React from "react";
import img1 from "../assets/Image/Image20230419000207.png";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
	return (
		<>
			<div className=" h-60 bg-gray-700 text-white flex justify-between  pt-10 px-20">
				<div>
					<div>
						<img className="pb-3" src={img1}></img>
					</div>
					<br />
					<div className="flex justify-between">
						<a href="">
							<FaFacebookSquare />
						</a>
						<a href="">
							<FaInstagram />
						</a>
						<a href="">
							<IoLogoYoutube />
						</a>
					</div>

					<div className="whatsup col-sm p-2">
						{" "}
						<i className="fab fa-whatsapp"></i>
					</div>
				</div>
				<div>
					<h2 className="text-2xl">Useful Link</h2>
					<br />
					<a href="">How it works</a>
					<br />
					<a href="">Terms of Service</a>
					<br />
					<a href="">Privacy policy</a>
					<br />
				</div>
				<div>
					<h2 className="text-2xl">Contact Info</h2>
					<br />
					<ul className="text-left p-0 m-0">
						<li>Evangadi Networks</li>
						<li>nigabu24@gmail.com</li>
						<li> +1 314 357 7696</li>
						<li> Abu Engida</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Footer;
