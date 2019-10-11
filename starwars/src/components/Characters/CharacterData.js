import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterData() {
    const [peopleData, setPeopleData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then((response) => {
                console.log(response.data.results);
                setPeopleData(response.data.results);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <div >
            {peopleData.map((person, index) =>
                <CharacterCard char={person} key={index} />)
            }
        </div>
    );
}

