import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

declare var $: any;
type Props = {
}

const Footer: React.FC<Props> = () => {
	return (
		<>
			<footer>
				<div id="copyright">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="site-info text-center">
									<p>  All Rights Reserved by {' '}
										<a href="/">Opeer</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer></>
	)
}
export default Footer