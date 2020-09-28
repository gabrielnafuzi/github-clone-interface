import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/gabrielnafuzi'}>
          gabrielnafuzi
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'gabrielnafuzi/dogs'}>
          dogs
        </Link>
      </Breadcrumb>

      <p>Projeto feito no curso de reactjs da origamid</p>

      <Stats>
        <li>
          <StarIcon />
          <b>4</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/gabrielnafuzi/dogs'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
