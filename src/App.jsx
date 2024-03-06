import React from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Card from "./Components/Cards/Card";

const App = () => {
  return (
    <>
      <div className="App">
        <Card title='A fazer'>
          <Button text="Nova Tarefa" />
        </Card>
        <Card title="Fazendo">
          <Button text="Nova Tarefa" />
        </Card>
        <Card title="Feito">
          <Button text="Nova Tarefa" />
        </Card>
      </div>
    </>
  );
};

export default App;
