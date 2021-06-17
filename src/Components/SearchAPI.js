import React, { useState } from 'react'
import './SearchAPI.css';

import axios from 'axios'
import Loader from 'react-loader-spinner'


function SearchAPI() {
    const [result,setResult] = useState(null);
    const [error,setError] = useState(false);
    const [input,setInput] = useState("");
    const [copied,setCopied] = useState("");
    const [loading,setLoading] = useState(false);

    const getResults = async () =>{
        const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
        setCopied("");
        setLoading(true);
        setResult(null);
        try{
            const response = await axios.get(url);
            const data = response.data;
            if (!data.ok) {
                setError(true);
                
            } else {
                setResult(data.result);
                setError(false);
            }
        }catch(err){
            setError(true);
            setResult(null)
        }

        setLoading(false);
    }

    const copyText = (id) =>{
        let copyText = document.getElementById(id);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setCopied(`${id}-c`);
    }
    return (
        <div className="search">
            <div className="search__container">
                <div className="search__box">
                    <div className="input__field">
                        <input type="text" className={error?"error":""} placeholder="Shorten a link here..." vaue={input} onChange={(e)=>setInput(e.target.value)}/>
                        <small className={error?"error":""}>Please add a link</small>
                    </div>
                    <div className={loading?"disable__pointer go__api":"go__api"} onClick={()=>!loading?getResults():""} >{!loading? "Shorten It!":
                        <Loader
                        type="ThreeDots"
                        color="rgb(255, 255, 255)"
                        height={30}
                        width={30}
                        style={{display:"flex"}}
                        />
                    }
                    </div>
                </div>
            </div>

            <div className="search__results">
                {result &&
                    <>
                    <div className="result">
                        <div className="result__input">
                            <p>{result.short_link}</p>
                        </div>
                        <div className="result__output">
                            <p>{result.full_short_link}</p>
                            <div className={copied==="res1-c"?"result__copy copied":"result__copy"} onClick={()=>copyText("res1")} >
                                {copied==="res1-c"?"copied":"copy"}
                            </div>
                        </div>
                        <input id="res1" value={result.full_short_link} hidden />
                    </div>
                    <div className="result">
                    <div className="result__input">
                        <p>{result.short_link2}</p>
                    </div>
                    <div className="result__output">
                        <p>{result.full_short_link2}</p>
                        <div className={copied==="res2-c"?"result__copy copied":"result__copy"} onClick={()=>copyText("res2")} >
                            {copied==="res2-c"?"copied":"copy"}
                        </div>
                    </div>
                    <input id="res2" value={result.full_short_link2} hidden />
                </div>

                <div className="result">
                    <div className="result__input">
                        <p>{result.short_link3}</p>
                    </div>
                    <div className="result__output">
                        <p>{result.full_short_link3}</p>
                        <div className={copied==="res3-c"?"result__copy copied":"result__copy"} onClick={()=>copyText("res3")}>
                            {copied==="res3-c"?"copied":"copy"}
                        </div>
                    </div>
                    <input id="res3" value={result.full_short_link3} hidden />
                </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default SearchAPI
