

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


