describe('Tests', function() {

    it('should handle undefined', function() {
        expect(toString).withArgs(undefined).to.not.throwException();
        expect(toString(undefined)).to.be.a('string');
    });
    it('should handle null', function() {
        expect(toString).withArgs(null).to.not.throwException();
        expect(toString(null)).to.be.a('string');
    });
    it('should handle numbers', function() {
        expect(toString).withArgs(9).to.not.throwException();
        expect(toString(9)).to.be.a('string');
    });
    it('should handle functions', function() {
        expect(toString).withArgs(function() {}).to.not.throwException();
        expect(toString(function() {})).to.be.a('string');
    });
    it('should handle objects', function() {
        expect(toString).withArgs({ foo: "bar" }).to.not.throwException();
        expect(toString({ foo: "bar" })).to.be.a('string');
    });
    it('should handle strings', function() {
        expect(toString).withArgs("javve").to.not.throwException();
        expect(toString("javve")).to.be.a('string');
    });

});
