import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
// import styled from "styled-components";

const CharacterCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.char.name}</CardTitle>
                    <CardSubtitle>{props.char.homeworld}</CardSubtitle>
                </CardBody>
                <CardImg></CardImg>
                <img width="100%" src="/assets/starwars.webp" alt="Star Wars" />
                <CardBody>
                    <CardText>{props.char.films}</CardText>
                    <CardLink href="#">API Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default CharacterCard;