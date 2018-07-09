fs = require('fs');

let Generatorsnippets = require('generatorsnippets');

const modulesFilePath = '/home/esteban/www-dev/rimowa-ecom/cartridges/app_rimowa_core/cartridge/templates/default/util/modules.isml';

const snippetVscodePathOutput = process.cwd() + '/snippets/vscode/isml.json';
const snippetSublimeTextPathOutput = process.cwd() + '/snippets/sublimetext/';
const editorTarget = 'sublimetext'; // ['vscode' | 'sublimetext']
let snippetPathOutput;

const _PATHS = {
    vscode: {
        output: snippetVscodePathOutput
    },
    sublimetext: {
        output: snippetSublimeTextPathOutput
    }
};

// Start generate snippets
generateSnippets(modulesFilePath, editorTarget, _PATHS);

//  methods
function generateSnippets(modulesFilePath, editorTarget, _PATHS) {
    fs.readFile(modulesFilePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        let snippets = getSnippets(data);

        factoryWritter(editorTarget, _PATHS)(snippets);
    });
}

function factoryWritter(editorTarget, _PATHS) {
    let writter;
    let writters = {
        vscode: vsCodeWritter,
        sublimetext: sublimeTextWritter
    }

    var options = {
        output: _PATHS[editorTarget] ? _PATHS[editorTarget].output : _PATHS.vscode.output
    }

    // if the writter exist if not vscode is defautl
    writter = writters[editorTarget] ? writters[editorTarget] : writters.vscode;

    return writter.bind(options);
}

function vsCodeWritter(snippets) {
    writeSnippetFile(this.output, '{\n' + snippets.generateAllSnippets().join(',\n') + '\n}' + '\n');
}

function sublimeTextWritter(snippets) {
    let pathbase = this.output;

    snippets.modules.forEach(module => {
        let pathOutputFile = pathbase + 'is' + module.name + '.sublime-snippet';
        writeSnippetFile(pathOutputFile, snippets.generateSnippet(module));
    });
}

/**
 * write file snippets
 * @param {pathSystem} targetPath 
 * @param {string} snippetsString 
 */
function writeSnippetFile(targetPath, snippetsString) {

    fs.writeFile(targetPath, snippetsString, function (err) {
        if (err) throw err;

        let msgSaved = ' saved in next path ';
        let targetPathLength = targetPath.length;
        // ceil to avoid as decimal number
        let nbNeeds = Math.ceil((targetPathLength - msgSaved.length) / 2);
        let strSide = generateSuiteChars(nbNeeds + 1, '=');

        console.log(strSide + msgSaved.toUpperCase() + strSide);
        console.log(targetPath);
        console.log(generateSuiteChars(targetPathLength + 1, '='));
    });
}

/**
 * helper to generate a string with repeted char
 * @param {number} nb 
 * @param {string} char 
 */
function generateSuiteChars(nb, char) {
    try {
        return (new Array(nb).join(char))
    } catch (error) {
        console.log(nb, char)
        console.log(error);
        return '================================================';
    }
}

function getSnippets(dataFilecomposants, editorTarget) {
    // create a instances
    var generatorsnippets = new Generatorsnippets(dataFilecomposants);
    return generatorsnippets;
}
