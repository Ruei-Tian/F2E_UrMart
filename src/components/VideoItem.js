import React from 'react';
import styled from 'styled-components';
import device from '../device';


const StyledCard = styled.div`
  color: blue;
  box-shadow: 3px 3px 3px #666666;
  margin: 0 1% 30px 1%;
  a {
    color: #666666;
    text-decoration: none;
    display: block;
    text-align: center;
    border-redius: 3px;
  }

  a .card-title {
    padding: 20px;
  }

  a .card-title h3 {
    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow : ellipsis;
  }

  @media ${device.laptop} { 
    width: 45%;
    a .card-img img {
      width: 100%;
    }
  }

  @media ${device.mobileM} { 
    width: 90%;
  }
`;

export default function VideoItem(props) {
  const { title, videoId, image } = props;
  return (
    <>
      <StyledCard>
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
        </a>
      </StyledCard>
    </>
  );
}
