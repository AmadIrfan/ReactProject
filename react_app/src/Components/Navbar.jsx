import React, { useState } from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBIcon,
	MDBNavbarLink,
	MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavBar() {
	const [showNav, setShowNav] = useState(false);

	return (
		<MDBNavbar expand="lg" light bgColor="light">
			<MDBContainer fluid>
				<MDBNavbarBrand href="/sidebar">MY App</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNav(!showNav)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNav}>
					<MDBNavbarNav>
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="/">
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="/email">Email</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="/register">Register</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
