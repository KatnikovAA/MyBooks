import { SearchText } from "./components/searchText/searchText.tsx";
import { Button } from "./components/button/button.tsx";
import pngBook from './books.png';
import './App.css';
function App() {
  return (
<div className="mainBlock">
  <div className="searchBlock">
    <SearchText></SearchText>
    <Button text="Find"></Button>
  </div>
  <div>
    <img className='pngBook' src={pngBook}></img>
  </div>
</div>
  );
}

export default App;
