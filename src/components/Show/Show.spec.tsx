import * as React from "react";
import * as renderer from "react-test-renderer";
import {Show} from "./Show";
import {getCartesianProduct} from "../../testing/cartesianProduct";
import {showMock} from "../../testing/show.props.mock";

describe("renders Show component", () => {
  const propsList = getCartesianProduct(
    {
      ...showMock
    }
  );

  propsList.forEach((props) => {
    const propsString = JSON.stringify(props);
    it(`should render with "${propsString}"`,  () => {
      const component = renderer.create(<Show {...props} />);
      expect(component).toMatchSnapshot();
    });
  });
});
