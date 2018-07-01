const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: '.',
    spec_files: [
        '**/*.spec.js'
    ],
    stopSpecOnExpectationFailure: false,
    random: true
});

jasmine.clearReporters();
jasmine.addReporter(new SpecReporter({
    spec: {
        displayErrorMessages: true,
        displayStacktrace: true,
        displaySuccessful: true,
        displayFailed: true,
        displayPending: true,
        displayDuration: true
    }
}));

jasmine.execute();
