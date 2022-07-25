import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { Theme } from "./theme";
import { ThemeMediaQueries } from "./themeMediaQueries";

const {
  default: styled,
  css,
  injectGlobal,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<
  Theme & { media: ThemeMediaQueries }
>;

type ThemedStyledFunction<T> = styledComponents.ThemedStyledFunction<
  T,
  Theme & { media: ThemeMediaQueries }
>;

const withProps = <U>() => <P>(fn: ThemedStyledFunction<P>) =>
  fn as ThemedStyledFunction<P & U>;

export { css, injectGlobal, withProps, ThemeProvider };
export default styled;
