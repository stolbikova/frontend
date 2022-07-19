import * as React from "react";
import { ThemeProvider } from "display";
import { Shows } from "components/Shows/Shows";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => (
  <Router>
    <ThemeProvider>
      <Shows showsApi='/api/shows' />
    </ThemeProvider>
  </Router>
);

export default App;
