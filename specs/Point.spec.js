const Point = require('../src/Point.js').Point;

describe('Point', () =>
{
    describe('constructor', () =>
    {
        const x = 5, y = 10;
        const point = new Point(x, y);

        it('sets coordinates', () =>
        {
            expect(point.x).toBe(x);
            expect(point.y).toBe(y);
        });
    });
});
