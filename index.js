const Generatorsnippets = require('generatorsnippets');
const modulesFilePath = './modules.isml';

new Generatorsnippets({
    'modulesFilePath': modulesFilePath,
    // 'editorTarget': 'sublimetext',
    // 'paths': {
    //     'vscode': {
    //         outputpath:  process.cwd() + '/snippets/vscode/isml2.json'
    //     },
    //     'sublimetext': {
    //         outputpath:  process.cwd() + '/snippets/vscode/isml2.json'
    //     }
    // }
}).writeSnippets();