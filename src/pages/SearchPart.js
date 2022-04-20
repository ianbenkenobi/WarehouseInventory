import '../App.css';
import { db } from '../firebase-config';
import { uid } from "uid";
import { set, ref, onValue, remove, update, child} from "firebase/database";
import { useState, useEffect } from "react";
import Home from './Home'
import { Route, link, Router, useResolvedPath } from 'react-router-dom';
import NavBar from '../NavBar';
import { DummyBase } from '../DummyBase';
import { Table } from '../Table';


export default function SearchPart() {

  const filtered = child(db,'/inventory/');
  const [query, setQuery] = useState("");
  const [param, setParam] = useState("");

  const [showList, setShowList] = useState(false);

  const searchresult = (data) => {

    return (

      data.filter((item) => item.part_description.toLowerCase().includes(query))
    )

  }
  const handleSetParam = (e) => {

    if (e != null) {
      setShowList(false);
    };

    setParam(e.target.value.trim());
  }

  const databaseThing = (ref(db), snapshot => {
    console.log(filtered);


  });

  const handleSetQuery = () => {

    setShowList(true);

    setQuery(param);
  }
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={handleSetParam} />
      <button onClick={databaseThing}>Search</button>

      {showList ? (
        <Table data={searchresult(DummyBase)} />
      ) : (
        <div>Please search for a value.</div>
      )}


    </div>
  );
}


