import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components";

const Cards = styled.div`

display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 20px 1rem;
width: 25%;
height: auto;
margin-left: auto;
margin-right: auto;
color: lightgrey;
    font-size: 1.5rem;
    font-weight: 900;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const CharacterCard = (props) => {
    return (
        <div>
            <Cards>
                <Card color="warning">
                    <CardBody>
                        <CardTitle>{props.char.name}</CardTitle>
                        <CardSubtitle>{props.char.birh_year}</CardSubtitle>
                    </CardBody>
                    <CardText>{props.char.gender}</CardText>
                    <CardBody>
                        <CardText>{props.char.skin_color}</CardText>

                    </CardBody>
                </Card>
            </Cards>
        </div>
    );
};

export default CharacterCard;