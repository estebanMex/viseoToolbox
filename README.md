Viseo Toolbox
=========

Simple toolbox for viseo teams 
### FEATURES 
- Example of use `generatorsnippets` npm module to generate snippets for vscode & sublimeText


#### Instal dependencies unavailables in npm repositories
```shell
  git clone https://github.com/estebanMex/generatorsnippets.git
```

## Installation
```shell
  git clone https://github.com/estebanMex/viseoToolbox.git
  cd viseoToolbox
  # install dependecies
  npm install
  # Instal dependencies unavailables in npm repositories
  npm install /home/USER/generatorsnippets
```

**Edit package.json**
- Add next line in scripts
"gSnippets" : "npm install /PATH_OF_REPOSITORY/generatorsnippets; node ./index.js"

```json
{
  "name": "viseoToolbox",
  "version": "0.0.1",
  "description": "Toolbox Viseo developper",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "gSnippets" : "npm install /home/USER/generatorsnippets; node ./index.js"
  },
  "author": "esteban.rios@viseo.com",
  "license": "MIT"
}

```

## Usage

```shell
    npm run gSnippets
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

**0.1.0 Initial release**
- Generate snippets to simplify call custom components in files ISML