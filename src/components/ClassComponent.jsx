import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }
  handlerClick = () => {
    const { setValue } = this.state;
    this.setState(() => setValue("Классы наше всё!"));
  };

  render() {
    return (
      <button onClick={this.handlerClick}>
        <div>Классовый компонент</div>
      </button>
    );
  }
}

export default ClassComponent;
