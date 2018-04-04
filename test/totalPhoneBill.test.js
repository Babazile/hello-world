describe('totalPhoneBill' , function(){
    it('should return the total bill for calls', function(){
        assert.equal(totalPhoneBill('call, call'), 'R5.50');
    });
    it('should return the total bill for smsTotal', function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    });
});
