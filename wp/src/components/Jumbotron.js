import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImg from '../assets/placeholder_background.jpg';

const Styles =styled.div`
    .jumbo {
        background: url(${backgroundImg}) no-repeat fixed top;
        background-size: cover;
        color: black;
        height: 200px;
        position: relative;
        z-index; -2;
    }
    .overlay {
        backgorund-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 0;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"/>
            <Container>
                <h1>Welcome</h1>
            </Container>
        </Jumbo>
    </Styles>
)