import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";


const teas = {
   name: "Ginger Tea",
   price: 99
}

const Chai = (props) => {
   return React.createElement("div", {}, [
      React.createElement("h3", {}, props.name),
      React.createElement("h3", {}, `₹${props.price}`),
   ]);
};

const App = () => {
   return React.createElement("div", { className: "App" }, [
      React.createElement("h1", {}, "Multiple elements/children"),
      React.createElement(Chai, {name: "Green tea" ,price: 299}),
      React.createElement(Chai, teas),
      React.createElement(Chai, {name: "Chamomile tea" ,price: 599}),
      React.createElement(Chai, {name: "Hibiscus tea" ,price: 999}),
   ]);
};


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));
