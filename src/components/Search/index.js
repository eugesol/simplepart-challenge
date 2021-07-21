import React from "react";
import Logo from '../../assets/logo.png'

import { Container, Row, Col, Button } from 'reactstrap';
import "./style.css";


function Search() {
    return (
        <div>
            <div className="utility-bar" >
            
                    <div className="utility-bar__section utility-bar__search" id="SmartSearch" role="search" aria-labelledby="header-search">
                        <div id="utilitySmartSearch" className="input-group">
                            <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
                            <label for="SearchInput" className="sr-only"></label>
                            <input id="SearchInput" type="text" title="Click here to search" className="form-control utility-bar__search-input" placeholder="Search by Keywords, Part Numbers or VIN" autocomplete="off"></input>
                            <span className="input-group-btn" title="Search Button">
                                <Button className="utility-bar__search-button" >
                                    Go
                                </Button>
                            </span>
                            
                        </div>
                       
                    </div>
                      
           
            </div>
            <Row className="breadcrumbcont">
            <a id="breadcrumbItem1" > Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph and Austin Healey Parts!</a>
            </Row>
           </div>
          
            );
            }

            export default Search;