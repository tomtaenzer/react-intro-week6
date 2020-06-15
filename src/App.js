import React from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import Main from "./components/Main";


const fastFood = ["Currywurst", "Pizza", "Döner"];

const animals = ["Tiger", "Ape", "Dog", "Cat", "Penguin"];


export default function App() {

    const [itemsToDisplay, setItemsToDisplay] = React.useState(animals);

    function toggleFoods() {
        setItemsToDisplay(fastFood);
    }

    function toggleAnimals() {
        setItemsToDisplay(animals);
    }

  return (
    <div className="App">
      <Header>Toms possible Lunch</Header>
        <Main>
            <button onClick={toggleAnimals}>show Animals!</button>
            <button onClick={toggleFoods}>show Foods!</button>
            <List items={itemsToDisplay} />

        </Main>
      <Footer>Made with appetite</Footer>
    </div>

  );
}
