import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { productInput, userInput } from "./FormSource/FormSource";
import UserData from "./Components/TableData/UserData";
function App ()
{
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={ <Home /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="users">
            <Route index element={ <List /> } />
            <Route path=":userid" element={ <Single userData={ UserData } /> } />
            <Route path="new" element={ <New inputs={ userInput } title="Add new user" /> } />
          </Route>
          <Route path="products">
            <Route index element={ <List /> } />
            <Route path=":productid" element={ <Single /> } />
            <Route path="new" element={ <New inputs={ productInput } title="Add a new Product" /> } />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
