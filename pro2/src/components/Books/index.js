import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-modal";
const Books = () => {
  const [books, setbooks] = useState([]);

  const data = async () => {
    const books = await axios
      .get("http://localhost:5000/books/")
      .then((dete) => {
        setbooks(dete.data);

        // console.log(dete.data);
      });
  };

  useEffect(() => {
    data();
  }, []);
 

  return (
    <section className={"cards-section"}>
      <div className="info__name"><h1>جميع الكتب</h1>
        {/* <input type="Text" placeholder="Search..." className="search"/> */}
      </div>
      <div className="cards-container">
        {books.map((item) => {
          return (
            
            <div className="card">
            <div className="books">
                <img className="img" src={item.bookimg} alt="img for" className="card-imag" />
                <h1 className="info__name">{item.book}</h1> 
                <h2 className="info__name">تأليـف:{item.auther}</h2>
                
                <p className="info__name">عددالصفحات:{item.pageCount}</p>
                <p className="info__name">تاريخ الطباعة:{item.prantingDate}</p>

                <div className="pdf-container">
                <a href={item.bookPdf} className="info__button"  id={item._id}>أقراء</a>
                  {/* <iframe width="600" height="600" src={item.bookPdf} frameborder="0" allowtransparency allowfullscreen></iframe> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Books;
