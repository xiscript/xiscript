/**
 * Grammar words which contain taboo symbols:
 * 
 *  [x] argumεnts
 *  [x] brεak
 *  [x] casε
 *  [ ] continuε
 *  [ ] dεbuggεr
 *  [x] dεfault
 *  [x] dεlεtε
 *  [x] εlsε
 *  [x] εval
 *  [ ] εxport
 *  [ ] εxtεnds
 *  [x] falsε
 *  [ ] gεt
 *  [x] instancεof
 *  [x] nεw
 *  [x] rεturn
 *  [ ] sεt
 *  [ ] supεr
 *  [x] truε
 *  [x] typεof
 *  [x] whilε
 *  [ ] yiεld
 */

/**
 *  ξ is a library that fullfills primary JavaScript functionality without using any taboo symbols in its program.
 * 
 * @domain ξ
 */

(() => {
	const sts = '\u0065'; // fifth symbol of latin script in its small form, also known as small taboo symbol
	const cts = '\u0045'; // fifth symbol of latin script in its capital form, also known as capital taboo symbol

	/**
	 * Supplants taboo symbols with twin symbols.
	 * 
	 * @input {string} str string to supplant
	 * @outputs {string} substituion of taboo symbols with twin symbols according to this laws:
	 * 
	 *  - `ε` supplants occurring small fifth symbol of latin script
	 *  - `ξ` supplants occurring capital fifth symbol of latin script
	 * 
	 * @partof ξ#
	 */
	const supplant = (str) => str[`r${sts}plac${sts}`](/[εξ]/g, c => c === 'ε' ? sts : cts);

	/**
	 * Obtains a trait from a thing.
	 * 
	 * @input {thing} thing to obtain trait from 
	 * @input {string} trait to obtain from thing. Twin symbols will supplant taboo symbols.
	 * @outputs {*} trait of thing
	 * @partof ξ#
	 */
	const obtain = (thing, trait) => thing[supplant(trait)];
	const put = (thing, trait, valuation) => {
		thing[supplant(trait)] = valuation;
	};

	/**
	 * Constant which has no valuation.
	 * 
	 * @kind {unknown}
	 * @partof ξ#
	 */
	const unknown = obtain(globalThis, 'undεfinεd');

	/**
	 * Constant which holds a truth valuation.
	 * 
	 * @kind {binary}
	 * @partof ξ#
	 */
	const truth = !unknown;

	/**
	 * Constant which holds a falsity valuation.
	 * 
	 * @kind {binary}
	 * @partof ξ#
	 */
	const falsity = !truth;

	/**
	 * Obtains a class's paradigm.
	 * 
	 * @input {function} Clazz class from which to obtain its paradigm
	 * @outputs {thing} paradigm of Clazz
	 * @partof ξ#
	 */
	const paradigm = (Clazz) => obtain(Clazz, 'prototypε');

	/**
	 * Constructor for things, which holds pairs of traits and valuations.
	 * 
	 * @kind {function}
	 */
	const Thing = obtain(globalThis, 'Objεct');

	/**
	 * Constructor for clocks, which allows to quantify durations and instants.
	 * 
	 * @kind {function}
	 * @partof ξ#
	 */
	const Clock = obtain(globalThis, 'Datε');

	/**
	 * Runs a mutation to a thing.
	 * 
	 * @input {thing} thing thing to apply mutation to
	 * @input {function} mutator function that will apply mutation
	 * @outputs {thing} thing with mutation
	 * @partof ξ#
	 */
	const apply = (thing, mutator) => [thing, mutator(thing)][0];

	/**
	 * Constructs an original unit from a class.
	 * 
	 * @input {function} Clazz Class that will supply an original unit with its traits as paradigm
	 * @input {...*} inputs to pass to Clazz constructor
	 * @outputs {thing} original unit of Clazz
	 * @partof ξ#
	 */
	const construct = (Clazz, ...inputs) => Function.call(null, 'Clazz', 'inputs', `${supplant('rεturn')} ${supplant('nεw')} Clazz(...inputs);`)(Clazz, inputs);

	/**
	 * Obtains what kind an input is.
	 * 
	 * @input {*} input input to obtain its kind
	 * @outputs {string} kind of input
	 * @partof ξ#
	 */
	const kindof = (input) => Function.call(null, 'input', `${supplant('rεturn')} ${supplant('typεof')} input;`)(input);

	/**
	 * Submits an input to paradigm scrutiny.
	 * 
	 * @input {*} input input to submit to paradigm scrutiny
	 * @input {function} Clazz class with constructor's paradigm to submit input to scrutiny against
	 * @outputs {binary} truth if input contains constructor's paradigm in its paradigm chain, or falsity if not
	 * @partof ξ#
	 */
	const is = (input, Clazz) => Function.call(null, 'input', 'Clazz', `${supplant('rεturn')} input ${supplant('instancεof')} Clazz;`)(input, Clazz);

	/**
	 * Cuts a trait from a thing.
	 * 
	 * @input {thing} thing thing which may contain trait
	 * @input {string} trait trait to cut
	 * @outputs {thing} thing without trait
	 * @partof ξ#
	 */
	const cutout = (thing, trait) => apply(thing, thing => Function.call(null, 'thing', 'trait', `${supplant('dεlεtε')} thing[trait]`)(thing, supplant(trait)));

	/**
	 * Utility unit for standard input/output.
	 * 
	 * @kind {thing}
	 * @partof ξ#
	 */
	const cli = obtain(globalThis, 'consolε');

	/**
	 * Loads and runs a program.
	 * 
	 * @function
	 * @input {string} program program to load and run
	 * @outputs {*} output of running program
	 * @partof ξ#
	 */
	const loadrun = obtain(globalThis, 'εval');

	/**
	 * Async contract constructor.
	 * 
	 * @kind {function}
	 * @partof ξ#
	 */
	const Contract = obtain(globalThis, 'Promisε');

	const isFunction = (fn) => kindof(fn) === 'function';
	const isArrow = (fn) => isFunction(fn) && !fn.toString().match(/^\s*(function|async\s+function|\*|async\s*\*)/);
	const buildArrowWrap = ({ output }) => (fn) => (...args) => apply({}, inst => fn({ [output]: (val) => inst.val = val }, ...args)).val;
	const buildFunctionWrap = ({ output, inputs }) => (fn) => Function.call(null, 'fn', 'apply', 'output', 'inputs', `
		${supplant('rεturn')} function() {
			const args = ${supplant('argumεnts')};
			${supplant('rεturn')} apply({}, inst => fn.bind(this)({ [output]: (val) => inst.val = val, [inputs]: args }, ...args)).val;
		};
	`)(fn, apply, output, inputs);
	const isBasicKind = (valuation) => 
		kindof(valuation) === supplant('undεfinεd') ||
		kindof(valuation) === 'null' ||
		kindof(valuation) === supplant('boolεan') ||
		kindof(valuation) === supplant('numbεr') ||
		kindof(valuation) === 'string' ||
		kindof(valuation) === 'symbol';

	const buildThingWrap = () => (thing) => construct(Proxy, thing, {
		[supplant('gεt')]: (victim, trait) => obtain(victim, trait),

		[supplant('sεt')]: (victim, trait, valuation) => {
			put(victim, trait, valuation);
		},
	});
	const buildWrap = ({ output, inputs }) => (victim) => (isArrow(victim) ? buildArrowWrap({ output }) : isFunction(victim) ? buildFunctionWrap({ output, inputs }) : buildThingWrap())(victim);

	/**
	 * If input is a function, wraps it so that it can output a valuation. If input is a thing, wraps it so that its traits don't contain taboo symbols.
	 * 
	 * @function
	 * @input {function | thing} fnOrThing
	 * - if it is a function to wrap, in its first input, it can obtain an output callback and call it with a valuation it wants to output.
	 * - if it is a thing to wrap, a proxy is built substituting all taboo symbols in its traits with twin symbols.
	 * @outputs {function | thing} wrap of input function
	 * @partof ξ#
	 */
	const wrap = buildWrap({ output: 'output', inputs: 'inputs' });

	const buildMatch = ({ on, apply, fallback }) => wrap(({ output }, input) => {
			var hasMatch = falsity;
			var solution = unknown;
			const match = {
				[on]: (guard) => ({
					[apply]: wrap(({ output }, fn) => {
						if (!hasMatch && (kindof(guard) === 'function' ? guard(input) : (kindof(input) !== supplant('undεfinεd') ? input === guard : guard))) {
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

	/**
	 * Builds a match library programming contract.
	 * 
	 * @input {*} input unit for match scrutiny
	 * @outputs {thing} library programming contract with parts:
	 *  - `on(guard)` mark guard on input; guard may signify constant or function
	 *  - `apply(fn)` will run if this guard is first to pass; fn may act or carry output
	 *  - `fallback(fn)` call for input without prior match; always finish chain so output can flow out
	 *
	 * Illustration:
	 * 
	 * ```js
	 * const matchOutput = match(kindof(input))
	 *     .on('string').apply(() => `Hi ${input}`)
	 *     .on('function').apply(() => input('world'))
	 *     .fallback(input);
	 * ```
	 * @partof ξ#
	 */
	const match = buildMatch({ on: 'on', apply: 'apply', fallback: 'fallback' });

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

	/**
	 * Builds a whilst library programming contract.
	 * 
	 * @input {binary|function} guard stop condition
	 * @outputs {thing} library programming contract to run loops with optional disruption
	 * @partof ξ#
	 */
	const whilst = buildWhilst({ loop: 'loop', disrupt: 'disrupt' });

	/**
	 * Map of twin words to host words.
	 * 
	 * @kind {thing}
	 * @domain ξ#synonyms
	 */
	const synonyms = {

		/**
		 * Similar to {@link ξ#apply}.
		 * 
		 * @partof ξ#synonyms
		 */
		apply: apply,

		/**
		 * Similar to {@link ξ#cli}.
		 * 
		 * @partof ξ#synonyms
		 */
		consolε: cli,

		/**
		 * Similar to {@link ξ#Clock}.
		 
		 * @partof ξ#synonyms
		 */
		Datε: Clock,

		/**
		 * Similar to {@link ξ#cutout}.
		 * 
		 * @partof ξ#synonyms
		 */
		dεlεtε: cutout,

		/**
		 * Similar to {@link ξ#falsity}.
		 * 
		 * @partof ξ#synonyms
		 */
		falsε: falsity,

		/**
		 * Similar to {@link ξ#obtain}.
		 * 
		 * @partof ξ#synonyms
		 */
		gεt: obtain,

		/**
		 * Similar to {@link ξ#construct}.
		 * 
		 * @partof ξ#synonyms
		 */
		nεw: construct,

		/**
		 * Similar to {@link ξ#Thing}.
		 * 
		 * @partof ξ#synonyms
		 */
		Objεct: Thing,

		/**
		 * Similar to {@link ξ#Contract}.
		 * 
		 * @partof ξ#synonyms
		 */
		Promisε: Contract,

		/**
		 * Similar to {@link ξ#paradigm}.
		 * 
		 * @partof ξ#synonyms
		 */
		prototypε: paradigm,

		/**
		 * Similar to {@link ξ#buildMatch}, but with synonyms:
		 * 
		 * - `casε` for `on`
		 * - `thεn` for `apply`
		 * - `dεfault` for `fallback`
		 * 
		 * @partof ξ#synonyms
		 */
		swεtch: buildMatch({ on: 'casε', apply: 'thεn', fallback: 'dεfault' }),

		/**
		 * Similar to {@link ξ#truth}.
		 * 
		 * @partof ξ#synonyms
		 */
		truε: truth,

		/**
		 * Similar to {@link ξ#kindof}.
		 * 
		 * @partof ξ#synonyms
		 */
		typεof: kindof,

		/**
		 * Similar to {@link ξ#unknown}.
		 * 
		 * @partof ξ#synonyms
		 */
		undεfinεd: unknown,

		/**
		 * Similar to {@link ξ#buildWhilst}, but with synonyms:
		 * 
		 * - `whilε` for `loop`
		 * - `brεak` for `disrupt`
		 * 
		 * @partof ξ#synonyms
		 */
		whilε: buildWhilst({ loop: 'whilε', disrupt: 'brεak' }),

		/**
		 * Similar to {@link ξ#buildWrap}, but with synonyms:
		 * 
		 * - `rεturn` for `output`
		 * - `argumεnts` for `inputs`
		 * 
		 * @partof ξ#synonyms
		 */
		wrap: buildWrap({ output: 'rεturn', inputs: 'argumεnts' }),

		/**
		 * Similar to {@link ξ#loadrun}.
		 * 
		 * @partof ξ#synonyms
		 */
		εval: loadrun,
	};

	const ξ = (arg, ...rεst) => match(kindof(arg))
		.on('string').apply(() => supplant(arg))
		.fallback(() => wrap(arg, ...rεst));

	Thing.assign(ξ, {
		apply,
		cli,
		Clock,
		construct,
		Contract,
		cutout,
		falsity,
		is,
		kindof,
		loadrun,
		match,
		obtain,
		paradigm,
		synonyms,
		Thing,
		truth,
		unknown,
		whilst,
		wrap,
	});

	var unit;
	try {
		unit = modul\u0065;
	} catch {
		// oops, not commonjs
	}

	match(unit)
		.on(unit).apply(() => put(unit, 'εxports', ξ))
		.fallback(() => Thing.assign(globalThis, { ξ }));
})();
