import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`

  list-style: none;

  li {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > div {
      svg {
        margin-top:3px;
      }
    }

    button {
      background: #88BC22;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
      display: flex;
      width:100%;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#88BC22')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
