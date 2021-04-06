import React, { useState } from "react";

import { Container } from "react-bootstrap";

import useFetchJobs from "./useFetchJobs";

import Job from './components/job/job.component';

import "./App.css";

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing the page.</h1>}
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </Container>
  );
};

export default App;
