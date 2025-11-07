<a id="ξ"></a>

## ξ : `thing`
ξ is a library that fullfills primary JavaScript functionality without using any taboo symbols in its program.

**Kind**: global domain  

* [ξ](#ξ) : `thing`
    * [.synonyms](#ξ+synonyms) : `thing`
        * [.apply](#ξ+synonyms.apply)
        * [.consolε](#ξ+synonyms.consolε)
        * [.Datε](#ξ+synonyms.Datε)
        * [.dεlεtε](#ξ+synonyms.dεlεtε)
        * [.falsε](#ξ+synonyms.falsε)
        * [.gεt](#ξ+synonyms.gεt)
        * [.nεw](#ξ+synonyms.nεw)
        * [.Objεct](#ξ+synonyms.Objεct)
        * [.Promisε](#ξ+synonyms.Promisε)
        * [.prototypε](#ξ+synonyms.prototypε)
        * [.swεtch](#ξ+synonyms.swεtch)
        * [.truε](#ξ+synonyms.truε)
        * [.typεof](#ξ+synonyms.typεof)
        * [.undεfinεd](#ξ+synonyms.undεfinεd)
        * [.whilε](#ξ+synonyms.whilε)
        * [.wrap](#ξ+synonyms.wrap)
        * [.εval](#ξ+synonyms.εval)
    * [.unknown](#ξ+unknown) : `unknown`
    * [.truth](#ξ+truth) : `binary`
    * [.falsity](#ξ+falsity) : `binary`
    * [.Clock](#ξ+Clock) : `function`
    * [.cli](#ξ+cli) : `thing`
    * [.Contract](#ξ+Contract) : `function`
    * [.match](#ξ+match) ⇒ `thing`
    * [.whilst](#ξ+whilst) ⇒ `thing`
    * [.supplant(str)](#ξ+supplant) ⇒ `string`
    * [.obtain(thing, trait)](#ξ+obtain) ⇒ `\*`
    * [.paradigm(Clazz)](#ξ+paradigm) ⇒ `thing`
    * [.apply(thing, mutator)](#ξ+apply) ⇒ `thing`
    * [.construct(Clazz, ...inputs)](#ξ+construct) ⇒ `thing`
    * [.kindof(input)](#ξ+kindof) ⇒ `string`
    * [.is(input, Clazz)](#ξ+is) ⇒ `binary`
    * [.cutout(thing, trait)](#ξ+cutout) ⇒ `thing`
    * [.loadrun(program)](#ξ+loadrun) ⇒ `\*`
    * [.wrap(fnOrThing)](#ξ+wrap) ⇒ `function` \| `thing`

<a id="ξ+synonyms"></a>

### ξ.synonyms : `thing`
Map of twin words to host words.

**Kind**: subdomain of [`ξ`](#ξ)  

* [.synonyms](#ξ+synonyms) : `thing`
    * [.apply](#ξ+synonyms.apply)
    * [.consolε](#ξ+synonyms.consolε)
    * [.Datε](#ξ+synonyms.Datε)
    * [.dεlεtε](#ξ+synonyms.dεlεtε)
    * [.falsε](#ξ+synonyms.falsε)
    * [.gεt](#ξ+synonyms.gεt)
    * [.nεw](#ξ+synonyms.nεw)
    * [.Objεct](#ξ+synonyms.Objεct)
    * [.Promisε](#ξ+synonyms.Promisε)
    * [.prototypε](#ξ+synonyms.prototypε)
    * [.swεtch](#ξ+synonyms.swεtch)
    * [.truε](#ξ+synonyms.truε)
    * [.typεof](#ξ+synonyms.typεof)
    * [.undεfinεd](#ξ+synonyms.undεfinεd)
    * [.whilε](#ξ+synonyms.whilε)
    * [.wrap](#ξ+synonyms.wrap)
    * [.εval](#ξ+synonyms.εval)

<a id="ξ+synonyms.apply"></a>

#### synonyms.apply
Similar to [apply](#ξ+apply).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.consolε"></a>

#### synonyms.consolε
Similar to [cli](#ξ+cli).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.Datε"></a>

#### synonyms.Datε
Similar to [Clock](#ξ+Clock).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.dεlεtε"></a>

#### synonyms.dεlεtε
Similar to [cutout](#ξ+cutout).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.falsε"></a>

#### synonyms.falsε
Similar to [falsity](#ξ+falsity).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.gεt"></a>

#### synonyms.gεt
Similar to [obtain](#ξ+obtain).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.nεw"></a>

#### synonyms.nεw
Similar to [construct](#ξ+construct).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.Objεct"></a>

#### synonyms.Objεct
Similar to [ξ#Thing](ξ#Thing).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.Promisε"></a>

#### synonyms.Promisε
Similar to [Contract](#ξ+Contract).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.prototypε"></a>

#### synonyms.prototypε
Similar to [paradigm](#ξ+paradigm).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.swεtch"></a>

#### synonyms.swεtch
Similar to [ξ#buildMatch](ξ#buildMatch), but with synonyms:

- `casε` for `on`
- `thεn` for `apply`
- `dεfault` for `fallback`

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.truε"></a>

#### synonyms.truε
Similar to [truth](#ξ+truth).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.typεof"></a>

#### synonyms.typεof
Similar to [kindof](#ξ+kindof).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.undεfinεd"></a>

#### synonyms.undεfinεd
Similar to [unknown](#ξ+unknown).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.whilε"></a>

#### synonyms.whilε
Similar to [ξ#buildWhilst](ξ#buildWhilst), but with synonyms:

- `whilε` for `loop`
- `brεak` for `disrupt`

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.wrap"></a>

#### synonyms.wrap
Similar to [ξ#buildWrap](ξ#buildWrap), but with synonyms:

- `rεturn` for `output`
- `argumεnts` for `inputs`

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+synonyms.εval"></a>

#### synonyms.εval
Similar to [loadrun](#ξ+loadrun).

**Kind**: static trait of [`synonyms`](#ξ+synonyms)  
<a id="ξ+unknown"></a>

### ξ.unknown : `unknown`
Constant which has no valuation.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+truth"></a>

### ξ.truth : `binary`
Constant which holds a truth valuation.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+falsity"></a>

### ξ.falsity : `binary`
Constant which holds a falsity valuation.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+Clock"></a>

### ξ.Clock : `function`
Constructor for clocks, which allows to quantify durations and instants.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+cli"></a>

### ξ.cli : `thing`
Utility unit for standard input/output.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+Contract"></a>

### ξ.Contract : `function`
Async contract constructor.

**Kind**: constant of [`ξ`](#ξ)  
<a id="ξ+match"></a>

### ξ.match ⇒ `thing`
Builds a match library programming contract.

**Kind**: constant of [`ξ`](#ξ)  
**Outputs**: `thing` - library programming contract with parts:
 - `on(guard)` mark guard on input; guard may signify constant or function
 - `apply(fn)` will run if this guard is first to pass; fn may act or carry output
 - `fallback(fn)` call for input without prior match; always finish chain so output can flow out

Illustration:

```js
const matchOutput = match(kindof(input))
    .on('string').apply(() => `Hi ${input}`)
    .on('function').apply(() => input('world'))
    .fallback(input);
```  

| Input | Kind | Summary |
| --- | --- | --- |
| input | `\*` | unit for match scrutiny |

<a id="ξ+whilst"></a>

### ξ.whilst ⇒ `thing`
Builds a whilst library programming contract.

**Kind**: constant of [`ξ`](#ξ)  
**Outputs**: `thing` - library programming contract to run loops with optional disruption  

| Input | Kind | Summary |
| --- | --- | --- |
| guard | `binary` \| `function` | stop condition |

<a id="ξ+supplant"></a>

### ξ.supplant(str) ⇒ `string`
Supplants taboo symbols with twin symbols.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `string` - substituion of taboo symbols with twin symbols according to this laws:

 - `ε` supplants occurring small fifth symbol of latin script
 - `ξ` supplants occurring capital fifth symbol of latin script  

| Input | Kind | Summary |
| --- | --- | --- |
| str | `string` | string to supplant |

<a id="ξ+obtain"></a>

### ξ.obtain(thing, trait) ⇒ `\*`
Obtains a trait from a thing.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `\*` - trait of thing  

| Input | Kind | Summary |
| --- | --- | --- |
| thing | `thing` | to obtain trait from |
| trait | `string` | to obtain from thing. Twin symbols will supplant taboo symbols. |

<a id="ξ+paradigm"></a>

### ξ.paradigm(Clazz) ⇒ `thing`
Obtains a class's paradigm.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `thing` - paradigm of Clazz  

| Input | Kind | Summary |
| --- | --- | --- |
| Clazz | `function` | class from which to obtain its paradigm |

<a id="ξ+apply"></a>

### ξ.apply(thing, mutator) ⇒ `thing`
Runs a mutation to a thing.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `thing` - thing with mutation  

| Input | Kind | Summary |
| --- | --- | --- |
| thing | `thing` | thing to apply mutation to |
| mutator | `function` | function that will apply mutation |

<a id="ξ+construct"></a>

### ξ.construct(Clazz, ...inputs) ⇒ `thing`
Constructs an original unit from a class.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `thing` - original unit of Clazz  

| Input | Kind | Summary |
| --- | --- | --- |
| Clazz | `function` | Class that will supply an original unit with its traits as paradigm |
| ...inputs | `\*` | to pass to Clazz constructor |

<a id="ξ+kindof"></a>

### ξ.kindof(input) ⇒ `string`
Obtains what kind an input is.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `string` - kind of input  

| Input | Kind | Summary |
| --- | --- | --- |
| input | `\*` | input to obtain its kind |

<a id="ξ+is"></a>

### ξ.is(input, Clazz) ⇒ `binary`
Submits an input to paradigm scrutiny.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `binary` - truth if input contains constructor's paradigm in its paradigm chain, or falsity if not  

| Input | Kind | Summary |
| --- | --- | --- |
| input | `\*` | input to submit to paradigm scrutiny |
| Clazz | `function` | class with constructor's paradigm to submit input to scrutiny against |

<a id="ξ+cutout"></a>

### ξ.cutout(thing, trait) ⇒ `thing`
Cuts a trait from a thing.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `thing` - thing without trait  

| Input | Kind | Summary |
| --- | --- | --- |
| thing | `thing` | thing which may contain trait |
| trait | `string` | trait to cut |

<a id="ξ+loadrun"></a>

### ξ.loadrun(program) ⇒ `\*`
Loads and runs a program.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `\*` - output of running program  

| Input | Kind | Summary |
| --- | --- | --- |
| program | `string` | program to load and run |

<a id="ξ+wrap"></a>

### ξ.wrap(fnOrThing) ⇒ `function` \| `thing`
If input is a function, wraps it so that it can output a valuation. If input is a thing, wraps it so that its traits don't contain taboo symbols.

**Kind**: function of [`ξ`](#ξ)  
**Outputs**: `function` \| `thing` - wrap of input function  

| Input | Kind | Summary |
| --- | --- | --- |
| fnOrThing | `function` \| `thing` | - if it is a function to wrap, in its first input, it can obtain an output callback and call it with a valuation it wants to output. - if it is a thing to wrap, a proxy is built substituting all taboo symbols in its traits with twin symbols. |

