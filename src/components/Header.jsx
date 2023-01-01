import WorkingImg from '../images/illustration-working.svg'
export const Header = () => {
  
      
    return (

        <>
            <div className="header-cont">
                <div className="header-text-cont">
                    <h1>More than just shorter links</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolor! Voluptatibus perspiciatis numquam culpa earum. Nobis eveniet quasi facilis veniam, quod, eius illum nesciunt aut, quaerat rem sapiente. Cumque suscipit omnis labore reiciendis quas aperiam fugit quidem doloremque voluptatem recusandae.</p>
                    <button>Lorem, ipsum.</button>
                </div>
                <div className="header-image-cont">
                     <img src={WorkingImg} />
                </div>
                
               
            </div>
            
        </>
    )
}
