import Header from './components/Header';
import LocationBar from './components/LocationBar';
import CategoryNav from './components/CategoryNav';
import SearchBox from './components/SearchBox';
import AreaTagList from './components/AreaTagList';

export default function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <LocationBar />
      <SearchBox />
      <CategoryNav />
      <AreaTagList />
    </div>
  );
}