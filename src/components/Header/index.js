import React  from "react";
import Logo from '../../assets/logo.png'

import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap';
import "./style.css";


function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="1"></Col>
                    <Col className="tag" xs="11">
                        <h1>Browse our complete catalog of OEM and licensed British heritage parts for your classic British automobile. | Kalamazoo, MI</h1>
                    </Col>
                </Row>
                <Row >
                    <Col xs="1"></Col>
                    <Col className="navbar-brand">
                        <img className="logo" src={Logo} alt='logo' />
                    </Col>
                    <Col className=" business-information" xs="8">
                        <div>
                            <div className="business-information__name">
                                EnglishParts.com
                            </div>
                            <div className="business-contact-details" >
                                <div className="contact-detail business-contact-details__location"> 5850 Stadium Dr, Kalamazoo, MI 49009</div>
                                <div className="contact-detail business-contact-details__phone">866.467.1776</div>
                                <div className="contact-detail business-contact-details__email"><a href="#" ></a>sales@englishparts.com</div>

                            </div>
                        </div>
                    </Col>
                    <Col className="" xs="1">
                    <ButtonGroup size="sm">
                        <ButtonDropdown className=".category-links-button">
                            <DropdownToggle ClassName=" btn" caret size="lg">Parts</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        <ButtonDropdown >
                            <DropdownToggle className=" btn" caret >About Us</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        </ButtonGroup>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Header;