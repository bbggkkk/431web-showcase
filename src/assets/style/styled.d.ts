import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;
    color: {
      main: string;
      sub: string;
      background: string;
      text: string;
      primary:string;
      tertiary:string;
    };
    typo:any;
    mode:string;
  }
}