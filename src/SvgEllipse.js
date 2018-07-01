const Point = require('./Point.js').Point;
const SvgTransform = require('./SvgTransform.js').SvgTransform;

exports.SvgEllipse = Vue.component('svg-ellipse', {
    template: '<ellipse v-bind:cx="actualCenter.x" v-bind:cy="actualCenter.y" v-bind:rx="actualXRadius" v-bind:ry="actualYRadius" />',
    mixins: [SvgTransform],
    data()
    {
        return {
            center: new Point(0, 0),
            xRadius: 1,
            yRadius: 1
        };
    },
    props: {
        initialCenter: String,
        initialXRadius,
        initialYRadius
    },
    computed: {
        actualCenter: function()
        {
            return this.translationField(this.center);
        },
        actualXRadius: function()
        {
            return this.scale * this.xRadius;
        },
        actualYRadius: function()
        {
            return this.scale * this.yRadius;
        }
    },
    mounted()
    {
        this.center = Point.parse(this.initialCenter);
        this.xRadius = this.initialXRadius;
        this.yRadius = this.initialYRadius;
    },
    methods: {
        setCenter: function(center)
        {
            this.center = center;
        },
        setXRadius: function(xRadius)
        {
            this.xRadius = xRadius;
        },
        setYRadius: function(xRadius)
        {
            this.xRadius = xRadius;
        }
    }
});
