import axios from 'axios';
import React, { useState } from 'react';
import { TrailAPI_API , API_KEY} from "./client";
import * as client from "./client";


function Search() {

    const [searchLatitude, setSearchLatitude] = useState(0);
    const [searchLongitude, setSearchLongitude] = useState(0);

    const [results, setResults] = useState(null);

    const fetchTrails = async () => {

        console.log("fetch reached");
        const trails = await client.findTrails(searchLatitude, searchLongitude);
        setResults(trails);

        console.log("fetch complete");

    }

    return (
        <div>
            <input 
                type='number' 
                id='Latitude'
                placeholder='Latitude...'
                value={searchLatitude}
                onChange={(event) => {
                    setSearchLatitude(event.target.value);
                } }>
            </input>

            <input 
                type='number' 
                id='Longitude'
                placeholder='Longitude...'
                value={searchLongitude}
                onChange={(event) => {
                    setSearchLongitude(event.target.value);
                } }>
            </input>

            <button onClick={() => fetchTrails()}>
                Generate Search
            </button>


            <hr/>

            <pre>
                {JSON.stringify(results, null, 2)}
            </pre>
        </div>
    );
}

export default Search;
