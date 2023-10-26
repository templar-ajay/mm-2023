import styled from "styled-components";

export const FeaturedProductsStyles = styled.section`
  margin: 0px !important;
  padding-top: 150px !important;
  padding-bottom: 150px !important;
  background-color: var(--darkBG);

  .container {
    margin-left: auto;
    margin-right: auto;

    &__tight {
      max-width: 1400px;
    }

    &__scroll {
      overflow-x: scroll;
      display: flex;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        width: 14px;
        height: 6px;
      }
      &::-webkit-scrollbar-track {
        background: #000;
        cursor: pointer;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #f8f9fa;
        cursor: pointer;

        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #ffe588;
      }
    }
  }

  .h1 {
    -webkit-text-fill-color: white;
    color: white !important;
    font-size: 4rem;
    font-weight: bold;
  }

  > div {
    &.container__scroll {
      margin-top: 100px;
      gap: calc(var(--gap) / 2);
      padding-bottom: var(--gap);
      padding-left: var(--borderSpacing);
      padding-right: var(--borderSpacing);
      margin-left: calc(var(--borderSpacing) * -1);
      width: calc(100% + (var(--borderSpacing) * 2));

      @media (min-width: 1200px) {
        padding-bottom: 0;
        width: 100%;
        margin-left: auto;
        padding-left: 0;
        padding-right: 0;
        gap: var(--gap);
      }
    }
  }
`;

export const FeaturedProductStyles = styled.aside`
  cursor: pointer !important;
  min-height: 408px;
  max-width: 230px;
  /*
  background-color: #a428bc;
  */
  background-image: linear-gradient(to bottom right, #a428bc, #fff8c9, #a428bc);
  flex: 0 0 80%;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-margin-left: 25px;
  position: relative;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: border-color 0.6s ease, box-shadow 0.6s ease;

  @media (min-width: 414px) {
    min-height: 434px;
  }

  @media (min-width: 768px) {
    min-height: 500px;
    max-width: 310px;
    flex-basis: 40%;
  }

  @media (min-width: 1024px) {
    min-height: 600px;
    max-width: 440px;
  }

  @media (min-width: 1200px) {
    max-width: 370px !important;
    margin: 15px;
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 100%;
    position: absolute;
    z-index: 2;
    padding: 20px 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1024px) {
      padding: 40px 20px;
    }

    @media (min-width: 1200px) {
      padding: 50px 30px;
    }

    h4,
    p {
      text-shadow: var(--textShadow);
    }

    h4 {
      color: #fff;
      font-size: 1.8rem;
    }

    p {
      color: var(--bodyColor);
    }
  }

  &:hover {
    cursor: pointer;
    border-color: #fff;
    box-shadow: 0px 0px 0.5rem #fff;

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`;
