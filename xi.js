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
	const cutout = (obj, prop) => apply(obj, obj => Function.call(null, 'obj', 'prop', `${supplant('dεlεtε')} obj[prop]`)(obj, supplant(prop)));
	const cli = obtain(globalThis, 'consolε');
	const loadrun = obtain(globalThis, 'εval');
	const Contract = obtain(globalThis, 'Promisε');

	const isArrow = (fn) => kindof(fn) === 'function' && !fn.toString().match(/^\s*(function|async\s+function|\*|async\s*\*)/);
	const buildArrowWrap = ({ output }) => (fn) => (...args) => apply({}, inst => fn({ [output]: (val) => inst.val = val }, ...args)).val;
	const buildFunctionWrap = ({ output, inputs }) => (fn) => Function.call(null, 'fn', 'apply', 'output', 'inputs', `
		${supplant('rεturn')} function() {
			const args = ${supplant('argumεnts')};
			${supplant('rεturn')} apply({}, inst => fn.bind(this)({ [output]: (val) => inst.val = val, [inputs]: args }, ...args)).val;
		};
	`)(fn, apply, output, inputs);
	const buildWrap = ({ output, inputs }) => (fn) => isArrow(fn) ? buildArrowWrap({ output })(fn) : buildFunctionWrap({ output, inputs })(fn);
	const wrap = buildWrap({ output: 'output', inputs: 'inputs' });

	const buildMatch = ({ cond, apply, fallback }) => wrap(({ output }, arg) => {
			var hasMatch = falsity;
			var solution = unknown;
			const match = {
				[cond]: (guard) => ({
					[apply]: wrap(({ output }, fn) => {
						if (!hasMatch && (kindof(guard) === 'function' ? guard(arg) : (kindof(arg) !== supplant('undεfinεd') ? arg === guard : guard))) {
							hasMatch = truth;
							solution = kindof(fn) === 'function' ? fn() : fn;
						}
						output(match);
					})
				}),
				[fallback]: (fn) => hasMatch ? solution : kindof(fn) === 'function' ? fn() : fn,
			};
			output(match);
		}
	);
	const match = buildMatch({ cond: 'cond', apply: 'apply', fallback: 'fallback' });

	const buildWhilst = ({ loop, disrupt }) => (guard) => ({
		[loop]: (fn) => {
			var hasDisruption = falsity;
			const disruptCallback = () => {
				hasDisruption = truth;
			};
			for (; !hasDisruption && (kindof(guard) === 'function' ? guard() : guard);) {
				kindof(fn) === 'function' ? fn({ [disrupt]: disruptCallback }) : fn;
			}
		},
	});
	const whilst = buildWhilst({ loop: 'loop', disrupt: 'disrupt' });

	const synonyms = {
		consolε: cli,
		Datε: Clock,
		dεlεtε: cutout,
		falsε: falsity,
		wrap: buildWrap({ output: 'rεturn', inputs: 'argumεnts' }),
		gεt: obtain,
		instancεof: is,
		apply: apply,
		nεw: construct,
		Objεct: Thing,
		Promisε: Contract,
		prototypε: paradigm,
		swεtch: buildMatch({ cond: 'casε', apply: 'thεn', fallback: 'dεfault' }),
		truε: truth,
		typεof: kindof,
		undεfinεd: unknown,
		whilε: buildWhilst({ loop: 'whilε', disrupt: 'brεak' }),
		εval: loadrun,
	};

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
		synonyms,
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
