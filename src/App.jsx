import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import './App.css';
import tmdb from './api/tmdb';

function App() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const listAll = async () => {
      const list = await tmdb.getAllList();
      setItemList(list);
    };
    listAll();
  }, []);

  // console.log(itemList);

  return (
    <div className="App">
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
