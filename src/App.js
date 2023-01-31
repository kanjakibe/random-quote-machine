import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FaTwitter} from 'react-icons/fa'





let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("It’s not the years in your life that count. It’s the life in your years.");
  const [author, setAuthor] = useState("Abraham Lincoln");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  const [accentColor, setAccentColor] = useState('#282c34')
  
  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])
  


  const getRandomQuote = () => {
    let randomInterger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInterger)
    setAccentColor(COLORS_ARRAY[randomInterger])
    setQuote(quotesArray[randomInterger].quote)
    setAuthor(quotesArray[randomInterger].author)
    
  }
                                
  
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor, color:accentColor}}>
        <div id="quote-box" style={{color:accentColor, color:accentColor}}>
            
            
            <p id="text">
              "{quote}"
            </p>
            <p id="author">
              - {author}
            </p>
            <div className="button">
              <a id="tweet-quote" style={{backgroundColor:accentColor }} href={encodeURI('http://www.twitter.com/intent/tweet?text=${quote}-${author}')}><FaTwitter className="button1"style={{borderRadius: '50px' }}/></a>
              <button id="new-quote" onClick={() => getRandomQuote()} style={{backgroundColor:accentColor }}>Generate A Random Quote</button>
            
            </div>
            
            
            
        </div>
        
      </header>
    </div>
  );
}

export default App;
