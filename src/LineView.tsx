import * as React from "react";
import Line from "./Elements/Line";

interface LineViewProps
{
    line: Line;
}

interface LineViewState
{
    line : Line;
}

export default class LineView extends React.Component<LineViewProps, LineViewState> 
{
    public constructor(props: LineViewProps)
    {
        super(props);
        this.state = {line : props.line};
    }

    public override render(): React.ReactNode {
        return <line x1={this.state.line.start.x} y1={this.state.line.start.y} 
            x2={this.state.line.end.x} y2={this.state.line.end.y} 
            style={{stroke:"red", strokeWidth:2}}/>;
    }
}