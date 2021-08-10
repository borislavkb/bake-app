import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  const [text, setText] = useState("");

  /* This is just an example to show that we can access
  the endpoint wihout writing the whole path, and that 
  the proxy feature of the create-react-app proxies the request
  to our server application */
  useEffect(() => {
    fetch("/api/hello-world") // localhost:3000/api/hello-world -> localhost:4000/api/hello-world
      .then((res) => res.json())
      .then((data) => setText(data));
  });

  return (
    <div className="App">
      <header className="App__header">
        <Navigation />
      </header>
      <main className="App_content">
        <Switch>
          <Route path="/cakes">ICON</Route>
          <Route path="/">HOME</Route>
        </Switch>
        <div className="Heading">
          <h1>CakeLog App</h1>
          <p>by Boris</p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
