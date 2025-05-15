import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import "./App.css";
import ProjectCard from "./components/projects";
import SosialButton from "./components/SosialButton";
import ContactForm from "./components/ContactForm";

const projectlist =[
  {
    title:"Deploying React Website",
    description:"Deploy React-based websites to servers and host to private sub domains", 
    Link:"google.com"
  },
  {
    title:"Deploying Laravel Website",
    description:"Deploy Laravel-based websites to servers and host to private sub domains", 
    Link:"google.com" 
  },
  {
    title:"Create a portfolio website view",
    description:"Create a portfolio website view using tailwind css in bootcamp", 
    Link:"google.com" 
  },
  {
    title:"Slicing Hero Section",
    description:"Slicing the Hero Section View is a mini task from the Sevima bootcamp", 
    Link:"https://github.com/azizahamaliah/miniprojek_sevima" 
  },
  {
    title:"Food Recipe Application Prototype",
    description:"Prototype a food recipe app using Figma, which is the task of the DIGIUP 2025 certification", 
    Link:"https://www.figma.com/design/XZZE1mVkT7spGcVjgiS2SB/digiup?node-id=0-1&t=Rs0uJjAM2xnDy9SS-1" 
  },
  {
    title:"Smart City Sidoarjo Website Redesign",
    description:"Redesigning the Sidoarjo Regency Smart City Website at the UI/UX Competition organized by Himsi UNAIR 2024", 
    Link:"https://www.figma.com/design/u1uDeKMxXavHVwLhmbhAlH/SMART-CITY?node-id=0-1&t=GmP9C7YeWGBlZzcg-1" 
  },
];
function App() {
  const [theme, setTheme] = useState("Light");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

  }, []);

  const toggleTheme = () => {
    let newTheme = "light";
    if (theme === "light") {
      newTheme = "dark";
    }

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6
      gap-6 bg-base-200">
        <nav className="flex justify-center gap-4 mb-6">
        <Link className="btn btn-sm btn-outline" to="/">
           Home
        </Link>
        <Link className="btn btn-sm btn-outline" to="/projects">
           Projects
        </Link>
        <Link className="btn btn-sm btn-outline" to="/contact">
           Contact
        </Link>
        </nav>

{/* home */}
        <Routes>
          <Route
            path="/"
            element={<div className="flex flex-col items-center gap-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="./images/foto-semiformal.jpeg" alt="avatar" />
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold">Azizah Amaliah Putri</h1>
                <p className="text-sm max-w-xs">
                  DevOps Enthusiast | UI/UX Designer, Business Strategy
                </p>
              </div>

              <div className="flex flex-col w-full max-w-xs gap-3">
                <SosialButton
                  title="Github"
                  link="https://github.com/azizahamaliah"
                  buttonColor="primary"
                />
                <SosialButton
                  title="Linkedin"
                  link="https://www.linkedin.com/in/azizahamaliah/"
                  buttonColor="secondary"
                />
              </div>
            </div>
            } />

{/* projects */}
          <Route
           path="/projects"
           element={<div className="grid gap-4 w-full max-w-md mx-auto">
            {projectlist.map(item => {
              return (
                <ProjectCard 
                  title={item.title}
                  description={item.description}
                  Link={item.Link}
                />
              );
            })}
           </div>
           }
          />

{/* contact */}
          <Route 
           path="/contact" 
           element={<ContactForm />} />




        </Routes>
        <button onClick={toggleTheme} className="btn btn-outline mt-4">
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </Router>
  );
}



export default App
