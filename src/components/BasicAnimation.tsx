import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    color: white;
    color: white;
    margin: 30 auto;
  }
`;

// framer Motion Styled Components
const BasicBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  svg {
    width: 150px;
    height: 150px;
    margin-left: 25px;
    margin-top: 25px;
    path {
      stroke-width: 5;
      stroke: white;
    }
  }
`;

const CircleBox = styled(BasicBox)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: #fff;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const RotateBox = styled(BasicBox)``;

const DragBoxContainer = styled(BasicBox)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DragBox = styled(BasicBox)`
  height: 150px;
  width: 150px;
  border-radius: 25px;
  background-color: white;
  cursor: grabbing;
`;

const ScrollBoxContainer = styled(BasicBox)`
  overflow: hidden;
`;

const ScrollBox = styled(BasicBox)`
  background-color: white;
  transform-origin: bottom;
`;
// Var

const basicBoxVar = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 180, transition: { delay: 0.5, type: "spring" } },
};

const circleBoxVar = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      duration: 0.2,
      bounce: 0.5,
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const circleVar = {
  start: { opacity: 0, y: -10 },
  end: {
    y: 0,
    opacity: 1,
  },
};

const RotateBoxVar = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 0.8, borderRadius: "100%" },
};

const svgBoxVar = {
  start: { fill: "rgba(255,255,255,0)", pathLength: 0 },
  end: {
    fill: "rgba(255,255,255,1)",
    pathLength: 1,
  },
};
function BasicAnimation() {
  const constraintsRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.3]);
  return (
    <Wrapper>
      <BasicBox variants={basicBoxVar} initial="start" animate="end" />
      <CircleBox variants={circleBoxVar} initial="start" animate="end">
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
        <Circle variants={circleVar} />
      </CircleBox>
      <RotateBox variants={RotateBoxVar} whileHover="hover" whileTap="click" />
      <DragBoxContainer ref={constraintsRef}>
        <DragBox drag dragSnapToOrigin dragConstraints={constraintsRef} />
      </DragBoxContainer>
      <ScrollBoxContainer style={{ scale }}>
        <ScrollBox
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </ScrollBoxContainer>
      <BasicBox>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <motion.path
            variants={svgBoxVar}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 3, delay: 0.5 },
              fill: { duration: 2, delay: 1.8 },
            }}
            d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
          ></motion.path>
        </svg>
      </BasicBox>
      <Link to="deep">Deep</Link>
      <Link to="slider">Slider</Link>
      <Link to="animatesharedlayout">AnimateSharedLayout</Link>
    </Wrapper>
  );
}

export default BasicAnimation;
