import { Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Belanosima', sans-serif;
        font-size: 18px;
        line-height: 1.334;
        color: #373737;
        background: #D3F6DF;
      }
      ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
        cursor: pointer;
      }
      button {
        cursor: pointer;
      }
    `}
  />
);

