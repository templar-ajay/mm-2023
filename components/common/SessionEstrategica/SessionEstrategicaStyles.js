import styled from "styled-components";

export const SessionEstrategicaStyles = styled.section`
  // background: linear-gradient(180deg, var(--grisTercero) 0, var(--fondoGris));
  background: var(--darkBG);
  height: 700px;
  padding: 1px;
  width: 100%;
  padding-top: 80px;

  @media (min-width: 768px) {
    padding: 30px;
    padding-top: 50px;
  }

  > .container {
    position: relative;
    display: flex;

    align-items: center;

    flex-direction: column;
    max-width: 97%;

    @media (min-width: 768px) {
      max-width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .botonWrapper {
    width: 70%;
    > .botonAtras {
      background: none;
      border: none;
      cursor: pointer;

      > span {
        color: white;
        font-size: 25px;
      }
      svg {
        color: white;
        font-size: 25px;
      }
    }
  }

  iframe {
    border: none;
    width: 100%;

    min-height: 900px;

    @media (min-width: 768px) {
      margin-top: 10px;
      min-height: 800px;
    }
  }
`;
