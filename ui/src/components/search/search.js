import React, { useState, useCallback } from 'react'
import List from '../list/list'
import './search.css'

function Search() {

    const [items, setItems] = useState([]);
    const [iPDF, setPDF] = useState([]);
    const [query, setQuery] = useState("")

    const Geter = useCallback(async () => {

        let responces = await fetch(`http://localhost:3300/Email/${query}`)
        if (responces.status === 200) {
            fetch(`http://localhost:3300/Email/${query}`)
                .then(res => res.json())
                .then(
                    (result) => {

                        setItems(result);
                    }
                )

        }
        else {
             setItems([{"_id":"1","Date":"2023-10-02T19:00:00.000Z","Email":["1"],"Name":undefined,"Patronomic":undefined,"Quantum":["1"],"Surname":undefined}])
        }

    })



    const itmePDF = (obj) => {
        console.log(obj);
        setPDF((prev) => [...prev, obj])
    }

  


    return (
        <div>
            <form>
                <span className="search">
                    <input className="search-input" type="text" name="Title" onChange={event => setQuery(event.target.value)} />
                    <input className="search-button" type={'button'} name="Search" value={'Найти'} key={'Search123'} id={'Search123'} onClick={Geter} />
                </span>
            </form>
            {items.map((item, i) => (
                <div id={item._id}>
                    <List
                        key={i}
                        name={item.Name}
                        patronomic={item.Patronomic}
                        surname={item.Surname}
                        date={item.Date}
                        quantum={item.Quantum}      
                        PDD={(obj) => { itmePDF(item) }}
                    />
                </div>
            ))}
        </div>
    );

}

export default Search
