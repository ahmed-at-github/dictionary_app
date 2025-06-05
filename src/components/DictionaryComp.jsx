import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import axios from "axios";

export default function DictionaryComp() {
    // State LOGIC
    const [data, setData] = useState("");
    const [found, setFound] = useState(false);
    const [searchWord, setSearchWord] = useState("");

    //ASYNC FETCH
    function getMeaning() {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
            .then((res) => {
                setFound(true);
                setData(res.data[0]);
            })
            .catch((err) => {
                setFound(false);
                setData(true)
                console.log("not found");

            }
            )
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
                    <input style={{ width: "auto", display: "inline" }} type="text" placeholder="Search for word" onChange={(e) => { setSearchWord(e.target.value) }} />
                    <button onClick={getMeaning}> <FaSearch size="20px" /></button>

                </div>
                {
                    data && (found ? <div className="showResults">
                        <h2>
                            {data.word}{" "}
                            <button onClick={playAudio}>
                                <FcSpeaker size="26px" />
                            </button>
                        </h2>
                        <h4>Parts of speech:  <span>{data.meanings[0].partOfSpeech}</span></h4>

                        <h4>Definition: <span>{data.meanings[0].definitions[0].definition}</span></h4>

                        <h4>Example: <span>{data.meanings[0].definitions[0].example || `n/a`}</span></h4>

                    </div> : <div>
                        <h2> Searched word was not found</h2>
                    </div>
                    )
                }
            </div>
        </>
    );
}
