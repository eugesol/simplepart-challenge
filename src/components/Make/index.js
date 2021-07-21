import React from 'react';
import Feature1 from '../../assets/images/parts/tiles/austin-healey.png';
import Feature2 from '../../assets/images/parts/tiles/jaguar.png';
import Feature3 from '../../assets/images/parts/tiles/mg.png';
import Feature4 from '../../assets/images/parts/tiles/triumph.png';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import "./style.css";
const Make = (props) => {
    return (
        <div >

            <div className="selectVehicle">
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="11">
                        <div className="container">
                            <div className="seoContainer">
                                <div className="seoTitle lead text-center">
                                    <h2>Select a Make</h2>
                                </div>
                                <div className=" refineResults">
                                    
                                    <a className="seoLinkItem Make" href="#" title="Shop OEM Austin Healey Parts">
                                        <img src={Feature1} alt="" />
                                        <div>Austin Healey</div>
                                    </a>
                                    <a className="seoLinkItem Make" href="#" title="Shop OEM Jaguar Parts">
                                        <img src={Feature2} alt="" />
                                        <div>Jaguar</div>
                                    </a>
                                    <a className="seoLinkItem Make" href="#" title="Shop OEM MG Parts">
                                        <img src={Feature3} alt="" />
                                        <div>MG</div>
                                    </a>
                                    <a className="seoLinkItem Make" href="#" title="Shop OEM Triumph Parts">
                                        <img src={Feature4} alt="" />
                                        <div>Triumph</div>
                                    </a>
                                   
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
            </div>

        </div>
    );
};

export default Make;