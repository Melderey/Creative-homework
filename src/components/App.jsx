import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const App = () => {
  const [value, setValue] = useState("Выбери свою кнопку");
  return (
    <div>
      <h1>{value}</h1>
      <ul>
        <li>
          <ClassComponent setValue={setValue} />
        </li>
        <li>
          <FunctionComponent setValue={setValue} />
        </li>
      </ul>
      {/* <h3>{value}</h3> */}
    </div>
  );
};

export default App;
