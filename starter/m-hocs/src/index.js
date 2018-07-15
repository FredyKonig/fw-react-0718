import React from "react";
import { render } from "react-dom";
import "./style.css";
import { DataComponent } from "./Hofs";

render( <DataComponent json="spain-2017.json"/> , document.querySelector('#regions-17'));
