import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, text: "" };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(e) {
    // console.log("handlerChange");
    this.setState((state) => ({
      text: e.target.value,
    }));
  }

  render() {
    const { counter, text } = this.state;
    return (
      <div>
        <h1>Обработка событий</h1>
        <div>
          <p>
            {text ? text : "Здесь появится текст который будет введён ниже"}
          </p>
        </div>

        <form>
          <textarea
            placeholder="Введите свой текст"
            onChange={this.handlerChange}
          ></textarea>
        </form>

        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
