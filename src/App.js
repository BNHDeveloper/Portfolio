import React from "react";
import "./roles/GlobalRoles.css";
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import HomePage from "./page/Home.jsx";
import ReviewCode from "./page/ReviewCode.jsx";
import Programmes from "./page/Programmes.jsx";
import Consultive from "./page/Consultive.jsx";
import FormationOnline from "./page/FormationOnline.jsx";
import Books from "./page/Books.jsx";
import Cours from "./page/Cours.jsx";
import Portfolio from "./page/portfolio.jsx";
import Dashboard from "./page/dashboard.jsx";
import ServiceDetails from "./page/ServiceDetails.jsx";
import Login from "./components/Login/login.jsx";
import Upload from "./components/Upload/Upload.jsx";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/cours' element={<Cours/>} />
        <Route path='/programmes' element={<Programmes/>} />
        <Route path='/consultive' element={<Consultive/>} />
        <Route path='/formation' element={<FormationOnline/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/review' element={<ReviewCode />} />
        <Route path="/cours/:id" element={<ServiceDetails admin={false} page="cours"/>}/>  
        <Route path="/programmes/:id" element={<ServiceDetails admin={false} page="programmes"/>}/>  
        <Route path="/Consultive/:id" element={<ServiceDetails admin={false} page="consultive"/>}/>  
        <Route path="/formation/:id" element={<ServiceDetails admin={false} page="formation"/>}/>  
        <Route path="/books/:id" element={<ServiceDetails admin={false} page="books"/>}/>  
        <Route path="/review/:id" element={<ServiceDetails admin={false} page="review"/>}/>  
        <Route path='/login/dashboard/cours' element={<Dashboard page="cours"/>} />
        <Route path='/login/dashboard/programmes' element={<Dashboard page="programmes"/>} />
        <Route path='/login/dashboard/consultive' element={<Dashboard page="consultive"/>} />
        <Route path='/login/dashboard/formationOnlin' element={<Dashboard page="formation"/>} />
        <Route path='/login/dashboard/books' element={<Dashboard page="books"/>} />
        <Route path='/login/dashboard/review' element={<Dashboard page="review"/>} />
        <Route path='/login/dashboard/users' element={<Dashboard page="users" />} />
        <Route path='/login/dashboard/cours/uppdate/:id' element={<ServiceDetails admin={true} page="cours" action="uppdate"/>} />
        <Route path='/login/dashboard/programmes/uppdate/:id' element={<ServiceDetails admin={true} page="programmes" action="uppdate"/>} />
        <Route path='/login/dashboard/consultive/uppdate/:id' element={<ServiceDetails admin={true} page="consultive" action="uppdate"/>} />
        <Route path='/login/dashboard/formation/uppdate/:id' element={<ServiceDetails admin={true} page="formation" action="uppdate"/>} />
        <Route path='/login/dashboard/books/uppdate/:id' element={<ServiceDetails admin={true} page="books" action="uppdate"/>} />
        <Route path='/login/dashboard/review/uppdate/:id' element={<ServiceDetails admin={true} page="review" action="uppdate"/>} />
        <Route path='/login/dashboard/users/uppdate/:id' element={<ServiceDetails admin={true} page="users" action="uppdate"/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/403' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
