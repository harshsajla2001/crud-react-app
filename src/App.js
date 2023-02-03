import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/1" component={View} />
          <Route exact path="/edit/1" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
