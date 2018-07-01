const Point = require('./Point.js').Point;
const SvgTransform = require('./SvgTransform.js').SvgTransform;

exports.SvgRect = Vue.component('svg-rect', {
    template: '<rect v-bind:x="actualCorner.x" v-bind:y="actualCorner.y" v-bind:width="actualWidth" v-bind:height="actualHeight" v-bind:rx="actualXRounding" v-bind:ry="actualYRounding" />',
    mixins: [SvgTransform],

    data()
    {
        return {
            corner: new Point(0, 0),
            width: 0,
            height: 0,
            xRounding: 0,
            yRounding: 0
        };
    },

    props: {
        initialCorner: String,
        initialWidth,
        initialHeight,
        initialXRounding,
        initialYRounding
    },

    computed: {
        actualCorner: function()
        {
            return this.translationField(this.corner);
        },

        actualWidth: function()
        {
            return this.scale * this.width;
        },

        actualHeight: function()
        {
            return this.scale * this.height;
        },

        actualXRounding: function()
        {
            return this.scale * this.xRounding;
        },

        actualYRounding: function()
        {
            return this.scale * this.yRounding;
        }
    },

    mounted()
    {
        this.corner = Point.parse(this.initialCorner);
        this.width = this.initialWidth;
        this.height = this.initialHeight;
        this.xRounding = this.initialXRounding;
        this.yRounding = this.initialYRounding;
    },

    methods: {
        setCorner: function(corner)
        {
            this.corner = corner;
        },

        setWidth: function(width)
        {
            this.width = width;
        },

        setHeight: function(height)
        {
            this.height = height;
        },

        setXRounding: function(xRounding)
        {
            this.xRounding = xRounding;
        },

        setYRounding: function(yRounding)
        {
            this.yRounding = yRounding;
        }
    }
});
