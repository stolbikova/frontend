import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';
import {Shows} from "./Shows";
import {ThemeProvider} from "../../display";

const createRenderer = () =>
  renderer.create(
    <Router>
      <ThemeProvider>
      <Shows />
      </ThemeProvider>
    </Router>,
  );

it("renders Shows subcomponent", () => {
  const component = createRenderer();
  expect(component.toJSON()).toMatchSnapshot();
});
