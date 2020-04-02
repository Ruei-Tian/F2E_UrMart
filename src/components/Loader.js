import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const StyleLoadingCover = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, .5);
`;

const Loader = () => (
  <>
    <StyleLoadingCover>
      <FontAwesomeIcon icon={faSpinner} spin size="lg" />
    </StyleLoadingCover>
  </>
);

export default Loader;
