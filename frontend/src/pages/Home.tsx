import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row ml-[220px] mt-[150px] w-[1200px]">
        <h1 className="text-xl">
          <span className="text-7xl">Discover, Learn, and Get Inspired</span>
          <br />
          <br />
          <br />
          Your Source for Insightful Stories and Ideas.
        </h1>
        <img src="https://cdn.pixabay.com/photo/2023/11/12/17/07/ai-generated-8383602_1280.jpg" width="500px" className="ml-[300px]" />
      </div>
    </>
  );
};

export default Home;
