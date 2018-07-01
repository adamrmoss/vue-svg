const Point = require('./Point.js').Point;
const SvgTransform = require('./SvgTransform.js').SvgTransform;

exports.SvgCircle = Vue.component('svg-circle', {
    template: '<circle v-bind:cx="actualCenter.x" v-bind:cy="actualCenter.y" v-bind:r="actualRadius" />',
    mixins: [SvgTransform],
    data()
    {
        return {
            center: new Point(0, 0),
            radius: 1
        };
    },
    props: {
        initialCenter: String,
        initialRadius
    },
    computed: {
        actualCenter: function()
        {
            return this.translationField(this.center);
        },
        actualRadius: function()
        {
            return this.scale * this.radius;
        }
    },
    mounted()
    {
        this.center = Point.parse(this.initialCenter);
        this.radius = this.initialRadius;
    },
    methods: {
        setCenter: function(center)
        {
            this.center = center;
        },
        setRadius: function(radius)
        {
            this.radius = radius;
        }
    }
});
