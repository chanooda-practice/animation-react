import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  a {
    color: white;
    display: block;
    text-align: center;
  }
  button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
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
`;

const BoxVar = {
  start: { opacity: 0, scale: 0, x: "-50%", y: "-50%" },
  end: { opacity: 1, scale: 1, rotateZ: 360 },
  re: { opacity: 0, scale: 0, y: 300 },
};

function DeepAnimation() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/slider">Slider</Link>
      <Link to="/animatesharedlayout">AnimateSharedLayout</Link>
      <AnimatePresence>
        {show ? (
          <Box variants={BoxVar} initial="start" animate="end" exit="re" />
        ) : null}
      </AnimatePresence>
      <button onClick={onClick}>Click</button>
    </Wrapper>
  );
}

export default DeepAnimation;
