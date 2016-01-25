"use strict";

const expect     = require("chai").expect;
const simpleload = require("../../index.js");

describe("recursive", function () {

    it("should be possible to load modules recursively", function () {

        var path = __dirname + "/../fixtures/dir_14",
            modules;

        modules = simpleload(path, { 
            suffix: "event.js",
            recursive: true
        });

        expect(modules["ad/created"]).to.be.defined;
        expect(modules["user/created"]).to.be.defined;

    });

});