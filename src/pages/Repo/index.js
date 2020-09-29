import React from 'react';
import { Link, useParams } from 'react-router-dom';

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
  const [data, setData] = React.useState(null);
  const { username, reponame } = useParams();

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${reponame}`
      );

      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, [reponame, username]);

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{data?.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data?.stargazers_count}</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>{data?.forks_count}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={`https://github.com/${username}/${reponame}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
