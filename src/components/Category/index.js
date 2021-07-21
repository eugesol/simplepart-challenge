import React from 'react';
import { Row, Col } from 'reactstrap';
import "./style.css";
import partsArray from "../../assets/catergories.json"
const Category = (props) => {
    console.log(partsArray)
    return (
        <div >
            <Row>
                <Col xs="1"></Col>
                <Col xs="10">
                    <div className="quick-start-update-panel">
                        <div className="QuickStartLinksControl">

                            <div className="quickStart-Categories">
                                <div className="quickStartContentWrap qsLinksContainer">
                                    <div className="quickStartAltTitle">
                                        <h2>
                                            Select a Category
                                        </h2>
                                    </div>
                                    <div className="quickStartAltText">

                                    </div>
                                </div>

                                <div className="qsLinksContainer">
                                    <div className="category-panel"></div>
                                    {partsArray.map((part) => (
                                        <div >
                                            <a className="qsCategoryLinkItem" href="#" >
                                                <div className="qsCategoryWrapper">
                                                    <div className="qsImgWrapper">

                                                        <img src={window.location.origin + part.img} aria-hidden="true" />
                                                    </div>
                                                    <div className="qsdisplayStringDiv"> {part.name} </div>
                                                </div>
                                            </a>
                                        </div>

                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="1"></Col>
            </Row>
        </div>
    );
};

export default Category;