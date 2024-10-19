import PropTypes from "prop-types";
import React, { Component } from "react";
import { ThemeContext, ThemeUpdateContext } from "./Themecontext";

export class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "black" : "blue",
      color: dark ? "white" : "black",
      padding: "20px",
      margin: "20px",
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
            {(darkTheme) => {
              return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
            }}
          {/* <ThemeUpdateContext.Consumer >
          </ThemeUpdateContext.Consumer> */}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default ClassContextComponent;
