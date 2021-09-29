import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './api/tmdb';

function App() {
  const [itemList, setItemList] = useState();
  useEffect(() => {
    const listAll = async () => {
      const list = await tmdb.getAllList();
      setItemList(list);
      return list;
    };
    listAll();
  }, []);
  console.log(itemList);
  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
