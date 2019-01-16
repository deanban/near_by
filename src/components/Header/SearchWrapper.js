import styled from "styled-components";

const SearchWrapper = styled.div`
  .searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #fdfdfd;
    border-radius: 50px;
    padding: 8px;
  }

  .search_input {
    color: rgb(10, 9, 9);
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 30px;
    transition: width 0.4s linear;
    font-size: 20px;
  }
  .searchbar:hover {
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #ffffff;
    border-radius: 25px;
    padding: 15px;
  }

  .searchbar:hover > .search_input {
    padding: 0 10px;
    width: 700px;
    caret-color: rgb(0, 0, 0);
    transition: width 0.3s linear;
  }

  .searchbar:hover > .search_icon {
    background: white;
    color: #000000;
  }

  .search_icon {
    height: 100%;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: rgb(219, 14, 14);
  }
`;

export default SearchWrapper;
