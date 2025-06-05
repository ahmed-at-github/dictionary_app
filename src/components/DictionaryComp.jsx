import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FcSpeaker } from "react-icons/fc"
import axios from "axios";

export default function DictionaryComp() {
    // State LOGIC
    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    //ASYNC FETCH
    function getMeaning() {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then((res) => {
            setData(res.data[0]);
        })
    }

    //HANDLERS
    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio)
        audio.play();
    }

    return (
        <>
            <div className="App">
                <h1>Dictionary App</h1>
                <div className="searchBox">
                    <input type="text" placeholder='Search for word'
                        onChange={0}
                    />
                    <button
                        onClick={0}></button>
                    <FaSearch size="20px" />
                </div>
                {/* && */ (
                    <div className="showResults">
                        <h2>{0}
                            <button onClick={0}>
                                <FcSpeaker size="26px" />
                            </button>
                        </h2>
                        <h4>Parts of speech:</h4>
                        <p>{0}</p>
                        <h4>Definition:</h4>
                        <p>{0}</p>
                        <h4>Example:</h4>
                        <p>{0}</p>
                    </div>

                )}
            </div>
        </>
    )
}
