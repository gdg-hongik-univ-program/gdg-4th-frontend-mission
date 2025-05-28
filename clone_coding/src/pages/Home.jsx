import Header from '../components/Header';
import LocationSelector from '../components/LocationSelector';
import SearchBar from '../components/SearchBar';
import CategoryIcons from '../components/CategoryIcons';
import SubLocations from '../components/SubLocations';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="w-full max-w-screen-lg px-4 text-center">
        <LocationSelector />
        <h1 className="text-2xl font-bold mt-6 mb-4">상암동에서 알바 찾고 계신가요?</h1>
        <SearchBar />
        <CategoryIcons />
        <SubLocations />
      </main>
    </div>
  );
}

export default Home;
