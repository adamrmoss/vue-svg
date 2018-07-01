const Point = require('./Point.js').Point;
const SvgTransform = require('./SvgTransform.js').SvgTransform;

exports.SvgLine = Vue.component('svg-line', {
    template: '<line v-bind:x1="actualP1.x" v-bind:y1="actualP1.y" v-bind:x2="actualP2.x" v-bind:y2="actualP2.y" v-bind:stroke="stroke" />',
    mixins: [SvgTransform],

    data()
    {
        return {
            p1: new Point(0, 0),
            p2: new Point(0, 0),
            stroke: 'black'
        };
    },

    props: {
        initialP1,
        initialP2,
        initialStroke
    },

    computed: {
        actualP1: function()
        {
            return this.translationField(this.p1);
        },

        actualP2: function()
        {
            return this.translationField(this.p2);
        }
    },

    mounted()
    {
        this.p1 = Point.parse(this.initialP1);
        this.p2 = Point.parse(this.initialP2);
        this.stroke = this.initialStroke;
    },

    methods: {
        setP1: function(p1)
        {
            this.p1 = p1;
        },

        setP2: function(p2)
        {
            this.p2 = p2;
        },

        setStroke: function(stroke)
        {
            this.stroke = stroke;
        }
    }
});
