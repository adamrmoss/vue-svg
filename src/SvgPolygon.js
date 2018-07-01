const Point = require('./Point.js').Point;
const SvgTransform = require('./SvgTransform.js').SvgTransform;

exports.SvgPolygon = Vue.component('svg-polygon', {
    template: '<polygon v-bind:points="encodedPoints" />',
    mixins: [SvgTransform],

    data()
    {
        return {
            points: []
        };
    },

    props: {
        initialPoints
    },

    computed: {
        encodedPoints: function()
        {
            return Point.encodeArray(this.actualPoints);
        },

        actualPoints: function()
        {
            return this.points.map(p => this.translationField(p));
        }
    },

    mounted()
    {
        this.points = Point.parseArray(this.initialPoints);
    },

    methods: {
        setPoints: function(points)
        {
            this.points = points;
        }
    }
});
