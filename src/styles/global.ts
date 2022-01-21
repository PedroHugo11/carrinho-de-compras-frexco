import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #88BC22 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  .myModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    width: 300px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
  }

  .nameProduct {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    > button {
      background:transparent;
      border-style: outset;
      border:none;
      }
  }

  .infoNutritional {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5px;
    padding-bottom:20px;
  }

  .overlayModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

`;
