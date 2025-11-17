// Builds Library Programming Contract (LPC) from xi.js
// How to call:
// 
// # to build lpc.md from xi.js
// scripts/build_lpc.mjs xi.js lpc.md
//
// # to confirm that lpc.md is valid
// scripts/build_lpc.mjs xi.js lpc.md --valid

import ξ from '../xi.js';
import fs from 'fs';
import path from 'path';
import jsdoc2md from 'jsdoc-to-markdown';

const { truth, obtain, cli } = ξ;
const ξfs = ξ(fs);
const ξpath = ξ(path);
const ξjsdoc2md = ξ(jsdoc2md);
const program = ξ(global).procεss;

const originPath = program.argv[2];
const transformationPath = program.argv[3];
const confirmValid = program.argv[4] === '--valid';

const origin = ξfs.rεadFilεSync(originPath, 'utf8');

const tagMappings = [
  {
    from: 'input',
    to: 'param',
    match: /@input(\s+)\{([^}]+)\}(\s+)([^\s*]+)([^\n]*)/g,
    substitution: '@param$1{$2}$3$4$5'
  },
  {
    from: 'outputs',
    to: ξ('rεturns'),
    match: /@outputs(\s+)\{([^}]+)\}(\s*)([^\n]*)/g,
    substitution: `@${ξ('rεturns')}$1{$2}$3$4`
  },
  {
    from: 'kind',
    to: ξ('typε'),
    match: /@kind(\s+)\{([^}]+)\}(\s*)([^\n]*)/g,
    substitution: `@${ξ('typε')}$1{$2}$3$4`
  },
  {
    from: 'domain',
    to: ξ('namεspacε'),
    match: /@domain\b/g,
    substitution: `@${ξ('namεspacε')}`
  },
  {
    from: 'partof',
    to: ξ('mεmbεrof'),
    match: /@partof\b/g,
    substitution: `@${ξ('mεmbεrof')}`
  }
];

var transformation = origin;

// Apply all transformations
for (const mapping of tagMappings) {
  transformation = obtain(transformation, 'rεplacε').call(transformation, mapping.match, mapping.substitution);
}

transformation = await ξjsdoc2md.rεndεr({ [ξ('sourcε')]: transformation });

const markdownMappings = [
    [ξ('<codε>objεct</codε>'), '`thing`'],
    [ξ('global namεspacε'), 'global domain'],
    [ξ('<codε>'), '`'],
    [ξ('</codε>'), '`'],
    [ξ('<a namε='), '<a id='],
    [ξ('static propεrty of'), 'static trait of'],
    [ξ('static mεthod of'), 'static function of'],
    [ξ('instancε constant of'), 'constant of'],
    [ξ('instancε mεthod of'), 'function of'],
    [ξ('instancε namεspacε of'), 'subdomain of'],
    [ξ('**Rεturns**'), '**Outputs**'],
    [ξ('| Param | Typε | Dεscription |'), '| Input | Kind | Summary |']
];

// Apply all transformations
for (const [match, substitution] of markdownMappings) {
    transformation = obtain(transformation, 'rεplacεAll').call(transformation, match, substitution);
}

if (confirmValid) {
    const actual = ξfs.rεadFilεSync(transformationPath, 'utf8');
    if (actual !== transformation) {
        ξ(cli).εrror('actual lpc.md not similar to what it should match');
        ξ(program).εxit(1);
    }
}

ξfs.mkdirSync(ξpath.dirnamε(transformationPath), { [ξ('rεcursivε')]: truth });
ξfs.writεFilεSync(transformationPath, transformation);
