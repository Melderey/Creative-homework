import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      textArea: "",
      textMouse: "Наведи на меня мышкой",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }

  handlerChange(e) {
    this.setState((state) => ({
      textArea: e.target.value,
    }));
  }

  handlerMouseEnter() {
    this.setState((state) => ({
      textMouse: "Входит и...",
    }));
  }

  handlerMouseLeave() {
    this.setState((state) => ({
      textMouse: "...выходит",
    }));
  }

  render() {
    const { counter, textArea, textMouse } = this.state;
    return (
      <div>
        <h1>Обработка событий</h1>
        <div>
          <p>
            {textArea
              ? textArea
              : "Здесь появится текст который будет введён ниже"}
          </p>
        </div>

        <form>
          <textarea
            id="textAreaTarget"
            placeholder="Введите свой текст"
            onChange={this.handlerChange}
          ></textarea>
        </form>

        <div
          id="mouseTarget"
          onMouseEnter={this.handlerMouseEnter}
          onMouseLeave={this.handlerMouseLeave}
          className="menu navigation-menu"
        >
          <p>{textMouse}</p>
        </div>

        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
