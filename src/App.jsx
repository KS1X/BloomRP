import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './homescreen/herosection.jsx';
import Navbar from './homescreen/navbar.jsx';
import CallToAction from './homescreen/calltoaction.jsx';
import Features from './homescreen/features.jsx';
import Footer from './homescreen/footer.jsx';
import Gallery from './homescreen/gallery.jsx';
import ServerRulesPage from './serverinfo/serverrules.jsx'; // Import the new page
import GalleryHeader from './gallary/galleryheader.jsx'; // Import the new page
import GalleryGrid from './gallary/gallerygrid.jsx'; // Import the new page
import FAQHeader from './faq/faqheader.jsx'; // Import the new page
import GettingStarted from './faq/faqpage.jsx'; // Import the new page
import FAQInfo from './faq/faqinfo.jsx'; // Import the new page
import RoleplayPossibilities from './homescreen/roleplaypossibilities.jsx'; // Optional: if you want to include this in the app

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/#/"
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
        path="/#/rules" 
        element={
        <ServerRulesPage />
        } />
        <Route 
        path="/#/gallery" 
        element={
          <>
          <GalleryHeader />
          <GalleryGrid />
          <CallToAction />
          </>
        } />
        <Route 
        path="/#/faq" 
        element={
          <>
          <FAQHeader />
          <GettingStarted />
          <FAQInfo />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;