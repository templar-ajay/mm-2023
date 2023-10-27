import styled from "styled-components";

export const FAQTemplateStyles = styled.section`
  padding-left: 0px !important;
  padding-right: 0px !important;

  background-color: var(--fondoGris);

  position: relative;
  height: auto;
  margin: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  .whenUpdated {
    font-size: 15px;
    font-weight: 900;
    styled: underline;
    text-decoration: underline;
    text-decoration-color: var(--primary);
    color: var(--primary);
  }

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

  .perks__divider {
    font-size: 25px;
    color: var(--primary);

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  > .container {
    position: relative;
    display: flex;
    gap: var(--gap);
    align-items: center;

    flex-direction: column;
    max-width: 95%;

    @media (min-width: 768px) {
      max-width: 60%;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      gap: calc(var(--gap) * 2);
    }

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 4);
    }
  }

  > div {
    font-size: 1.5em;
  }

  .menu {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;
  }

  .animationContainer {
    margin: 0 auto;
    max-width: 100px;
  }
  .h1 {
    // color: white !important;
    font-size: 3.5rem;
    font-weight: bold;
    @media (max-width: 840px) {
      font-size: 2.8rem;
    }
    @media (max-width: 640px) {
      font-size: 2.2rem;
    }
  }
`;
