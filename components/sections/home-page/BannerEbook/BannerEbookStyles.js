import styled from "styled-components";

export const BannerEbookStyles = styled.section`
  // background: linear-gradient(180deg, var(--grisTercero) 0, var(--fondoGris));
  background: var(--darkBG);
  padding-top: 250px !important;
  position: relative;
  padding: 30px var(--borderSpacing);

  .h1 {
    font-size: 16px;
  }

  strong {
    --tw-gradient-text: #ffe580, #ffc400;
    background-image: linear-gradient(to right, var(--tw-gradient-text));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  padding-left: 0px !important;
  padding-right: 0px !important;

  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.65);
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
    }

    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }

  .titularRevela {
    color: #fff !important;
    text-transform: uppercase;
    background: var(--primary);
    border-radius: 50px;
    padding: 5px 6px 4px;
    letter-spacing: 0.05rem;
    margin: 0 auto 2rem;
    display: table;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  @keyframes smallPulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 196, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(255, 196, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 196, 0, 0);
    }
  }
  .blink {
    background-color: var(--secondary);
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 20px;
    top: -1px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex: none;
  }
  .blink:after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 26px;
    left: -26px;
    border-radius: 50%;
    background: var(--secondary);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    -webkit-animation: smallPulse 2s ease-out infinite;
  }

  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: var(--primary);
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s; /* Safari 和 Chrome */
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }

  .reviewsWrapper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    text-align: center;

    .estrellas {
      color: var(--primary);
    }
    em {
      color: white;
    }
  }

  .divider {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 0%;
    margin-left: -30px;
    bottom: 20px;

    @media (min-width: 768px) {
      width: 60px;
      height: 20px;
      left: 20%;
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
