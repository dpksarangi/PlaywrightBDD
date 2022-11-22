

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input'
const todoButton = '.todo-button'
const todoItem = '.todo .todo-item '
    
  

         Given('I am on homepage', async function () {
           // Write code here that turns the phrase above into concrete actions
           await page.goto("https://ecommerce-playground.lambdatest.io/");
         });


         When('I type iphone', async function () {
           // Write code here that turns the phrase above into concrete actions
           await page.fill("//div[@id='main-header']//input[@name='search']","iphone");
         });

         When('click search', async function () {
           // Write code here that turns the phrase above into concrete actions
           await page.click("//div[@id='main-header']//button[@type='submit']");
         });

         Then('I should be able to see the results', async function () {
           // Write code here that turns the phrase above into concrete actions
           const result1= await page.locator("//a[text()='iPhone']").nth(0);
           await expect(result1).toBeVisible();
           
         });