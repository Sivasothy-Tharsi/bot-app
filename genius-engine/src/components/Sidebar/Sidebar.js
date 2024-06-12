import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assests/assets'
import { Context } from '../../context/Context';

const Sidebar = ({mode}) => {

    const [extended, setExtended] = useState(false);
    const { onSent, previousprompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const bgStyle = {
        backgroundColor: mode === 'light' ? '#f0f4f9' : '#3f3f3f',

    };

    const colorStyle = {
        color: mode === 'light' ? '#000000' : '#ffffff',
    }

    const imgStyle = {
        filter: mode === 'light' ? 'none' : 'invert(1)',
    };

    return (
        <div className='sidebar' style={bgStyle}>
            <div className='top'>
                <img className='menu' src={assets.menu_icon} alt='' onClick={() => setExtended(!extended)} style={imgStyle}/>
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='' style={imgStyle}/>
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent' style={colorStyle}>
                        <p className='recent-title'>Recent</p>
                        {previousprompts.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} className='recent-entry' key={index}>
                                    <img src={assets.message_icon} style={colorStyle} alt='' style={imgStyle}/>
                                    <p style={colorStyle}>{item.slice(0,18)}</p>
                                </div>
                            )
                        })}
                    </div> :
                    null
                }

            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt='' style={imgStyle}/>
                    {extended ? <p style={colorStyle}>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt='' style={imgStyle}/>
                    {extended ? <p style={colorStyle}>Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt='' style={imgStyle}/>
                    {extended ? <p style={colorStyle}>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar