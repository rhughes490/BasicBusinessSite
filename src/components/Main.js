import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import ContactPage from "./ContactPage";
import NavBar from "./NavBar";
import ErrorPage from './ErrorPage.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {level: "Hobby", cost: 0},
        {level: "Startup", cost: 0},
        {level: "Enterprise", cost: 100}
      ]
    };
  }

  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing"
            render={() => <Pricing prices={this.state.pricing}/>}/>
            <Route path="/contactPage" component={ContactPage} />
            <Route component={ErrorPage}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }


}

export default Main;
