import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

const Header = ({ themeName, setThemeName }) => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username or Repo..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
