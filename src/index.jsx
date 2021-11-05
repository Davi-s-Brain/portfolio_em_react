import { render } from "react-dom";
import React from "react";
import { App } from "./App"
import { Main } from "./Main";
import { Footer } from "./Footer"
import { Accordion } from "./Accordion";
import './styles/global.scss'
import '../node_modules_css/flexboxgrid/css/flexboxgrid.css'

render(

  <div>
    <App />
    <Main />
    <div id="accordion">
      <Accordion />
    </div>
    <Footer />
  </div>,

  document.getElementById('root') 
) 