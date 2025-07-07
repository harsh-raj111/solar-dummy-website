

import '../src/style/Nav.css';
import '../src/style/Home.css';
import '../src/style/Section.css';

import Nav from './Component/Nav';
import Home from './Component/Home';
import Section from './Component/Section';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Review from './Component/Review';
import Cta from './Component/Cta';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
 
      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <Home />
              <Section />
              <Service />
              <Review
                img="https://i.pinimg.com/736x/cf/d4/13/cfd413c84851920d5dbc820610176e41.jpg"
                text="Excellent service and top-quality solar panels. Installation was smooth and the team was very responsive throughout."
                name="Sam"
                img1="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
                text1="Highly satisfied with the performance of the solar inverter. It’s helping us cut down on electricity bills significantly."
                name1="Shin"
              />
              <Cta />
            </>
          }
        />

        {/* Only Contact page will render for this route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


