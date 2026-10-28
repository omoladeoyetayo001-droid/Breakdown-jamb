import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import SampleQuestion from "./components/SampleQuestion";
import Subjects from "./components/Subjects";

import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllSubjects from "./pages/AllSubjects";
import Onboarding from "./pages/Onboarding";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SampleQuestion />
      <Subjects />
      <Footer />
    </>
  );
}


function App() {
  return (
   <Routes>

  <Route path="/" element={<Home />} />

<Route
  path="/subjects"
  element={<AllSubjects />}
/>


  <Route
    path="/create-account"
    element={<CreateAccount />}
  />


  <Route
    path="/login"
    element={<Login />}
  />

  
<Route
  path="/onboarding"
  element={<Onboarding />}
/>
  
  <Route
  path="/dashboard"
  element={<Dashboard />}
/>


</Routes>
  );
}


export default App;