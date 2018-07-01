exports.Point = class Point
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

    subtract(x, y)
    {
        if (x instanceof Point)
        {
            const point = x;
            return new Point(this.x - point.x, this.y - point.y);
        }
        else if (typeof x === 'number' && typeof y === 'number')
        {
            return new Point(this.x - x, this.y - y);
        }
        else
        {
            throw `Cannot subtract x: ${x} y: ${y} from ${this}`;
        }
    }

    scale(c)
    {
        return new Point(this.x * c, this.y * c);
    }

    dot(x, y)
    {
        if (x instanceof Point)
        {
            const point = x;
            return this.x * point.x + this.y * point.y;
        }
        else if (typeof x === 'number' && typeof y === 'number')
        {
            return this.x * x + this.y * y;
        }
        else
        {
            throw `Cannot dot product x: ${x} y: ${y} and ${this}`;
        }
    }

    get length()
    {
        return Math.sqrt(this.dot(this));
    }

    static parseArray(encodedPoints)
    {
        const substrings = encodedPoints.split(' ');
        const points = substrings.map(Point.parse);
        return points;
    }

    static parse(encodedPoint)
    {
        const coords = encodedPoint.split(',');
        return new Point(parseFloat(coords[0]), parseFloat(coords[1]));
    }

    encode()
    {
        return `${this.x},${this.y}`;
    }

    static encodeArray(points)
    {
        return points.map(p => p.encode()).join(' ');
    }
}
