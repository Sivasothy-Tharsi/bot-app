import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assests/assets'
import { Context } from '../../context/Context'

const Main = ({mode, setMode}) => {


    const { onSent, resultPrompt, showResult, loading, resultData, setInput, input, recentPrompt, setRecentPrompt } = useContext(Context);

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const bgStyle = {
        backgroundColor: mode === 'light' ? '#ffffff' : '#333333',

    };

    const colorStyle = {
        color: mode === 'light' ? '#000000' : '#ffffff',
    }

    return (
        <div className="main" style={bgStyle}>
            <div className="nav">
                <p style={{
                    color: mode === 'light' ? '#585858' : '#ffffff',
                }}>GeniusEngine</p>
                <div className="contain">
                    <div className='them'>
                        <button
                            className={mode === 'light' ? 'active' : ''}
                            onClick={() => handleModeChange('light')}
                        >
                            Light
                        </button>
                        <button
                            className={mode === 'dark' ? 'active' : ''}
                            onClick={() => handleModeChange('dark')}
                        >
                            Dark
                        </button>
                    </div>
                    <img src={assets.user_icon} alt="User Icon" />
                </div>

            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Thars_(a/i)</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest best platforms to create icons</p>
                                <img src={assets.bulb_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Briefly explain about what is hooks in react js</p>
                                <img src={assets.code_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Solve this problem: sin(30)+2cos(60)</p>
                                <img src={assets.compass_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Suggest bet places to visit in Sri Lanka</p>
                                <img src={assets.message_icon} alt='' />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p style={colorStyle}>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }} style={colorStyle}></p>

                            }
                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info" style={colorStyle}>
                        Privacy settings for GeniusEngine AI are likely similar to other chatbots.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main