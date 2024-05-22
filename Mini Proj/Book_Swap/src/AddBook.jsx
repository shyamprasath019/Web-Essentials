import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  const [option, setOption] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [rentalPricePerMonth, setRentalPricePerMonth] = useState('');
  const [lookingFor, setLookingFor] = useState('');

  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate=useNavigate();

  const handleAddBook = async () => {
    try {
      const bookData = {
        bookName,
        author,
        option,
        price: option === 'selling' ? sellingPrice : option === 'renting' ? rentalPricePerMonth : '',
        lookingFor: option === 'exchanging' ? lookingFor : '',
        condition,
        description,
        phoneNumber,
        imgUrl
      };

      // Add book data to Firestore collection
      await addDoc(collection(db, 'books'), bookData);

      // Clear input fields after adding book
      setBookName('');
      setAuthor('');
      setOption('');
      setSellingPrice('');
      setRentalPricePerMonth('');
      setLookingFor('');
      setCondition('');
      setDescription('');
      setPhoneNumber('');
      setImgUrl('');

      alert('Book added successfully!');
    } catch (error) {
      console.error('Error adding book: ', error);
      alert('Failed to add book. Please try again later.');
    }
  };

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



    <div style={styles.container}>
      <h1 style={styles.title}>Add New Book</h1>
      <div style={styles.form}>
      <div style={styles.formGroup}>
          <label htmlFor="book-title" style={styles.label}>Book Title:</label>
          <input
            type="text"
            id="book-title"
            name="book-title"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="author" style={styles.label}>Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="option" style={styles.label}>Listing Option:</label>
          <select
            id="option"
            name="option"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select option</option>
            <option value="selling">Selling</option>
            <option value="renting">Renting</option>
            <option value="exchanging">Exchanging</option>
          </select>
        </div>
        {option === 'selling' && (
          <div style={styles.formGroup}>
            <label htmlFor="selling-price" style={styles.label}>Price:</label>
            <input
              type="text"
              id="selling-price"
              name="selling-price"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              style={styles.input}
            />
          </div>
        )}
        {option === 'renting' && (
          <div style={styles.formGroup}>
            <label htmlFor="rental-price-per-month" style={styles.label}>Price per Month:</label>
            <input
              type="text"
              id="rental-price-per-month"
              name="rental-price-per-month"
              value={rentalPricePerMonth}
              onChange={(e) => setRentalPricePerMonth(e.target.value)}
              style={styles.input}
            />
          </div>
        )}
        {option === 'exchanging' && (
          <div style={styles.formGroup}>
            <label htmlFor="looking-for" style={styles.label}>Looking for:</label>
            <input
              type="text"
              id="looking-for"
              name="looking-for"
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              style={styles.input}
            />
          </div>
        )}
        <div style={styles.formGroup}>
          <label htmlFor="condition" style={styles.label}>Condition:</label>
          <input
            type="text"
            id="condition"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <p></p>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          ></textarea>
        </div>
        
       
        <div style={styles.formGroup}>
          <label htmlFor="phone-number" style={styles.label}>Phone Number:</label>
          <input
            type="text"
            id="phone-number"
            name="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="img-url" style={styles.label}>Image URL:</label>
          <input
            type="text"
            id="img-url"
            name="img-url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={handleAddBook} style={styles.button}>
          Add Book
        </button>
      </div>
    </div>
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

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default AddBook;
