const Point = require('../src/Point.js').Point;
const SvgTransform = require('../src/SvgTransform.js').SvgTransform;
const Animation = require('../src/Animation.js').Animation;
const SvgPolygon = require('../src/SvgPolygon.js').SvgPolygon;
const SvgPolyline = require('../src/SvgPolyline.js').SvgPolyline;

const xMaxOffset = 14;
const xOmega1 = .0035;
const xOmega2 = .05;

const yMaxOffset = 6;
const yOmega1 = .0045;
const yOmega2 = .4;

exports.Logo = Vue.component('Logo', {
    template: '#logoTemplate',
    mixins: [Animation],

    components: {
        SvgPolygon,
        SvgPolyline
    },

    mounted()
    {
        this.frameHandler = this.animateLogo;
    },

    methods: {
        animateLogo()
        {
            const translationField = this.getLogoTranslation(this.totalTime);

            this.$refs.m.translationField = translationField;
            this.$refs.o.translationField = translationField;
            this.$refs.s1.translationField = translationField;
            this.$refs.s2.translationField = translationField;
        },

        getLogoTranslation(totalTime)
        {
            return (position) => position.add(this.getXOffset(totalTime, position.y),
                                              this.getYOffset(totalTime, position.x));
        },

        getXOffset(totalTime, y)
        {
            return xMaxOffset * Math.cos(xOmega1 * totalTime + xOmega2 * y);
        },

        getYOffset(totalTime, x)
        {
            return yMaxOffset * Math.cos(yOmega1 * totalTime + yOmega2 * x);
        }
    }
});
