import Element from "./Element";
import Point from "./Point";

export default class Line extends Element
{
    public start: Point;
    public end: Point;

    public constructor(start: Point, end: Point)
    {
        super();
        this.start = start;
        this.end = end;
    }
}