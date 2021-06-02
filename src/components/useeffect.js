import React, {useState, useEffect} from 'react';

export default function App(){
    const [resourcetype, setRecourcetype] = useState('a')
    return(
    <>
    <button onClick={() => setRecourcetype('a')}>a</button>
    <button onClick={() => setRecourcetype('b')}>b</button>
    <button onClick={() => setRecourcetype('c')}>c</button>
    <h1>resoursetype</h1>
    </>
    )
}