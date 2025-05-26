## Journal
_This file will be used to register thoughts I found worth logging while tinkering with Playwright/TS._ <br>

---
### May 25 2025 - Handling brouwser's dialog prompt
First real headache. Dealing with the browser's prompt in the Contact Us Page.<br>
At first I thought the test (Testcase 6) failed because of the upload feature, but apparently it was because of the dialog that prompts after submitting Contact Us form. <br>
According to [their doc](https://playwright.dev/docs/dialogs), you have to "register a dialog handler before the action that triggers it.", which I find odd. <br>
In any case, I was finally able to solve that issue to complete Testcase 6. <br>
I added the step in the `ContactUsPage` in `accept_dialog_prompt()`. I will probably have to move it to a different page, but it will do for now.

---
### May 16 2025 - --ui Playwright command and getting used to TS
Decided to polish the `navbar_elements_are_visible()` function's `options`, with `?` params and "discriminated union".<br>
These are quite new TS features for me (and probably pretty basic for others) so I have no idea if this was the best way to use them. We'll see.<br><br>
The `--ui` Playwright command has been quite useful for debugging tests.<br><br>

Defining and using `type SignUpUser` might have been completely unnecesary for this project. I suppose it makes sense when the project gets bigger and bigger.

---
### May 03 2025 - Abstracting steps and first exp using objets as func parameters
Started Testcase 2. <br>
Unsurprisingly, like in other test frameworks, I can also `test.skip()` in Playwright.<br>
Reading some of the following testcases they have here: https://automationexercise.com/test_cases, I noticed a lot of repeated steps so I decided to abstract away some `expect()` into their respective pages. Such as, `homePageElementsAreVisible()` and `navbarElementsAreVisible()`. <br>
This brings up a subtle risk: tests failing for unrelated reasons. These abstractions create a tight coupling between the tests and every missing element that I am `expect()` in that function.<br>
I need to be aware of the scope and the targeted elements that need to be tested.<br>
So, for instance, while I'm running tests for the login, I don't want them to fail because an unrelated navbar element is missing. <br>
Now, if part of the test is making sure that ALL elements of the navbar are visible during process, then adding that extra step is valid.
<br><br>

On an unrelated and (for some) sillier note, started to use objects as parameter like here `navbarElementsAreVisible(options: {loggedin?: boolean})`. <br>
I had to deal with these types of functions before, but for some reason it never dawned on me to use them myself. <br>
I find them more descriptive and easier to read, like here:

`navbarElementsAreVisible({loggedin: true})` seems to me much clearer than `navbarElementsAreVisible(true)`

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
