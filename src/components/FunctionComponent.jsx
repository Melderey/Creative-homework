const FunctionComponent = (props) => {
  const { setValue } = props;
  const handlerClick = (e) => {
    e.preventDefault();
    setValue("Функциональный стиль");
  };
  return (
    <button onClick={handlerClick}>
      <div>Функциональный компонент</div>
    </button>
  );
};

export default FunctionComponent;
