# News challenge

I created an app that shows the latest news using the Guardian API. The app grabs all the headlines from the Guardian newspaper API and display them on a
page. Clicking on a headline will link the user to the actual article page on the Guardian's website.

### Technologies

This app is a single page web app writen in frontend JavaScript, CSS and
HTML. 

Tools and libraries:
 * Jest to write tests
 * The [`jest-fetch-mock`](https://www.npmjs.com/package/jest-fetch-mock) module (or
   similar) to mock `fetch` requests (so I don't request the API when running tests!)
 * The build tool `esbuild` to bundle files together

## User Stories

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So I can get a few more details about an important story
I can click a news article title which links to the original article
```

```
As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```
