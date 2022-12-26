import styled from "styled-components"

export const StadisticsSection = () => {
    const Box=styled.div`
        width:20rem;
        height:20rem;
        background-color:#ff0000;
    `

    const ContainterStadistics=styled.section`
        display:flex !important;
        flex-direction:row !important;
        width:100%;
        gap:2rem;
    `

  return (
    <>  

        <ContainterStadistics>
            <h1>Advanced Stadistics</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta magni repudiandae non quam eius?</p>
            <Box className="boxes"></Box>
            <Box className="boxes"></Box>
            <Box className="boxes"></Box>
        </ContainterStadistics>

        
    </>
    
  )
}
