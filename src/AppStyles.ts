import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 10, 0.95);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes slide-in-fwd-bottom {
    0% {
      opacity: 0.7;
      transform: translateZ(-500px) translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateY(0);
    }
  }

  @keyframes slide-in-fwd-right {
    0% {
      opacity: 0.7;
      transform: translateZ(-500px) translateX(40px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }

  @keyframes slide-in-fwd-left {
    0% {
      opacity: 0.7;
      transform: translateZ(-500px) translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }

  @keyframes slide-in-fwd-top {
    0% {
      opacity: 0.7;
      transform: translateY(-60px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @keyframes scale-in-center {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes reveal {
    0% {
      clip-path: circle(0%);
    }
    25% {
      clip-path: circle(25%);
    }
    50% {
      clip-path: circle(50%);
    }
    75% {
      clip-path: circle(75%);
    }
    100% {
      clip-path: circle(100%);
    }
  }

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Mobile = styled.div`
  width: 373px;
  height: 800px;
  background-color: #f0f8ff;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
