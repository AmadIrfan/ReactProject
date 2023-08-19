import React from "react";
import "../App.css";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import NavBar from "./Navbar";

export default function Email() {
	return (
		<div>
			<NavBar />
			<>
				<div className="form-parent">
					<form style={{ width: "500px" }}>
						<MDBInput
							type="email"
							name="email"
							id="form4Example2"
							wrapperClass="mb-4"
							label="Email address"
						/>
						<MDBInput id="form4Example1" wrapperClass="mb-4" label="Subject" name="subject" />
						<MDBInput
							style={{
								height: '200px'
							}}
							wrapperClass="mb-4"
							textarea
							id="form4Example3"
							rows={5}
							label="Message"
							name="message"
						/>
						{/* <MDBCheckbox
							wrapperClass="d-flex justify-content-center mb-4"
							id="form4Example4"
							label="Send me a copy of this message"
							defaultChecked/> */}
						<MDBBtn type="submit" className="mb-4" block>
							Send
						</MDBBtn>
					</form>
				</div>
			</>
		</div>
	);
}
