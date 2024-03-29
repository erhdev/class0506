import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    switch (this.currentPage) {
      case 'Home':
        page = <Home/>
      break;
      case "About":
        page = <About/>
      break;
      case "Blog":
        page = <Blog/>
      break;
      case 'Contact':
        page = <Contact/>
      break;
    }
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {page}
      </div>
    );
  }
}

export default PortfolioContainer;
