import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import device from '../device';

import VideoItem from './VideoItem';
import SearchBar from './SearchBar';
import Loader from './Loader';
import BackToTop from './BackToTop';

const StyledMain = styled.main`
  display: flex;
  padding: 50px 1%;
  justify-content: center;
  flex-wrap: wrap;
  flex: 30%;
  position: relative;
  max-width: 1600px;
  margin: auto;

  @media ${device.laptop} { 
    padding: 50px 10px;
  }
  
`;

export default function App() {
  const isLoading = useSelector((state) => state.loadingReducer.isLoading);
  const allResults = useSelector((state) => state.searchRecordReducer.record);

  return (
    <>
      <SearchBar />
      <StyledMain>
        {isLoading ? <Loader /> : ''}
        {
          allResults.map((item, i) => (
            <VideoItem
              key={item.videoId + i}
              videoId={item.videoId}
              title={item.title}
              image={item.image}
            />
          ))
        }
        <BackToTop />
      </StyledMain>
    </>
  );
}
