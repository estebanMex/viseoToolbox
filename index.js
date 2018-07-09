const Generatorsnippets = require('generatorsnippets');
const modulesFilePath = '/home/esteban/www-dev/rimowa-ecom/cartridges/app_rimowa_core/cartridge/templates/default/util/modules.isml';

new Generatorsnippets({
    'modulesFilePath': modulesFilePath,
    // 'editorTarget': 'sublimetext',
    'paths': {
        'vscode': {
            outputpath:  process.cwd() + '/snippets/vscode/isml2.json'
        },
        'sublimetext': {
            outputpath:  process.cwd() + '/snippets/vscode/isml2.json'
        }
    }
}).writeSnippets();