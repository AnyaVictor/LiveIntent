

describe('LiveIntent Tests', function(){

    it('openning', function(){
        browser.ignoreSynchronization = true
        browser.get('https://www.liveintent.com/');

        browser.sleep(2000)

    });
    it('Verifying GetStartedButton', function(){

        var get_started = element(by.xpath('//*[@id="page-content"]/div/section[1]/div/div/div/div/a'));
        expect(get_started.isDisplayed()).toBe(true)
    });
    it('Clicking GetStartedButton', function(){
        element(by.xpath('//*[@id="page-content"]/div/section[1]/div/div/div/div/a')).click();
       
        
    });
    it('Taking to desired link', function(){
        var EC = protractor.ExpectedConditions;
        // Waits for the URL to be 'foo'.
        browser.wait(EC.urlIs('https://www.liveintent.com/get-in-touch/'), 5000);
    });
    it('Contact us is present', function(){
        expect(element(by.xpath('//*[@id="navigation1"]/div[1]/div[2]/ul[2]/li[2]/div/a')).isPresent()).toBe(true);
    });
    
    
});