import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Bannerr1 from "./components/Banner/Bannerr1";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard/Dashboard"; // Import Dashboard
import ShareLinkDisplay from "./components/Dashboard/ShareLinkDisplay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Banner />
              <Bannerr1 />
              <Footer />
            </>
          }
        />
        <Route path="/hero" element={<Hero />} /> {/* Added Hero route */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Add Dashboard route */}
        <Route path="/share/:sharelink" element={<ShareLinkDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
