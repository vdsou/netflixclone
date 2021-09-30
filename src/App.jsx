import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import FeaturedItem from './components/FeaturedItem';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import tmdb from './api/tmdb';

function App() {
  const [itemList, setItemList] = useState([]);
  const [featuredItem, setFeaturedItem] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);
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
  useEffect(() => {
    const scrollYListener = () => {
      if (window.scrollY > 10) {
        setHeaderBlack(true);
      } else {
        setHeaderBlack(false);
      }
    };
    window.addEventListener('scroll', scrollYListener);
    return () => window.removeEventListener('scroll', scrollYListener);
  }, []);
  return (
    <div className="App">
      <Header isBlack={headerBlack} />
      {featuredItem && <FeaturedItem data={featuredItem} />}
      <section className="lists">
        {itemList.map((item) => (
          <div key={item.id}>
            <ItemList data={item} />
          </div>
        ))}
      </section>
      <Footer />
      {itemList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
