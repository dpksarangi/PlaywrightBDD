import test, { chromium } from "@playwright/test";

test("Wiki Search ",async()=>{

    const browser= await chromium.launch({
        headless:false
    }
    );
    const context = await browser.newContext();
    const newPage= await context.newPage();

    await newPage.goto("https://ecommerce-playground.lambdatest.io/");
    await newPage.fill("//div[@id='main-header']//input[@name='search']","iphone");
    await newPage.click("//div[@id='main-header']//button[@type='submit']");
    

    


})