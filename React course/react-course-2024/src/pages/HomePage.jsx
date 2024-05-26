import Hero1 from "../components/Hero1";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
        <Hero1 />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage