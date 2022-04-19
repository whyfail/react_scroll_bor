import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  width: 100%;
`;

const ReactScrollBor = ({ speed = 100, children }) => {
  const textRef = useRef();

  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [duration, setDuration] = useState(5);
  const [ScrollText, setScrollText] = useState(null);

  const handleDurationUpdate = () => {
    if (
      textRef.current &&
      (clientWidth !== textRef.current.clientWidth ||
        scrollWidth !== textRef.current.scrollWidth)
    ) {
      setClientWidth(textRef.current.clientWidth);
      setScrollWidth(textRef.current.scrollWidth);
      setDuration(
        (textRef.current.clientWidth + textRef.current.scrollWidth) / speed
      );
    }
  };

  useEffect(() => {
    const dom = styled.div`
      animation: ${scrollWidth > clientWidth
        ? `scroll ${duration}s linear infinite`
        : "none"};
      animation-fill-mode: forwards;
      @keyframes scroll {
        0% {
          transform: translateX(${clientWidth}px);
        }
        100% {
          transform: translateX(-${scrollWidth}px);
        }
      }
    `;

    setScrollText(dom);
  }, [duration, scrollWidth, clientWidth]);

  useEffect(() => {
    if (!ScrollText) return;

    handleDurationUpdate();
  }, [ScrollText]);

  return (
    <Container>
      {ScrollText && <ScrollText ref={textRef}>{children}</ScrollText>}
    </Container>
  );
};

export default ReactScrollBor;
