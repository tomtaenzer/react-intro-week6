import React from 'react';
import Header from "./components/Header";
import List from "./components/List";

const beers = ["lauwarmes Dortmunder Union", "Päffgen", "Andechser Hell"];

const fastFood = ["Currywurst", "Pizza", "Döner"];


function App() {
  return (
    <div className="App">
      <Header />
      <List items={fastFood} />
    </div>
  );
}

export default App;