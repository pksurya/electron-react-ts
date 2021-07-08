import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
declare var $: any;
type Props = {
}
interface IProps extends React.HTMLProps<HTMLInputElement> {
	// type any custom props you want to pass other than-
	// existing props for a input like "placeholder", "name" or "type"
	placeholder: string,
	class: string,
}

const Header: React.FC<Props> = () => {
	return (
		<>
			<header id="header-wrap">


				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">O-Peer Demo App</a>
						</div>
						<ul className="nav navbar-nav">
							<li className="active"><a href="/" className="nav-link">Home</a></li>
							<li><a href="/about" className="nav-link">About Us</a></li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	)
}


export default Header