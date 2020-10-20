describe('voorbeeld.js', function () {
    it('should have one or more undefined variables', function () {
        console.log('voorbeeld undefined test');
        expect(example.voorbeeld).toBeUndefined();
    });

    it('should have one an amount >= 2', function () {
        console.log('aantal >= 2 test')
        expect(example.aantal).toBeGreaterThanOrEqual(2);
    });
});

function Voorbeeld() {
    this.voorbeeld;
    this.aantal = 2;
}

let example = new Voorbeeld();
