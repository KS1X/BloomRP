import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './homescreen/herosection.jsx';
import Navbar from './homescreen/navbar.jsx';
import CallToAction from './homescreen/calltoaction.jsx';
import Features from './homescreen/features.jsx';
import Footer from './homescreen/footer.jsx';
import Gallery from './homescreen/gallery.jsx';
import ServerRulesPage from './serverinfo/serverrules.jsx';
import GalleryHeader from './gallary/galleryheader.jsx';
import GalleryGrid from './gallary/gallerygrid.jsx';
import FAQHeader from './faq/faqheader.jsx';
import GettingStarted from './faq/faqpage.jsx';
import FAQInfo from './faq/faqinfo.jsx';
import RoleplayPossibilities from './homescreen/roleplaypossibilities.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <RoleplayPossibilities />
              <Features />
              <CallToAction />
              <Gallery />
            </>
          }
        />
        <Route 
          path="/rules" 
          element={<ServerRulesPage />} 
        />
        <Route 
          path="/gallery" 
          element={
            <>
              <GalleryHeader />
              <GalleryGrid />
              <CallToAction />
            </>
          } 
        />
        <Route 
          path="/faq" 
          element={
            <>
              <FAQHeader />
              <GettingStarted />
              <FAQInfo />
            </>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;