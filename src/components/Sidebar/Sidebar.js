import React from 'react';
import Search from './Search';
import Filterby from './Filterby';
import SearchWrapper from '../Header/SearchWrapper';

const Sidebar = () => (
  <div>
    <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
      <div className="card-header">Autocomplete Search</div>
      <div className="card-body">
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </div>
    </div>
    <Filterby />
  </div>
);

export default Sidebar;
