import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const StyleButton = styled.div`
    display: inline-block;
    background-color: pink;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 4px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: background-color .3s, opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;

    &::after {
        content: "TOP";
        font-weight: normal;
        font-style: normal;
        font-size: 1em;
        line-height: 50px;
        color: #fff;
    }

    &:hover {
        cursor: pointer;
        background-color: #333;
    }
    &:active {
        background-color: #555;
    }
    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function triggerScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', triggerScroll);

    return () => window.removeEventListener('scroll', triggerScroll);
  }, [scrollY]);

  function handleClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <StyleButton
      id="button"
      className={scrollY > 30 ? 'show' : ''}
      onClick={handleClick}
    />
  );
}
