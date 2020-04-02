import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import searchByKeyword from '../youtubeAPI';
import { setLoading } from '../reducers/loadingReducer';
import { addRecord, clearRecord } from '../reducers/searchRecordReducer';

const StyledNav = styled.nav`
  padding: 30px;
  background-color: pink;
  display: flex;
  justify-content: center;

  label {
    border-radius: 5px;
    background-color: white;
    padding: 10px;
  }

  input {
    padding: 10px;
    letter-spacing: 2px;
    border: none;
  }
`;

export default function SearchBar() {
  const isLoading = useSelector((state) => state.loadingReducer.isLoading);
  const allResults = useSelector((state) => state.searchRecordReducer.record);

  const dispatch = useDispatch();

  const [inputValue, setValue] = useState('熱門音樂');
  const [nextPage, setNextPage] = useState('');

  async function fetchData() {
    dispatch(setLoading(true));
    const result = await (await searchByKeyword(inputValue, nextPage)).json();
    const items = [];
    result.items.map((item) => {
      const obj = {
        title: item.snippet.title,
        image: item.snippet.thumbnails.medium.url,
        videoId: item.id.videoId,
      };

      items.push(obj);
    });
    setNextPage(result.nextPageToken);
    dispatch(addRecord(inputValue, items));
    dispatch(setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    function getNextPage() {
      const isScrollToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
      if (isScrollToBottom) {
        if (allResults.length > 30) {
          alert('There is no more results!');
          return;
        }

        if (isLoading === false) {
          fetchData();
        }
      }
    }
    window.addEventListener('scroll', getNextPage);

    return () => window.removeEventListener('scroll', getNextPage);
  });


  function handleSubmit(e) {
    const ifEnter = e.keyCode === 13;
    if (ifEnter) {
      e.preventDefault();
      dispatch(clearRecord());
      fetchData();
    }
  }

  return (
    <StyledNav>
      <form>
        <label htmlFor="search-input">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search ..."
            id="search-input"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </label>
      </form>
    </StyledNav>
  );
}
