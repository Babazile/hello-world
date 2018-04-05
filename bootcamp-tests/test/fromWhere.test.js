describe('fromWhhere' , function(){
    it('should state where the regNo is from', function(){
        assert.equal(fromWhere('CJ 812328'), 1);
    });
    it('should return Paarl regNo', function(){
        assert.equal(fromWhere('CJ 812328'), true);
    });
});
