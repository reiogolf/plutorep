import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Canvas from "./Canvas";
import Line from "./Elements/Line";
import Point from "./Elements/Point";
import "./App.css"

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Canvas elements={[
        new Line(new Point(0, 0), new Point(100, 100)),
    ]} />
);