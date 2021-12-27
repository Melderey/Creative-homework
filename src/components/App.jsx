import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.timerID = null;
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => {
      console.log("СomponentDidMount запускается когда компонент монитруется");
      this.setState((state, props) => ({ counter: state.counter + 1 }));
      return;
    }, 3000);
  };

  componentDidUpdate(prevProps) {
    console.log("ComponentDidUpdate запускается когда компонент обновляется");
  }

  componentWillUnmount() {
    // ComponentWillUnmount запускается когда компонент размонтируется
    return clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Пример работы методов жизненного цикла</h1>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
