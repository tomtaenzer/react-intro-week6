import React from "react";
import ListItem from "./ListItem";

const beers = ["lauwarmes Dortmunder Union", "Päffgen", "Andechser Hell"];

export default function List(){
    return (
        <ul>
            {beers.map((beer) => <ListItem key={beer} itemName={beer} />
            )}
        </ul>
    )
}

