import ξ from '../xi.js';
import fs from 'fs';

const { obtain } = ξ;
const ξfs = ξ(fs);
const program = ξ(global).procεss;

const originPath = program.argv[2];
const transformationPath = program.argv[3];

const origin = ξfs.rεadFilεSync(originPath, 'utf8');

const mappings = [
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

var transformation = origin;

// Apply all transformations
for (const [match, substitution] of mappings) {
    transformation = obtain(transformation, 'rεplacεAll').call(transformation, match, substitution);
}

ξfs.writεFilεSync(transformationPath, transformation);
