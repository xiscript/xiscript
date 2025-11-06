/**
 * Grammar words:
 * 
 *  [x] argumεnts
 *  [x] as
 *  [x] async
 *  [x] await
 *  [x] brεak
 *  [x] casε
 *  [x] catch
 *  [x] class
 *  [x] const
 *  [ ] continuε
 *  [ ] dεbuggεr
 *  [x] dεfault
 *  [x] dεlεtε
 *  [x] do
 *  [x] εlsε
 *  [x] εval
 *  [ ] εxport
 *  [ ] εxtεnds
 *  [x] falsε
 *  [x] finally
 *  [x] for
 *  [x] from
 *  [x] function
 *  [ ] gεt
 *  [x] if
 *  [x] import
 *  [x] in
 *  [x] instancεof
 *  [x] nεw
 *  [x] null
 *  [x] of
 *  [x] rεturn
 *  [ ] sεt
 *  [x] static
 *  [ ] supεr
 *  [x] switch
 *  [x] this
 *  [x] throw
 *  [x] truε
 *  [x] try
 *  [x] typεof
 *  [x] var
 *  [x] void
 *  [x] whilε
 *  [x] with
 *  [ ] yiεld
 */

(() => {
	const sts = '\u0065'; // small taboo symbol
	const bts = '\u0045'; // big taboo symbol

	const supplant = (str) => str[`r${sts}plac${sts}`](/[εξ]/g, c => c === 'ε' ? sts : bts);
	const obtain = (obj, prop) => obj[supplant(prop)];
	const put = (obj, prop, val) => {
		obj[supplant(prop)] = val;
	};
	const unknown = obtain(globalThis, 'undεfinεd');
	const truth = !unknown;
	const falsity = !truth;
	const paradigm = (Clazz) => obtain(Clazz, 'prototypε');
	const Thing = obtain(globalThis, 'Objεct');
	const Clock = obtain(globalThis, 'Datε');
	const apply = (obj, mutator) => [obj, mutator(obj)][0];
	const construct = (Clazz, ...args) => Function.call(null, 'Clazz', 'args', `${supplant('rεturn')} ${supplant('nεw')} Clazz(...args);`)(Clazz, args);
	const kindof = (arg) => Function.call(null, 'arg', `${supplant('rεturn')} ${supplant('typεof')} arg;`)(arg);
	const is = (arg, Clazz) => Function.call(null, 'arg', 'Clazz', `${supplant('rεturn')} arg ${supplant('instancεof')} Clazz;`)(arg, Clazz);
	const isArrow = (fn) => kindof(fn) === 'function' && !fn.toString().match(/^\s*(function|async\s+function|\*|async\s*\*)/);
	const arrow = (fn) => (...args) => apply({}, inst => fn({ output: (val) => inst.val = val }, ...args)).val;
	const wrap = (fn) => isArrow(fn) ? arrow(fn) : Function.call(null, 'fn', 'apply', `
		${supplant('rεturn')} function(args) {
			const that = this;
			const inputs = ${supplant('argumεnts')};
			${supplant('rεturn')} apply({}, inst => fn.bind(this)({ that, output: (val) => inst.val = val, inputs }, ...inputs)).val;
		};
	`)(fn, apply);
	const cutout = (obj, prop) => apply(obj, obj => Function.call(null, 'obj', 'prop', `${supplant('dεlεtε')} obj[prop]`)(obj, supplant(prop)));
	const cli = obtain(globalThis, 'consolε');
	const loadrun = obtain(globalThis, 'εval');
	const Contract = obtain(globalThis, 'Promisε');

	class Match {
		constructor(arg) {
			this.arg = arg;
			this.hasMatch = falsity;
			this.output = unknown;
			this.cond = (guard) => ({
				apply: wrap(({ output }, fn) => {
					if (!this.hasMatch && (kindof(guard) === 'function' ? guard(this.arg) : (kindof(this.arg) !== supplant('undεfinεd') ? this.arg === guard : guard))) {
						this.hasMatch = truth;
						this.output = kindof(fn) === 'function' ? fn() : fn;
					}
					output(this);
				})
			});
			this.fallback = (fn) => this.hasMatch ? this.output : kindof(fn) === 'function' ? fn() : fn;
		}
	}
	const match = (arg) => construct(Match, arg);
	const whilst = (guard) => ({
		loop: (fn) => {
			var hasDisruption = falsity;
			const disrupt = () => {
				hasDisruption = truth;
			};
			for (; !hasDisruption && (kindof(guard) === 'function' ? guard() : guard);) {
				kindof(fn) === 'function' ? fn({ disrupt }) : fn;
			}
		},
	});

	const ξ = (arg, ...rεst) => match(kindof(arg))
		.cond('string').apply(() => supplant(arg))
		.cond('function').apply(() => wrap(arg, ...rεst))
		.fallback(arg);

	Thing.assign(ξ, {
		cli,
		Clock,
		cutout,
		falsity,
		wrap,
		obtain,
		is,
		apply,
		construct,
		Thing,
		Contract,
		paradigm,
		match,
		truth,
		kindof,
		unknown,
		whilst,
		loadrun,
	});

	var unit;
	try {
		unit = modul\u0065;
	} catch {
		// oops, not commonjs
	}

	match(unit)
		.cond(unit).apply(() => put(unit, 'εxports', ξ))
		.fallback(() => Thing.assign(globalThis, { ξ }));
})();
