import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  flex-direction: column;
  a {
    color: white;
    display: block;
    text-align: center;
  }
`;

const Box = styled(motion.div)`
  top: 20%;
  left: 50%;

  position: absolute;
  border-radius: 25px;
  width: 800px;
  height: 300px;
  background-color: #fff;
  text-align: center;
  line-height: 300px;
  font-size: 50px;
`;

const nextVar = {
  invisible: (custom: Boolean) => ({
    opacity: 0,
    translateX: "-50%",
    x: custom ? 800 : -800,
    scale: 0,
    transition: { duration: 0.3 },
  }),
  visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: (custom: Boolean) => ({
    opacity: 0,
    x: custom ? -800 : 800,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};
function Slider() {
  const [show, setShow] = useState(1);
  const [way, setWay] = useState(true);
  const next = () => {
    setWay(true);
    setShow((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const clickPrev = () => {
    setWay(false);
    setShow((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <Link to="/deep">Deep</Link>
      <Link to="/">Home</Link>
      <Link to="animatesharedlayout">AnimateSharedLayout</Link>
      <AnimatePresence exitBeforeEnter custom={way}>
        <Box
          custom={way}
          variants={nextVar}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={show}
        >
          {show}
        </Box>
      </AnimatePresence>
      <button onClick={next}>Next</button>
      <button onClick={clickPrev}>Prev</button>
    </Wrapper>
  );
}

export default Slider;
