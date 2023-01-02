import { useState } from "react"
import bgInput from '../images/bg-shorten-desktop.svg'
export const InputUrl = () => {
    const [inputValue, setInputValue] = useState("")
    const [shortenedLinks, setShortenedLinks] = useState([])
    
    

    const getShortLink=async()=>{
        
        

    }
    const urlInputHandler=(e)=>{
        e.preventDefault()
        setInputValue(e.target.value)
        console.log("input set to "+e.target.value)        
    }
    const buttonClickHandler=async()=>{
        await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then(response => response.json())
        .then(data => setShortenedLinks([...shortenedLinks,data.result.short_link]) );
        
        setInputValue("");  
    }

    const onCopyLink=(link)=>{
        navigator.clipboard.writeText(link);
        

    }
  return (
    <>
        <a href="https://api.shrtco.de/v2/shorten?url=https://google.es//very/long/link.html">doc</a>
        <div className="input-container" style={{background:"url(bgInput)"}}>
            <input 
                className="url-input"
                type='text' 
                placeholder="Shorten a link here..."
                value={ inputValue }
                onChange={ urlInputHandler }
            />
            <button 
                onClick={ buttonClickHandler }
            >
                Shorten It!
            </button>
            
        </div>
        <div className="item-cont">
             {
                (shortenedLinks.length>0) ? shortenedLinks.map(link=>{
                    return <>
                    
                    <h4>{link}</h4>
                    <button
                        onClick={onCopyLink(link)}
                    >Copy</button>
                    </>
                }) : <h1>No links</h1>
            }
        
        </div>
           
        
    </>
  )
}
