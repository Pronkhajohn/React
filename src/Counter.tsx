import {FC, useEffect, useState} from "react";

const Counter_todo: FC = () => {
    let nextId = 0;

    
    function deleteArtist(artist: { id: number, name: string }) {
        setCounter(count_todo.filter((a : any) => a.id !== artist.id)
    )}

    function addArtist() {
        setCounter([...count_todo, {id: nextId++, name: name}]);
    }

    const [name, setName] : any = useState("");
    const [count_todo, setCounter] : any = useState([]);
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />

            <button onClick={() => addArtist()}>Add</button>

            <ul>    
                {count_todo.map((artist: { id: number, name: string }) => (
                        <li key={artist.id}>{artist.name}
                        <button onClick= {() => deleteArtist(artist)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Counter_todo;
