import React from 'react';
import './App.css';
import ImgStreng from './img/poster.jpeg';

const App = () => {
  return (
      <div className="App">
          <Header />
          <Banner />
          <Content />
          <Footer />
      </div>
);
}

const Header = () =>{
    return(
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const Banner = () =>{
    return(
        <section className="banner">
            <div className="container">
                <div className="banertext">
                    <p> Hello Hello Hello</p>
                    <p> Hello Hello Hello</p>
                </div>
            </div>
        </section>
    );
}
const Content = () =>{
    return(
        <section className="content">
            <div className="container">
                <img src={ImgStreng} alt="img" title="img" />
                <p>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar</p>

                <p>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar</p>

                <p>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar</p>

                <p>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar</p>

                <p>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar
                    lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar</p>
            </div>
        </section>
    );
}

const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}


export default App;
