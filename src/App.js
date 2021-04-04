import React from 'react';

import { Container } from 'react-bootstrap';

import useFetchJobs from './useFetchJobs';

import './App.css';

const App = () => {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      { loading && <h1>Loading...</h1> }
      { error && <h1>Error. Try refreshing the page.</h1> }
      <h1>{ jobs.length }</h1>
    </Container>
  )
}

export default App;
