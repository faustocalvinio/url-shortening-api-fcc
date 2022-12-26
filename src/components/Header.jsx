import WorkingImg from '../images/illustration-working.svg'
import styled from 'styled-components'
export const Header = () => {
  
    const FlexDiv=styled.div`
       
    `         
    return (

        <>
            <FlexDiv>
                <h1>More than just shorter links</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor! Voluptatibus perspiciatis numquam culpa earum. Nobis eveniet quasi facilis veniam, quod, eius illum nesciunt aut, quaerat rem sapiente. Cumque suscipit omnis labore reiciendis quas aperiam fugit quidem doloremque voluptatem recusandae.</p>
                <button>Lorem, ipsum.</button>
                <img src={WorkingImg} />
            </FlexDiv>
            
        </>
    )
}
