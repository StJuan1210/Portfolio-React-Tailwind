import Header from "./components/common/Header";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="content">
					<Routes>
						<Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/contactme" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
					</Routes>
        
				</div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
