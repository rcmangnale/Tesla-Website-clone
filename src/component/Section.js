import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  showDownArrow,
}) {
  return (
    <Main className="flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover z-1" bgImage={backgroundImage}>
      <Fade bottom>
        <div className="text-center pt-36 ">
          <p className="text-5xl font-bold">{title}</p>
          <p className="py-2 text-lg text-black ">{description}</p>
        </div>
      </Fade>
      <div className="flex flex-col ">
        <Fade bottom>
          <ButtonGroup className="flex gap-16 mb-16">
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {showDownArrow && <DownArrow src="/images/down-arrow.svg"></DownArrow>}
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  cursor: pointer;
  background-color: rgb(38 38 38);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  font-size: 20px;
  font-weight: semibold;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  animation: bounce infinite 1.5s;
`;
