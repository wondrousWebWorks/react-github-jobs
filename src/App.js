import React, { useState } from "react";

import { Container } from "react-bootstrap";

import useFetchJobs from "./useFetchJobs";

import Job from "./components/job/job.component";
import JobPagination from "./components/job-pagination/job-pagination";

import "./App.css";
import SearchForm from "./components/search-form/search-form.component";

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const handeParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handeParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing the page.</h1>}
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};

export default App;
