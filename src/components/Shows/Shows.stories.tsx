import * as React from "react";
import { storiesOf } from "@storybook/react";
import {Shows} from "./Shows";
import {BrowserRouter as Router} from 'react-router-dom';

storiesOf("ShowsComponent", module).add("test render", () => (
  <Router>
    <Shows />
  </Router>
));
