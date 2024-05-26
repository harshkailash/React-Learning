/* eslint-disable no-unused-vars */
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage";
import MailLayout from "./layouts/MailLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobpage from "./pages/EditJobpage";

const App = () => {
  // add new jib
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  // update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  // Delete job
  const deleteJob = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MailLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/edit-job/:id' element={<EditJobpage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
  );
  return <RouterProvider router={router}/>
}
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero1 />
//       <HomeCards />
//       <JobListings />
//       <ViewAllJobs />
//     </>
//   )
// }

export default App