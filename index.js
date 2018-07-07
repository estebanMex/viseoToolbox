const modulesFilePath = '/home/esteban/www-dev/rimowa-ecom/cartridges/app_rimowa_core/cartridge/templates/default/util/modules.isml';
// const snippetVscodePathOutput = '/home/esteban/.config/Code/User/snippets/isml.json';

const snippetVscodePathOutput = process.cwd() + '/snippets/isml.json';
const snippetSublimeTextPathOutput = process.cwd() + '/snippets/sublimeSnippets.txt';
const editorTarget = undefined; // ['vscode' | 'sublimetext']
let snippetPathOutput;

fs = require('fs')
fs.readFile(modulesFilePath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var snippetCollection = snippets(data, editorTarget);

    if (!editorTarget || editorTarget === 'vscode') {
        writeSnippets(snippetVscodePathOutput, '{\n' + snippetCollection.join(',\n') + '\n}' + '\n');

    } else if (editorTarget === 'sublimetext') {
        writeSnippets(snippetSublimeTextPathOutput, snippetCollection.join('\n'));
    }
});

/**
 * write file snippets
 * @param {pathSystem} targetPath 
 * @param {string} snippetsString 
 */
function writeSnippets(targetPath, snippetsString) {

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

function snippets(dataFilecomposants, editorTarget) {
    var Generatorsnippets = require('generatorsnippets')
    // create a instances
    var generatorsnippets = new Generatorsnippets(dataFilecomposants)

    // generate an array with all snippets
    generatorsnippets.editorTarget = editorTarget || 'vscode';
    var allSnippetsInArray = generatorsnippets.generateAllSnippets();

    return allSnippetsInArray;
}
