"use strict";

const expect     = require("chai").expect;
const simpleload = require("../../index.js");

describe("exclude", function () {

    it("should be possible to exclude given modules", function () {

        var path = __dirname + "/../fixtures/dir_11",
            loaded;

        loaded = simpleload(path, { suffix: "service.js" });
        expect(loaded.base).to.equal(require("../fixtures/dir_11/base.service"));
        expect(loaded.other).to.equal(require("../fixtures/dir_11/other.service"));
        expect(Object.keys(loaded)).to.have.length(2);


        loaded = simpleload(path, { suffix: "service.js", exclude: "base" });
        expect(loaded.other === require("../fixtures/dir_11/other.service"));
        expect(Object.keys(loaded)).to.have.length(1);

    });

    it("should be possible to exclude given modules when array is passed", function () {

        var path = __dirname + "/../fixtures/dir_11",
            loaded;

        loaded = simpleload(path, { suffix: "service.js" });
        expect(loaded.base === require("../fixtures/dir_11/base.service"));
        expect(loaded.other === require("../fixtures/dir_11/other.service"));
        expect(Object.keys(loaded)).to.have.length(2);


        loaded = simpleload(path, { suffix: "service.js", exclude: ["base"] });
        expect(loaded.other === require("../fixtures/dir_11/other.service"));
        expect(Object.keys(loaded)).to.have.length(1);

    });

});
