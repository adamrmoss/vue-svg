const Logo = require('../src/Logo.js').Logo;

const scrollableDivSelector = 'div.scrollable';
const nextSectionSelector = 'section#logo + section';

$(document).ready(() => new Vue({
    el: 'main',
    components: {
        Logo
    }
}));
