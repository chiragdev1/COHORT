import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const App = () => {
   return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", {}, "Hello react 18.2.0")
   );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));
