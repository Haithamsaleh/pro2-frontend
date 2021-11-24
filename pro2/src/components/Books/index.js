import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Document, Page } from 'react-pdf';
import "./style.css"

const Cards = () => {
    const [cards, setCards] = useState([])
    
    const data = async()=>{
        const card = await axios.get('http://localhost:5000/books/').then((dete)=>{
            setCards(dete.data)
            // console.log(dete.data);
            
        })
    }

    useEffect(() => {
    data()
        
      
    }, [])

    
    return (
        <>
        {/* <Cards/> */}
        <div>
        {/* {console.log(cards)} */}
                   <>
       {cards.map((item)=>{
           return(

           <div className="cards">
              
              <h1>{item.book}</h1>
              <hr />
              <Document file={item.bookPdf}>
      <Page pageNumber={3} />
    </Document>
              <h2>Brand:{item.book}</h2>
              <hr />
              
              
              <p>{item.bookPdf}</p>
              <hr />
              <img src={item.bookimg} alt="#"/>
              <hr />
          
              
            </div>

           
           )
       })}
       </>)
        
       </div>
       </>
       
    )
}

export default Cards
