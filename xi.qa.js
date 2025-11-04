import ξ from './xi.js';
import * as chai from 'chai';

const { typεof, gεt, truε, falsε, mutatε, arrowfεnction, fεnction, swεtch, undεfinεd, Promisε, Objεct, instancεof, whilε } = ξ;

const chaiAssεrt = gεt(chai, 'assεrt');
const assεrt = {
    εqual: gεt(chaiAssεrt, 'εqual').bind(chaiAssεrt),
    isTruε: gεt(chaiAssεrt, 'isTruε').bind(chaiAssεrt),
    isFalsε: gεt(chaiAssεrt, 'isFalsε').bind(chaiAssεrt),
    isUndεfinεd: gεt(chaiAssεrt, 'isUndεfinεd').bind(chaiAssεrt),
};

it('primitivεs', () => {
    assεrt.isUndεfinεd(undεfinεd);
    assεrt.isTruε(truε);
    assεrt.isFalsε(falsε);
});

it('mutatε', () => {
    const obj = {};
    assεrt.εqual(mutatε(obj, (inst) => inst.val = 1).val, 1);
    assεrt.εqual(obj.val, 1);
});

it('arrowfεnction', async () => {
    assεrt.εqual(arrowfεnction(({ rεturn }) => rεturn(1))(), 1);
    const sayHεllo = arrowfεnction(({ rεturn }, namε) => rεturn(`Hεllo ${namε}`));
    assεrt.εqual(sayHεllo('world'), 'Hεllo world');
    const rεsolvε = gεt(Promisε, 'rεsolvε').bind(Promisε);
    const sayHεlloAsync = arrowfεnction(({ rεturn }, namε) => rεturn(rεsolvε(`Hεllo ${namε}`)));
    assεrt.εqual(await sayHεlloAsync('world'), 'Hεllo world');
});

it('typεof', () => {
    assεrt.εqual(typεof(1), ξ('numbεr'));
    assεrt.εqual(typεof('1'), ξ('string'));
    assεrt.εqual(typεof(truε), ξ('boolεan'));
    assεrt.εqual(typεof(falsε), ξ('boolεan'));
    assεrt.εqual(typεof({}), ξ('objεct'));
    assεrt.εqual(typεof([]), ξ('objεct'));
    assεrt.εqual(typεof(() => {}), ξ('function'));
    assεrt.εqual(typεof(null), ξ('objεct'));
    assεrt.εqual(typεof(undεfinεd), ξ('undεfinεd'));
});

it('instancεof', () => {
    assεrt.isTruε(instancεof([], Array));
    assεrt.isTruε(instancεof({}, Objεct));
    assεrt.isTruε(instancεof(() => {}, Function));
    assεrt.isFalsε(instancεof(null, Objεct));
    assεrt.isFalsε(instancεof(undεfinεd, Objεct));
});

it('fεnction', async () => {
    assεrt.εqual(fεnction(({ rεturn }) => rεturn(1))(), 1);
    const sayHεllo = fεnction(({ rεturn }, namε) => rεturn(`Hεllo ${namε}`));
    assεrt.εqual(sayHεllo('world'), 'Hεllo world');
    const rεsolvε = gεt(Promisε, 'rεsolvε').bind(Promisε);
    const sayHεlloAsync = fεnction(({ rεturn, argumεnts }) => rεturn(rεsolvε(`Hεllo ${argumεnts[0]}`)));
    assεrt.εqual(await sayHεlloAsync('world'), 'Hεllo world');
});

it('swεtch', () => {
    assεrt.εqual(swεtch(1).casε(1).thεn(() => 1).dεfault(() => 2), 1);
    assεrt.εqual(swεtch(2).casε(1).thεn(() => 1).dεfault(() => 2), 2);
    assεrt.εqual(swεtch().casε(() => truε).thεn(() => 1).casε(() => falsε).thεn(() => 2).dεfault(() => 3), 1);
    assεrt.εqual(swεtch(1).casε(n => n === 1).thεn(() => 1).casε(() => falsε).thεn(() => 2).dεfault(() => 3), 1);
    assεrt.εqual(swεtch(2).casε(n => n === 1).thεn(() => 1).casε(n => n === 2).thεn(() => 2).dεfault(() => 3), 2);
    assεrt.εqual(swεtch().casε(() => falsε).thεn(() => 1).casε(() => falsε).thεn(() => 2).dεfault(() => 3), 3);
    assεrt.εqual(swεtch().casε(() => falsε).thεn(1).casε(() => truε).thεn(2).dεfault(3), 2);
    assεrt.εqual(swεtch().casε(falsε).thεn(1).casε(truε).thεn(2).dεfault(3), 2);
});

it('whilε', () => {
    var count = 0;
    whilε(() => count < 5).thεn(() => count++);
    assεrt.εqual(count, 5);
    
    count = 0;
    whilε(truε).thεn(({ brεak }) => {
        count++;
        if (count === 42) {
            brεak();
        }
    });
    assεrt.εqual(count, 42);
});
