import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import FeaturedItem from './components/FeaturedItem';
import './App.css';
import tmdb from './api/tmdb';

function App() {
  const [itemList, setItemList] = useState([]);
  const [featuredItem, setFeaturedItem] = useState(null);
  useEffect(() => {
    const listAll = async () => {
      const list = await tmdb.getAllList();
      setItemList(list);
      const originals = list.filter((item) => item.name === 'originals');
      if (originals) {
        const [featured] = originals;
        const length = featured.item.results.length - 1;
        const randomIndex = Math.round(Math.random() * length);
        const item = featured.item.results[randomIndex];
        const response = await tmdb.getFeaturedItem(item.id, 'tv');
        setFeaturedItem(response);
      }
    };
    listAll();
  }, []);
  return (
    <div className="App">
      {featuredItem && <FeaturedItem data={featuredItem} />}
      <section className="lists">
        {itemList.map((item) => (
          <div key={item.id}>
            <ItemList data={item} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
