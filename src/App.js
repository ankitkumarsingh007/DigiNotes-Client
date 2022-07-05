import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import Search from "./components/Search";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <div style={{ minHeight: "95vh" }}>
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <div className="container my-2">
              <Switch>
                <Route exact path="/">
                  <Home showAlert={showAlert} />
                </Route>
                <Route exact path="/text">
                  <TextForm showAlert={showAlert} />
                </Route>
                <Route exact path="/Search">
                  <Search />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login showAlert={showAlert} />
                </Route>
                <Route exact path="/signup">
                  <Signup showAlert={showAlert} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
        <p className="text-center fw-bold">
          Copyright ©{" "}
          <a
            href="https://www.linkedin.com/in/the-ankit-kumar-singh/"
            target="_blank"
          >
            Ankit Kumar Singh
          </a>
        </p>
      </NoteState>
    </>
  );
}

export default App;
