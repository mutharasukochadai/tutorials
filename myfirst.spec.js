const{test, expect} = require('@playwright/test')
// import {test, expect} from '@playwright/test' //not working

// const{hello, helloworld} = require('./demo/myfunc')
// import {hello, helloworld} from './demo/myfunc' //not working

// var{hello, helloworld} = require('./demo/myfunc.js') //can be used later on
// let{hello, helloworld} = require('./demo/myfunc.js') //can be used later on

// console.log (hello());
// console.log (helloworld());
test('myfirst test', async({page}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')

    const navigationTimingJson = await page.evaluate(() =>
    JSON.stringify(performance.getEntriesByType('navigation')) )
    const navigationTiming_load = JSON.parse(navigationTimingJson);
    console.log(navigationTiming_load);
})