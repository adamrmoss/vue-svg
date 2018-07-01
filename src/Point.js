export default class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    add(x, y)
    {
        if (x instanceof Point)
        {
            const point = x;
            return new Point(this.x + point.x, this.y + point.y);
        }
        else if (typeof x === 'number' && typeof y === 'number')
        {
            return new Point(this.x + x, this.y + y);
        }
        else
        {
            throw `Cannot add x: ${x} y: ${y} to ${this}`;
        }
    }

    dot(x, y)
    {
        if (x instanceof Point)
        {
            const point = x;
            return Math.sqrt(this.x * point.x + this.y * point.y);
        }
        else if (typeof x === 'number' && typeof y === 'number')
        {
            return Math.sqrt(this.x * x + this.y * y);
        }
        else
        {
            throw `Cannot dot product x: ${x} y: ${y} to ${this}`;
        }
    }

    get length()
    {
        return this.dot(this);
    }
}
