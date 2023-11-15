import TestComponent from "../Components/testcomponent.jsx";
import "../index.css"

function HelloWorld() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <TestComponent />
    </>
  );
}

export default HelloWorld;
