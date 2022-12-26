import styled from "styled-components"


export const NavBar = () => {
  
    const Nav=styled.nav`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        border:1px solid red;
    `
    const Ul=styled.ul`
        display:flex;
        flex-direction:row;
        width:fit-content;
        border:1px solid red;
        gap:1rem;
        list-style:none;
    `

   return (

    <>
        <Nav>
            <Ul>
                <li>shortly</li>
                <li>features</li>
                <li>pricing</li>
                <li>resources</li>
            </Ul>
            <Ul>    
                <li>login</li>
                <li>sign up</li>
            </Ul>
        </Nav>
    </>

  )
}
