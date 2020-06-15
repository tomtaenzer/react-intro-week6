import React from "react";
import ListItem from "./ListItem";
import "./List.css"


export default function List(props){
    return (
        <ul className="List">
            {props.items.map((item) => {
             return <ListItem key={item} itemName={item}/>
            })}
        </ul>
    )
}

