import * as React from "react";


export default class ElementView<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> 
{

    public constructor(props: P)
    {
        super(props);
    }

}