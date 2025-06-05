import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import axios from "axios";

export default function DictionaryComp() {
    // State LOGIC
    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    //ASYNC FETCH
    function getMeaning() {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
            .then((res) => {
                setData(res.data[0]);
            });
    }

    //HANDLERS
    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <>
            <div className="App">
                <h1>Simple Dictionary App</h1>
                <div className="searchBox">
                    <input type="text" placeholder="Search for word" onChange={(e) => { setSearchWord(e.target.value) }} />
                    <button onClick={getMeaning}></button>
                    <FaSearch size="20px" />
                </div>
                {
                    data && (<div className="showResults">
                        <h2>
                            {data.word}{" "}
                            <button onClick={playAudio}>
                                <FcSpeaker size="26px" />
                            </button>
                        </h2>
                        <h4>Parts of speech:</h4>
                        <p>{data.meanings[0].partOfSpeech}</p>
                        <h4>Definition:</h4>
                        <p>{data.meanings[0].definitions[0].definition}</p>
                        <h4>Example:</h4>
                        <p>{data.meanings[0].definitions[0].example || `n/a`}</p>
                    </div>)
                }
            </div>
        </>
    );
}
