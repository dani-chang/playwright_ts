## Journal
_This file will be used to register thoughts I found worth logging while tinkering with Playwright/TS._ <br>


---
### May 01 2025 - First exp with ui command
The `--ui` feature was useful for debugging tests.<br>
And also, for finding and creating more accurate locators.

---
### Apr 30 2025
Apparently I can inject multiple pages/fixtures in the same `test()` and do things like:
```
test('Verify email address.', async ({homePage, signUpPage, navbarPage}) => {
    // my test code
});

```

---
### Apr 26 2025 - Test 1, first exp setting up custom test attributes & struggles
Started writing Testcase 1 (forgot to remove the txt file from the gitignore, added now).<br>
Added custom testIdAttribute in `playwright.config`. <br>
A different approach in finding locators. <br>
Some thoughts: <br>
1. Pessimistic take: I might not find any use for them in "real projects". I've never encountered a project where specific test tags were ever implemented.<br>
2. If they were, they had to be generated manually.<br>
3. And, even if we found a way to create them automatically, one has to make sure they are fixed values and don't change every time there is a deploy.<br>
Maybe the safer approach, is to used them sporadically. Only when the element is impossible to locate or inconsistently located?<br><br>

Struggled a bit with getting the value of an input with `inputValue()`. <br>
I thought waiting for the input_locator's visibility would suffice. <br>
Apparently, I also need to `await` its `inputValue()`.

Instead of:
```
await expect(input_locator).toBeVisible();
await expect(input_locator.inputValue()).toBe(EXPECTED_STRING); // forgot to add the await here
```
It works if:
```
await expect(input_locator).toBeVisible();
await expect(await input_locator.inputValue()).toBe(EXPECTED_STRING);
```
For readability sake:
```
await expect(input_locator).toBeVisible();

const value = await input_locator.inputValue(); 
await expect(value).toBe(EXPECTED_STRING);
```

---
### Apr 25 2025 - First exp using fixtures
Pretty cool. <br>
I didn't have to duplicate code by instantiating whatever page class I needed to use in every single test(). <br>
Also using `getByRole('listitem').filter({hasText: 'Home'})` to find text from a `<li>` is pretty handy. <br><br>

Decided to use a separate .md for journals instead of a README.

---
### Apr 20 2025 - Intro to new concepts
My introduction to the concepts of `Types` and `Fixtures` and how to implement them. <br>
Seems comprehensible with simple examples, but because of my lack of exp using Typescript, it was harder to wrap my head around them when trying to integrate them with Playwright. <br>

---