// Libs & Frameworks
import styled from "styled-components";

// Files
import copImage from "../images/image-stand-out.jpg";

// Style
const Parent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  paddig: 0;

  .cop {
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    width: 50%;
    text-align: start;
    order: 1;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.7rem;
    flex-direction: column;
    padding: 10em;

    h2 {
      font-family: "Fraunces";
      font-size: 3em;
      color: #233042;
    }

    p {
      max-width: 100%;
      font-family: "Barlow";
      font-weight: light;
      color: #8d8c93;
    }

    a {
      button {
        border: none;
        outline: none;
        padding: 0.3em 0.5em;
        background: transparent;
        position: absolute;
        font-family: "Fraunces";
        color: #233042;

        &::before {
          content: "";
          position: absolute;
          background: #ff706261;
          height: 40%;
          width: 100%;
          bottom: 1px;
          transition: 0.5s;
          border-radius: 15px;

          z-index: -1;
          left: -1.5px;
        }

        &:hover {
          &::before {
            height: 92%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .text {
      padding: 4em;

      h2 {
        font-size: 2.5em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .cop {
      width: 100%;
      order: 1;
    }

    .text {
      padding: 10em;
      width: 100%;

      h2 {
        font-size: 2.3em;
      }
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;

    .text {
      padding: 5em;
      width: 100%;
    }
  }
`;

// JSX
const SecTwo = () => {
  return (
    <Parent>
      <div className="text" data-aos="flip-right">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>

        <a href="#">
          <button>LEARN MORE</button>
        </a>
      </div>

      <div className="cop" data-aos="zoom-in">
        <img src={copImage} alt="Cup Photo" />
      </div>
    </Parent>
  );
};
export default SecTwo;
