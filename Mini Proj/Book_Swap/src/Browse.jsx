import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Browse = () => {
  const [books, setBooks] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const navigate = useNavigate();

  const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db, 'books'));
    const bookList = [];
    const availableBookList = [];

    querySnapshot.forEach((doc) => {
      const bookData = doc.data();
      bookList.push(bookData);
      if (bookData.available) {
        availableBookList.push(bookData);
      }
    });

    setBooks(bookList);
    setAvailableBooks(availableBookList);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <header>
        <h1>BookSwap</h1>
        <nav>
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/browse')}>Browse</li>
            <li onClick={() => navigate('/addbook')}>List Your Book</li>
          </ul>
        </nav>
        <div>
          <button 
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: "purple",
              color: "white",
              border: "none",
              outline: "none",
              padding: "8px 16px",
              marginRight: "4px",
              borderRadius: "3px",
              cursor: "pointer"
            }}
          >Login</button>
          <button 
            onClick={() => navigate('/register')}
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              outline: "none",
              padding: "8px 16px",
              marginLeft: "4px",
              borderRadius: "3px",
              cursor: "pointer"
            }}
          >Register</button>
        </div>
      </header>
      
      <main>
        {/* <section>
          <h2 style={{marginLeft:"20px"}}>Available Books</h2>
          <div className="grid-container">
            {availableBooks.map((item, index) => (
              <div key={index} className="book-card">
                <img src={item.imgUrl} alt={item.bookName} />
                <div>
                  <p className="font-bold text-xl mb-2">{item.bookName}</p>
                  <p className="text-gray-700 text-base">Author: {item.author}</p>
                  <p className="text-gray-700 text-base">Option: {item.option}</p>
                  <p className="text-gray-700 text-base">Condition: {item.condition}</p>
                  <p className="text-gray-700 text-base">Description: {item.description}</p>
                  {item.option === 'selling' && <p className="text-gray-700 text-base">Price: Rs. {item.sellingPrice}</p>}
                  {item.option === 'renting' && <p className="text-gray-700 text-base">Price per Month: Rs. {item.rentalPricePerMonth}</p>}
                  {item.option === 'exchanging' && <p className="text-gray-700 text-base">Looking for: {item.lookingFor}</p>}
                  <p className="text-gray-700 text-base">Phone: {item.phoneNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section>
          <h2 style={{marginLeft:"20px"}}>Available Books</h2>
          <div className="grid-container">
            {books.map((item, index) => (
              <div key={index} className="book-card">
                <img src={item.imgUrl} alt={item.bookName} />
                <div>
                  <p className="font-bold text-xl mb-2">{item.bookName}</p>
                  <p className="text-gray-700 text-base">Author: {item.author}</p>
                  <p className="text-gray-700 text-base">Option: {item.option}</p>
                  <p className="text-gray-700 text-base">Condition: {item.condition}</p>
                  <p className="text-gray-700 text-base">Description: {item.description}</p>
                  {item.option === 'selling' && <p className="text-gray-700 text-base">Price: Rs. {item.sellingPrice}</p>}
                  {item.option === 'renting' && <p className="text-gray-700 text-base">Price per Month: Rs. {item.rentalPricePerMonth}</p>}
                  {item.option === 'exchanging' && <p className="text-gray-700 text-base">Looking for: {item.lookingFor}</p>}
                  <p className="text-gray-700 text-base">Phone: {item.phoneNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-container">
          <p>BOOKSWAP</p>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/browse">Browse Books</a>
            <a href="/addbook">List Your Books</a>
            <a href="/about">About Us</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Browse;
