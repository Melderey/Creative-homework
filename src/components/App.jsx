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
    this.handlerScroll = this.handlerScroll.bind(this);
  }

  handlerChange(e) {
    this.setState(() => ({
      textArea: e.target.value,
    }));
  }

  handlerMouseEnter() {
    this.setState(() => ({
      textMouse: "Входит и...",
    }));
  }

  handlerMouseLeave() {
    this.setState(() => ({
      textMouse: "...выходит",
    }));
  }

  handlerScroll() {
    console.log("Scroll event detected!");
    this.setState((state) => ({
      counter: state.counter + 1,
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
          <form>
            <textarea
              id="textAreaTarget"
              placeholder="Введите свой текст"
              onChange={this.handlerChange}
            ></textarea>
          </form>
        </div>

        <div
          id="mouseTarget"
          onMouseEnter={this.handlerMouseEnter}
          onMouseLeave={this.handlerMouseLeave}
          className="menu navigation-menu"
        >
          <p>{textMouse}</p>
        </div>
        <div id="scrollTarget" onScroll={this.handlerScroll}>
          <p>Ты скролил меня {counter} раз</p>
        </div>
      </div>
    );
  }
}

export default App;
