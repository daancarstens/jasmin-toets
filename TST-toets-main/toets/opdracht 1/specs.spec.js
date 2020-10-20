describe('Dit is een test van het bestand', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Voorbeeld toets');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Hier word de unit getest', function () {
    it('should test', function () {
        expect(unitTest.item).toBe('voorbeeld');
    });
    it('should test', function () {
        expect(unitTest.nummer).toEqual(3);
    });
});

describe('Hier word de unit getest', function () {
    it('should test', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
            });
        });
        describe('Hier word de unit getest', function () {
            it('should test', function () {
                expect(unitTest.boodschap).toEqual('Hallo');
    });
});
