import { FaSearch } from "react-icons/fa"
import { FcSpeaker } from "react-icons/fc"

export default function DictionaryComp() {
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
                        <h2>{0}<button onClick={0}><FcSpeaker size="26px" />
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
