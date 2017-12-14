## Execution

**Installation**
```
yarn install  || npm install
```

**Running**
```
yarn start  || npm run start
```

**Building**
```
yarn build  || npm run build
```

**Opening on Browser**

When your run your project via the terminal, you'll see the following message: 

```
Compiled successfully!

You can now view default-react-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.69:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Open either `http://localhost:3000/` or the latter via your default browser. 


## File Structure


```
src
├── public                     # Contains html and files to edit
├── sass                       # Using 7-1 Architecture
│   ├── abstracts              # SASS tools and helpers
│   ├── base                   # Boiler plate
│   ├── components             # Widgets
│   ├── layout                 # Marco
│   ├── pages                  # Individual pages 
│   └── theme                  # If there's different themes (May not always be necessary)
│   └── vendor                 # external library
├──App.js                           
├──index.js                           
├──.eslintrc.js                # Setup ESLint Rules
├──.pre-commit-eslint.sh                          
├── .... 
|__package.jsoon                           
```

## Prerequisite

`Yarn || NPM `

### PACKAGES USED :

Under `package.json`

For **SASS**:

```
"dependencies": {
		"node-sass-chokidar": "^0.0.3",
},
"scripts": {
	"build-css": "node-sass-chokidar src/ -o src/",
	"watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
	"start-js": "react-scripts start",
	"start": "npm-run-all -p watch-css start-js",
	"build-js": "react-scripts build",
	"build": "npm-run-all build-css build-js",
	},
```
For more details , refer to [Create-React-App-CSS-Preprocessor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

For **Linter** :

```
	"scripts": {
		"precommit": "eslint",
		"eslint": "sh ./pre-commit-eslint.sh"
	},
	"pre-commit": [
		"eslint"
	],
	"devDependencies": {
		"eslint": "^4.10.0",
		"eslint-plugin-react": "^7.4.0",
		"pre-commit": "^1.2.2"
	}
```


For **Travis**: 

** Added the basic travis configuration

```
language: node_js
node_js:
  - 6
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
  ```




For more details , refer to :

[Create-React-App-EsLint](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor)

[ESLint - Pluggable JavaScript linter](https://eslint.org/)


[eslint-plugin-react-app](https://www.npmjs.com/package/eslint-plugin-react-app)

[Travis](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#on-ci-servers)