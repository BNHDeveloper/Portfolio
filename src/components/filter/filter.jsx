import React, { useState } from 'react'
import "./filter.css"

const Filter = () => {
    const [filter, setFilter] = useState(false);
    return (
        <div className="cours container">
            <div className='flex'>
                <h1 className="serviceTitle">
                    cours 
                </h1>
                <div>
                    <button onClick={()=>setFilter(true)}>filter</button>
                    <i className="ti-filter"></i>
                </div>
            </div>
            <div className={filter?"filter active":"filter"}>
                <ul>
                    <li>
                        <span>category</span>
                        <ul>
                            <li>
                                <input type="radio" id="all" value="all" name="category"/>
                                <label for="all">all</label>
                            </li>
                            <li>
                                <input type="radio" id="web" value="web" name="category"/>
                                <label for="web">web</label>
                            </li>
                            <li>
                                <input type="radio" id="application" value="application" name="category"/>
                                <label for="application">application</label>
                            </li>
                            <li>
                                <input type="radio" id="arduino" value="arduino" name="category"/>
                                <label for="arduino">arduino</label>
                            </li>
                            <li>
                                <input type="radio" id="design" value="design" name="category"/>
                                <label for="design">design</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>premiure</span>
                        <ul>
                            <li>
                                <input type="checkbox" id="free" value="free" name="premiure"/>
                                <label for="free">free</label>
                            </li>
                            <li>
                                <input type="checkbox" id="premier" value="premier" name="premiure"/>
                                <label for="premier">premier</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>language</span>
                        <ul>
                            <li>
                                <input type="checkbox" id='arabic' value="arabic" name="lang"/>
                                <label for="arabic">arabic</label>
                            </li>
                            <li>
                                <input type="checkbox" id='english' value="english" name="lang"/>
                                <label for="english">english</label>
                            </li>
                            <li>
                                <input type="checkbox" id='fransh' value="fransh" name="lang"/>
                                <label for="fransh">fransh</label>
                            </li>
                        </ul>
                    </li>
                </ul>
                <input type="submit" value="search" name='search' onClick={() => setFilter(false)} />
            </div>
        </div>
    )
}

export default Filter