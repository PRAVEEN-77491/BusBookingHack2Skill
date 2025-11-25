import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Enjoy Booking Bus</h1>

      <SearchForm />
    </div>
  );
};

export default Home;
