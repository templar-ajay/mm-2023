import styled from "styled-components";

export const FaqStyles = styled.section`
  // strong {
  //   font-weight: inherit !important;
  // }
  strong {
    --tw-gradient-text: #ffe580, #ffc400;
    background-image: linear-gradient(to right, var(--tw-gradient-text));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  p {
    padding: 15px 0;
  }

  .question {
    min-height: calc(var(--gap) * 2);
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.25);
    width: 100%;
    background-color: transparent;
    color: #fff;
    opacity: 0.9 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    font-size: var(--p);
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: var(--primary);
    }

    .trigger {
      display: inline-flex;
      height: 40px;
      width: 50px;
      position: relative;
      font-size: 35px;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      transform-origin: center;
      transition: transform 0.6s ease;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    span,
    .laPregunta {
      display: inline;
      font-size: 20px;
      text-align: left;
    }
  }

  .answer {
    padding: calc(var(--gap) / 2);
    font-size: var(--p);
    color: #fff;
    opacity: 0.75 !important;
  }
  margin-bottom: calc(var(--gap) / 2);

  &.faq-open {
    .trigger {
      transform: rotate(-180deg);
    }
  }
`;
