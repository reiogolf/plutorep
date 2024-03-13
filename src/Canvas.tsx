import * as React from "react";
import Element from "./Elements/Element";
import LineView from "./LineView";
import Line from "./Elements/Line";

interface CanvasProps {
    elements : Element[];
}

interface CanvasState{}

export default class Canvas extends React.Component<CanvasProps, CanvasState> {

    public constructor(props: CanvasProps)
    {
        super(props);
    }


    render(): React.ReactNode {
        return <div className="canvas">
            <svg height="100%" width="100%" >
            {
                this.props.elements.map((element) => {
                    if (element instanceof Line)
                        return <LineView line={element as Line} />;
                })
            }
      </svg>
        </div>
    }
}