import React from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import Main from "./components/Main";
const beers = ["lauwarmes Dortmunder Union", "Päffgen", "Andechser Hell"];

const fastFood = ["Currywurst", "Pizza", "Döner"];


export default function App() {
  return (
    <div className="App">
      <Header>Toms possible Lunch</Header>
        <Main>
            <List items={fastFood} />
        </Main>
      <Footer>Made with appetite</Footer>
    </div>

  );
}
