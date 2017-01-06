describe('titleize', function () {
    var titleize, rxTitleize;

    beforeEach(function () {
        module('encore.ui.utilities');

        inject(function (rxTitleizeFilter, titleizeFilter) {
            rxTitleize = rxTitleizeFilter;
            titleize = titleizeFilter;
        });
    });

    it('replaces underscores with spaces', function () {
        expect(titleize('_A_B_')).to.equal(' A B ');
    });

    it('converts the string to title case', function () {
        expect(titleize('a bcD_e')).to.equal('A Bcd E');
    });

    it('replaces underscores with spaces', function () {
        expect(rxTitleize('_A_B_')).to.equal(' A B ');
    });

    it('converts the string to title case', function () {
        expect(rxTitleize('a bcD_e')).to.equal('A Bcd E');
    });
});
