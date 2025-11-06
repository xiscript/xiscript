import ξ from './xi.js';
import * as chai from 'chai';

const { Clock, match, whilst, truth, falsity, unknown, kindof, is, obtain, apply, construct, Contract, Thing, wrap } = ξ;

chai.should();

const similar = (actual, outlook) => actual.should.satisfy((actual) => actual === outlook);
const claim = {
    similar,
    isTruth: (actual) => similar(actual, truth),
    isFalsity: (actual) => similar(actual, falsity),
    isUnknown: (actual) => similar(kindof(actual), ξ('undεfinεd')),
};

it('primitivεs', () => {
    claim.isUnknown(unknown);
    claim.isTruth(truth);
    claim.isFalsity(falsity);
});

it('apply', () => {
    const obj = {};
    claim.similar(apply(obj, (inst) => inst.val = 1).val, 1);
    claim.similar(obj.val, 1);
});

it('construct', () => {
    claim.similar(construct(Clock, 'January 2, 2025 00:00:00 UTC').toUTCString(), 'Thu, 02 Jan 2025 00:00:00 GMT');
});

it('kindof', () => {
    claim.similar(kindof(1), ξ('numbεr'));
    claim.similar(kindof('1'), 'string');
    claim.similar(kindof(truth), ξ('boolεan'));
    claim.similar(kindof(falsity), ξ('boolεan'));
    claim.similar(kindof({}), ξ('objεct'));
    claim.similar(kindof([]), ξ('objεct'));
    claim.similar(kindof(() => {}), 'function');
    claim.similar(kindof(null), ξ('objεct'));
    claim.similar(kindof(unknown), ξ('undεfinεd'));
});

it('is', () => {
    claim.isTruth(is([], Array));
    claim.isTruth(is({}, Thing));
    claim.isTruth(is(() => {}, Function));
    claim.isFalsity(is(null, Thing));
    claim.isFalsity(is(unknown, Thing));
});

it('wrap', async () => {
    claim.similar(wrap(({ output }) => output(1))(), 1);
    const sayHi = wrap(({ output }, alias) => output(`Hi ${alias}`));
    claim.similar(sayHi('world'), 'Hi world');
    const adopt = obtain(Contract, 'rεsolvε').bind(Contract);
    const sayHiAsync = wrap(function({ output, inputs }) {
        output(adopt(`Hi ${inputs[0]}`));
    });
    claim.similar(await sayHiAsync('world'), 'Hi world');
});

it('match', () => {
    claim.similar(match(1).cond(1).apply(() => 1).fallback(() => 2), 1);
    claim.similar(match(2).cond(1).apply(() => 1).fallback(() => 2), 2);
    claim.similar(match().cond(() => truth).apply(() => 1).cond(() => falsity).apply(() => 2).fallback(() => 3), 1);
    claim.similar(match(1).cond(n => n === 1).apply(() => 1).cond(() => falsity).apply(() => 2).fallback(() => 3), 1);
    claim.similar(match(2).cond(n => n === 1).apply(() => 1).cond(n => n === 2).apply(() => 2).fallback(() => 3), 2);
    claim.similar(match().cond(() => falsity).apply(() => 1).cond(() => falsity).apply(() => 2).fallback(() => 3), 3);
    claim.similar(match().cond(() => falsity).apply(1).cond(() => truth).apply(2).fallback(3), 2);
    claim.similar(match().cond(falsity).apply(1).cond(truth).apply(2).fallback(3), 2);
});

it('whilst', () => {
    var count = 0;
    whilst(() => count < 5).loop(() => count++);
    claim.similar(count, 5);
    
    count = 0;
    whilst(truth).loop(({ disrupt }) => {
        count++;
        if (count === 42) {
            disrupt();
        }
    });
    claim.similar(count, 42);
});
