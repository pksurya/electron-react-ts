import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useActions } from "../../actions";
import * as TodoActions from "../../actions/todo";
import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
declare var $: any;
type Props = {
}

const WebLayout: React.FC<Props> = (props) => {
	const todoActions = useActions(TodoActions);
	const [show, setShow] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 300)
	}, [])
	return (
		<>			
			{!show &&
				<>
					<Header />
					{props.children}
					<a href="#" onClick={() => window.scrollTo(0, 0)} className="back-to-top">
						<i className="lni lni-chevron-up"></i>
					</a>
					<Footer />
				</>
			}
			{show &&
				<div id="preloader">
					<div className="loader" id="loader-1"></div>
				</div>
			}
		</>
	)
}


export default WebLayout