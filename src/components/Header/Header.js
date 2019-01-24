import React, { Component } from 'react';
import SearchWrapper from './SearchWrapper';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <button
            className="navbar-toggler mr-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <span className="navbar-brand d-flex flex-fill">
            <i className="fas fa-2x fa-map-marked-alt" />
          </span>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav justify-content-center d-flex flex-fill">
              <li className="nav-item">
                <SearchWrapper>
                  <div className="searchbar">
                    <input
                      className="search_input"
                      type="text"
                      name=""
                      placeholder="Search..."
                    />
                    <a href="#" className="search_icon">
                      {'   '}
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </SearchWrapper>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-fill" />
        </nav>
      </header>
    );
  }
}

export default Header;
