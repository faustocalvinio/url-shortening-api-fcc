import { useState } from "react"
import styled from "styled-components"

export const InputUrl = () => {
    const [inputValue, setInputValue] = useState("")
    const [shortenedLinks, setShortenedLinks] = useState([])
    const InputContainer=styled.div`
        padding:1rem;
        background-color:purple;
        display:flex;
        justify-content:center;
        gap:1rem;
    `
    const UrlInput=styled.input`
        padding:.7rem;
    
    `

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
        navigator.clipboard.writeText(link)
    }
  return (
    <>
        <a href="https://api.shrtco.de/v2/shorten?url=https://google.es//very/long/link.html">doc</a>
        <InputContainer>
            <UrlInput 
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
            
        </InputContainer>
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
        
        
    </>
  )
}
