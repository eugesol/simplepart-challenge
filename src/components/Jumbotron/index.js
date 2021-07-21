import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import "./style.css";
const Hero = (props) => {
    return (
        <div >
            <Row>
                <Col xs="12" className="">
                    <Jumbotron className="hero" fluid>
                        <div class="panel heroPlacementContainer">
                            <div className="panel-heading">
                                <h2 className="panel-title">
                                    Premium Austin Healey, Jaguar, MG, and Triumph Parts
                                </h2>
                            </div>
                            <div className="panel-body">
                                <span className="heroBodyText">
                                    <span className="bodyTextSpan">

                                        Unmistakable style. That's what you love about your Austin Healey, Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large selection of premium repair, maintenance and restoration parts for classic British cars. You know you can count on us because we're located in Kalamazoo, MI. Finding the right premium repair parts has always been our first priority. Our state of the art premium parts diagrams ensure that you're getting the perfect part the first time. Our experienced team knows these cars inside and out, and is here to help. Excellence. The first time, every time.

                                    </span>
                                </span>
                            </div>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;