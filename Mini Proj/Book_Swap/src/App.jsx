import { useEffect, useState } from 'react'

import './App.css'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

function App() {

const navigate=useNavigate();

  return (
   <>
   {/* <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
   <h1 style={{textAlign:"center"}}   >Available books</h1>
   <button style={{width:"100px",height:"40px"}}  onClick={()=>{
     navigate('/addbook')

   }}  >Add Book</button>
   </div> */}

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
   
  {/* <div className='con' style={{display:"flex",justifyContent:"start",gap:"80px"}}>

  </div> */}

<main>
        <section className="hero">
          <div className="hero-content">
            <h2>Discover Your Next Favorite Book</h2>
            <p>Join our community of book lovers</p>
            <div className="hero-buttons">
              <button 
                className="start-exploring"
                onClick={() => navigate('/browse')}
              >
                Start Exploring
              </button>
              <button className="learn-more">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-container">
            <h2>Features</h2>
            <h3>Discover the Features</h3>
            <p>Explore the key features that make our platform unique</p>
            <div className="feature-cards">
              <div className="feature-card">
                <h4>Book Exchange</h4>
                <p>Easily swap books with other users to discover new reads</p>
              </div>
              <div className="feature-card">
                <h4>Buy Books</h4>
                <p>Browse a wide selection of books for sale at affordable prices</p>
              </div>
              <div className="feature-card">
                <h4>Sell Books</h4>
                <p>List your books for sale and earn money while decluttering your shelves</p>
              </div>
              <div className="feature-card">
                <h4>Personalized Recommendations</h4>
                <p>Receive tailored book recommendations based on your reading preferences</p>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome">
          <div className="welcome-container">
            <h2>Welcome to our Book Exchange Platform</h2>
            <p>Our platform connects book enthusiasts from around the world to exchange, buy, and sell books. Whether you're looking for a new read, want to declutter your shelves, or simply explore new genres, we've got you covered. Dive in and unlock the possibilities within our vibrant book lover's community.</p>
            <button className="learn-more">Learn More</button>
          </div>
          </section>
          <section className="faq">
            <div className="faq-container">
              <h2 style={{ textAlign: 'center' }}>Common questions</h2>
              <p style={{ marginBottom: '20px' }}>Here are some of the most common questions our users ask.</p>
              
              <ul>
                <li>
                  <strong>How does the book exchange work?</strong><br />
                  Users can list the books they want to exchange and browse through other listings to find a book they want. Once they find a match, they can connect with the other user to arrange the exchange.
                </li>
                <li>
                  <strong>Can I sell my books on the platform?</strong><br />
                  Yes, users have the option to list their books for sale. They can set the price and provide details about the condition of the book.
                </li>
                <li>
                  <strong>Is there a fee for using the platform?</strong><br />
                  There is no fee for listing books for exchange. However, a small transaction fee is charged for book sales to cover platform maintenance costs.
                </li>
                <li>
                  <strong>How do I ensure the quality of the books I receive?</strong><br />
                  Users can rate and review each other based on their exchange experience. This helps maintain a level of trust within the community.
                </li>
                <li>
                  <strong>What if I can't find a specific book on the platform?</strong><br />
                  Users can create a 'Book Request' listing specifying the book they are looking for. Other users can then respond if they have the book available for exchange or sale.
                </li>
              </ul>
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

  )
}

export default App
