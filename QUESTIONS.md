### What are the latest CSS layout methods?

The latest layout method is [grid-layout](https://css-tricks.com/snippets/css/complete-guide-grid/), which is a promising thing to structure grid as it _should_ be (what is _intuitive_). It [lacks](http://caniuse.com/#search=grid) support in modern browsers, so it is to early to talk about it. Right now the latest layout method is FlexBox (which was, actually, designed only for components layout, but not for pages – but it works quite good, so nobody cares) – which allows to solve a lot of pain and easily reorder them in some certain cases. Also, it solves from the box the main problem of CSS – vertical aligning, without `display: table-cell;` or wrapping inside a box with `line-height: $height` or other cryptic techniques. I use it all the time if I target IE 10+, and find it very good. I have to admit, though, it is not a silver bullet – for horizontal sliders you still have to use good old `display:inline-block` and `word-wrap: nowrap`.

---

### What are the CSS methodologies you use to structure your CSS and why is this important to you?

I am a fan of [BEM](https://en.bem.info/methodology/naming-convention/) approach – which is, in a nutshell, just a specificity thing (Block is the first level, and Element is the second), and it encourages full flat way to declare classes. It has one _big_ advantage, that it helps you a lot when you manage big CSS codebase (say like more than ~10 kLOC of styles), because it has literally 0 overriding rules. The obvious problem that sooner or later you'll run out of Blocks, which will cause obstruction of naming, and maintainability will go down. Also, BEM is impossible to use per se, without tools like [bemto](https://github.com/kizu/bemto) – I even wrote it to the [JS](https://github.com/Bloomca/js-bemto).

So, I found that CSS Modules solve the same problem with the same method – using specificity, but only 1 level, though using hashing we avoid problem of naming blocks completely and can just use normal class names.

---

### What are your thoughts on nesting using a CSS pre-processor?

I don't really like nesting. It works great in small and close to mid projects, but in the big projects it is absolutely impossible to avoid all overriding, and much more harder not introduce bugs when overriding something that you have to override (sooner or later you will _have_ to). So, I try to avoid it as much as possible (unless it is needed for css animations/hiding and showing – but it is only 1 level).

So I try to avoid it even in CSS Modules.

---

### What is your preferred toolset when building a React app?

As used right here. React/Redux + Webpack for bundling (stabe modern ES + static class properties for _propTypes_), though by recent [articles](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/) it seems that at least some parts of the system can be reconsidered, to be bundled as one thing, instead of tons of modules.

But Webpack adds convenience – we can handle all dependencies in one place, and create *true* modules. Also I think HMRE (hot module replacement) is really great and popularized a lot – update of the app on the fly is very cool without loosing state.

---

### What is your favorite ECMA Script 2015(+) feature and why?

It is very hard to say, because some parts of it were here for ages – like Promises, for instance. So, I think for me these features are just syntax, which allows to write more elegant and readable code – destructuring, new string literals and objects shorthands with computed properties in object literals (but the most used one is destructuring).

Also I really appreciate tail-call recursion optimising – after this thing it would be possible to use javascript as more expressive functional language (I like the idea of functional languages).

---

### What tools or libraries do you use when testing react components?

I personally use enzyme + mocha + chai + sinon. Also, I don't really know what is the best strategy for testing components – because I see it as not very helpful to write tests in the beginning of the project due to often changes.

---

### What is your experience with stateless (functional) components, and when would you either use them, or not use them?

Actually, majority of my experience in this field is strongly theoretical, it came from my learning of Clojure(Script). Because they have easy compare mechanism, they offer to render all from top to down all the time, with `shouldComponentUpdate` method invoking – and some libraries in js try to implement it [too] (https://github.com/omniscientjs/omniscient) (it has cljs [ancestor](https://github.com/levand/quiescent)).
So, the idea is cool, but the problem is in immutability. immutability is good, but if it is not enforced on language level (like any FP language, like Haskell, Clojure, Elixir, etc), then it has very steep learning curve and it is very hard to accept in the team. Also such solutions has much less best practices, community support and other benefits.

My personal preference is not to use them; React team said that they only [*plan*](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) to add performance to such components, so I just use lifecycle in all components (it is very helpful to build more readable big applications).

---

### How important is semantic markup when your pages are built in React Components?

I don't think React has any preferences here over any other frameworks, or some discount. I think we should write accessible HTML and CSS _all_ the time – because it is really frustrating when you don't know which image is needed, and they failed to load (but there are two of them and there are no `alt` on `img`). So, I think semantic is a crucial thing for web – it is what makes web so powerful.

---

### What would be a perfect `<use />` case?

Basically, all components without HTML content are a good use case – usually it is for what you can name *side effects*. I think the best example is [ReactDocumentMeta](https://github.com/kodyl/react-document-meta).
