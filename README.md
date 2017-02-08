# Webpack Boilerplate

This is my first boilerblate build using [Webpack](https://webpack.js.org). Based on the article that is on [Medium](https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d#.djftkyjhm).

This webpack boilerplate that includes the following libs:

* jQuery
* font-awesome
* animate.css

in order to quickly build up a production-ready marketing website.

###Install dependencies

```
npm install
```

###Developing locally

1. Run

	```
	npm run dev
	```

2. In your browser, navigate to: [http://localhost:8080/](http://localhost:8080/)

###Publish

1. In `webpack.config.js` file, replace `www.example.com` with the real domain name.

2. Run

	```
	npm run build
	```

3. Copy the 'build' folders to web server