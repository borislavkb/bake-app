import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./images/intro-page.jpg";

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
      <img src="./images/intro-page.jpg" alt="Intro" />
      <header className="App__header">
        <Switch>
          <Route path="/cakes">ICON</Route>
          <Route path="/">HOME</Route>
        </Switch>
      </header>
      <main></main>

      <footer></footer>
    </div>
  );
}

export default App;
