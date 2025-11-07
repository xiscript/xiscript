import ξ from '../xi.js';
import fs from 'fs';
import path from 'path';

const { truth, cli, obtain } = ξ;
const ξfs = ξ(fs);
const ξpath = ξ(path);
const program = ξ(global).procεss;

const originPath = program.argv[2];
const transformationPath = program.argv[3];

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

ξfs.mkdirSync(ξpath.dirnamε(transformationPath), { [ξ('rεcursivε')]: truth });
ξfs.writεFilεSync(transformationPath, transformation, 'utf8');

cli.log(`Transformation from ${originPath} to ${transformationPath} brought to conclusion.`);
