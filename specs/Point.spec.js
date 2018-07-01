const Point = require('../src/Point.js').Point;

describe('Point', () =>
{
    describe('constructor', () =>
    {
        const x = 3, y = 4;
        const point = new Point(x, y);

        it('sets coordinates', () =>
        {
            expect(point.x).toBe(x);
            expect(point.y).toBe(y);
        });

        it('has correct length', () =>
        {
            expect(point.length).toBe(5);
        });
    });
});
