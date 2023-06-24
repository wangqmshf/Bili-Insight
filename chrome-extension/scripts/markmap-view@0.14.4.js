/**
 * Combined by jsDelivr.
 * Original files:
 * - /npm/markmap-lib@0.14.4/dist/browser/index.min.js
 * - /npm/markmap-view@0.14.4/dist/index.min.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! markmap-lib v0.14.4 | MIT License */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("katex")) : "function" == typeof define && define.amd ? define(["exports", "katex"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).markmap = e.markmap || {}, e.window.katex)
}(this, (function(e, t) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e.default : e
    }
    var n = r(t);
    function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        i.apply(this, arguments)
    }
    /*! markmap-common v0.14.2 | MIT License */
    class o {
        constructor() {
            this.listeners = []
        }
        tap(e) {
            return this.listeners.push(e),
            ()=>this.revoke(e)
        }
        revoke(e) {
            const t = this.listeners.indexOf(e);
            t >= 0 && this.listeners.splice(t, 1)
        }
        revokeAll() {
            this.listeners.splice(0)
        }
        call(...e) {
            for (const t of this.listeners)
                t(...e)
        }
    }
    function s() {
        return s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ,
        s.apply(this, arguments)
    }
    const a = ["textContent"];
    function l(e) {
        return e.replace(/[&<"]/g, (e=>({
            "&": "&amp;",
            "<": "&lt;",
            '"': "&quot;"
        }[e])))
    }
    function c(e, t) {
        return `<${e}${t ? Object.entries(t).map((([e,t])=>{
            if (null != t && !1 !== t)
                return e = ` ${l(e)}`,
                !0 === t ? e : `${e}="${l(t)}"`
        }
        )).filter(Boolean).join("") : ""}>`
    }
    function p(e, t, r) {
        return null == t ? c(e, r) : c(e, r) + (t || "") + function(e) {
            return `</${e}>`
        }(e)
    }
    function u(e, t) {
        return e.map((e=>{
            if ("script" === e.type) {
                const t = e.data
                  , {textContent: r} = t
                  , n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, i = {}, o = Object.keys(e);
                    for (n = 0; n < o.length; n++)
                        r = o[n],
                        t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(t, a);
                return p("script", r || "", n)
            }
            if ("iife" === e.type) {
                const {fn: n, getParams: i} = e.data;
                return p("script", (r = function(e, t) {
                    const r = t.map((e=>"function" == typeof e ? e.toString() : JSON.stringify(null != e ? e : null))).join(",");
                    return `(${e.toString()})(${r})`
                }(n, (null == i ? void 0 : i(t)) || []),
                r.replace(/<(\/script>)/g, "\\x3c$2")))
            }
            var r;
            return ""
        }
        ))
    }
    function f(e, {before: t, after: r}) {
        return function(...n) {
            const i = {
                args: n,
                thisObj: this
            };
            try {
                t && t(i)
            } catch (e) {}
            i.result = e.apply(i.thisObj, i.args);
            try {
                r && r(i)
            } catch (e) {}
            return i.result
        }
    }
    function h(e, t, r) {
        const n = document.createElement(e);
        return t && Object.entries(t).forEach((([e,t])=>{
            n[e] = t
        }
        )),
        r && Object.entries(r).forEach((([e,t])=>{
            n.setAttribute(e, t)
        }
        )),
        n
    }
    Math.random().toString(36).slice(2, 8);
    const d = function(e) {
        const t = {};
        return function(...r) {
            const n = `${r[0]}`;
            let i = t[n];
            return i || (i = {
                value: e(...r)
            },
            t[n] = i),
            i.value
        }
    }((e=>{
        document.head.append(h("link", {
            rel: "preload",
            as: "script",
            href: e
        }))
    }
    ));
    async function g(e, t) {
        if (!e.loaded && ("script" === e.type && (e.loaded = new Promise(((t,r)=>{
            var n;
            document.head.append(h("script", s({}, e.data, {
                onload: t,
                onerror: r
            }))),
            null != (n = e.data) && n.src || t(void 0)
        }
        )).then((()=>{
            e.loaded = !0
        }
        ))),
        "iife" === e.type)) {
            const {fn: r, getParams: n} = e.data;
            r(...(null == n ? void 0 : n(t)) || []),
            e.loaded = !0
        }
        await e.loaded
    }
    async function m(e, t) {
        const r = e.filter((e=>{
            var t;
            return "script" === e.type && (null == (t = e.data) ? void 0 : t.src)
        }
        ));
        r.length > 1 && r.forEach((e=>d(e.data.src))),
        t = s({
            getMarkmap: ()=>window.markmap
        }, t);
        for (const r of e)
            await g(r, t)
    }
    const b = [].map((e=>({
        type: "script",
        data: {
            src: e
        }
    })));
    var v = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        AMP: "&",
        amp: "&",
        And: "⩓",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        ap: "≈",
        apacir: "⩯",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        Barwed: "⌆",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        Because: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxDL: "╗",
        boxDl: "╖",
        boxdL: "╕",
        boxdl: "┐",
        boxDR: "╔",
        boxDr: "╓",
        boxdR: "╒",
        boxdr: "┌",
        boxH: "═",
        boxh: "─",
        boxHD: "╦",
        boxHd: "╤",
        boxhD: "╥",
        boxhd: "┬",
        boxHU: "╩",
        boxHu: "╧",
        boxhU: "╨",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxUL: "╝",
        boxUl: "╜",
        boxuL: "╛",
        boxul: "┘",
        boxUR: "╚",
        boxUr: "╙",
        boxuR: "╘",
        boxur: "└",
        boxV: "║",
        boxv: "│",
        boxVH: "╬",
        boxVh: "╫",
        boxvH: "╪",
        boxvh: "┼",
        boxVL: "╣",
        boxVl: "╢",
        boxvL: "╡",
        boxvl: "┤",
        boxVR: "╠",
        boxVr: "╟",
        boxvR: "╞",
        boxvr: "├",
        bprime: "‵",
        Breve: "˘",
        breve: "˘",
        brvbar: "¦",
        Bscr: "ℬ",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        Cap: "⋒",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        CenterDot: "·",
        centerdot: "·",
        Cfr: "ℭ",
        cfr: "𝔠",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        cir: "○",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        Colon: "∷",
        colon: ":",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        Conint: "∯",
        conint: "∮",
        ContourIntegral: "∮",
        Copf: "ℂ",
        copf: "𝕔",
        coprod: "∐",
        Coproduct: "∐",
        COPY: "©",
        copy: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        Cross: "⨯",
        cross: "✗",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        Cup: "⋓",
        cup: "∪",
        cupbrcap: "⩈",
        CupCap: "≍",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        Dagger: "‡",
        dagger: "†",
        daleth: "ℸ",
        Darr: "↡",
        dArr: "⇓",
        darr: "↓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        DD: "ⅅ",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        Diamond: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        Downarrow: "⇓",
        downarrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        ecir: "≖",
        Ecirc: "Ê",
        ecirc: "ê",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        eDot: "≑",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp: " ",
        emsp13: " ",
        emsp14: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        Escr: "ℰ",
        escr: "ℯ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        ExponentialE: "ⅇ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        ForAll: "∀",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        Fscr: "ℱ",
        fscr: "𝒻",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        gE: "≧",
        ge: "≥",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        Gg: "⋙",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gl: "≷",
        gla: "⪥",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gnE: "≩",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        GT: ">",
        Gt: "≫",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        hArr: "⇔",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        Hfr: "ℌ",
        hfr: "𝔥",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        Hopf: "ℍ",
        hopf: "𝕙",
        horbar: "―",
        HorizontalLine: "─",
        Hscr: "ℋ",
        hscr: "𝒽",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        Ifr: "ℑ",
        ifr: "𝔦",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Im: "ℑ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        Int: "∬",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        Iscr: "ℐ",
        iscr: "𝒾",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        Lang: "⟪",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        Larr: "↞",
        lArr: "⇐",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        lAtail: "⤛",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lBarr: "⤎",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        lE: "≦",
        le: "≤",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        Leftarrow: "⇐",
        leftarrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        Ll: "⋘",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lnE: "≨",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftarrow: "⟵",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        Lscr: "ℒ",
        lscr: "𝓁",
        Lsh: "↰",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        LT: "<",
        Lt: "≪",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        Mscr: "ℳ",
        mscr: "𝓂",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        nearhk: "⤤",
        neArr: "⇗",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlArr: "⇍",
        nlarr: "↚",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nLeftarrow: "⇍",
        nleftarrow: "↚",
        nLeftrightarrow: "⇎",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        nopf: "𝕟",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nRightarrow: "⇏",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nVDash: "⊯",
        nVdash: "⊮",
        nvDash: "⊭",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwArr: "⇖",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "⊚",
        Ocirc: "Ô",
        ocirc: "ô",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        Or: "⩔",
        or: "∨",
        orarr: "↻",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        Otimes: "⨷",
        otimes: "⊗",
        otimesas: "⨶",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        par: "∥",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        Popf: "ℙ",
        popf: "𝕡",
        pound: "£",
        Pr: "⪻",
        pr: "≺",
        prap: "⪷",
        prcue: "≼",
        prE: "⪳",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        Prime: "″",
        prime: "′",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportion: "∷",
        Proportional: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        Qopf: "ℚ",
        qopf: "𝕢",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        QUOT: '"',
        quot: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        Rang: "⟫",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        Rarr: "↠",
        rArr: "⇒",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        rAtail: "⤜",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        RBarr: "⤐",
        rBarr: "⤏",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        Re: "ℜ",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        REG: "®",
        reg: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        Rfr: "ℜ",
        rfr: "𝔯",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        Rightarrow: "⇒",
        rightarrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        Ropf: "ℝ",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        Rscr: "ℛ",
        rscr: "𝓇",
        Rsh: "↱",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        Sc: "⪼",
        sc: "≻",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        sccue: "≽",
        scE: "⪴",
        sce: "⪰",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        searhk: "⤥",
        seArr: "⇘",
        searr: "↘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        Square: "□",
        square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        Sub: "⋐",
        sub: "⊂",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        Subset: "⋐",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        Sum: "∑",
        sum: "∑",
        sung: "♪",
        Sup: "⋑",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        Supset: "⋑",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swArr: "⇙",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        Therefore: "∴",
        therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        thinsp: " ",
        ThinSpace: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        Tilde: "∼",
        tilde: "˜",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        TRADE: "™",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        Uarr: "↟",
        uArr: "⇑",
        uarr: "↑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrow: "↑",
        Uparrow: "⇑",
        uparrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        updownarrow: "↕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        upsi: "υ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        vArr: "⇕",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        Vbar: "⫫",
        vBar: "⫨",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        VDash: "⊫",
        Vdash: "⊩",
        vDash: "⊨",
        vdash: "⊢",
        Vdashl: "⫦",
        Vee: "⋁",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        Verbar: "‖",
        verbar: "|",
        Vert: "‖",
        vert: "|",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        Wedge: "⋀",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        Xi: "Ξ",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        Yuml: "Ÿ",
        yuml: "ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        Zfr: "ℨ",
        zfr: "𝔷",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        Zopf: "ℤ",
        zopf: "𝕫",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    }
      , k = Object.prototype.hasOwnProperty;
    function y(e) {
        return r = e,
        (t = v) && k.call(t, r) ? v[e] : e;
        var t, r
    }
    var A = Object.prototype.hasOwnProperty;
    function w(e) {
        var t = [].slice.call(arguments, 1);
        return t.forEach((function(t) {
            if (t) {
                if ("object" != typeof t)
                    throw new TypeError(t + "must be object");
                Object.keys(t).forEach((function(r) {
                    e[r] = t[r]
                }
                ))
            }
        }
        )),
        e
    }
    var x = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    function _(e) {
        return e.indexOf("\\") < 0 ? e : e.replace(x, "$1")
    }
    function C(e) {
        return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 != (65535 & e) && 65534 != (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
    }
    function q(e) {
        if (e > 65535) {
            var t = 55296 + ((e -= 65536) >> 10)
              , r = 56320 + (1023 & e);
            return String.fromCharCode(t, r)
        }
        return String.fromCharCode(e)
    }
    var S = /&([a-z#][a-z0-9]{1,31});/gi
      , E = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    function M(e, t) {
        var r = 0
          , n = y(t);
        return t !== n ? n : 35 === t.charCodeAt(0) && E.test(t) && C(r = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10)) ? q(r) : e
    }
    function L(e) {
        return e.indexOf("&") < 0 ? e : e.replace(S, M)
    }
    var T = /[&<>"]/
      , I = /[&<>"]/g
      , O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    };
    function N(e) {
        return O[e]
    }
    function j(e) {
        return T.test(e) ? e.replace(I, N) : e
    }
    var D = {};
    function R(e, t) {
        return ++t >= e.length - 2 ? t : "paragraph_open" === e[t].type && e[t].tight && "inline" === e[t + 1].type && 0 === e[t + 1].content.length && "paragraph_close" === e[t + 2].type && e[t + 2].tight ? R(e, t + 2) : t
    }
    D.blockquote_open = function() {
        return "<blockquote>\n"
    }
    ,
    D.blockquote_close = function(e, t) {
        return "</blockquote>" + U(e, t)
    }
    ,
    D.code = function(e, t) {
        return e[t].block ? "<pre><code>" + j(e[t].content) + "</code></pre>" + U(e, t) : "<code>" + j(e[t].content) + "</code>"
    }
    ,
    D.fence = function(e, t, r, n, i) {
        var o, s, a, l, c = e[t], p = "", u = r.langPrefix;
        if (c.params) {
            if (s = (o = c.params.split(/\s+/g)).join(" "),
            a = i.rules.fence_custom,
            l = o[0],
            a && A.call(a, l))
                return i.rules.fence_custom[o[0]](e, t, r, n, i);
            p = ' class="' + u + j(L(_(s))) + '"'
        }
        return "<pre><code" + p + ">" + (r.highlight && r.highlight.apply(r.highlight, [c.content].concat(o)) || j(c.content)) + "</code></pre>" + U(e, t)
    }
    ,
    D.fence_custom = {},
    D.heading_open = function(e, t) {
        return "<h" + e[t].hLevel + ">"
    }
    ,
    D.heading_close = function(e, t) {
        return "</h" + e[t].hLevel + ">\n"
    }
    ,
    D.hr = function(e, t, r) {
        return (r.xhtmlOut ? "<hr />" : "<hr>") + U(e, t)
    }
    ,
    D.bullet_list_open = function() {
        return "<ul>\n"
    }
    ,
    D.bullet_list_close = function(e, t) {
        return "</ul>" + U(e, t)
    }
    ,
    D.list_item_open = function() {
        return "<li>"
    }
    ,
    D.list_item_close = function() {
        return "</li>\n"
    }
    ,
    D.ordered_list_open = function(e, t) {
        var r = e[t];
        return "<ol" + (r.order > 1 ? ' start="' + r.order + '"' : "") + ">\n"
    }
    ,
    D.ordered_list_close = function(e, t) {
        return "</ol>" + U(e, t)
    }
    ,
    D.paragraph_open = function(e, t) {
        return e[t].tight ? "" : "<p>"
    }
    ,
    D.paragraph_close = function(e, t) {
        var r = !(e[t].tight && t && "inline" === e[t - 1].type && !e[t - 1].content);
        return (e[t].tight ? "" : "</p>") + (r ? U(e, t) : "")
    }
    ,
    D.link_open = function(e, t, r) {
        var n = e[t].title ? ' title="' + j(L(e[t].title)) + '"' : ""
          , i = r.linkTarget ? ' target="' + r.linkTarget + '"' : "";
        return '<a href="' + j(e[t].href) + '"' + n + i + ">"
    }
    ,
    D.link_close = function() {
        return "</a>"
    }
    ,
    D.image = function(e, t, r) {
        var n = ' src="' + j(e[t].src) + '"'
          , i = e[t].title ? ' title="' + j(L(e[t].title)) + '"' : "";
        return "<img" + n + (' alt="' + (e[t].alt ? j(L(_(e[t].alt))) : "") + '"') + i + (r.xhtmlOut ? " /" : "") + ">"
    }
    ,
    D.table_open = function() {
        return "<table>\n"
    }
    ,
    D.table_close = function() {
        return "</table>\n"
    }
    ,
    D.thead_open = function() {
        return "<thead>\n"
    }
    ,
    D.thead_close = function() {
        return "</thead>\n"
    }
    ,
    D.tbody_open = function() {
        return "<tbody>\n"
    }
    ,
    D.tbody_close = function() {
        return "</tbody>\n"
    }
    ,
    D.tr_open = function() {
        return "<tr>"
    }
    ,
    D.tr_close = function() {
        return "</tr>\n"
    }
    ,
    D.th_open = function(e, t) {
        var r = e[t];
        return "<th" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">"
    }
    ,
    D.th_close = function() {
        return "</th>"
    }
    ,
    D.td_open = function(e, t) {
        var r = e[t];
        return "<td" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">"
    }
    ,
    D.td_close = function() {
        return "</td>"
    }
    ,
    D.strong_open = function() {
        return "<strong>"
    }
    ,
    D.strong_close = function() {
        return "</strong>"
    }
    ,
    D.em_open = function() {
        return "<em>"
    }
    ,
    D.em_close = function() {
        return "</em>"
    }
    ,
    D.del_open = function() {
        return "<del>"
    }
    ,
    D.del_close = function() {
        return "</del>"
    }
    ,
    D.ins_open = function() {
        return "<ins>"
    }
    ,
    D.ins_close = function() {
        return "</ins>"
    }
    ,
    D.mark_open = function() {
        return "<mark>"
    }
    ,
    D.mark_close = function() {
        return "</mark>"
    }
    ,
    D.sub = function(e, t) {
        return "<sub>" + j(e[t].content) + "</sub>"
    }
    ,
    D.sup = function(e, t) {
        return "<sup>" + j(e[t].content) + "</sup>"
    }
    ,
    D.hardbreak = function(e, t, r) {
        return r.xhtmlOut ? "<br />\n" : "<br>\n"
    }
    ,
    D.softbreak = function(e, t, r) {
        return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
    }
    ,
    D.text = function(e, t) {
        return j(e[t].content)
    }
    ,
    D.htmlblock = function(e, t) {
        return e[t].content
    }
    ,
    D.htmltag = function(e, t) {
        return e[t].content
    }
    ,
    D.abbr_open = function(e, t) {
        return '<abbr title="' + j(L(e[t].title)) + '">'
    }
    ,
    D.abbr_close = function() {
        return "</abbr>"
    }
    ,
    D.footnote_ref = function(e, t) {
        var r = Number(e[t].id + 1).toString()
          , n = "fnref" + r;
        return e[t].subId > 0 && (n += ":" + e[t].subId),
        '<sup class="footnote-ref"><a href="#fn' + r + '" id="' + n + '">[' + r + "]</a></sup>"
    }
    ,
    D.footnote_block_open = function(e, t, r) {
        return (r.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n'
    }
    ,
    D.footnote_block_close = function() {
        return "</ol>\n</section>\n"
    }
    ,
    D.footnote_open = function(e, t) {
        return '<li id="fn' + Number(e[t].id + 1).toString() + '"  class="footnote-item">'
    }
    ,
    D.footnote_close = function() {
        return "</li>\n"
    }
    ,
    D.footnote_anchor = function(e, t) {
        var r = "fnref" + Number(e[t].id + 1).toString();
        return e[t].subId > 0 && (r += ":" + e[t].subId),
        ' <a href="#' + r + '" class="footnote-backref">↩</a>'
    }
    ,
    D.dl_open = function() {
        return "<dl>\n"
    }
    ,
    D.dt_open = function() {
        return "<dt>"
    }
    ,
    D.dd_open = function() {
        return "<dd>"
    }
    ,
    D.dl_close = function() {
        return "</dl>\n"
    }
    ,
    D.dt_close = function() {
        return "</dt>\n"
    }
    ,
    D.dd_close = function() {
        return "</dd>\n"
    }
    ;
    var U = D.getBreak = function(e, t) {
        return (t = R(e, t)) < e.length && "list_item_close" === e[t].type ? "" : "\n"
    }
    ;
    function F() {
        this.rules = w({}, D),
        this.getBreak = D.getBreak
    }
    function z() {
        this.__rules__ = [],
        this.__cache__ = null
    }
    function P(e, t, r, n, i) {
        this.src = e,
        this.env = n,
        this.options = r,
        this.parser = t,
        this.tokens = i,
        this.pos = 0,
        this.posMax = this.src.length,
        this.level = 0,
        this.pending = "",
        this.pendingLevel = 0,
        this.cache = [],
        this.isInLabel = !1,
        this.linkLevel = 0,
        this.linkContent = "",
        this.labelUnmatchedScopes = 0
    }
    function B(e, t) {
        var r, n, i, o = -1, s = e.posMax, a = e.pos, l = e.isInLabel;
        if (e.isInLabel)
            return -1;
        if (e.labelUnmatchedScopes)
            return e.labelUnmatchedScopes--,
            -1;
        for (e.pos = t + 1,
        e.isInLabel = !0,
        r = 1; e.pos < s; ) {
            if (91 === (i = e.src.charCodeAt(e.pos)))
                r++;
            else if (93 === i && 0 === --r) {
                n = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return n ? (o = e.pos,
        e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = r - 1,
        e.pos = a,
        e.isInLabel = l,
        o
    }
    function V(e, t, r, n) {
        var i, o, s, a, l, c;
        if (42 !== e.charCodeAt(0))
            return -1;
        if (91 !== e.charCodeAt(1))
            return -1;
        if (-1 === e.indexOf("]:"))
            return -1;
        if ((o = B(i = new P(e,t,r,n,[]), 1)) < 0 || 58 !== e.charCodeAt(o + 1))
            return -1;
        for (a = i.posMax,
        s = o + 2; s < a && 10 !== i.src.charCodeAt(s); s++)
            ;
        return l = e.slice(2, o),
        0 === (c = e.slice(o + 2, s).trim()).length ? -1 : (n.abbreviations || (n.abbreviations = {}),
        void 0 === n.abbreviations[":" + l] && (n.abbreviations[":" + l] = c),
        s)
    }
    function $(e) {
        var t = L(e);
        try {
            t = decodeURI(t)
        } catch (e) {}
        return encodeURI(t)
    }
    function G(e, t) {
        var r, n, i, o = t, s = e.posMax;
        if (60 === e.src.charCodeAt(t)) {
            for (t++; t < s; ) {
                if (10 === (r = e.src.charCodeAt(t)))
                    return !1;
                if (62 === r)
                    return i = $(_(e.src.slice(o + 1, t))),
                    !!e.parser.validateLink(i) && (e.pos = t + 1,
                    e.linkContent = i,
                    !0);
                92 === r && t + 1 < s ? t += 2 : t++
            }
            return !1
        }
        for (n = 0; t < s && 32 !== (r = e.src.charCodeAt(t)) && !(r < 32 || 127 === r); )
            if (92 === r && t + 1 < s)
                t += 2;
            else {
                if (40 === r && ++n > 1)
                    break;
                if (41 === r && --n < 0)
                    break;
                t++
            }
        return o !== t && (i = _(e.src.slice(o, t)),
        !!e.parser.validateLink(i) && (e.linkContent = i,
        e.pos = t,
        !0))
    }
    function H(e, t) {
        var r, n = t, i = e.posMax, o = e.src.charCodeAt(t);
        if (34 !== o && 39 !== o && 40 !== o)
            return !1;
        for (t++,
        40 === o && (o = 41); t < i; ) {
            if ((r = e.src.charCodeAt(t)) === o)
                return e.pos = t + 1,
                e.linkContent = _(e.src.slice(n + 1, t)),
                !0;
            92 === r && t + 1 < i ? t += 2 : t++
        }
        return !1
    }
    function Z(e) {
        return e.trim().replace(/\s+/g, " ").toUpperCase()
    }
    function Y(e, t, r, n) {
        var i, o, s, a, l, c, p, u, f;
        if (91 !== e.charCodeAt(0))
            return -1;
        if (-1 === e.indexOf("]:"))
            return -1;
        if ((o = B(i = new P(e,t,r,n,[]), 0)) < 0 || 58 !== e.charCodeAt(o + 1))
            return -1;
        for (a = i.posMax,
        s = o + 2; s < a && (32 === (l = i.src.charCodeAt(s)) || 10 === l); s++)
            ;
        if (!G(i, s))
            return -1;
        for (p = i.linkContent,
        c = s = i.pos,
        s += 1; s < a && (32 === (l = i.src.charCodeAt(s)) || 10 === l); s++)
            ;
        for (s < a && c !== s && H(i, s) ? (u = i.linkContent,
        s = i.pos) : (u = "",
        s = c); s < a && 32 === i.src.charCodeAt(s); )
            s++;
        return s < a && 10 !== i.src.charCodeAt(s) ? -1 : (f = Z(e.slice(1, o)),
        void 0 === n.references[f] && (n.references[f] = {
            title: u,
            href: p
        }),
        s)
    }
    F.prototype.renderInline = function(e, t, r) {
        for (var n = this.rules, i = e.length, o = 0, s = ""; i--; )
            s += n[e[o].type](e, o++, t, r, this);
        return s
    }
    ,
    F.prototype.render = function(e, t, r) {
        for (var n = this.rules, i = e.length, o = -1, s = ""; ++o < i; )
            "inline" === e[o].type ? s += this.renderInline(e[o].children, t, r) : s += n[e[o].type](e, o, t, r, this);
        return s
    }
    ,
    z.prototype.__find__ = function(e) {
        for (var t = this.__rules__.length, r = -1; t--; )
            if (this.__rules__[++r].name === e)
                return r;
        return -1
    }
    ,
    z.prototype.__compile__ = function() {
        var e = this
          , t = [""];
        e.__rules__.forEach((function(e) {
            e.enabled && e.alt.forEach((function(e) {
                t.indexOf(e) < 0 && t.push(e)
            }
            ))
        }
        )),
        e.__cache__ = {},
        t.forEach((function(t) {
            e.__cache__[t] = [],
            e.__rules__.forEach((function(r) {
                r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn))
            }
            ))
        }
        ))
    }
    ,
    z.prototype.at = function(e, t, r) {
        var n = this.__find__(e)
          , i = r || {};
        if (-1 === n)
            throw new Error("Parser rule not found: " + e);
        this.__rules__[n].fn = t,
        this.__rules__[n].alt = i.alt || [],
        this.__cache__ = null
    }
    ,
    z.prototype.before = function(e, t, r, n) {
        var i = this.__find__(e)
          , o = n || {};
        if (-1 === i)
            throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(i, 0, {
            name: t,
            enabled: !0,
            fn: r,
            alt: o.alt || []
        }),
        this.__cache__ = null
    }
    ,
    z.prototype.after = function(e, t, r, n) {
        var i = this.__find__(e)
          , o = n || {};
        if (-1 === i)
            throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(i + 1, 0, {
            name: t,
            enabled: !0,
            fn: r,
            alt: o.alt || []
        }),
        this.__cache__ = null
    }
    ,
    z.prototype.push = function(e, t, r) {
        var n = r || {};
        this.__rules__.push({
            name: e,
            enabled: !0,
            fn: t,
            alt: n.alt || []
        }),
        this.__cache__ = null
    }
    ,
    z.prototype.enable = function(e, t) {
        e = Array.isArray(e) ? e : [e],
        t && this.__rules__.forEach((function(e) {
            e.enabled = !1
        }
        )),
        e.forEach((function(e) {
            var t = this.__find__(e);
            if (t < 0)
                throw new Error("Rules manager: invalid rule name " + e);
            this.__rules__[t].enabled = !0
        }
        ), this),
        this.__cache__ = null
    }
    ,
    z.prototype.disable = function(e) {
        (e = Array.isArray(e) ? e : [e]).forEach((function(e) {
            var t = this.__find__(e);
            if (t < 0)
                throw new Error("Rules manager: invalid rule name " + e);
            this.__rules__[t].enabled = !1
        }
        ), this),
        this.__cache__ = null
    }
    ,
    z.prototype.getRules = function(e) {
        return null === this.__cache__ && this.__compile__(),
        this.__cache__[e] || []
    }
    ,
    P.prototype.pushPending = function() {
        this.tokens.push({
            type: "text",
            content: this.pending,
            level: this.pendingLevel
        }),
        this.pending = ""
    }
    ,
    P.prototype.push = function(e) {
        this.pending && this.pushPending(),
        this.tokens.push(e),
        this.pendingLevel = this.level
    }
    ,
    P.prototype.cacheSet = function(e, t) {
        for (var r = this.cache.length; r <= e; r++)
            this.cache.push(0);
        this.cache[e] = t
    }
    ,
    P.prototype.cacheGet = function(e) {
        return e < this.cache.length ? this.cache[e] : 0
    }
    ;
    var K = " \n()[]'\".,!?-";
    function J(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
    }
    var W = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
      , X = /\((c|tm|r|p)\)/gi
      , Q = {
        c: "©",
        r: "®",
        p: "§",
        tm: "™"
    };
    function ee(e) {
        return e.indexOf("(") < 0 ? e : e.replace(X, (function(e, t) {
            return Q[t.toLowerCase()]
        }
        ))
    }
    var te = /['"]/
      , re = /['"]/g
      , ne = /[-\s()\[\]]/;
    function ie(e, t) {
        return !(t < 0 || t >= e.length) && !ne.test(e[t])
    }
    function oe(e, t, r) {
        return e.substr(0, t) + r + e.substr(t + 1)
    }
    var se = [["block", function(e) {
        e.inlineMode ? e.tokens.push({
            type: "inline",
            content: e.src.replace(/\n/g, " ").trim(),
            level: 0,
            lines: [0, 1],
            children: []
        }) : e.block.parse(e.src, e.options, e.env, e.tokens)
    }
    ], ["abbr", function(e) {
        var t, r, n, i, o = e.tokens;
        if (!e.inlineMode)
            for (t = 1,
            r = o.length - 1; t < r; t++)
                if ("paragraph_open" === o[t - 1].type && "inline" === o[t].type && "paragraph_close" === o[t + 1].type) {
                    for (n = o[t].content; n.length && !((i = V(n, e.inline, e.options, e.env)) < 0); )
                        n = n.slice(i).trim();
                    o[t].content = n,
                    n.length || (o[t - 1].tight = !0,
                    o[t + 1].tight = !0)
                }
    }
    ], ["references", function(e) {
        var t, r, n, i, o = e.tokens;
        if (e.env.references = e.env.references || {},
        !e.inlineMode)
            for (t = 1,
            r = o.length - 1; t < r; t++)
                if ("inline" === o[t].type && "paragraph_open" === o[t - 1].type && "paragraph_close" === o[t + 1].type) {
                    for (n = o[t].content; n.length && !((i = Y(n, e.inline, e.options, e.env)) < 0); )
                        n = n.slice(i).trim();
                    o[t].content = n,
                    n.length || (o[t - 1].tight = !0,
                    o[t + 1].tight = !0)
                }
    }
    ], ["inline", function(e) {
        var t, r, n, i = e.tokens;
        for (r = 0,
        n = i.length; r < n; r++)
            "inline" === (t = i[r]).type && e.inline.parse(t.content, e.options, e.env, t.children)
    }
    ], ["footnote_tail", function(e) {
        var t, r, n, i, o, s, a, l, c, p = 0, u = !1, f = {};
        if (e.env.footnotes && (e.tokens = e.tokens.filter((function(e) {
            return "footnote_reference_open" === e.type ? (u = !0,
            l = [],
            c = e.label,
            !1) : "footnote_reference_close" === e.type ? (u = !1,
            f[":" + c] = l,
            !1) : (u && l.push(e),
            !u)
        }
        )),
        e.env.footnotes.list)) {
            for (s = e.env.footnotes.list,
            e.tokens.push({
                type: "footnote_block_open",
                level: p++
            }),
            t = 0,
            r = s.length; t < r; t++) {
                for (e.tokens.push({
                    type: "footnote_open",
                    id: t,
                    level: p++
                }),
                s[t].tokens ? ((a = []).push({
                    type: "paragraph_open",
                    tight: !1,
                    level: p++
                }),
                a.push({
                    type: "inline",
                    content: "",
                    level: p,
                    children: s[t].tokens
                }),
                a.push({
                    type: "paragraph_close",
                    tight: !1,
                    level: --p
                })) : s[t].label && (a = f[":" + s[t].label]),
                e.tokens = e.tokens.concat(a),
                o = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null,
                i = s[t].count > 0 ? s[t].count : 1,
                n = 0; n < i; n++)
                    e.tokens.push({
                        type: "footnote_anchor",
                        id: t,
                        subId: n,
                        level: p
                    });
                o && e.tokens.push(o),
                e.tokens.push({
                    type: "footnote_close",
                    level: --p
                })
            }
            e.tokens.push({
                type: "footnote_block_close",
                level: --p
            })
        }
    }
    ], ["abbr2", function(e) {
        var t, r, n, i, o, s, a, l, c, p, u, f, h = e.tokens;
        if (e.env.abbreviations)
            for (e.env.abbrRegExp || (f = "(^|[" + K.split("").map(J).join("") + "])(" + Object.keys(e.env.abbreviations).map((function(e) {
                return e.substr(1)
            }
            )).sort((function(e, t) {
                return t.length - e.length
            }
            )).map(J).join("|") + ")($|[" + K.split("").map(J).join("") + "])",
            e.env.abbrRegExp = new RegExp(f,"g")),
            p = e.env.abbrRegExp,
            r = 0,
            n = h.length; r < n; r++)
                if ("inline" === h[r].type)
                    for (t = (i = h[r].children).length - 1; t >= 0; t--)
                        if ("text" === (o = i[t]).type) {
                            for (l = 0,
                            s = o.content,
                            p.lastIndex = 0,
                            c = o.level,
                            a = []; u = p.exec(s); )
                                p.lastIndex > l && a.push({
                                    type: "text",
                                    content: s.slice(l, u.index + u[1].length),
                                    level: c
                                }),
                                a.push({
                                    type: "abbr_open",
                                    title: e.env.abbreviations[":" + u[2]],
                                    level: c++
                                }),
                                a.push({
                                    type: "text",
                                    content: u[2],
                                    level: c
                                }),
                                a.push({
                                    type: "abbr_close",
                                    level: --c
                                }),
                                l = p.lastIndex - u[3].length;
                            a.length && (l < s.length && a.push({
                                type: "text",
                                content: s.slice(l),
                                level: c
                            }),
                            h[r].children = i = [].concat(i.slice(0, t), a, i.slice(t + 1)))
                        }
    }
    ], ["replacements", function(e) {
        var t, r, n, i, o;
        if (e.options.typographer)
            for (o = e.tokens.length - 1; o >= 0; o--)
                if ("inline" === e.tokens[o].type)
                    for (t = (i = e.tokens[o].children).length - 1; t >= 0; t--)
                        "text" === (r = i[t]).type && (n = ee(n = r.content),
                        W.test(n) && (n = n.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")),
                        r.content = n)
    }
    ], ["smartquotes", function(e) {
        var t, r, n, i, o, s, a, l, c, p, u, f, h, d, g, m, b;
        if (e.options.typographer)
            for (b = [],
            g = e.tokens.length - 1; g >= 0; g--)
                if ("inline" === e.tokens[g].type)
                    for (m = e.tokens[g].children,
                    b.length = 0,
                    t = 0; t < m.length; t++)
                        if ("text" === (r = m[t]).type && !te.test(r.text)) {
                            for (a = m[t].level,
                            h = b.length - 1; h >= 0 && !(b[h].level <= a); h--)
                                ;
                            b.length = h + 1,
                            o = 0,
                            s = (n = r.content).length;
                            e: for (; o < s && (re.lastIndex = o,
                            i = re.exec(n)); )
                                if (l = !ie(n, i.index - 1),
                                o = i.index + 1,
                                d = "'" === i[0],
                                (c = !ie(n, o)) || l) {
                                    if (u = !c,
                                    f = !l)
                                        for (h = b.length - 1; h >= 0 && (p = b[h],
                                        !(b[h].level < a)); h--)
                                            if (p.single === d && b[h].level === a) {
                                                p = b[h],
                                                d ? (m[p.token].content = oe(m[p.token].content, p.pos, e.options.quotes[2]),
                                                r.content = oe(r.content, i.index, e.options.quotes[3])) : (m[p.token].content = oe(m[p.token].content, p.pos, e.options.quotes[0]),
                                                r.content = oe(r.content, i.index, e.options.quotes[1])),
                                                b.length = h;
                                                continue e
                                            }
                                    u ? b.push({
                                        token: t,
                                        pos: i.index,
                                        single: d,
                                        level: a
                                    }) : f && d && (r.content = oe(r.content, i.index, "’"))
                                } else
                                    d && (r.content = oe(r.content, i.index, "’"))
                        }
    }
    ]];
    function ae() {
        this.options = {},
        this.ruler = new z;
        for (var e = 0; e < se.length; e++)
            this.ruler.push(se[e][0], se[e][1])
    }
    function le(e, t, r, n, i) {
        var o, s, a, l, c, p, u;
        for (this.src = e,
        this.parser = t,
        this.options = r,
        this.env = n,
        this.tokens = i,
        this.bMarks = [],
        this.eMarks = [],
        this.tShift = [],
        this.blkIndent = 0,
        this.line = 0,
        this.lineMax = 0,
        this.tight = !1,
        this.parentType = "root",
        this.ddIndent = -1,
        this.level = 0,
        this.result = "",
        p = 0,
        u = !1,
        a = l = p = 0,
        c = (s = this.src).length; l < c; l++) {
            if (o = s.charCodeAt(l),
            !u) {
                if (32 === o) {
                    p++;
                    continue
                }
                u = !0
            }
            10 !== o && l !== c - 1 || (10 !== o && l++,
            this.bMarks.push(a),
            this.eMarks.push(l),
            this.tShift.push(p),
            u = !1,
            p = 0,
            a = l + 1)
        }
        this.bMarks.push(s.length),
        this.eMarks.push(s.length),
        this.tShift.push(0),
        this.lineMax = this.bMarks.length - 1
    }
    function ce(e, t) {
        var r, n, i;
        return (n = e.bMarks[t] + e.tShift[t]) >= (i = e.eMarks[t]) || 42 !== (r = e.src.charCodeAt(n++)) && 45 !== r && 43 !== r || n < i && 32 !== e.src.charCodeAt(n) ? -1 : n
    }
    function pe(e, t) {
        var r, n = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
        if (n + 1 >= i)
            return -1;
        if ((r = e.src.charCodeAt(n++)) < 48 || r > 57)
            return -1;
        for (; ; ) {
            if (n >= i)
                return -1;
            if (!((r = e.src.charCodeAt(n++)) >= 48 && r <= 57)) {
                if (41 === r || 46 === r)
                    break;
                return -1
            }
        }
        return n < i && 32 !== e.src.charCodeAt(n) ? -1 : n
    }
    ae.prototype.process = function(e) {
        var t, r, n;
        for (t = 0,
        r = (n = this.ruler.getRules("")).length; t < r; t++)
            n[t](e)
    }
    ,
    le.prototype.isEmpty = function(e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
    }
    ,
    le.prototype.skipEmptyLines = function(e) {
        for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
            ;
        return e
    }
    ,
    le.prototype.skipSpaces = function(e) {
        for (var t = this.src.length; e < t && 32 === this.src.charCodeAt(e); e++)
            ;
        return e
    }
    ,
    le.prototype.skipChars = function(e, t) {
        for (var r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++)
            ;
        return e
    }
    ,
    le.prototype.skipCharsBack = function(e, t, r) {
        if (e <= r)
            return e;
        for (; e > r; )
            if (t !== this.src.charCodeAt(--e))
                return e + 1;
        return e
    }
    ,
    le.prototype.getLines = function(e, t, r, n) {
        var i, o, s, a, l, c = e;
        if (e >= t)
            return "";
        if (c + 1 === t)
            return o = this.bMarks[c] + Math.min(this.tShift[c], r),
            s = n ? this.eMarks[c] + 1 : this.eMarks[c],
            this.src.slice(o, s);
        for (a = new Array(t - e),
        i = 0; c < t; c++,
        i++)
            (l = this.tShift[c]) > r && (l = r),
            l < 0 && (l = 0),
            o = this.bMarks[c] + l,
            s = c + 1 < t || n ? this.eMarks[c] + 1 : this.eMarks[c],
            a[i] = this.src.slice(o, s);
        return a.join("")
    }
    ;
    var ue = {};
    ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach((function(e) {
        ue[e] = !0
    }
    ));
    var fe = /^<([a-zA-Z]{1,15})[\s\/>]/
      , he = /^<\/([a-zA-Z]{1,15})[\s>]/;
    function de(e, t) {
        var r = e.bMarks[t] + e.blkIndent
          , n = e.eMarks[t];
        return e.src.substr(r, n - r)
    }
    function ge(e, t) {
        var r, n, i = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
        return i >= o || 126 !== (n = e.src.charCodeAt(i++)) && 58 !== n || i === (r = e.skipSpaces(i)) || r >= o ? -1 : r
    }
    var me = [["code", function(e, t, r) {
        var n, i;
        if (e.tShift[t] - e.blkIndent < 4)
            return !1;
        for (i = n = t + 1; n < r; )
            if (e.isEmpty(n))
                n++;
            else {
                if (!(e.tShift[n] - e.blkIndent >= 4))
                    break;
                i = ++n
            }
        return e.line = n,
        e.tokens.push({
            type: "code",
            content: e.getLines(t, i, 4 + e.blkIndent, !0),
            block: !0,
            lines: [t, e.line],
            level: e.level
        }),
        !0
    }
    ], ["fences", function(e, t, r, n) {
        var i, o, s, a, l, c = !1, p = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
        if (p + 3 > u)
            return !1;
        if (126 !== (i = e.src.charCodeAt(p)) && 96 !== i)
            return !1;
        if (l = p,
        (o = (p = e.skipChars(p, i)) - l) < 3)
            return !1;
        if ((s = e.src.slice(p, u).trim()).indexOf("`") >= 0)
            return !1;
        if (n)
            return !0;
        for (a = t; !(++a >= r) && !((p = l = e.bMarks[a] + e.tShift[a]) < (u = e.eMarks[a]) && e.tShift[a] < e.blkIndent); )
            if (e.src.charCodeAt(p) === i && !(e.tShift[a] - e.blkIndent >= 4 || (p = e.skipChars(p, i)) - l < o || (p = e.skipSpaces(p)) < u)) {
                c = !0;
                break
            }
        return o = e.tShift[t],
        e.line = a + (c ? 1 : 0),
        e.tokens.push({
            type: "fence",
            params: s,
            content: e.getLines(t + 1, a, o, !0),
            lines: [t, e.line],
            level: e.level
        }),
        !0
    }
    , ["paragraph", "blockquote", "list"]], ["blockquote", function(e, t, r, n) {
        var i, o, s, a, l, c, p, u, f, h, d, g = e.bMarks[t] + e.tShift[t], m = e.eMarks[t];
        if (g > m)
            return !1;
        if (62 !== e.src.charCodeAt(g++))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        if (n)
            return !0;
        for (32 === e.src.charCodeAt(g) && g++,
        l = e.blkIndent,
        e.blkIndent = 0,
        a = [e.bMarks[t]],
        e.bMarks[t] = g,
        o = (g = g < m ? e.skipSpaces(g) : g) >= m,
        s = [e.tShift[t]],
        e.tShift[t] = g - e.bMarks[t],
        u = e.parser.ruler.getRules("blockquote"),
        i = t + 1; i < r && !((g = e.bMarks[i] + e.tShift[i]) >= (m = e.eMarks[i])); i++)
            if (62 !== e.src.charCodeAt(g++)) {
                if (o)
                    break;
                for (d = !1,
                f = 0,
                h = u.length; f < h; f++)
                    if (u[f](e, i, r, !0)) {
                        d = !0;
                        break
                    }
                if (d)
                    break;
                a.push(e.bMarks[i]),
                s.push(e.tShift[i]),
                e.tShift[i] = -1337
            } else
                32 === e.src.charCodeAt(g) && g++,
                a.push(e.bMarks[i]),
                e.bMarks[i] = g,
                o = (g = g < m ? e.skipSpaces(g) : g) >= m,
                s.push(e.tShift[i]),
                e.tShift[i] = g - e.bMarks[i];
        for (c = e.parentType,
        e.parentType = "blockquote",
        e.tokens.push({
            type: "blockquote_open",
            lines: p = [t, 0],
            level: e.level++
        }),
        e.parser.tokenize(e, t, i),
        e.tokens.push({
            type: "blockquote_close",
            level: --e.level
        }),
        e.parentType = c,
        p[1] = e.line,
        f = 0; f < s.length; f++)
            e.bMarks[f + t] = a[f],
            e.tShift[f + t] = s[f];
        return e.blkIndent = l,
        !0
    }
    , ["paragraph", "blockquote", "list"]], ["hr", function(e, t, r, n) {
        var i, o, s, a = e.bMarks[t], l = e.eMarks[t];
        if ((a += e.tShift[t]) > l)
            return !1;
        if (42 !== (i = e.src.charCodeAt(a++)) && 45 !== i && 95 !== i)
            return !1;
        for (o = 1; a < l; ) {
            if ((s = e.src.charCodeAt(a++)) !== i && 32 !== s)
                return !1;
            s === i && o++
        }
        return !(o < 3) && (n || (e.line = t + 1,
        e.tokens.push({
            type: "hr",
            lines: [t, e.line],
            level: e.level
        })),
        !0)
    }
    , ["paragraph", "blockquote", "list"]], ["list", function(e, t, r, n) {
        var i, o, s, a, l, c, p, u, f, h, d, g, m, b, v, k, y, A, w, x, _, C = !0;
        if ((u = pe(e, t)) >= 0)
            g = !0;
        else {
            if (!((u = ce(e, t)) >= 0))
                return !1;
            g = !1
        }
        if (e.level >= e.options.maxNesting)
            return !1;
        if (d = e.src.charCodeAt(u - 1),
        n)
            return !0;
        for (b = e.tokens.length,
        g ? (p = e.bMarks[t] + e.tShift[t],
        h = Number(e.src.substr(p, u - p - 1)),
        e.tokens.push({
            type: "ordered_list_open",
            order: h,
            lines: k = [t, 0],
            level: e.level++
        })) : e.tokens.push({
            type: "bullet_list_open",
            lines: k = [t, 0],
            level: e.level++
        }),
        i = t,
        v = !1,
        A = e.parser.ruler.getRules("list"); !(!(i < r) || ((f = (m = e.skipSpaces(u)) >= e.eMarks[i] ? 1 : m - u) > 4 && (f = 1),
        f < 1 && (f = 1),
        o = u - e.bMarks[i] + f,
        e.tokens.push({
            type: "list_item_open",
            lines: y = [t, 0],
            level: e.level++
        }),
        a = e.blkIndent,
        l = e.tight,
        s = e.tShift[t],
        c = e.parentType,
        e.tShift[t] = m - e.bMarks[t],
        e.blkIndent = o,
        e.tight = !0,
        e.parentType = "list",
        e.parser.tokenize(e, t, r, !0),
        e.tight && !v || (C = !1),
        v = e.line - t > 1 && e.isEmpty(e.line - 1),
        e.blkIndent = a,
        e.tShift[t] = s,
        e.tight = l,
        e.parentType = c,
        e.tokens.push({
            type: "list_item_close",
            level: --e.level
        }),
        i = t = e.line,
        y[1] = i,
        m = e.bMarks[t],
        i >= r) || e.isEmpty(i) || e.tShift[i] < e.blkIndent); ) {
            for (_ = !1,
            w = 0,
            x = A.length; w < x; w++)
                if (A[w](e, i, r, !0)) {
                    _ = !0;
                    break
                }
            if (_)
                break;
            if (g) {
                if ((u = pe(e, i)) < 0)
                    break
            } else if ((u = ce(e, i)) < 0)
                break;
            if (d !== e.src.charCodeAt(u - 1))
                break
        }
        return e.tokens.push({
            type: g ? "ordered_list_close" : "bullet_list_close",
            level: --e.level
        }),
        k[1] = i,
        e.line = i,
        C && function(e, t) {
            var r, n, i = e.level + 2;
            for (r = t + 2,
            n = e.tokens.length - 2; r < n; r++)
                e.tokens[r].level === i && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0,
                e.tokens[r].tight = !0,
                r += 2)
        }(e, b),
        !0
    }
    , ["paragraph", "blockquote"]], ["footnote", function(e, t, r, n) {
        var i, o, s, a, l, c = e.bMarks[t] + e.tShift[t], p = e.eMarks[t];
        if (c + 4 > p)
            return !1;
        if (91 !== e.src.charCodeAt(c))
            return !1;
        if (94 !== e.src.charCodeAt(c + 1))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        for (a = c + 2; a < p; a++) {
            if (32 === e.src.charCodeAt(a))
                return !1;
            if (93 === e.src.charCodeAt(a))
                break
        }
        return a !== c + 2 && (!(a + 1 >= p || 58 !== e.src.charCodeAt(++a)) && (n || (a++,
        e.env.footnotes || (e.env.footnotes = {}),
        e.env.footnotes.refs || (e.env.footnotes.refs = {}),
        l = e.src.slice(c + 2, a - 2),
        e.env.footnotes.refs[":" + l] = -1,
        e.tokens.push({
            type: "footnote_reference_open",
            label: l,
            level: e.level++
        }),
        i = e.bMarks[t],
        o = e.tShift[t],
        s = e.parentType,
        e.tShift[t] = e.skipSpaces(a) - a,
        e.bMarks[t] = a,
        e.blkIndent += 4,
        e.parentType = "footnote",
        e.tShift[t] < e.blkIndent && (e.tShift[t] += e.blkIndent,
        e.bMarks[t] -= e.blkIndent),
        e.parser.tokenize(e, t, r, !0),
        e.parentType = s,
        e.blkIndent -= 4,
        e.tShift[t] = o,
        e.bMarks[t] = i,
        e.tokens.push({
            type: "footnote_reference_close",
            level: --e.level
        })),
        !0))
    }
    , ["paragraph"]], ["heading", function(e, t, r, n) {
        var i, o, s, a = e.bMarks[t] + e.tShift[t], l = e.eMarks[t];
        if (a >= l)
            return !1;
        if (35 !== (i = e.src.charCodeAt(a)) || a >= l)
            return !1;
        for (o = 1,
        i = e.src.charCodeAt(++a); 35 === i && a < l && o <= 6; )
            o++,
            i = e.src.charCodeAt(++a);
        return !(o > 6 || a < l && 32 !== i) && (n || (l = e.skipCharsBack(l, 32, a),
        (s = e.skipCharsBack(l, 35, a)) > a && 32 === e.src.charCodeAt(s - 1) && (l = s),
        e.line = t + 1,
        e.tokens.push({
            type: "heading_open",
            hLevel: o,
            lines: [t, e.line],
            level: e.level
        }),
        a < l && e.tokens.push({
            type: "inline",
            content: e.src.slice(a, l).trim(),
            level: e.level + 1,
            lines: [t, e.line],
            children: []
        }),
        e.tokens.push({
            type: "heading_close",
            hLevel: o,
            level: e.level
        })),
        !0)
    }
    , ["paragraph", "blockquote"]], ["lheading", function(e, t, r) {
        var n, i, o, s = t + 1;
        return !(s >= r) && (!(e.tShift[s] < e.blkIndent) && (!(e.tShift[s] - e.blkIndent > 3) && (!((i = e.bMarks[s] + e.tShift[s]) >= (o = e.eMarks[s])) && ((45 === (n = e.src.charCodeAt(i)) || 61 === n) && (i = e.skipChars(i, n),
        !((i = e.skipSpaces(i)) < o) && (i = e.bMarks[t] + e.tShift[t],
        e.line = s + 1,
        e.tokens.push({
            type: "heading_open",
            hLevel: 61 === n ? 1 : 2,
            lines: [t, e.line],
            level: e.level
        }),
        e.tokens.push({
            type: "inline",
            content: e.src.slice(i, e.eMarks[t]).trim(),
            level: e.level + 1,
            lines: [t, e.line - 1],
            children: []
        }),
        e.tokens.push({
            type: "heading_close",
            hLevel: 61 === n ? 1 : 2,
            level: e.level
        }),
        !0))))))
    }
    ], ["htmlblock", function(e, t, r, n) {
        var i, o, s, a = e.bMarks[t], l = e.eMarks[t], c = e.tShift[t];
        if (a += c,
        !e.options.html)
            return !1;
        if (c > 3 || a + 2 >= l)
            return !1;
        if (60 !== e.src.charCodeAt(a))
            return !1;
        if (33 === (i = e.src.charCodeAt(a + 1)) || 63 === i) {
            if (n)
                return !0
        } else {
            if (47 !== i && !function(e) {
                var t = 32 | e;
                return t >= 97 && t <= 122
            }(i))
                return !1;
            if (47 === i) {
                if (!(o = e.src.slice(a, l).match(he)))
                    return !1
            } else if (!(o = e.src.slice(a, l).match(fe)))
                return !1;
            if (!0 !== ue[o[1].toLowerCase()])
                return !1;
            if (n)
                return !0
        }
        for (s = t + 1; s < e.lineMax && !e.isEmpty(s); )
            s++;
        return e.line = s,
        e.tokens.push({
            type: "htmlblock",
            level: e.level,
            lines: [t, e.line],
            content: e.getLines(t, s, 0, !0)
        }),
        !0
    }
    , ["paragraph", "blockquote"]], ["table", function(e, t, r, n) {
        var i, o, s, a, l, c, p, u, f, h, d;
        if (t + 2 > r)
            return !1;
        if (l = t + 1,
        e.tShift[l] < e.blkIndent)
            return !1;
        if ((s = e.bMarks[l] + e.tShift[l]) >= e.eMarks[l])
            return !1;
        if (124 !== (i = e.src.charCodeAt(s)) && 45 !== i && 58 !== i)
            return !1;
        if (o = de(e, t + 1),
        !/^[-:| ]+$/.test(o))
            return !1;
        if ((c = o.split("|")) <= 2)
            return !1;
        for (u = [],
        a = 0; a < c.length; a++) {
            if (!(f = c[a].trim())) {
                if (0 === a || a === c.length - 1)
                    continue;
                return !1
            }
            if (!/^:?-+:?$/.test(f))
                return !1;
            58 === f.charCodeAt(f.length - 1) ? u.push(58 === f.charCodeAt(0) ? "center" : "right") : 58 === f.charCodeAt(0) ? u.push("left") : u.push("")
        }
        if (-1 === (o = de(e, t).trim()).indexOf("|"))
            return !1;
        if (c = o.replace(/^\||\|$/g, "").split("|"),
        u.length !== c.length)
            return !1;
        if (n)
            return !0;
        for (e.tokens.push({
            type: "table_open",
            lines: h = [t, 0],
            level: e.level++
        }),
        e.tokens.push({
            type: "thead_open",
            lines: [t, t + 1],
            level: e.level++
        }),
        e.tokens.push({
            type: "tr_open",
            lines: [t, t + 1],
            level: e.level++
        }),
        a = 0; a < c.length; a++)
            e.tokens.push({
                type: "th_open",
                align: u[a],
                lines: [t, t + 1],
                level: e.level++
            }),
            e.tokens.push({
                type: "inline",
                content: c[a].trim(),
                lines: [t, t + 1],
                level: e.level,
                children: []
            }),
            e.tokens.push({
                type: "th_close",
                level: --e.level
            });
        for (e.tokens.push({
            type: "tr_close",
            level: --e.level
        }),
        e.tokens.push({
            type: "thead_close",
            level: --e.level
        }),
        e.tokens.push({
            type: "tbody_open",
            lines: d = [t + 2, 0],
            level: e.level++
        }),
        l = t + 2; l < r && !(e.tShift[l] < e.blkIndent) && -1 !== (o = de(e, l).trim()).indexOf("|"); l++) {
            for (c = o.replace(/^\||\|$/g, "").split("|"),
            e.tokens.push({
                type: "tr_open",
                level: e.level++
            }),
            a = 0; a < c.length; a++)
                e.tokens.push({
                    type: "td_open",
                    align: u[a],
                    level: e.level++
                }),
                p = c[a].substring(124 === c[a].charCodeAt(0) ? 1 : 0, 124 === c[a].charCodeAt(c[a].length - 1) ? c[a].length - 1 : c[a].length).trim(),
                e.tokens.push({
                    type: "inline",
                    content: p,
                    level: e.level,
                    children: []
                }),
                e.tokens.push({
                    type: "td_close",
                    level: --e.level
                });
            e.tokens.push({
                type: "tr_close",
                level: --e.level
            })
        }
        return e.tokens.push({
            type: "tbody_close",
            level: --e.level
        }),
        e.tokens.push({
            type: "table_close",
            level: --e.level
        }),
        h[1] = d[1] = l,
        e.line = l,
        !0
    }
    , ["paragraph"]], ["deflist", function(e, t, r, n) {
        var i, o, s, a, l, c, p, u, f, h, d, g, m, b;
        if (n)
            return !(e.ddIndent < 0) && ge(e, t) >= 0;
        if (p = t + 1,
        e.isEmpty(p) && ++p > r)
            return !1;
        if (e.tShift[p] < e.blkIndent)
            return !1;
        if ((i = ge(e, p)) < 0)
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        c = e.tokens.length,
        e.tokens.push({
            type: "dl_open",
            lines: l = [t, 0],
            level: e.level++
        }),
        s = t,
        o = p;
        e: for (; ; ) {
            for (b = !0,
            m = !1,
            e.tokens.push({
                type: "dt_open",
                lines: [s, s],
                level: e.level++
            }),
            e.tokens.push({
                type: "inline",
                content: e.getLines(s, s + 1, e.blkIndent, !1).trim(),
                level: e.level + 1,
                lines: [s, s],
                children: []
            }),
            e.tokens.push({
                type: "dt_close",
                level: --e.level
            }); ; ) {
                if (e.tokens.push({
                    type: "dd_open",
                    lines: a = [p, 0],
                    level: e.level++
                }),
                g = e.tight,
                f = e.ddIndent,
                u = e.blkIndent,
                d = e.tShift[o],
                h = e.parentType,
                e.blkIndent = e.ddIndent = e.tShift[o] + 2,
                e.tShift[o] = i - e.bMarks[o],
                e.tight = !0,
                e.parentType = "deflist",
                e.parser.tokenize(e, o, r, !0),
                e.tight && !m || (b = !1),
                m = e.line - o > 1 && e.isEmpty(e.line - 1),
                e.tShift[o] = d,
                e.tight = g,
                e.parentType = h,
                e.blkIndent = u,
                e.ddIndent = f,
                e.tokens.push({
                    type: "dd_close",
                    level: --e.level
                }),
                a[1] = p = e.line,
                p >= r)
                    break e;
                if (e.tShift[p] < e.blkIndent)
                    break e;
                if ((i = ge(e, p)) < 0)
                    break;
                o = p
            }
            if (p >= r)
                break;
            if (s = p,
            e.isEmpty(s))
                break;
            if (e.tShift[s] < e.blkIndent)
                break;
            if ((o = s + 1) >= r)
                break;
            if (e.isEmpty(o) && o++,
            o >= r)
                break;
            if (e.tShift[o] < e.blkIndent)
                break;
            if ((i = ge(e, o)) < 0)
                break
        }
        return e.tokens.push({
            type: "dl_close",
            level: --e.level
        }),
        l[1] = p,
        e.line = p,
        b && function(e, t) {
            var r, n, i = e.level + 2;
            for (r = t + 2,
            n = e.tokens.length - 2; r < n; r++)
                e.tokens[r].level === i && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0,
                e.tokens[r].tight = !0,
                r += 2)
        }(e, c),
        !0
    }
    , ["paragraph"]], ["paragraph", function(e, t) {
        var r, n, i, o, s, a, l = t + 1;
        if (l < (r = e.lineMax) && !e.isEmpty(l))
            for (a = e.parser.ruler.getRules("paragraph"); l < r && !e.isEmpty(l); l++)
                if (!(e.tShift[l] - e.blkIndent > 3)) {
                    for (i = !1,
                    o = 0,
                    s = a.length; o < s; o++)
                        if (a[o](e, l, r, !0)) {
                            i = !0;
                            break
                        }
                    if (i)
                        break
                }
        return n = e.getLines(t, l, e.blkIndent, !1).trim(),
        e.line = l,
        n.length && (e.tokens.push({
            type: "paragraph_open",
            tight: !1,
            lines: [t, e.line],
            level: e.level
        }),
        e.tokens.push({
            type: "inline",
            content: n,
            level: e.level + 1,
            lines: [t, e.line],
            children: []
        }),
        e.tokens.push({
            type: "paragraph_close",
            tight: !1,
            level: e.level
        })),
        !0
    }
    ]];
    function be() {
        this.ruler = new z;
        for (var e = 0; e < me.length; e++)
            this.ruler.push(me[e][0], me[e][1], {
                alt: (me[e][2] || []).slice()
            })
    }
    be.prototype.tokenize = function(e, t, r) {
        for (var n, i = this.ruler.getRules(""), o = i.length, s = t, a = !1; s < r && (e.line = s = e.skipEmptyLines(s),
        !(s >= r)) && !(e.tShift[s] < e.blkIndent); ) {
            for (n = 0; n < o && !i[n](e, s, r, !1); n++)
                ;
            if (e.tight = !a,
            e.isEmpty(e.line - 1) && (a = !0),
            (s = e.line) < r && e.isEmpty(s)) {
                if (a = !0,
                ++s < r && "list" === e.parentType && e.isEmpty(s))
                    break;
                e.line = s
            }
        }
    }
    ;
    var ve = /[\n\t]/g
      , ke = /\r[\n\u0085]|[\u2424\u2028\u0085]/g
      , ye = /\u00a0/g;
    function Ae(e) {
        switch (e) {
        case 10:
        case 92:
        case 96:
        case 42:
        case 95:
        case 94:
        case 91:
        case 93:
        case 33:
        case 38:
        case 60:
        case 62:
        case 123:
        case 125:
        case 36:
        case 37:
        case 64:
        case 126:
        case 43:
        case 61:
        case 58:
            return !0;
        default:
            return !1
        }
    }
    be.prototype.parse = function(e, t, r, n) {
        var i, o = 0, s = 0;
        if (!e)
            return [];
        (e = (e = e.replace(ye, " ")).replace(ke, "\n")).indexOf("\t") >= 0 && (e = e.replace(ve, (function(t, r) {
            var n;
            return 10 === e.charCodeAt(r) ? (o = r + 1,
            s = 0,
            t) : (n = "    ".slice((r - o - s) % 4),
            s = r - o + 1,
            n)
        }
        ))),
        i = new le(e,this,t,r,n),
        this.tokenize(i, i.line, i.lineMax)
    }
    ;
    for (var we = [], xe = 0; xe < 256; xe++)
        we.push(0);
    function _e(e) {
        return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122
    }
    function Ce(e, t) {
        var r, n, i, o = t, s = !0, a = !0, l = e.posMax, c = e.src.charCodeAt(t);
        for (r = t > 0 ? e.src.charCodeAt(t - 1) : -1; o < l && e.src.charCodeAt(o) === c; )
            o++;
        return o >= l && (s = !1),
        (i = o - t) >= 4 ? s = a = !1 : (32 !== (n = o < l ? e.src.charCodeAt(o) : -1) && 10 !== n || (s = !1),
        32 !== r && 10 !== r || (a = !1),
        95 === c && (_e(r) && (s = !1),
        _e(n) && (a = !1))),
        {
            can_open: s,
            can_close: a,
            delims: i
        }
    }
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e) {
        we[e.charCodeAt(0)] = 1
    }
    ));
    var qe = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    var Se = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    var Ee = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"]
      , Me = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/
      , Le = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
    function Te(e, t) {
        return e = e.source,
        t = t || "",
        function r(n, i) {
            return n ? (i = i.source || i,
            e = e.replace(n, i),
            r) : new RegExp(e,t)
        }
    }
    var Ie = Te(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", /[^"'=<>`\x00-\x20]+/)("single_quoted", /'[^']*'/)("double_quoted", /"[^"]*"/)()
      , Oe = Te(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", /[a-zA-Z_:][a-zA-Z0-9:._-]*/)("attr_value", Ie)()
      , Ne = Te(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", Oe)()
      , je = Te(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", Ne)("close_tag", /<\/[A-Za-z][A-Za-z0-9]*\s*>/)("comment", /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/)("processing", /<[?].*?[?]>/)("declaration", /<![A-Z]+\s+[^>]*>/)("cdata", /<!\[CDATA\[[\s\S]*?\]\]>/)();
    var De = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i
      , Re = /^&([a-z][a-z0-9]{1,31});/i;
    var Ue = [["text", function(e, t) {
        for (var r = e.pos; r < e.posMax && !Ae(e.src.charCodeAt(r)); )
            r++;
        return r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)),
        e.pos = r,
        !0)
    }
    ], ["newline", function(e, t) {
        var r, n, i = e.pos;
        if (10 !== e.src.charCodeAt(i))
            return !1;
        if (r = e.pending.length - 1,
        n = e.posMax,
        !t)
            if (r >= 0 && 32 === e.pending.charCodeAt(r))
                if (r >= 1 && 32 === e.pending.charCodeAt(r - 1)) {
                    for (var o = r - 2; o >= 0; o--)
                        if (32 !== e.pending.charCodeAt(o)) {
                            e.pending = e.pending.substring(0, o + 1);
                            break
                        }
                    e.push({
                        type: "hardbreak",
                        level: e.level
                    })
                } else
                    e.pending = e.pending.slice(0, -1),
                    e.push({
                        type: "softbreak",
                        level: e.level
                    });
            else
                e.push({
                    type: "softbreak",
                    level: e.level
                });
        for (i++; i < n && 32 === e.src.charCodeAt(i); )
            i++;
        return e.pos = i,
        !0
    }
    ], ["escape", function(e, t) {
        var r, n = e.pos, i = e.posMax;
        if (92 !== e.src.charCodeAt(n))
            return !1;
        if (++n < i) {
            if ((r = e.src.charCodeAt(n)) < 256 && 0 !== we[r])
                return t || (e.pending += e.src[n]),
                e.pos += 2,
                !0;
            if (10 === r) {
                for (t || e.push({
                    type: "hardbreak",
                    level: e.level
                }),
                n++; n < i && 32 === e.src.charCodeAt(n); )
                    n++;
                return e.pos = n,
                !0
            }
        }
        return t || (e.pending += "\\"),
        e.pos++,
        !0
    }
    ], ["backticks", function(e, t) {
        var r, n, i, o, s, a = e.pos;
        if (96 !== e.src.charCodeAt(a))
            return !1;
        for (r = a,
        a++,
        n = e.posMax; a < n && 96 === e.src.charCodeAt(a); )
            a++;
        for (i = e.src.slice(r, a),
        o = s = a; -1 !== (o = e.src.indexOf("`", s)); ) {
            for (s = o + 1; s < n && 96 === e.src.charCodeAt(s); )
                s++;
            if (s - o === i.length)
                return t || e.push({
                    type: "code",
                    content: e.src.slice(a, o).replace(/[ \n]+/g, " ").trim(),
                    block: !1,
                    level: e.level
                }),
                e.pos = s,
                !0
        }
        return t || (e.pending += i),
        e.pos += i.length,
        !0
    }
    ], ["del", function(e, t) {
        var r, n, i, o, s, a = e.posMax, l = e.pos;
        if (126 !== e.src.charCodeAt(l))
            return !1;
        if (t)
            return !1;
        if (l + 4 >= a)
            return !1;
        if (126 !== e.src.charCodeAt(l + 1))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        if (o = l > 0 ? e.src.charCodeAt(l - 1) : -1,
        s = e.src.charCodeAt(l + 2),
        126 === o)
            return !1;
        if (126 === s)
            return !1;
        if (32 === s || 10 === s)
            return !1;
        for (n = l + 2; n < a && 126 === e.src.charCodeAt(n); )
            n++;
        if (n > l + 3)
            return e.pos += n - l,
            t || (e.pending += e.src.slice(l, n)),
            !0;
        for (e.pos = l + 2,
        i = 1; e.pos + 1 < a; ) {
            if (126 === e.src.charCodeAt(e.pos) && 126 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1),
            126 !== (s = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 126 !== o && (32 !== o && 10 !== o ? i-- : 32 !== s && 10 !== s && i++,
            i <= 0))) {
                r = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return r ? (e.posMax = e.pos,
        e.pos = l + 2,
        t || (e.push({
            type: "del_open",
            level: e.level++
        }),
        e.parser.tokenize(e),
        e.push({
            type: "del_close",
            level: --e.level
        })),
        e.pos = e.posMax + 2,
        e.posMax = a,
        !0) : (e.pos = l,
        !1)
    }
    ], ["ins", function(e, t) {
        var r, n, i, o, s, a = e.posMax, l = e.pos;
        if (43 !== e.src.charCodeAt(l))
            return !1;
        if (t)
            return !1;
        if (l + 4 >= a)
            return !1;
        if (43 !== e.src.charCodeAt(l + 1))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        if (o = l > 0 ? e.src.charCodeAt(l - 1) : -1,
        s = e.src.charCodeAt(l + 2),
        43 === o)
            return !1;
        if (43 === s)
            return !1;
        if (32 === s || 10 === s)
            return !1;
        for (n = l + 2; n < a && 43 === e.src.charCodeAt(n); )
            n++;
        if (n !== l + 2)
            return e.pos += n - l,
            t || (e.pending += e.src.slice(l, n)),
            !0;
        for (e.pos = l + 2,
        i = 1; e.pos + 1 < a; ) {
            if (43 === e.src.charCodeAt(e.pos) && 43 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1),
            43 !== (s = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 43 !== o && (32 !== o && 10 !== o ? i-- : 32 !== s && 10 !== s && i++,
            i <= 0))) {
                r = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return r ? (e.posMax = e.pos,
        e.pos = l + 2,
        t || (e.push({
            type: "ins_open",
            level: e.level++
        }),
        e.parser.tokenize(e),
        e.push({
            type: "ins_close",
            level: --e.level
        })),
        e.pos = e.posMax + 2,
        e.posMax = a,
        !0) : (e.pos = l,
        !1)
    }
    ], ["mark", function(e, t) {
        var r, n, i, o, s, a = e.posMax, l = e.pos;
        if (61 !== e.src.charCodeAt(l))
            return !1;
        if (t)
            return !1;
        if (l + 4 >= a)
            return !1;
        if (61 !== e.src.charCodeAt(l + 1))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        if (o = l > 0 ? e.src.charCodeAt(l - 1) : -1,
        s = e.src.charCodeAt(l + 2),
        61 === o)
            return !1;
        if (61 === s)
            return !1;
        if (32 === s || 10 === s)
            return !1;
        for (n = l + 2; n < a && 61 === e.src.charCodeAt(n); )
            n++;
        if (n !== l + 2)
            return e.pos += n - l,
            t || (e.pending += e.src.slice(l, n)),
            !0;
        for (e.pos = l + 2,
        i = 1; e.pos + 1 < a; ) {
            if (61 === e.src.charCodeAt(e.pos) && 61 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1),
            61 !== (s = e.pos + 2 < a ? e.src.charCodeAt(e.pos + 2) : -1) && 61 !== o && (32 !== o && 10 !== o ? i-- : 32 !== s && 10 !== s && i++,
            i <= 0))) {
                r = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return r ? (e.posMax = e.pos,
        e.pos = l + 2,
        t || (e.push({
            type: "mark_open",
            level: e.level++
        }),
        e.parser.tokenize(e),
        e.push({
            type: "mark_close",
            level: --e.level
        })),
        e.pos = e.posMax + 2,
        e.posMax = a,
        !0) : (e.pos = l,
        !1)
    }
    ], ["emphasis", function(e, t) {
        var r, n, i, o, s, a, l, c = e.posMax, p = e.pos, u = e.src.charCodeAt(p);
        if (95 !== u && 42 !== u)
            return !1;
        if (t)
            return !1;
        if (r = (l = Ce(e, p)).delims,
        !l.can_open)
            return e.pos += r,
            t || (e.pending += e.src.slice(p, e.pos)),
            !0;
        if (e.level >= e.options.maxNesting)
            return !1;
        for (e.pos = p + r,
        a = [r]; e.pos < c; )
            if (e.src.charCodeAt(e.pos) !== u)
                e.parser.skipToken(e);
            else {
                if (n = (l = Ce(e, e.pos)).delims,
                l.can_close) {
                    for (o = a.pop(),
                    s = n; o !== s; ) {
                        if (s < o) {
                            a.push(o - s);
                            break
                        }
                        if (s -= o,
                        0 === a.length)
                            break;
                        e.pos += o,
                        o = a.pop()
                    }
                    if (0 === a.length) {
                        r = o,
                        i = !0;
                        break
                    }
                    e.pos += n;
                    continue
                }
                l.can_open && a.push(n),
                e.pos += n
            }
        return i ? (e.posMax = e.pos,
        e.pos = p + r,
        t || (2 !== r && 3 !== r || e.push({
            type: "strong_open",
            level: e.level++
        }),
        1 !== r && 3 !== r || e.push({
            type: "em_open",
            level: e.level++
        }),
        e.parser.tokenize(e),
        1 !== r && 3 !== r || e.push({
            type: "em_close",
            level: --e.level
        }),
        2 !== r && 3 !== r || e.push({
            type: "strong_close",
            level: --e.level
        })),
        e.pos = e.posMax + r,
        e.posMax = c,
        !0) : (e.pos = p,
        !1)
    }
    ], ["sub", function(e, t) {
        var r, n, i = e.posMax, o = e.pos;
        if (126 !== e.src.charCodeAt(o))
            return !1;
        if (t)
            return !1;
        if (o + 2 >= i)
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        for (e.pos = o + 1; e.pos < i; ) {
            if (126 === e.src.charCodeAt(e.pos)) {
                r = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return r && o + 1 !== e.pos ? (n = e.src.slice(o + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = o,
        !1) : (e.posMax = e.pos,
        e.pos = o + 1,
        t || e.push({
            type: "sub",
            level: e.level,
            content: n.replace(qe, "$1")
        }),
        e.pos = e.posMax + 1,
        e.posMax = i,
        !0) : (e.pos = o,
        !1)
    }
    ], ["sup", function(e, t) {
        var r, n, i = e.posMax, o = e.pos;
        if (94 !== e.src.charCodeAt(o))
            return !1;
        if (t)
            return !1;
        if (o + 2 >= i)
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        for (e.pos = o + 1; e.pos < i; ) {
            if (94 === e.src.charCodeAt(e.pos)) {
                r = !0;
                break
            }
            e.parser.skipToken(e)
        }
        return r && o + 1 !== e.pos ? (n = e.src.slice(o + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = o,
        !1) : (e.posMax = e.pos,
        e.pos = o + 1,
        t || e.push({
            type: "sup",
            level: e.level,
            content: n.replace(Se, "$1")
        }),
        e.pos = e.posMax + 1,
        e.posMax = i,
        !0) : (e.pos = o,
        !1)
    }
    ], ["links", function(e, t) {
        var r, n, i, o, s, a, l, c, p = !1, u = e.pos, f = e.posMax, h = e.pos, d = e.src.charCodeAt(h);
        if (33 === d && (p = !0,
        d = e.src.charCodeAt(++h)),
        91 !== d)
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        if (r = h + 1,
        (n = B(e, h)) < 0)
            return !1;
        if ((a = n + 1) < f && 40 === e.src.charCodeAt(a)) {
            for (a++; a < f && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++)
                ;
            if (a >= f)
                return !1;
            for (h = a,
            G(e, a) ? (o = e.linkContent,
            a = e.pos) : o = "",
            h = a; a < f && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++)
                ;
            if (a < f && h !== a && H(e, a))
                for (s = e.linkContent,
                a = e.pos; a < f && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++)
                    ;
            else
                s = "";
            if (a >= f || 41 !== e.src.charCodeAt(a))
                return e.pos = u,
                !1;
            a++
        } else {
            if (e.linkLevel > 0)
                return !1;
            for (; a < f && (32 === (c = e.src.charCodeAt(a)) || 10 === c); a++)
                ;
            if (a < f && 91 === e.src.charCodeAt(a) && (h = a + 1,
            (a = B(e, a)) >= 0 ? i = e.src.slice(h, a++) : a = h - 1),
            i || (void 0 === i && (a = n + 1),
            i = e.src.slice(r, n)),
            !(l = e.env.references[Z(i)]))
                return e.pos = u,
                !1;
            o = l.href,
            s = l.title
        }
        return t || (e.pos = r,
        e.posMax = n,
        p ? e.push({
            type: "image",
            src: o,
            title: s,
            alt: e.src.substr(r, n - r),
            level: e.level
        }) : (e.push({
            type: "link_open",
            href: o,
            title: s,
            level: e.level++
        }),
        e.linkLevel++,
        e.parser.tokenize(e),
        e.linkLevel--,
        e.push({
            type: "link_close",
            level: --e.level
        }))),
        e.pos = a,
        e.posMax = f,
        !0
    }
    ], ["footnote_inline", function(e, t) {
        var r, n, i, o, s = e.posMax, a = e.pos;
        return !(a + 2 >= s) && (94 === e.src.charCodeAt(a) && (91 === e.src.charCodeAt(a + 1) && (!(e.level >= e.options.maxNesting) && (r = a + 2,
        !((n = B(e, a + 1)) < 0) && (t || (e.env.footnotes || (e.env.footnotes = {}),
        e.env.footnotes.list || (e.env.footnotes.list = []),
        i = e.env.footnotes.list.length,
        e.pos = r,
        e.posMax = n,
        e.push({
            type: "footnote_ref",
            id: i,
            level: e.level
        }),
        e.linkLevel++,
        o = e.tokens.length,
        e.parser.tokenize(e),
        e.env.footnotes.list[i] = {
            tokens: e.tokens.splice(o)
        },
        e.linkLevel--),
        e.pos = n + 1,
        e.posMax = s,
        !0)))))
    }
    ], ["footnote_ref", function(e, t) {
        var r, n, i, o, s = e.posMax, a = e.pos;
        if (a + 3 > s)
            return !1;
        if (!e.env.footnotes || !e.env.footnotes.refs)
            return !1;
        if (91 !== e.src.charCodeAt(a))
            return !1;
        if (94 !== e.src.charCodeAt(a + 1))
            return !1;
        if (e.level >= e.options.maxNesting)
            return !1;
        for (n = a + 2; n < s; n++) {
            if (32 === e.src.charCodeAt(n))
                return !1;
            if (10 === e.src.charCodeAt(n))
                return !1;
            if (93 === e.src.charCodeAt(n))
                break
        }
        return n !== a + 2 && (!(n >= s) && (n++,
        r = e.src.slice(a + 2, n - 1),
        void 0 !== e.env.footnotes.refs[":" + r] && (t || (e.env.footnotes.list || (e.env.footnotes.list = []),
        e.env.footnotes.refs[":" + r] < 0 ? (i = e.env.footnotes.list.length,
        e.env.footnotes.list[i] = {
            label: r,
            count: 0
        },
        e.env.footnotes.refs[":" + r] = i) : i = e.env.footnotes.refs[":" + r],
        o = e.env.footnotes.list[i].count,
        e.env.footnotes.list[i].count++,
        e.push({
            type: "footnote_ref",
            id: i,
            subId: o,
            level: e.level
        })),
        e.pos = n,
        e.posMax = s,
        !0)))
    }
    ], ["autolink", function(e, t) {
        var r, n, i, o, s, a = e.pos;
        return 60 === e.src.charCodeAt(a) && (!((r = e.src.slice(a)).indexOf(">") < 0) && ((n = r.match(Le)) ? !(Ee.indexOf(n[1].toLowerCase()) < 0) && (s = $(o = n[0].slice(1, -1)),
        !!e.parser.validateLink(o) && (t || (e.push({
            type: "link_open",
            href: s,
            level: e.level
        }),
        e.push({
            type: "text",
            content: o,
            level: e.level + 1
        }),
        e.push({
            type: "link_close",
            level: e.level
        })),
        e.pos += n[0].length,
        !0)) : !!(i = r.match(Me)) && (s = $("mailto:" + (o = i[0].slice(1, -1))),
        !!e.parser.validateLink(s) && (t || (e.push({
            type: "link_open",
            href: s,
            level: e.level
        }),
        e.push({
            type: "text",
            content: o,
            level: e.level + 1
        }),
        e.push({
            type: "link_close",
            level: e.level
        })),
        e.pos += i[0].length,
        !0))))
    }
    ], ["htmltag", function(e, t) {
        var r, n, i, o = e.pos;
        return !!e.options.html && (i = e.posMax,
        !(60 !== e.src.charCodeAt(o) || o + 2 >= i) && (!(33 !== (r = e.src.charCodeAt(o + 1)) && 63 !== r && 47 !== r && !function(e) {
            var t = 32 | e;
            return t >= 97 && t <= 122
        }(r)) && (!!(n = e.src.slice(o).match(je)) && (t || e.push({
            type: "htmltag",
            content: e.src.slice(o, o + n[0].length),
            level: e.level
        }),
        e.pos += n[0].length,
        !0))))
    }
    ], ["entity", function(e, t) {
        var r, n, i = e.pos, o = e.posMax;
        if (38 !== e.src.charCodeAt(i))
            return !1;
        if (i + 1 < o)
            if (35 === e.src.charCodeAt(i + 1)) {
                if (n = e.src.slice(i).match(De))
                    return t || (r = "x" === n[1][0].toLowerCase() ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10),
                    e.pending += C(r) ? q(r) : q(65533)),
                    e.pos += n[0].length,
                    !0
            } else if (n = e.src.slice(i).match(Re)) {
                var s = y(n[1]);
                if (n[1] !== s)
                    return t || (e.pending += s),
                    e.pos += n[0].length,
                    !0
            }
        return t || (e.pending += "&"),
        e.pos++,
        !0
    }
    ]];
    function Fe() {
        this.ruler = new z;
        for (var e = 0; e < Ue.length; e++)
            this.ruler.push(Ue[e][0], Ue[e][1]);
        this.validateLink = ze
    }
    function ze(e) {
        var t = e.trim().toLowerCase();
        return -1 === (t = L(t)).indexOf(":") || -1 === ["vbscript", "javascript", "file", "data"].indexOf(t.split(":")[0])
    }
    Fe.prototype.skipToken = function(e) {
        var t, r, n = this.ruler.getRules(""), i = n.length, o = e.pos;
        if ((r = e.cacheGet(o)) > 0)
            e.pos = r;
        else {
            for (t = 0; t < i; t++)
                if (n[t](e, !0))
                    return void e.cacheSet(o, e.pos);
            e.pos++,
            e.cacheSet(o, e.pos)
        }
    }
    ,
    Fe.prototype.tokenize = function(e) {
        for (var t, r, n = this.ruler.getRules(""), i = n.length, o = e.posMax; e.pos < o; ) {
            for (r = 0; r < i && !(t = n[r](e, !1)); r++)
                ;
            if (t) {
                if (e.pos >= o)
                    break
            } else
                e.pending += e.src[e.pos++]
        }
        e.pending && e.pushPending()
    }
    ,
    Fe.prototype.parse = function(e, t, r, n) {
        var i = new P(e,this,t,r,n);
        this.tokenize(i)
    }
    ;
    var Pe = {
        default: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkTarget: "",
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["block", "inline", "references", "replacements", "smartquotes", "references", "abbr2", "footnote_tail"]
                },
                block: {
                    rules: ["blockquote", "code", "fences", "footnote", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
                },
                inline: {
                    rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
                }
            }
        },
        full: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkTarget: "",
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        },
        commonmark: {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkTarget: "",
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: ["block", "inline", "references", "abbr2"]
                },
                block: {
                    rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
                },
                inline: {
                    rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
                }
            }
        }
    };
    function Be(e, t, r) {
        this.src = t,
        this.env = r,
        this.options = e.options,
        this.tokens = [],
        this.inlineMode = !1,
        this.inline = e.inline,
        this.block = e.block,
        this.renderer = e.renderer,
        this.typographer = e.typographer
    }
    function Ve(e, t) {
        "string" != typeof e && (t = e,
        e = "default"),
        t && null != t.linkify && console.warn("linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"),
        this.inline = new Fe,
        this.block = new be,
        this.core = new ae,
        this.renderer = new F,
        this.ruler = new z,
        this.options = {},
        this.configure(Pe[e]),
        this.set(t || {})
    }
    Ve.prototype.set = function(e) {
        w(this.options, e)
    }
    ,
    Ve.prototype.configure = function(e) {
        var t = this;
        if (!e)
            throw new Error("Wrong `remarkable` preset, check name/content");
        e.options && t.set(e.options),
        e.components && Object.keys(e.components).forEach((function(r) {
            e.components[r].rules && t[r].ruler.enable(e.components[r].rules, !0)
        }
        ))
    }
    ,
    Ve.prototype.use = function(e, t) {
        return e(this, t),
        this
    }
    ,
    Ve.prototype.parse = function(e, t) {
        var r = new Be(this,e,t);
        return this.core.process(r),
        r.tokens
    }
    ,
    Ve.prototype.render = function(e, t) {
        return t = t || {},
        this.renderer.render(this.parse(e, t), this.options, t)
    }
    ,
    Ve.prototype.parseInline = function(e, t) {
        var r = new Be(this,e,t);
        return r.inlineMode = !0,
        this.core.process(r),
        r.tokens
    }
    ,
    Ve.prototype.renderInline = function(e, t) {
        return t = t || {},
        this.renderer.render(this.parseInline(e, t), this.options, t)
    }
    ;
    var $e = (e,t)=>{
        const r = (t || {}).delimiter || "$";
        if (1 !== r.length)
            throw new Error("invalid delimiter");
        const i = n;
        e.inline.ruler.push("katex", ((e,t)=>{
            const n = e.pos
              , i = e.posMax;
            let o = n;
            if (e.src.charAt(o) !== r)
                return !1;
            for (++o; o < i && e.src.charAt(o) === r; )
                ++o;
            const s = e.src.slice(n, o);
            if (s.length > 2)
                return !1;
            const a = o;
            let l = 0;
            for (; o < i; ) {
                const n = e.src.charAt(o);
                if ("{" !== n || 0 != o && "\\" == e.src.charAt(o - 1)) {
                    if ("}" !== n || 0 != o && "\\" == e.src.charAt(o - 1)) {
                        if (n === r && 0 === l) {
                            const n = o;
                            let l = o + 1;
                            for (; l < i && e.src.charAt(l) === r; )
                                ++l;
                            if (l - n === s.length) {
                                if (!t) {
                                    const t = e.src.slice(a, n).replace(/[ \n]+/g, " ").trim();
                                    e.push({
                                        type: "katex",
                                        content: t,
                                        block: s.length > 1,
                                        level: e.level
                                    })
                                }
                                return e.pos = l,
                                !0
                            }
                        }
                    } else if (l -= 1,
                    l < 0)
                        return !1
                } else
                    l += 1;
                o += 1
            }
            return t || (e.pending += s),
            e.pos += s.length,
            !0
        }
        ), t),
        e.block.ruler.push("katex", ((e,t,n)=>{
            let i = !1
              , o = e.bMarks[t] + e.tShift[t]
              , s = e.eMarks[t];
            if (o + 1 > s)
                return !1;
            const a = e.src.charAt(o);
            if (a !== r)
                return !1;
            let l = o;
            o = e.skipChars(o, a);
            let c = o - l;
            if (2 !== c)
                return !1;
            let p = t;
            for (; (++p,
            !(p >= n)) && (o = l = e.bMarks[p] + e.tShift[p],
            s = e.eMarks[p],
            !(o < s && e.tShift[p] < e.blkIndent)); )
                if (e.src.charAt(o) === r && !(e.tShift[p] - e.blkIndent >= 4 || (o = e.skipChars(o, a),
                o - l < c || (o = e.skipSpaces(o),
                o < s)))) {
                    i = !0;
                    break
                }
            c = e.tShift[t],
            e.line = p + (i ? 1 : 0);
            const u = e.getLines(t + 1, p, c, !0).replace(/[ \n]+/g, " ").trim();
            return e.tokens.push({
                type: "katex",
                params: null,
                content: u,
                lines: [t, e.line],
                level: e.level,
                block: !0
            }),
            !0
        }
        ), t),
        e.renderer.rules.katex = (e,t)=>{
            return r = e[t].content,
            n = e[t].block,
            i.renderToString(r, {
                displayMode: n,
                throwOnError: !1
            });
            var r, n
        }
        ,
        e.renderer.rules.katex.delimiter = r
    }
      , Ge = {
        versions: {
            katex: "0.16.0",
            webfontloader: "1.6.28"
        },
        preloadScripts: [{
            type: "script",
            data: {
                src: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"
            }
        }],
        scripts: [{
            type: "iife",
            data: {
                fn: e=>{
                    window.WebFontConfig = {
                        custom: {
                            families: ["KaTeX_AMS", "KaTeX_Caligraphic:n4,n7", "KaTeX_Fraktur:n4,n7", "KaTeX_Main:n4,n7,i4,i7", "KaTeX_Math:i4,i7", "KaTeX_Script", "KaTeX_SansSerif:n4,n7,i4", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4", "KaTeX_Typewriter"]
                        },
                        active: ()=>{
                            e().refreshHook.call()
                        }
                    }
                }
                ,
                getParams: ({getMarkmap: e})=>[e]
            }
        }, {
            type: "script",
            data: {
                src: "https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.js",
                defer: !0
            }
        }],
        styles: [{
            type: "stylesheet",
            data: {
                href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
            }
        }]
    };
    const He = "https://cdn.jsdelivr.net/npm/";
    let Ze;
    const Ye = "katex";
    var Ke = {
        name: Ye,
        config: Ge,
        transform(e) {
            const t = (t,r)=>{
                const {katex: n} = window;
                return n ? n.renderToString(t, {
                    displayMode: r,
                    throwOnError: !1
                }) : ((Ze || (Ze = m(Ge.preloadScripts)),
                Ze).then((()=>{
                    e.retransform.call()
                }
                )),
                t)
            }
            ;
            let r = ()=>{}
            ;
            return e.parser.tap((e=>{
                e.use($e),
                e.renderer.rules.katex = (e,n)=>{
                    r();
                    return t(e[n].content, e[n].block)
                }
            }
            )),
            e.beforeParse.tap(((e,t)=>{
                r = ()=>{
                    t.features.katex = !0
                }
            }
            )),
            e.afterParse.tap(((e,t)=>{
                const {frontmatter: r} = t;
                null != r && r.markmap && ["extraJs", "extraCss"].forEach((e=>{
                    r.markmap[e] && (r.markmap[e] = function(e, t, r) {
                        return e.map((e=>("string" == typeof e && (e.startsWith(`${t}/`) ? e = `${He}${t}@${r}${e.slice(t.length)}` : e.startsWith(`${t}@`) && (e = `${He}${e}`)),
                        e)))
                    }(r.markmap[e], Ye, Ge.versions.katex))
                }
                ))
            }
            )),
            {
                styles: Ge.styles,
                scripts: Ge.scripts
            }
        }
    }
      , Je = {
        versions: {
            prismjs: "1.28.0"
        },
        preloadScripts: [{
            type: "script",
            data: {
                src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-core.min.js"
            }
        }, {
            type: "script",
            data: {
                src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/autoloader/prism-autoloader.min.js"
            }
        }],
        styles: [{
            type: "stylesheet",
            data: {
                href: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.css"
            }
        }]
    };
    let We;
    function Xe(e, t) {
        (We || (We = m(Je.preloadScripts)),
        We).then((()=>{
            window.Prism.plugins.autoloader.loadLanguages([e], (()=>{
                t.retransform.call()
            }
            ))
        }
        ))
    }
    const Qe = "prism";
    var et = {
        name: Qe,
        config: Je,
        transform(e) {
            let t = ()=>{}
            ;
            return e.parser.tap((r=>{
                r.set({
                    highlight: (r,n)=>{
                        var i;
                        t();
                        const {Prism: o} = window
                          , s = null == o || null == (i = o.languages) ? void 0 : i[n];
                        return s ? o.highlight(r, s, n) : (Xe(n, e),
                        "")
                    }
                })
            }
            )),
            e.beforeParse.tap(((e,r)=>{
                t = ()=>{
                    r.features.prism = !0
                }
            }
            )),
            {
                styles: Je.styles
            }
        }
    };
    /*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
    function tt(e) {
        return null == e
    }
    var rt = {
        isNothing: tt,
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        toArray: function(e) {
            return Array.isArray(e) ? e : tt(e) ? [] : [e]
        },
        repeat: function(e, t) {
            var r, n = "";
            for (r = 0; r < t; r += 1)
                n += e;
            return n
        },
        isNegativeZero: function(e) {
            return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
        },
        extend: function(e, t) {
            var r, n, i, o;
            if (t)
                for (r = 0,
                n = (o = Object.keys(t)).length; r < n; r += 1)
                    e[i = o[r]] = t[i];
            return e
        }
    };
    function nt(e, t) {
        var r = ""
          , n = e.reason || "(unknown reason)";
        return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '),
        r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")",
        !t && e.mark.snippet && (r += "\n\n" + e.mark.snippet),
        n + " " + r) : n
    }
    function it(e, t) {
        Error.call(this),
        this.name = "YAMLException",
        this.reason = e,
        this.mark = t,
        this.message = nt(this, !1),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || ""
    }
    it.prototype = Object.create(Error.prototype),
    it.prototype.constructor = it,
    it.prototype.toString = function(e) {
        return this.name + ": " + nt(this, e)
    }
    ;
    var ot = it;
    function st(e, t, r, n, i) {
        var o = ""
          , s = ""
          , a = Math.floor(i / 2) - 1;
        return n - t > a && (t = n - a + (o = " ... ").length),
        r - n > a && (r = n + a - (s = " ...").length),
        {
            str: o + e.slice(t, r).replace(/\t/g, "→") + s,
            pos: n - t + o.length
        }
    }
    function at(e, t) {
        return rt.repeat(" ", t - e.length) + e
    }
    var lt = function(e, t) {
        if (t = Object.create(t || null),
        !e.buffer)
            return null;
        t.maxLength || (t.maxLength = 79),
        "number" != typeof t.indent && (t.indent = 1),
        "number" != typeof t.linesBefore && (t.linesBefore = 3),
        "number" != typeof t.linesAfter && (t.linesAfter = 2);
        for (var r, n = /\r?\n|\r|\0/g, i = [0], o = [], s = -1; r = n.exec(e.buffer); )
            o.push(r.index),
            i.push(r.index + r[0].length),
            e.position <= r.index && s < 0 && (s = i.length - 2);
        s < 0 && (s = i.length - 1);
        var a, l, c = "", p = Math.min(e.line + t.linesAfter, o.length).toString().length, u = t.maxLength - (t.indent + p + 3);
        for (a = 1; a <= t.linesBefore && !(s - a < 0); a++)
            l = st(e.buffer, i[s - a], o[s - a], e.position - (i[s] - i[s - a]), u),
            c = rt.repeat(" ", t.indent) + at((e.line - a + 1).toString(), p) + " | " + l.str + "\n" + c;
        for (l = st(e.buffer, i[s], o[s], e.position, u),
        c += rt.repeat(" ", t.indent) + at((e.line + 1).toString(), p) + " | " + l.str + "\n",
        c += rt.repeat("-", t.indent + p + 3 + l.pos) + "^\n",
        a = 1; a <= t.linesAfter && !(s + a >= o.length); a++)
            l = st(e.buffer, i[s + a], o[s + a], e.position - (i[s] - i[s + a]), u),
            c += rt.repeat(" ", t.indent) + at((e.line + a + 1).toString(), p) + " | " + l.str + "\n";
        return c.replace(/\n$/, "")
    }
      , ct = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"]
      , pt = ["scalar", "sequence", "mapping"];
    var ut = function(e, t) {
        if (t = t || {},
        Object.keys(t).forEach((function(t) {
            if (-1 === ct.indexOf(t))
                throw new ot('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
        }
        )),
        this.options = t,
        this.tag = e,
        this.kind = t.kind || null,
        this.resolve = t.resolve || function() {
            return !0
        }
        ,
        this.construct = t.construct || function(e) {
            return e
        }
        ,
        this.instanceOf = t.instanceOf || null,
        this.predicate = t.predicate || null,
        this.represent = t.represent || null,
        this.representName = t.representName || null,
        this.defaultStyle = t.defaultStyle || null,
        this.multi = t.multi || !1,
        this.styleAliases = function(e) {
            var t = {};
            return null !== e && Object.keys(e).forEach((function(r) {
                e[r].forEach((function(e) {
                    t[String(e)] = r
                }
                ))
            }
            )),
            t
        }(t.styleAliases || null),
        -1 === pt.indexOf(this.kind))
            throw new ot('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
    };
    function ft(e, t) {
        var r = [];
        return e[t].forEach((function(e) {
            var t = r.length;
            r.forEach((function(r, n) {
                r.tag === e.tag && r.kind === e.kind && r.multi === e.multi && (t = n)
            }
            )),
            r[t] = e
        }
        )),
        r
    }
    function ht(e) {
        return this.extend(e)
    }
    ht.prototype.extend = function(e) {
        var t = []
          , r = [];
        if (e instanceof ut)
            r.push(e);
        else if (Array.isArray(e))
            r = r.concat(e);
        else {
            if (!e || !Array.isArray(e.implicit) && !Array.isArray(e.explicit))
                throw new ot("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
            e.implicit && (t = t.concat(e.implicit)),
            e.explicit && (r = r.concat(e.explicit))
        }
        t.forEach((function(e) {
            if (!(e instanceof ut))
                throw new ot("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            if (e.loadKind && "scalar" !== e.loadKind)
                throw new ot("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            if (e.multi)
                throw new ot("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
        }
        )),
        r.forEach((function(e) {
            if (!(e instanceof ut))
                throw new ot("Specified list of YAML types (or a single Type object) contains a non-Type object.")
        }
        ));
        var n = Object.create(ht.prototype);
        return n.implicit = (this.implicit || []).concat(t),
        n.explicit = (this.explicit || []).concat(r),
        n.compiledImplicit = ft(n, "implicit"),
        n.compiledExplicit = ft(n, "explicit"),
        n.compiledTypeMap = function() {
            var e, t, r = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            };
            function n(e) {
                e.multi ? (r.multi[e.kind].push(e),
                r.multi.fallback.push(e)) : r[e.kind][e.tag] = r.fallback[e.tag] = e
            }
            for (e = 0,
            t = arguments.length; e < t; e += 1)
                arguments[e].forEach(n);
            return r
        }(n.compiledImplicit, n.compiledExplicit),
        n
    }
    ;
    var dt = ht
      , gt = new ut("tag:yaml.org,2002:str",{
        kind: "scalar",
        construct: function(e) {
            return null !== e ? e : ""
        }
    })
      , mt = new ut("tag:yaml.org,2002:seq",{
        kind: "sequence",
        construct: function(e) {
            return null !== e ? e : []
        }
    })
      , bt = new ut("tag:yaml.org,2002:map",{
        kind: "mapping",
        construct: function(e) {
            return null !== e ? e : {}
        }
    })
      , vt = new dt({
        explicit: [gt, mt, bt]
    });
    var kt = new ut("tag:yaml.org,2002:null",{
        kind: "scalar",
        resolve: function(e) {
            if (null === e)
                return !0;
            var t = e.length;
            return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
        },
        construct: function() {
            return null
        },
        predicate: function(e) {
            return null === e
        },
        represent: {
            canonical: function() {
                return "~"
            },
            lowercase: function() {
                return "null"
            },
            uppercase: function() {
                return "NULL"
            },
            camelcase: function() {
                return "Null"
            },
            empty: function() {
                return ""
            }
        },
        defaultStyle: "lowercase"
    });
    var yt = new ut("tag:yaml.org,2002:bool",{
        kind: "scalar",
        resolve: function(e) {
            if (null === e)
                return !1;
            var t = e.length;
            return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
        },
        construct: function(e) {
            return "true" === e || "True" === e || "TRUE" === e
        },
        predicate: function(e) {
            return "[object Boolean]" === Object.prototype.toString.call(e)
        },
        represent: {
            lowercase: function(e) {
                return e ? "true" : "false"
            },
            uppercase: function(e) {
                return e ? "TRUE" : "FALSE"
            },
            camelcase: function(e) {
                return e ? "True" : "False"
            }
        },
        defaultStyle: "lowercase"
    });
    function At(e) {
        return 48 <= e && e <= 55
    }
    function wt(e) {
        return 48 <= e && e <= 57
    }
    var xt = new ut("tag:yaml.org,2002:int",{
        kind: "scalar",
        resolve: function(e) {
            if (null === e)
                return !1;
            var t, r, n = e.length, i = 0, o = !1;
            if (!n)
                return !1;
            if ("-" !== (t = e[i]) && "+" !== t || (t = e[++i]),
            "0" === t) {
                if (i + 1 === n)
                    return !0;
                if ("b" === (t = e[++i])) {
                    for (i++; i < n; i++)
                        if ("_" !== (t = e[i])) {
                            if ("0" !== t && "1" !== t)
                                return !1;
                            o = !0
                        }
                    return o && "_" !== t
                }
                if ("x" === t) {
                    for (i++; i < n; i++)
                        if ("_" !== (t = e[i])) {
                            if (!(48 <= (r = e.charCodeAt(i)) && r <= 57 || 65 <= r && r <= 70 || 97 <= r && r <= 102))
                                return !1;
                            o = !0
                        }
                    return o && "_" !== t
                }
                if ("o" === t) {
                    for (i++; i < n; i++)
                        if ("_" !== (t = e[i])) {
                            if (!At(e.charCodeAt(i)))
                                return !1;
                            o = !0
                        }
                    return o && "_" !== t
                }
            }
            if ("_" === t)
                return !1;
            for (; i < n; i++)
                if ("_" !== (t = e[i])) {
                    if (!wt(e.charCodeAt(i)))
                        return !1;
                    o = !0
                }
            return !(!o || "_" === t)
        },
        construct: function(e) {
            var t, r = e, n = 1;
            if (-1 !== r.indexOf("_") && (r = r.replace(/_/g, "")),
            "-" !== (t = r[0]) && "+" !== t || ("-" === t && (n = -1),
            t = (r = r.slice(1))[0]),
            "0" === r)
                return 0;
            if ("0" === t) {
                if ("b" === r[1])
                    return n * parseInt(r.slice(2), 2);
                if ("x" === r[1])
                    return n * parseInt(r.slice(2), 16);
                if ("o" === r[1])
                    return n * parseInt(r.slice(2), 8)
            }
            return n * parseInt(r, 10)
        },
        predicate: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !rt.isNegativeZero(e)
        },
        represent: {
            binary: function(e) {
                return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1)
            },
            octal: function(e) {
                return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1)
            },
            decimal: function(e) {
                return e.toString(10)
            },
            hexadecimal: function(e) {
                return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1)
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [2, "bin"],
            octal: [8, "oct"],
            decimal: [10, "dec"],
            hexadecimal: [16, "hex"]
        }
    })
      , _t = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    var Ct = /^[-+]?[0-9]+e/;
    var qt = new ut("tag:yaml.org,2002:float",{
        kind: "scalar",
        resolve: function(e) {
            return null !== e && !(!_t.test(e) || "_" === e[e.length - 1])
        },
        construct: function(e) {
            var t, r;
            return r = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1,
            "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
            ".inf" === t ? 1 === r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : r * parseFloat(t, 10)
        },
        predicate: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || rt.isNegativeZero(e))
        },
        represent: function(e, t) {
            var r;
            if (isNaN(e))
                switch (t) {
                case "lowercase":
                    return ".nan";
                case "uppercase":
                    return ".NAN";
                case "camelcase":
                    return ".NaN"
                }
            else if (Number.POSITIVE_INFINITY === e)
                switch (t) {
                case "lowercase":
                    return ".inf";
                case "uppercase":
                    return ".INF";
                case "camelcase":
                    return ".Inf"
                }
            else if (Number.NEGATIVE_INFINITY === e)
                switch (t) {
                case "lowercase":
                    return "-.inf";
                case "uppercase":
                    return "-.INF";
                case "camelcase":
                    return "-.Inf"
                }
            else if (rt.isNegativeZero(e))
                return "-0.0";
            return r = e.toString(10),
            Ct.test(r) ? r.replace("e", ".e") : r
        },
        defaultStyle: "lowercase"
    })
      , St = vt.extend({
        implicit: [kt, yt, xt, qt]
    })
      , Et = St
      , Mt = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$")
      , Lt = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
    var Tt = new ut("tag:yaml.org,2002:timestamp",{
        kind: "scalar",
        resolve: function(e) {
            return null !== e && (null !== Mt.exec(e) || null !== Lt.exec(e))
        },
        construct: function(e) {
            var t, r, n, i, o, s, a, l, c = 0, p = null;
            if (null === (t = Mt.exec(e)) && (t = Lt.exec(e)),
            null === t)
                throw new Error("Date resolve error");
            if (r = +t[1],
            n = +t[2] - 1,
            i = +t[3],
            !t[4])
                return new Date(Date.UTC(r, n, i));
            if (o = +t[4],
            s = +t[5],
            a = +t[6],
            t[7]) {
                for (c = t[7].slice(0, 3); c.length < 3; )
                    c += "0";
                c = +c
            }
            return t[9] && (p = 6e4 * (60 * +t[10] + +(t[11] || 0)),
            "-" === t[9] && (p = -p)),
            l = new Date(Date.UTC(r, n, i, o, s, a, c)),
            p && l.setTime(l.getTime() - p),
            l
        },
        instanceOf: Date,
        represent: function(e) {
            return e.toISOString()
        }
    });
    var It = new ut("tag:yaml.org,2002:merge",{
        kind: "scalar",
        resolve: function(e) {
            return "<<" === e || null === e
        }
    })
      , Ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    var Nt = new ut("tag:yaml.org,2002:binary",{
        kind: "scalar",
        resolve: function(e) {
            if (null === e)
                return !1;
            var t, r, n = 0, i = e.length, o = Ot;
            for (r = 0; r < i; r++)
                if (!((t = o.indexOf(e.charAt(r))) > 64)) {
                    if (t < 0)
                        return !1;
                    n += 6
                }
            return n % 8 == 0
        },
        construct: function(e) {
            var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, o = Ot, s = 0, a = [];
            for (t = 0; t < i; t++)
                t % 4 == 0 && t && (a.push(s >> 16 & 255),
                a.push(s >> 8 & 255),
                a.push(255 & s)),
                s = s << 6 | o.indexOf(n.charAt(t));
            return 0 === (r = i % 4 * 6) ? (a.push(s >> 16 & 255),
            a.push(s >> 8 & 255),
            a.push(255 & s)) : 18 === r ? (a.push(s >> 10 & 255),
            a.push(s >> 2 & 255)) : 12 === r && a.push(s >> 4 & 255),
            new Uint8Array(a)
        },
        predicate: function(e) {
            return "[object Uint8Array]" === Object.prototype.toString.call(e)
        },
        represent: function(e) {
            var t, r, n = "", i = 0, o = e.length, s = Ot;
            for (t = 0; t < o; t++)
                t % 3 == 0 && t && (n += s[i >> 18 & 63],
                n += s[i >> 12 & 63],
                n += s[i >> 6 & 63],
                n += s[63 & i]),
                i = (i << 8) + e[t];
            return 0 === (r = o % 3) ? (n += s[i >> 18 & 63],
            n += s[i >> 12 & 63],
            n += s[i >> 6 & 63],
            n += s[63 & i]) : 2 === r ? (n += s[i >> 10 & 63],
            n += s[i >> 4 & 63],
            n += s[i << 2 & 63],
            n += s[64]) : 1 === r && (n += s[i >> 2 & 63],
            n += s[i << 4 & 63],
            n += s[64],
            n += s[64]),
            n
        }
    })
      , jt = Object.prototype.hasOwnProperty
      , Dt = Object.prototype.toString;
    var Rt = new ut("tag:yaml.org,2002:omap",{
        kind: "sequence",
        resolve: function(e) {
            if (null === e)
                return !0;
            var t, r, n, i, o, s = [], a = e;
            for (t = 0,
            r = a.length; t < r; t += 1) {
                if (n = a[t],
                o = !1,
                "[object Object]" !== Dt.call(n))
                    return !1;
                for (i in n)
                    if (jt.call(n, i)) {
                        if (o)
                            return !1;
                        o = !0
                    }
                if (!o)
                    return !1;
                if (-1 !== s.indexOf(i))
                    return !1;
                s.push(i)
            }
            return !0
        },
        construct: function(e) {
            return null !== e ? e : []
        }
    })
      , Ut = Object.prototype.toString;
    var Ft = new ut("tag:yaml.org,2002:pairs",{
        kind: "sequence",
        resolve: function(e) {
            if (null === e)
                return !0;
            var t, r, n, i, o, s = e;
            for (o = new Array(s.length),
            t = 0,
            r = s.length; t < r; t += 1) {
                if (n = s[t],
                "[object Object]" !== Ut.call(n))
                    return !1;
                if (1 !== (i = Object.keys(n)).length)
                    return !1;
                o[t] = [i[0], n[i[0]]]
            }
            return !0
        },
        construct: function(e) {
            if (null === e)
                return [];
            var t, r, n, i, o, s = e;
            for (o = new Array(s.length),
            t = 0,
            r = s.length; t < r; t += 1)
                n = s[t],
                i = Object.keys(n),
                o[t] = [i[0], n[i[0]]];
            return o
        }
    })
      , zt = Object.prototype.hasOwnProperty;
    var Pt = new ut("tag:yaml.org,2002:set",{
        kind: "mapping",
        resolve: function(e) {
            if (null === e)
                return !0;
            var t, r = e;
            for (t in r)
                if (zt.call(r, t) && null !== r[t])
                    return !1;
            return !0
        },
        construct: function(e) {
            return null !== e ? e : {}
        }
    })
      , Bt = Et.extend({
        implicit: [Tt, It],
        explicit: [Nt, Rt, Ft, Pt]
    })
      , Vt = Object.prototype.hasOwnProperty
      , $t = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
      , Gt = /[\x85\u2028\u2029]/
      , Ht = /[,\[\]\{\}]/
      , Zt = /^(?:!|!!|![a-z\-]+!)$/i
      , Yt = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function Kt(e) {
        return Object.prototype.toString.call(e)
    }
    function Jt(e) {
        return 10 === e || 13 === e
    }
    function Wt(e) {
        return 9 === e || 32 === e
    }
    function Xt(e) {
        return 9 === e || 32 === e || 10 === e || 13 === e
    }
    function Qt(e) {
        return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
    }
    function er(e) {
        var t;
        return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1
    }
    function tr(e) {
        return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
    }
    function rr(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023))
    }
    for (var nr = new Array(256), ir = new Array(256), or = 0; or < 256; or++)
        nr[or] = tr(or) ? 1 : 0,
        ir[or] = tr(or);
    function sr(e, t) {
        this.input = e,
        this.filename = t.filename || null,
        this.schema = t.schema || Bt,
        this.onWarning = t.onWarning || null,
        this.legacy = t.legacy || !1,
        this.json = t.json || !1,
        this.listener = t.listener || null,
        this.implicitTypes = this.schema.compiledImplicit,
        this.typeMap = this.schema.compiledTypeMap,
        this.length = e.length,
        this.position = 0,
        this.line = 0,
        this.lineStart = 0,
        this.lineIndent = 0,
        this.firstTabInLine = -1,
        this.documents = []
    }
    function ar(e, t) {
        var r = {
            name: e.filename,
            buffer: e.input.slice(0, -1),
            position: e.position,
            line: e.line,
            column: e.position - e.lineStart
        };
        return r.snippet = lt(r),
        new ot(t,r)
    }
    function lr(e, t) {
        throw ar(e, t)
    }
    function cr(e, t) {
        e.onWarning && e.onWarning.call(null, ar(e, t))
    }
    var pr = {
        YAML: function(e, t, r) {
            var n, i, o;
            null !== e.version && lr(e, "duplication of %YAML directive"),
            1 !== r.length && lr(e, "YAML directive accepts exactly one argument"),
            null === (n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) && lr(e, "ill-formed argument of the YAML directive"),
            i = parseInt(n[1], 10),
            o = parseInt(n[2], 10),
            1 !== i && lr(e, "unacceptable YAML version of the document"),
            e.version = r[0],
            e.checkLineBreaks = o < 2,
            1 !== o && 2 !== o && cr(e, "unsupported YAML version of the document")
        },
        TAG: function(e, t, r) {
            var n, i;
            2 !== r.length && lr(e, "TAG directive accepts exactly two arguments"),
            n = r[0],
            i = r[1],
            Zt.test(n) || lr(e, "ill-formed tag handle (first argument) of the TAG directive"),
            Vt.call(e.tagMap, n) && lr(e, 'there is a previously declared suffix for "' + n + '" tag handle'),
            Yt.test(i) || lr(e, "ill-formed tag prefix (second argument) of the TAG directive");
            try {
                i = decodeURIComponent(i)
            } catch (t) {
                lr(e, "tag prefix is malformed: " + i)
            }
            e.tagMap[n] = i
        }
    };
    function ur(e, t, r, n) {
        var i, o, s, a;
        if (t < r) {
            if (a = e.input.slice(t, r),
            n)
                for (i = 0,
                o = a.length; i < o; i += 1)
                    9 === (s = a.charCodeAt(i)) || 32 <= s && s <= 1114111 || lr(e, "expected valid JSON character");
            else
                $t.test(a) && lr(e, "the stream contains non-printable characters");
            e.result += a
        }
    }
    function fr(e, t, r, n) {
        var i, o, s, a;
        for (rt.isObject(r) || lr(e, "cannot merge mappings; the provided source object is unacceptable"),
        s = 0,
        a = (i = Object.keys(r)).length; s < a; s += 1)
            o = i[s],
            Vt.call(t, o) || (t[o] = r[o],
            n[o] = !0)
    }
    function hr(e, t, r, n, i, o, s, a, l) {
        var c, p;
        if (Array.isArray(i))
            for (c = 0,
            p = (i = Array.prototype.slice.call(i)).length; c < p; c += 1)
                Array.isArray(i[c]) && lr(e, "nested arrays are not supported inside keys"),
                "object" == typeof i && "[object Object]" === Kt(i[c]) && (i[c] = "[object Object]");
        if ("object" == typeof i && "[object Object]" === Kt(i) && (i = "[object Object]"),
        i = String(i),
        null === t && (t = {}),
        "tag:yaml.org,2002:merge" === n)
            if (Array.isArray(o))
                for (c = 0,
                p = o.length; c < p; c += 1)
                    fr(e, t, o[c], r);
            else
                fr(e, t, o, r);
        else
            e.json || Vt.call(r, i) || !Vt.call(t, i) || (e.line = s || e.line,
            e.lineStart = a || e.lineStart,
            e.position = l || e.position,
            lr(e, "duplicated mapping key")),
            "__proto__" === i ? Object.defineProperty(t, i, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: o
            }) : t[i] = o,
            delete r[i];
        return t
    }
    function dr(e) {
        var t;
        10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++,
        10 === e.input.charCodeAt(e.position) && e.position++) : lr(e, "a line break is expected"),
        e.line += 1,
        e.lineStart = e.position,
        e.firstTabInLine = -1
    }
    function gr(e, t, r) {
        for (var n = 0, i = e.input.charCodeAt(e.position); 0 !== i; ) {
            for (; Wt(i); )
                9 === i && -1 === e.firstTabInLine && (e.firstTabInLine = e.position),
                i = e.input.charCodeAt(++e.position);
            if (t && 35 === i)
                do {
                    i = e.input.charCodeAt(++e.position)
                } while (10 !== i && 13 !== i && 0 !== i);
            if (!Jt(i))
                break;
            for (dr(e),
            i = e.input.charCodeAt(e.position),
            n++,
            e.lineIndent = 0; 32 === i; )
                e.lineIndent++,
                i = e.input.charCodeAt(++e.position)
        }
        return -1 !== r && 0 !== n && e.lineIndent < r && cr(e, "deficient indentation"),
        n
    }
    function mr(e) {
        var t, r = e.position;
        return !(45 !== (t = e.input.charCodeAt(r)) && 46 !== t || t !== e.input.charCodeAt(r + 1) || t !== e.input.charCodeAt(r + 2) || (r += 3,
        0 !== (t = e.input.charCodeAt(r)) && !Xt(t)))
    }
    function br(e, t) {
        1 === t ? e.result += " " : t > 1 && (e.result += rt.repeat("\n", t - 1))
    }
    function vr(e, t) {
        var r, n, i = e.tag, o = e.anchor, s = [], a = !1;
        if (-1 !== e.firstTabInLine)
            return !1;
        for (null !== e.anchor && (e.anchorMap[e.anchor] = s),
        n = e.input.charCodeAt(e.position); 0 !== n && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine,
        lr(e, "tab characters must not be used in indentation")),
        45 === n) && Xt(e.input.charCodeAt(e.position + 1)); )
            if (a = !0,
            e.position++,
            gr(e, !0, -1) && e.lineIndent <= t)
                s.push(null),
                n = e.input.charCodeAt(e.position);
            else if (r = e.line,
            Ar(e, t, 3, !1, !0),
            s.push(e.result),
            gr(e, !0, -1),
            n = e.input.charCodeAt(e.position),
            (e.line === r || e.lineIndent > t) && 0 !== n)
                lr(e, "bad indentation of a sequence entry");
            else if (e.lineIndent < t)
                break;
        return !!a && (e.tag = i,
        e.anchor = o,
        e.kind = "sequence",
        e.result = s,
        !0)
    }
    function kr(e) {
        var t, r, n, i, o = !1, s = !1;
        if (33 !== (i = e.input.charCodeAt(e.position)))
            return !1;
        if (null !== e.tag && lr(e, "duplication of a tag property"),
        60 === (i = e.input.charCodeAt(++e.position)) ? (o = !0,
        i = e.input.charCodeAt(++e.position)) : 33 === i ? (s = !0,
        r = "!!",
        i = e.input.charCodeAt(++e.position)) : r = "!",
        t = e.position,
        o) {
            do {
                i = e.input.charCodeAt(++e.position)
            } while (0 !== i && 62 !== i);
            e.position < e.length ? (n = e.input.slice(t, e.position),
            i = e.input.charCodeAt(++e.position)) : lr(e, "unexpected end of the stream within a verbatim tag")
        } else {
            for (; 0 !== i && !Xt(i); )
                33 === i && (s ? lr(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(t - 1, e.position + 1),
                Zt.test(r) || lr(e, "named tag handle cannot contain such characters"),
                s = !0,
                t = e.position + 1)),
                i = e.input.charCodeAt(++e.position);
            n = e.input.slice(t, e.position),
            Ht.test(n) && lr(e, "tag suffix cannot contain flow indicator characters")
        }
        n && !Yt.test(n) && lr(e, "tag name cannot contain such characters: " + n);
        try {
            n = decodeURIComponent(n)
        } catch (t) {
            lr(e, "tag name is malformed: " + n)
        }
        return o ? e.tag = n : Vt.call(e.tagMap, r) ? e.tag = e.tagMap[r] + n : "!" === r ? e.tag = "!" + n : "!!" === r ? e.tag = "tag:yaml.org,2002:" + n : lr(e, 'undeclared tag handle "' + r + '"'),
        !0
    }
    function yr(e) {
        var t, r;
        if (38 !== (r = e.input.charCodeAt(e.position)))
            return !1;
        for (null !== e.anchor && lr(e, "duplication of an anchor property"),
        r = e.input.charCodeAt(++e.position),
        t = e.position; 0 !== r && !Xt(r) && !Qt(r); )
            r = e.input.charCodeAt(++e.position);
        return e.position === t && lr(e, "name of an anchor node must contain at least one character"),
        e.anchor = e.input.slice(t, e.position),
        !0
    }
    function Ar(e, t, r, n, i) {
        var o, s, a, l, c, p, u, f, h, d = 1, g = !1, m = !1;
        if (null !== e.listener && e.listener("open", e),
        e.tag = null,
        e.anchor = null,
        e.kind = null,
        e.result = null,
        o = s = a = 4 === r || 3 === r,
        n && gr(e, !0, -1) && (g = !0,
        e.lineIndent > t ? d = 1 : e.lineIndent === t ? d = 0 : e.lineIndent < t && (d = -1)),
        1 === d)
            for (; kr(e) || yr(e); )
                gr(e, !0, -1) ? (g = !0,
                a = o,
                e.lineIndent > t ? d = 1 : e.lineIndent === t ? d = 0 : e.lineIndent < t && (d = -1)) : a = !1;
        if (a && (a = g || i),
        1 !== d && 4 !== r || (f = 1 === r || 2 === r ? t : t + 1,
        h = e.position - e.lineStart,
        1 === d ? a && (vr(e, h) || function(e, t, r) {
            var n, i, o, s, a, l, c, p = e.tag, u = e.anchor, f = {}, h = Object.create(null), d = null, g = null, m = null, b = !1, v = !1;
            if (-1 !== e.firstTabInLine)
                return !1;
            for (null !== e.anchor && (e.anchorMap[e.anchor] = f),
            c = e.input.charCodeAt(e.position); 0 !== c; ) {
                if (b || -1 === e.firstTabInLine || (e.position = e.firstTabInLine,
                lr(e, "tab characters must not be used in indentation")),
                n = e.input.charCodeAt(e.position + 1),
                o = e.line,
                63 !== c && 58 !== c || !Xt(n)) {
                    if (s = e.line,
                    a = e.lineStart,
                    l = e.position,
                    !Ar(e, r, 2, !1, !0))
                        break;
                    if (e.line === o) {
                        for (c = e.input.charCodeAt(e.position); Wt(c); )
                            c = e.input.charCodeAt(++e.position);
                        if (58 === c)
                            Xt(c = e.input.charCodeAt(++e.position)) || lr(e, "a whitespace character is expected after the key-value separator within a block mapping"),
                            b && (hr(e, f, h, d, g, null, s, a, l),
                            d = g = m = null),
                            v = !0,
                            b = !1,
                            i = !1,
                            d = e.tag,
                            g = e.result;
                        else {
                            if (!v)
                                return e.tag = p,
                                e.anchor = u,
                                !0;
                            lr(e, "can not read an implicit mapping pair; a colon is missed")
                        }
                    } else {
                        if (!v)
                            return e.tag = p,
                            e.anchor = u,
                            !0;
                        lr(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
                    }
                } else
                    63 === c ? (b && (hr(e, f, h, d, g, null, s, a, l),
                    d = g = m = null),
                    v = !0,
                    b = !0,
                    i = !0) : b ? (b = !1,
                    i = !0) : lr(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),
                    e.position += 1,
                    c = n;
                if ((e.line === o || e.lineIndent > t) && (b && (s = e.line,
                a = e.lineStart,
                l = e.position),
                Ar(e, t, 4, !0, i) && (b ? g = e.result : m = e.result),
                b || (hr(e, f, h, d, g, m, s, a, l),
                d = g = m = null),
                gr(e, !0, -1),
                c = e.input.charCodeAt(e.position)),
                (e.line === o || e.lineIndent > t) && 0 !== c)
                    lr(e, "bad indentation of a mapping entry");
                else if (e.lineIndent < t)
                    break
            }
            return b && hr(e, f, h, d, g, null, s, a, l),
            v && (e.tag = p,
            e.anchor = u,
            e.kind = "mapping",
            e.result = f),
            v
        }(e, h, f)) || function(e, t) {
            var r, n, i, o, s, a, l, c, p, u, f, h, d = !0, g = e.tag, m = e.anchor, b = Object.create(null);
            if (91 === (h = e.input.charCodeAt(e.position)))
                s = 93,
                c = !1,
                o = [];
            else {
                if (123 !== h)
                    return !1;
                s = 125,
                c = !0,
                o = {}
            }
            for (null !== e.anchor && (e.anchorMap[e.anchor] = o),
            h = e.input.charCodeAt(++e.position); 0 !== h; ) {
                if (gr(e, !0, t),
                (h = e.input.charCodeAt(e.position)) === s)
                    return e.position++,
                    e.tag = g,
                    e.anchor = m,
                    e.kind = c ? "mapping" : "sequence",
                    e.result = o,
                    !0;
                d ? 44 === h && lr(e, "expected the node content, but found ','") : lr(e, "missed comma between flow collection entries"),
                f = null,
                a = l = !1,
                63 === h && Xt(e.input.charCodeAt(e.position + 1)) && (a = l = !0,
                e.position++,
                gr(e, !0, t)),
                r = e.line,
                n = e.lineStart,
                i = e.position,
                Ar(e, t, 1, !1, !0),
                u = e.tag,
                p = e.result,
                gr(e, !0, t),
                h = e.input.charCodeAt(e.position),
                !l && e.line !== r || 58 !== h || (a = !0,
                h = e.input.charCodeAt(++e.position),
                gr(e, !0, t),
                Ar(e, t, 1, !1, !0),
                f = e.result),
                c ? hr(e, o, b, u, p, f, r, n, i) : a ? o.push(hr(e, null, b, u, p, f, r, n, i)) : o.push(p),
                gr(e, !0, t),
                44 === (h = e.input.charCodeAt(e.position)) ? (d = !0,
                h = e.input.charCodeAt(++e.position)) : d = !1
            }
            lr(e, "unexpected end of the stream within a flow collection")
        }(e, f) ? m = !0 : (s && function(e, t) {
            var r, n, i, o, s, a = 1, l = !1, c = !1, p = t, u = 0, f = !1;
            if (124 === (o = e.input.charCodeAt(e.position)))
                n = !1;
            else {
                if (62 !== o)
                    return !1;
                n = !0
            }
            for (e.kind = "scalar",
            e.result = ""; 0 !== o; )
                if (43 === (o = e.input.charCodeAt(++e.position)) || 45 === o)
                    1 === a ? a = 43 === o ? 3 : 2 : lr(e, "repeat of a chomping mode identifier");
                else {
                    if (!((i = 48 <= (s = o) && s <= 57 ? s - 48 : -1) >= 0))
                        break;
                    0 === i ? lr(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? lr(e, "repeat of an indentation width identifier") : (p = t + i - 1,
                    c = !0)
                }
            if (Wt(o)) {
                do {
                    o = e.input.charCodeAt(++e.position)
                } while (Wt(o));
                if (35 === o)
                    do {
                        o = e.input.charCodeAt(++e.position)
                    } while (!Jt(o) && 0 !== o)
            }
            for (; 0 !== o; ) {
                for (dr(e),
                e.lineIndent = 0,
                o = e.input.charCodeAt(e.position); (!c || e.lineIndent < p) && 32 === o; )
                    e.lineIndent++,
                    o = e.input.charCodeAt(++e.position);
                if (!c && e.lineIndent > p && (p = e.lineIndent),
                Jt(o))
                    u++;
                else {
                    if (e.lineIndent < p) {
                        3 === a ? e.result += rt.repeat("\n", l ? 1 + u : u) : 1 === a && l && (e.result += "\n");
                        break
                    }
                    for (n ? Wt(o) ? (f = !0,
                    e.result += rt.repeat("\n", l ? 1 + u : u)) : f ? (f = !1,
                    e.result += rt.repeat("\n", u + 1)) : 0 === u ? l && (e.result += " ") : e.result += rt.repeat("\n", u) : e.result += rt.repeat("\n", l ? 1 + u : u),
                    l = !0,
                    c = !0,
                    u = 0,
                    r = e.position; !Jt(o) && 0 !== o; )
                        o = e.input.charCodeAt(++e.position);
                    ur(e, r, e.position, !1)
                }
            }
            return !0
        }(e, f) || function(e, t) {
            var r, n, i;
            if (39 !== (r = e.input.charCodeAt(e.position)))
                return !1;
            for (e.kind = "scalar",
            e.result = "",
            e.position++,
            n = i = e.position; 0 !== (r = e.input.charCodeAt(e.position)); )
                if (39 === r) {
                    if (ur(e, n, e.position, !0),
                    39 !== (r = e.input.charCodeAt(++e.position)))
                        return !0;
                    n = e.position,
                    e.position++,
                    i = e.position
                } else
                    Jt(r) ? (ur(e, n, i, !0),
                    br(e, gr(e, !1, t)),
                    n = i = e.position) : e.position === e.lineStart && mr(e) ? lr(e, "unexpected end of the document within a single quoted scalar") : (e.position++,
                    i = e.position);
            lr(e, "unexpected end of the stream within a single quoted scalar")
        }(e, f) || function(e, t) {
            var r, n, i, o, s, a, l;
            if (34 !== (a = e.input.charCodeAt(e.position)))
                return !1;
            for (e.kind = "scalar",
            e.result = "",
            e.position++,
            r = n = e.position; 0 !== (a = e.input.charCodeAt(e.position)); ) {
                if (34 === a)
                    return ur(e, r, e.position, !0),
                    e.position++,
                    !0;
                if (92 === a) {
                    if (ur(e, r, e.position, !0),
                    Jt(a = e.input.charCodeAt(++e.position)))
                        gr(e, !1, t);
                    else if (a < 256 && nr[a])
                        e.result += ir[a],
                        e.position++;
                    else if ((s = 120 === (l = a) ? 2 : 117 === l ? 4 : 85 === l ? 8 : 0) > 0) {
                        for (i = s,
                        o = 0; i > 0; i--)
                            (s = er(a = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + s : lr(e, "expected hexadecimal character");
                        e.result += rr(o),
                        e.position++
                    } else
                        lr(e, "unknown escape sequence");
                    r = n = e.position
                } else
                    Jt(a) ? (ur(e, r, n, !0),
                    br(e, gr(e, !1, t)),
                    r = n = e.position) : e.position === e.lineStart && mr(e) ? lr(e, "unexpected end of the document within a double quoted scalar") : (e.position++,
                    n = e.position)
            }
            lr(e, "unexpected end of the stream within a double quoted scalar")
        }(e, f) ? m = !0 : !function(e) {
            var t, r, n;
            if (42 !== (n = e.input.charCodeAt(e.position)))
                return !1;
            for (n = e.input.charCodeAt(++e.position),
            t = e.position; 0 !== n && !Xt(n) && !Qt(n); )
                n = e.input.charCodeAt(++e.position);
            return e.position === t && lr(e, "name of an alias node must contain at least one character"),
            r = e.input.slice(t, e.position),
            Vt.call(e.anchorMap, r) || lr(e, 'unidentified alias "' + r + '"'),
            e.result = e.anchorMap[r],
            gr(e, !0, -1),
            !0
        }(e) ? function(e, t, r) {
            var n, i, o, s, a, l, c, p, u = e.kind, f = e.result;
            if (Xt(p = e.input.charCodeAt(e.position)) || Qt(p) || 35 === p || 38 === p || 42 === p || 33 === p || 124 === p || 62 === p || 39 === p || 34 === p || 37 === p || 64 === p || 96 === p)
                return !1;
            if ((63 === p || 45 === p) && (Xt(n = e.input.charCodeAt(e.position + 1)) || r && Qt(n)))
                return !1;
            for (e.kind = "scalar",
            e.result = "",
            i = o = e.position,
            s = !1; 0 !== p; ) {
                if (58 === p) {
                    if (Xt(n = e.input.charCodeAt(e.position + 1)) || r && Qt(n))
                        break
                } else if (35 === p) {
                    if (Xt(e.input.charCodeAt(e.position - 1)))
                        break
                } else {
                    if (e.position === e.lineStart && mr(e) || r && Qt(p))
                        break;
                    if (Jt(p)) {
                        if (a = e.line,
                        l = e.lineStart,
                        c = e.lineIndent,
                        gr(e, !1, -1),
                        e.lineIndent >= t) {
                            s = !0,
                            p = e.input.charCodeAt(e.position);
                            continue
                        }
                        e.position = o,
                        e.line = a,
                        e.lineStart = l,
                        e.lineIndent = c;
                        break
                    }
                }
                s && (ur(e, i, o, !1),
                br(e, e.line - a),
                i = o = e.position,
                s = !1),
                Wt(p) || (o = e.position + 1),
                p = e.input.charCodeAt(++e.position)
            }
            return ur(e, i, o, !1),
            !!e.result || (e.kind = u,
            e.result = f,
            !1)
        }(e, f, 1 === r) && (m = !0,
        null === e.tag && (e.tag = "?")) : (m = !0,
        null === e.tag && null === e.anchor || lr(e, "alias node should not have any properties")),
        null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === d && (m = a && vr(e, h))),
        null === e.tag)
            null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
        else if ("?" === e.tag) {
            for (null !== e.result && "scalar" !== e.kind && lr(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'),
            l = 0,
            c = e.implicitTypes.length; l < c; l += 1)
                if ((u = e.implicitTypes[l]).resolve(e.result)) {
                    e.result = u.construct(e.result),
                    e.tag = u.tag,
                    null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                    break
                }
        } else if ("!" !== e.tag) {
            if (Vt.call(e.typeMap[e.kind || "fallback"], e.tag))
                u = e.typeMap[e.kind || "fallback"][e.tag];
            else
                for (u = null,
                l = 0,
                c = (p = e.typeMap.multi[e.kind || "fallback"]).length; l < c; l += 1)
                    if (e.tag.slice(0, p[l].tag.length) === p[l].tag) {
                        u = p[l];
                        break
                    }
            u || lr(e, "unknown tag !<" + e.tag + ">"),
            null !== e.result && u.kind !== e.kind && lr(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + u.kind + '", not "' + e.kind + '"'),
            u.resolve(e.result, e.tag) ? (e.result = u.construct(e.result, e.tag),
            null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : lr(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")
        }
        return null !== e.listener && e.listener("close", e),
        null !== e.tag || null !== e.anchor || m
    }
    function wr(e) {
        var t, r, n, i, o = e.position, s = !1;
        for (e.version = null,
        e.checkLineBreaks = e.legacy,
        e.tagMap = Object.create(null),
        e.anchorMap = Object.create(null); 0 !== (i = e.input.charCodeAt(e.position)) && (gr(e, !0, -1),
        i = e.input.charCodeAt(e.position),
        !(e.lineIndent > 0 || 37 !== i)); ) {
            for (s = !0,
            i = e.input.charCodeAt(++e.position),
            t = e.position; 0 !== i && !Xt(i); )
                i = e.input.charCodeAt(++e.position);
            for (n = [],
            (r = e.input.slice(t, e.position)).length < 1 && lr(e, "directive name must not be less than one character in length"); 0 !== i; ) {
                for (; Wt(i); )
                    i = e.input.charCodeAt(++e.position);
                if (35 === i) {
                    do {
                        i = e.input.charCodeAt(++e.position)
                    } while (0 !== i && !Jt(i));
                    break
                }
                if (Jt(i))
                    break;
                for (t = e.position; 0 !== i && !Xt(i); )
                    i = e.input.charCodeAt(++e.position);
                n.push(e.input.slice(t, e.position))
            }
            0 !== i && dr(e),
            Vt.call(pr, r) ? pr[r](e, r, n) : cr(e, 'unknown document directive "' + r + '"')
        }
        gr(e, !0, -1),
        0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3,
        gr(e, !0, -1)) : s && lr(e, "directives end mark is expected"),
        Ar(e, e.lineIndent - 1, 4, !1, !0),
        gr(e, !0, -1),
        e.checkLineBreaks && Gt.test(e.input.slice(o, e.position)) && cr(e, "non-ASCII line breaks are interpreted as content"),
        e.documents.push(e.result),
        e.position === e.lineStart && mr(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3,
        gr(e, !0, -1)) : e.position < e.length - 1 && lr(e, "end of the stream or a document separator is expected")
    }
    function xr(e, t) {
        t = t || {},
        0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"),
        65279 === e.charCodeAt(0) && (e = e.slice(1)));
        var r = new sr(e,t)
          , n = e.indexOf("\0");
        for (-1 !== n && (r.position = n,
        lr(r, "null byte is not allowed in input")),
        r.input += "\0"; 32 === r.input.charCodeAt(r.position); )
            r.lineIndent += 1,
            r.position += 1;
        for (; r.position < r.length - 1; )
            wr(r);
        return r.documents
    }
    var _r = {
        loadAll: function(e, t, r) {
            null !== t && "object" == typeof t && void 0 === r && (r = t,
            t = null);
            var n = xr(e, r);
            if ("function" != typeof t)
                return n;
            for (var i = 0, o = n.length; i < o; i += 1)
                t(n[i])
        },
        load: function(e, t) {
            var r = xr(e, t);
            if (0 !== r.length) {
                if (1 === r.length)
                    return r[0];
                throw new ot("expected a single document in the stream, but found more")
            }
        }
    }
      , Cr = Object.prototype.toString
      , qr = Object.prototype.hasOwnProperty
      , Sr = 65279
      , Er = {
        0: "\\0",
        7: "\\a",
        8: "\\b",
        9: "\\t",
        10: "\\n",
        11: "\\v",
        12: "\\f",
        13: "\\r",
        27: "\\e",
        34: '\\"',
        92: "\\\\",
        133: "\\N",
        160: "\\_",
        8232: "\\L",
        8233: "\\P"
    }
      , Mr = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"]
      , Lr = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function Tr(e) {
        var t, r, n;
        if (t = e.toString(16).toUpperCase(),
        e <= 255)
            r = "x",
            n = 2;
        else if (e <= 65535)
            r = "u",
            n = 4;
        else {
            if (!(e <= 4294967295))
                throw new ot("code point within a string may not be greater than 0xFFFFFFFF");
            r = "U",
            n = 8
        }
        return "\\" + r + rt.repeat("0", n - t.length) + t
    }
    function Ir(e) {
        this.schema = e.schema || Bt,
        this.indent = Math.max(1, e.indent || 2),
        this.noArrayIndent = e.noArrayIndent || !1,
        this.skipInvalid = e.skipInvalid || !1,
        this.flowLevel = rt.isNothing(e.flowLevel) ? -1 : e.flowLevel,
        this.styleMap = function(e, t) {
            var r, n, i, o, s, a, l;
            if (null === t)
                return {};
            for (r = {},
            i = 0,
            o = (n = Object.keys(t)).length; i < o; i += 1)
                s = n[i],
                a = String(t[s]),
                "!!" === s.slice(0, 2) && (s = "tag:yaml.org,2002:" + s.slice(2)),
                (l = e.compiledTypeMap.fallback[s]) && qr.call(l.styleAliases, a) && (a = l.styleAliases[a]),
                r[s] = a;
            return r
        }(this.schema, e.styles || null),
        this.sortKeys = e.sortKeys || !1,
        this.lineWidth = e.lineWidth || 80,
        this.noRefs = e.noRefs || !1,
        this.noCompatMode = e.noCompatMode || !1,
        this.condenseFlow = e.condenseFlow || !1,
        this.quotingType = '"' === e.quotingType ? 2 : 1,
        this.forceQuotes = e.forceQuotes || !1,
        this.replacer = "function" == typeof e.replacer ? e.replacer : null,
        this.implicitTypes = this.schema.compiledImplicit,
        this.explicitTypes = this.schema.compiledExplicit,
        this.tag = null,
        this.result = "",
        this.duplicates = [],
        this.usedDuplicates = null
    }
    function Or(e, t) {
        for (var r, n = rt.repeat(" ", t), i = 0, o = -1, s = "", a = e.length; i < a; )
            -1 === (o = e.indexOf("\n", i)) ? (r = e.slice(i),
            i = a) : (r = e.slice(i, o + 1),
            i = o + 1),
            r.length && "\n" !== r && (s += n),
            s += r;
        return s
    }
    function Nr(e, t) {
        return "\n" + rt.repeat(" ", e.indent * t)
    }
    function jr(e) {
        return 32 === e || 9 === e
    }
    function Dr(e) {
        return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && e !== Sr || 65536 <= e && e <= 1114111
    }
    function Rr(e) {
        return Dr(e) && e !== Sr && 13 !== e && 10 !== e
    }
    function Ur(e, t, r) {
        var n = Rr(e)
          , i = n && !jr(e);
        return (r ? n : n && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !i) || Rr(t) && !jr(t) && 35 === e || 58 === t && i
    }
    function Fr(e, t) {
        var r, n = e.charCodeAt(t);
        return n >= 55296 && n <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1)) >= 56320 && r <= 57343 ? 1024 * (n - 55296) + r - 56320 + 65536 : n
    }
    function zr(e) {
        return /^\n* /.test(e)
    }
    function Pr(e, t, r, n, i, o, s, a) {
        var l, c, p = 0, u = null, f = !1, h = !1, d = -1 !== n, g = -1, m = Dr(c = Fr(e, 0)) && c !== Sr && !jr(c) && 45 !== c && 63 !== c && 58 !== c && 44 !== c && 91 !== c && 93 !== c && 123 !== c && 125 !== c && 35 !== c && 38 !== c && 42 !== c && 33 !== c && 124 !== c && 61 !== c && 62 !== c && 39 !== c && 34 !== c && 37 !== c && 64 !== c && 96 !== c && function(e) {
            return !jr(e) && 58 !== e
        }(Fr(e, e.length - 1));
        if (t || s)
            for (l = 0; l < e.length; p >= 65536 ? l += 2 : l++) {
                if (!Dr(p = Fr(e, l)))
                    return 5;
                m = m && Ur(p, u, a),
                u = p
            }
        else {
            for (l = 0; l < e.length; p >= 65536 ? l += 2 : l++) {
                if (10 === (p = Fr(e, l)))
                    f = !0,
                    d && (h = h || l - g - 1 > n && " " !== e[g + 1],
                    g = l);
                else if (!Dr(p))
                    return 5;
                m = m && Ur(p, u, a),
                u = p
            }
            h = h || d && l - g - 1 > n && " " !== e[g + 1]
        }
        return f || h ? r > 9 && zr(e) ? 5 : s ? 2 === o ? 5 : 2 : h ? 4 : 3 : !m || s || i(e) ? 2 === o ? 5 : 2 : 1
    }
    function Br(e, t, r, n, i) {
        e.dump = function() {
            if (0 === t.length)
                return 2 === e.quotingType ? '""' : "''";
            if (!e.noCompatMode && (-1 !== Mr.indexOf(t) || Lr.test(t)))
                return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
            var o = e.indent * Math.max(1, r)
              , s = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o)
              , a = n || e.flowLevel > -1 && r >= e.flowLevel;
            switch (Pr(t, a, e.indent, s, (function(t) {
                return function(e, t) {
                    var r, n;
                    for (r = 0,
                    n = e.implicitTypes.length; r < n; r += 1)
                        if (e.implicitTypes[r].resolve(t))
                            return !0;
                    return !1
                }(e, t)
            }
            ), e.quotingType, e.forceQuotes && !n, i)) {
            case 1:
                return t;
            case 2:
                return "'" + t.replace(/'/g, "''") + "'";
            case 3:
                return "|" + Vr(t, e.indent) + $r(Or(t, o));
            case 4:
                return ">" + Vr(t, e.indent) + $r(Or(function(e, t) {
                    var r, n, i = /(\n+)([^\n]*)/g, o = (a = e.indexOf("\n"),
                    a = -1 !== a ? a : e.length,
                    i.lastIndex = a,
                    Gr(e.slice(0, a), t)), s = "\n" === e[0] || " " === e[0];
                    var a;
                    for (; n = i.exec(e); ) {
                        var l = n[1]
                          , c = n[2];
                        r = " " === c[0],
                        o += l + (s || r || "" === c ? "" : "\n") + Gr(c, t),
                        s = r
                    }
                    return o
                }(t, s), o));
            case 5:
                return '"' + function(e) {
                    for (var t, r = "", n = 0, i = 0; i < e.length; n >= 65536 ? i += 2 : i++)
                        n = Fr(e, i),
                        !(t = Er[n]) && Dr(n) ? (r += e[i],
                        n >= 65536 && (r += e[i + 1])) : r += t || Tr(n);
                    return r
                }(t) + '"';
            default:
                throw new ot("impossible error: invalid scalar style")
            }
        }()
    }
    function Vr(e, t) {
        var r = zr(e) ? String(t) : ""
          , n = "\n" === e[e.length - 1];
        return r + (n && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : n ? "" : "-") + "\n"
    }
    function $r(e) {
        return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
    }
    function Gr(e, t) {
        if ("" === e || " " === e[0])
            return e;
        for (var r, n, i = / [^ ]/g, o = 0, s = 0, a = 0, l = ""; r = i.exec(e); )
            (a = r.index) - o > t && (n = s > o ? s : a,
            l += "\n" + e.slice(o, n),
            o = n + 1),
            s = a;
        return l += "\n",
        e.length - o > t && s > o ? l += e.slice(o, s) + "\n" + e.slice(s + 1) : l += e.slice(o),
        l.slice(1)
    }
    function Hr(e, t, r, n) {
        var i, o, s, a = "", l = e.tag;
        for (i = 0,
        o = r.length; i < o; i += 1)
            s = r[i],
            e.replacer && (s = e.replacer.call(r, String(i), s)),
            (Yr(e, t + 1, s, !0, !0, !1, !0) || void 0 === s && Yr(e, t + 1, null, !0, !0, !1, !0)) && (n && "" === a || (a += Nr(e, t)),
            e.dump && 10 === e.dump.charCodeAt(0) ? a += "-" : a += "- ",
            a += e.dump);
        e.tag = l,
        e.dump = a || "[]"
    }
    function Zr(e, t, r) {
        var n, i, o, s, a, l;
        for (o = 0,
        s = (i = r ? e.explicitTypes : e.implicitTypes).length; o < s; o += 1)
            if (((a = i[o]).instanceOf || a.predicate) && (!a.instanceOf || "object" == typeof t && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
                if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?",
                a.represent) {
                    if (l = e.styleMap[a.tag] || a.defaultStyle,
                    "[object Function]" === Cr.call(a.represent))
                        n = a.represent(t, l);
                    else {
                        if (!qr.call(a.represent, l))
                            throw new ot("!<" + a.tag + '> tag resolver accepts not "' + l + '" style');
                        n = a.represent[l](t, l)
                    }
                    e.dump = n
                }
                return !0
            }
        return !1
    }
    function Yr(e, t, r, n, i, o, s) {
        e.tag = null,
        e.dump = r,
        Zr(e, r, !1) || Zr(e, r, !0);
        var a, l = Cr.call(e.dump), c = n;
        n && (n = e.flowLevel < 0 || e.flowLevel > t);
        var p, u, f = "[object Object]" === l || "[object Array]" === l;
        if (f && (u = -1 !== (p = e.duplicates.indexOf(r))),
        (null !== e.tag && "?" !== e.tag || u || 2 !== e.indent && t > 0) && (i = !1),
        u && e.usedDuplicates[p])
            e.dump = "*ref_" + p;
        else {
            if (f && u && !e.usedDuplicates[p] && (e.usedDuplicates[p] = !0),
            "[object Object]" === l)
                n && 0 !== Object.keys(e.dump).length ? (!function(e, t, r, n) {
                    var i, o, s, a, l, c, p = "", u = e.tag, f = Object.keys(r);
                    if (!0 === e.sortKeys)
                        f.sort();
                    else if ("function" == typeof e.sortKeys)
                        f.sort(e.sortKeys);
                    else if (e.sortKeys)
                        throw new ot("sortKeys must be a boolean or a function");
                    for (i = 0,
                    o = f.length; i < o; i += 1)
                        c = "",
                        n && "" === p || (c += Nr(e, t)),
                        a = r[s = f[i]],
                        e.replacer && (a = e.replacer.call(r, s, a)),
                        Yr(e, t + 1, s, !0, !0, !0) && ((l = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? c += "?" : c += "? "),
                        c += e.dump,
                        l && (c += Nr(e, t)),
                        Yr(e, t + 1, a, !0, l) && (e.dump && 10 === e.dump.charCodeAt(0) ? c += ":" : c += ": ",
                        p += c += e.dump));
                    e.tag = u,
                    e.dump = p || "{}"
                }(e, t, e.dump, i),
                u && (e.dump = "&ref_" + p + e.dump)) : (!function(e, t, r) {
                    var n, i, o, s, a, l = "", c = e.tag, p = Object.keys(r);
                    for (n = 0,
                    i = p.length; n < i; n += 1)
                        a = "",
                        "" !== l && (a += ", "),
                        e.condenseFlow && (a += '"'),
                        s = r[o = p[n]],
                        e.replacer && (s = e.replacer.call(r, o, s)),
                        Yr(e, t, o, !1, !1) && (e.dump.length > 1024 && (a += "? "),
                        a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "),
                        Yr(e, t, s, !1, !1) && (l += a += e.dump));
                    e.tag = c,
                    e.dump = "{" + l + "}"
                }(e, t, e.dump),
                u && (e.dump = "&ref_" + p + " " + e.dump));
            else if ("[object Array]" === l)
                n && 0 !== e.dump.length ? (e.noArrayIndent && !s && t > 0 ? Hr(e, t - 1, e.dump, i) : Hr(e, t, e.dump, i),
                u && (e.dump = "&ref_" + p + e.dump)) : (!function(e, t, r) {
                    var n, i, o, s = "", a = e.tag;
                    for (n = 0,
                    i = r.length; n < i; n += 1)
                        o = r[n],
                        e.replacer && (o = e.replacer.call(r, String(n), o)),
                        (Yr(e, t, o, !1, !1) || void 0 === o && Yr(e, t, null, !1, !1)) && ("" !== s && (s += "," + (e.condenseFlow ? "" : " ")),
                        s += e.dump);
                    e.tag = a,
                    e.dump = "[" + s + "]"
                }(e, t, e.dump),
                u && (e.dump = "&ref_" + p + " " + e.dump));
            else {
                if ("[object String]" !== l) {
                    if ("[object Undefined]" === l)
                        return !1;
                    if (e.skipInvalid)
                        return !1;
                    throw new ot("unacceptable kind of an object to dump " + l)
                }
                "?" !== e.tag && Br(e, e.dump, t, o, c)
            }
            null !== e.tag && "?" !== e.tag && (a = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"),
            a = "!" === e.tag[0] ? "!" + a : "tag:yaml.org,2002:" === a.slice(0, 18) ? "!!" + a.slice(18) : "!<" + a + ">",
            e.dump = a + " " + e.dump)
        }
        return !0
    }
    function Kr(e, t) {
        var r, n, i = [], o = [];
        for (Jr(e, i, o),
        r = 0,
        n = o.length; r < n; r += 1)
            t.duplicates.push(i[o[r]]);
        t.usedDuplicates = new Array(n)
    }
    function Jr(e, t, r) {
        var n, i, o;
        if (null !== e && "object" == typeof e)
            if (-1 !== (i = t.indexOf(e)))
                -1 === r.indexOf(i) && r.push(i);
            else if (t.push(e),
            Array.isArray(e))
                for (i = 0,
                o = e.length; i < o; i += 1)
                    Jr(e[i], t, r);
            else
                for (i = 0,
                o = (n = Object.keys(e)).length; i < o; i += 1)
                    Jr(e[n[i]], t, r)
    }
    function Wr(e, t) {
        return function() {
            throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.")
        }
    }
    var Xr = {
        Type: ut,
        Schema: dt,
        FAILSAFE_SCHEMA: vt,
        JSON_SCHEMA: St,
        CORE_SCHEMA: Et,
        DEFAULT_SCHEMA: Bt,
        load: _r.load,
        loadAll: _r.loadAll,
        dump: {
            dump: function(e, t) {
                var r = new Ir(t = t || {});
                r.noRefs || Kr(e, r);
                var n = e;
                return r.replacer && (n = r.replacer.call({
                    "": n
                }, "", n)),
                Yr(r, 0, n, !0, !0) ? r.dump + "\n" : ""
            }
        }.dump,
        YAMLException: ot,
        types: {
            binary: Nt,
            float: qt,
            map: bt,
            null: kt,
            pairs: Ft,
            set: Pt,
            timestamp: Tt,
            bool: yt,
            int: xt,
            merge: It,
            omap: Rt,
            seq: mt,
            str: gt
        },
        safeLoad: Wr("safeLoad", "load"),
        safeLoadAll: Wr("safeLoadAll", "loadAll"),
        safeDump: Wr("safeDump", "dump")
    };
    const Qr = [{
        name: "frontmatter",
        transform: e=>(e.beforeParse.tap(((e,t)=>{
            const r = e.parse;
            e.parse = f(r, {
                before(e) {
                    const [r] = e.args;
                    if (!r.startsWith("---\n"))
                        return;
                    const n = r.indexOf("\n---\n");
                    if (n < 0)
                        return;
                    const i = r.slice(4, n);
                    let o;
                    try {
                        var s;
                        o = Xr.load(i),
                        null != (s = o) && s.markmap && (o.markmap = function(e) {
                            if (!e)
                                return;
                            return ["color", "extraJs", "extraCss"].forEach((t=>{
                                null != e[t] && (e[t] = function(e) {
                                    var t;
                                    let r;
                                    "string" == typeof e ? r = [e] : Array.isArray(e) && (r = e.filter((e=>e && "string" == typeof e)));
                                    return null != (t = r) && t.length ? r : void 0
                                }(e[t]))
                            }
                            )),
                            ["duration", "maxWidth", "initialExpandLevel"].forEach((t=>{
                                null != e[t] && (e[t] = function(e) {
                                    if (isNaN(+e))
                                        return;
                                    return +e
                                }(e[t]))
                            }
                            )),
                            e
                        }(o.markmap))
                    } catch (e) {
                        return
                    }
                    t.frontmatter = o;
                    const a = n + 5;
                    e.args[0] = r.slice(a)
                },
                after() {
                    e.parse = r
                }
            })
        }
        )),
        {})
    }, Ke, et];
    function en(e) {
        if ("heading" === e.type)
            e.children = e.children.filter((e=>"paragraph" !== e.type));
        else if ("list_item" === e.type) {
            var t;
            e.children = e.children.filter((t=>!["paragraph", "fence"].includes(t.type) || (e.content || (e.content = t.content,
            e.payload = i({}, e.payload, t.payload)),
            !1))),
            null != (null == (t = e.payload) ? void 0 : t.index) && (e.content = `${e.payload.index}. ${e.content}`)
        } else if ("ordered_list" === e.type) {
            var r, n;
            let t = null != (r = null == (n = e.payload) ? void 0 : n.startIndex) ? r : 1;
            e.children.forEach((e=>{
                "list_item" === e.type && (e.payload = i({}, e.payload, {
                    index: t
                }),
                t += 1)
            }
            ))
        }
        0 === e.children.length ? delete e.children : (e.children.forEach((e=>en(e))),
        1 !== e.children.length || e.children[0].content || (e.children = e.children[0].children))
    }
    function tn(e, t=0) {
        var r;
        e.depth = t,
        null == (r = e.children) || r.forEach((e=>{
            tn(e, t + 1)
        }
        ))
    }
    e.Transformer = class {
        constructor(e=Qr) {
            this.assetsMap = {},
            this.plugins = e,
            this.hooks = {
                parser: new o,
                beforeParse: new o,
                afterParse: new o,
                htmltag: new o,
                retransform: new o
            };
            const t = {};
            for (const {name: r, transform: n} of e)
                t[r] = n(this.hooks);
            this.assetsMap = t;
            const r = new Ve("full",{
                html: !0,
                breaks: !0,
                maxNesting: 1 / 0
            });
            r.renderer.rules.htmltag = f(r.renderer.rules.htmltag, {
                after: e=>{
                    this.hooks.htmltag.call(e)
                }
            }),
            this.md = r,
            this.hooks.parser.call(r)
        }
        buildTree(e) {
            const {md: t} = this
              , r = {
                type: "root",
                depth: 0,
                content: "",
                children: [],
                payload: {}
            }
              , n = [r];
            let i = 0;
            for (const r of e) {
                let e = n[n.length - 1];
                if (r.type.endsWith("_open")) {
                    const t = r.type.slice(0, -5)
                      , a = {};
                    var o;
                    if (r.lines && (a.lines = r.lines),
                    "heading" === t)
                        for (i = r.hLevel; (null == (s = e) ? void 0 : s.depth) >= i; ) {
                            var s;
                            n.pop(),
                            e = n[n.length - 1]
                        }
                    else
                        i = Math.max(i, (null == (o = e) ? void 0 : o.depth) || 0) + 1,
                        "ordered_list" === t && (a.startIndex = r.order);
                    const l = {
                        type: t,
                        depth: i,
                        payload: a,
                        content: "",
                        children: []
                    };
                    e.children.push(l),
                    n.push(l)
                } else {
                    if (!e)
                        continue;
                    if (r.type === `${e.type}_close`)
                        "heading" === e.type ? i = e.depth : (n.pop(),
                        i = 0);
                    else if ("inline" === r.type) {
                        const n = this.hooks.htmltag.tap((t=>{
                            const r = t.result.match(/^<!--([\s\S]*?)-->$/)
                              , n = null == r ? void 0 : r[1].trim().split(" ");
                            "fold" === n[0] && (e.payload.fold = ["all", "recursively"].includes(n[1]) ? 2 : 1,
                            t.result = "")
                        }
                        ))
                          , i = t.renderer.render([r], t.options, {});
                        n(),
                        e.content = `${e.content || ""}${i}`
                    } else if ("fence" === r.type) {
                        let n = t.renderer.render([r], t.options, {});
                        const o = n.match(/<code( class="[^"]*")>/);
                        o && (n = n.replace("<pre>", `<pre ${o[1]}>`)),
                        e.children.push({
                            type: r.type,
                            depth: i + 1,
                            content: n,
                            children: []
                        })
                    }
                }
            }
            return r
        }
        transform(e) {
            var t;
            const r = {
                features: {}
            };
            this.hooks.beforeParse.call(this.md, r);
            const n = this.md.parse(e, {});
            this.hooks.afterParse.call(this.md, r);
            let o = this.buildTree(n);
            return en(o),
            1 === (null == (t = o.children) ? void 0 : t.length) && (o = o.children[0]),
            tn(o),
            i({}, r, {
                root: o
            })
        }
        getAssets(e) {
            const t = []
              , r = [];
            null != e || (e = this.plugins.map((e=>e.name)));
            for (const n of e.map((e=>this.assetsMap[e])))
                n && (n.styles && t.push(...n.styles),
                n.scripts && r.push(...n.scripts));
            return {
                styles: t,
                scripts: r
            }
        }
        getUsedAssets(e) {
            const t = this.plugins.map((e=>e.name)).filter((t=>e[t]));
            return this.getAssets(t)
        }
    }
    ,
    e.builtInPlugins = Qr,
    e.fillTemplate = function(e, t, r) {
        r = i({
            baseJs: b
        }, r);
        const {scripts: n, styles: o} = t
          , a = [...o ? (l = o,
        l.map((e=>"stylesheet" === e.type ? p("link", null, s({
            rel: "stylesheet"
        }, e.data)) : p("style", e.data)))) : []];
        var l;
        const c = {
            getMarkmap: ()=>window.markmap,
            getOptions: r.getOptions,
            jsonOptions: r.jsonOptions,
            root: e
        }
          , f = [...u([...r.baseJs, ...n || [], {
            type: "iife",
            data: {
                fn: (e,t,r,n)=>{
                    const i = e();
                    window.mm = i.Markmap.create("svg#mindmap", (t || i.deriveOptions)(n), r)
                }
                ,
                getParams: ({getMarkmap: e, getOptions: t, root: r, jsonOptions: n})=>[e, t, r, n]
            }
        }], c)];
        return '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n\x3c!--CSS--\x3e\n</head>\n<body>\n<svg id="mindmap"></svg>\n\x3c!--JS--\x3e\n</body>\n</html>\n'.replace("\x3c!--CSS--\x3e", (()=>a.join(""))).replace("\x3c!--JS--\x3e", (()=>f.join("")))
    }
    ,
    e.transformerVersions = {
        "markmap-lib": "0.14.4",
        d3: "6.7.0"
    }
}
));
;
/*! markmap-view v0.14.4 | MIT License */
!function(t, e) {
    "use strict";
    function n(t) {
        if (t && t.__esModule)
            return t;
        var e = Object.create(null);
        if (t)
            for (var n in t)
                e[n] = t[n];
        return e.default = t,
        Object.freeze(e)
    }
    var r = n(e);
    /*! markmap-common v0.14.2 | MIT License */
    class i {
        constructor() {
            this.listeners = []
        }
        tap(t) {
            return this.listeners.push(t),
            ()=>this.revoke(t)
        }
        revoke(t) {
            const e = this.listeners.indexOf(t);
            e >= 0 && this.listeners.splice(e, 1)
        }
        revokeAll() {
            this.listeners.splice(0)
        }
        call(...t) {
            for (const e of this.listeners)
                e(...t)
        }
    }
    function a() {
        return a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ,
        a.apply(this, arguments)
    }
    const o = Math.random().toString(36).slice(2, 8);
    let s = 0;
    function l() {}
    function c(t, e, n="children") {
        const r = (t,i)=>e(t, (()=>{
            var e;
            null == (e = t[n]) || e.forEach((e=>{
                r(e, t)
            }
            ))
        }
        ), i);
        r(t)
    }
    function h(t) {
        if (Array.from)
            return Array.from(t);
        const e = [];
        for (let n = 0; n < t.length; n += 1)
            e.push(t[n]);
        return e
    }
    function d(t) {
        if ("string" == typeof t) {
            const e = t;
            t = t=>t.tagName === e
        }
        const e = t;
        return function() {
            let t = h(this.childNodes);
            return e && (t = t.filter((t=>e(t)))),
            t
        }
    }
    function u(t, e, n) {
        const r = document.createElement(t);
        return e && Object.entries(e).forEach((([t,e])=>{
            r[t] = e
        }
        )),
        n && Object.entries(n).forEach((([t,e])=>{
            r.setAttribute(t, e)
        }
        )),
        r
    }
    const p = function(t) {
        const e = {};
        return function(...n) {
            const r = `${n[0]}`;
            let i = e[r];
            return i || (i = {
                value: t(...n)
            },
            e[r] = i),
            i.value
        }
    }((t=>{
        document.head.append(u("link", {
            rel: "preload",
            as: "script",
            href: t
        }))
    }
    ));
    async function f(t, e) {
        if (!t.loaded && ("script" === t.type && (t.loaded = new Promise(((e,n)=>{
            var r;
            document.head.append(u("script", a({}, t.data, {
                onload: e,
                onerror: n
            }))),
            null != (r = t.data) && r.src || e(void 0)
        }
        )).then((()=>{
            t.loaded = !0
        }
        ))),
        "iife" === t.type)) {
            const {fn: n, getParams: r} = t.data;
            n(...(null == r ? void 0 : r(e)) || []),
            t.loaded = !0
        }
        await t.loaded
    }
    function m(t) {
        t.loaded || (t.loaded = !0,
        "style" === t.type ? document.head.append(u("style", {
            textContent: t.data
        })) : "stylesheet" === t.type && document.head.append(u("link", a({
            rel: "stylesheet"
        }, t.data))))
    }
    function g() {
        return g = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ,
        g.apply(this, arguments)
    }
    function y(t) {
        var e = 0
          , n = t.children
          , r = n && n.length;
        if (r)
            for (; --r >= 0; )
                e += n[r].value;
        else
            e = 1;
        t.value = e
    }
    function v(t, e) {
        var n, r, i, a, o, s = new b(t), l = +t.value && (s.value = t.value), c = [s];
        for (null == e && (e = x); n = c.pop(); )
            if (l && (n.value = +n.data.value),
            (i = e(n.data)) && (o = i.length))
                for (n.children = new Array(o),
                a = o - 1; a >= 0; --a)
                    c.push(r = n.children[a] = new b(i[a])),
                    r.parent = n,
                    r.depth = n.depth + 1;
        return s.eachBefore(z)
    }
    function x(t) {
        return t.children
    }
    function k(t) {
        t.data = t.data.data
    }
    function z(t) {
        var e = 0;
        do {
            t.height = e
        } while ((t = t.parent) && t.height < ++e)
    }
    function b(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    b.prototype = v.prototype = {
        constructor: b,
        count: function() {
            return this.eachAfter(y)
        },
        each: function(t) {
            var e, n, r, i, a = this, o = [a];
            do {
                for (e = o.reverse(),
                o = []; a = e.pop(); )
                    if (t(a),
                    n = a.children)
                        for (r = 0,
                        i = n.length; r < i; ++r)
                            o.push(n[r])
            } while (o.length);
            return this
        },
        eachAfter: function(t) {
            for (var e, n, r, i = this, a = [i], o = []; i = a.pop(); )
                if (o.push(i),
                e = i.children)
                    for (n = 0,
                    r = e.length; n < r; ++n)
                        a.push(e[n]);
            for (; i = o.pop(); )
                t(i);
            return this
        },
        eachBefore: function(t) {
            for (var e, n, r = this, i = [r]; r = i.pop(); )
                if (t(r),
                e = r.children)
                    for (n = e.length - 1; n >= 0; --n)
                        i.push(e[n]);
            return this
        },
        sum: function(t) {
            return this.eachAfter((function(e) {
                for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
                    n += r[i].value;
                e.value = n
            }
            ))
        },
        sort: function(t) {
            return this.eachBefore((function(e) {
                e.children && e.children.sort(t)
            }
            ))
        },
        path: function(t) {
            for (var e = this, n = function(t, e) {
                if (t === e)
                    return t;
                var n = t.ancestors()
                  , r = e.ancestors()
                  , i = null;
                t = n.pop(),
                e = r.pop();
                for (; t === e; )
                    i = t,
                    t = n.pop(),
                    e = r.pop();
                return i
            }(e, t), r = [e]; e !== n; )
                e = e.parent,
                r.push(e);
            for (var i = r.length; t !== n; )
                r.splice(i, 0, t),
                t = t.parent;
            return r
        },
        ancestors: function() {
            for (var t = this, e = [t]; t = t.parent; )
                e.push(t);
            return e
        },
        descendants: function() {
            var t = [];
            return this.each((function(e) {
                t.push(e)
            }
            )),
            t
        },
        leaves: function() {
            var t = [];
            return this.eachBefore((function(e) {
                e.children || t.push(e)
            }
            )),
            t
        },
        links: function() {
            var t = this
              , e = [];
            return t.each((function(n) {
                n !== t && e.push({
                    source: n.parent,
                    target: n
                })
            }
            )),
            e
        },
        copy: function() {
            return v(this).eachBefore(k)
        }
    };
    var S = {
        name: "d3-flextree",
        version: "2.1.2",
        main: "build/d3-flextree.js",
        module: "index",
        "jsnext:main": "index",
        author: {
            name: "Chris Maloney",
            url: "http://chrismaloney.org"
        },
        description: "Flexible tree layout algorithm that allows for variable node sizes.",
        keywords: ["d3", "d3-module", "layout", "tree", "hierarchy", "d3-hierarchy", "plugin", "d3-plugin", "infovis", "visualization", "2d"],
        homepage: "https://github.com/klortho/d3-flextree",
        license: "WTFPL",
        repository: {
            type: "git",
            url: "https://github.com/klortho/d3-flextree.git"
        },
        scripts: {
            clean: "rm -rf build demo test",
            "build:demo": "rollup -c --environment BUILD:demo",
            "build:dev": "rollup -c --environment BUILD:dev",
            "build:prod": "rollup -c --environment BUILD:prod",
            "build:test": "rollup -c --environment BUILD:test",
            build: "rollup -c",
            lint: "eslint index.js src",
            "test:main": "node test/bundle.js",
            "test:browser": "node test/browser-tests.js",
            test: "npm-run-all test:*",
            prepare: "npm-run-all clean build lint test"
        },
        dependencies: {
            "d3-hierarchy": "^1.1.5"
        },
        devDependencies: {
            "babel-plugin-external-helpers": "^6.22.0",
            "babel-preset-es2015-rollup": "^3.0.0",
            d3: "^4.13.0",
            "d3-selection-multi": "^1.0.1",
            eslint: "^4.19.1",
            jsdom: "^11.6.2",
            "npm-run-all": "^4.1.2",
            rollup: "^0.55.3",
            "rollup-plugin-babel": "^2.7.1",
            "rollup-plugin-commonjs": "^8.0.2",
            "rollup-plugin-copy": "^0.2.3",
            "rollup-plugin-json": "^2.3.0",
            "rollup-plugin-node-resolve": "^3.0.2",
            "rollup-plugin-uglify": "^3.0.0",
            "uglify-es": "^3.3.9"
        }
    };
    const {version: w} = S
      , E = Object.freeze({
        children: t=>t.children,
        nodeSize: t=>t.data.size,
        spacing: 0
    });
    function j(t) {
        const e = Object.assign({}, E, t);
        function n(t) {
            const n = e[t];
            return "function" == typeof n ? n : ()=>n
        }
        function r(t) {
            const e = a(function() {
                const t = i()
                  , e = n("nodeSize")
                  , r = n("spacing");
                return class extends t {
                    constructor(t) {
                        super(t),
                        Object.assign(this, {
                            x: 0,
                            y: 0,
                            relX: 0,
                            prelim: 0,
                            shift: 0,
                            change: 0,
                            lExt: this,
                            lExtRelX: 0,
                            lThr: null,
                            rExt: this,
                            rExtRelX: 0,
                            rThr: null
                        })
                    }
                    get size() {
                        return e(this.data)
                    }
                    spacing(t) {
                        return r(this.data, t.data)
                    }
                    get x() {
                        return this.data.x
                    }
                    set x(t) {
                        this.data.x = t
                    }
                    get y() {
                        return this.data.y
                    }
                    set y(t) {
                        this.data.y = t
                    }
                    update() {
                        return C(this),
                        X(this),
                        this
                    }
                }
            }(), t, (t=>t.children));
            return e.update(),
            e.data
        }
        function i() {
            const t = n("nodeSize")
              , e = n("spacing");
            return class n extends v.prototype.constructor {
                constructor(t) {
                    super(t)
                }
                copy() {
                    const t = a(this.constructor, this, (t=>t.children));
                    return t.each((t=>t.data = t.data.data)),
                    t
                }
                get size() {
                    return t(this)
                }
                spacing(t) {
                    return e(this, t)
                }
                get nodes() {
                    return this.descendants()
                }
                get xSize() {
                    return this.size[0]
                }
                get ySize() {
                    return this.size[1]
                }
                get top() {
                    return this.y
                }
                get bottom() {
                    return this.y + this.ySize
                }
                get left() {
                    return this.x - this.xSize / 2
                }
                get right() {
                    return this.x + this.xSize / 2
                }
                get root() {
                    const t = this.ancestors();
                    return t[t.length - 1]
                }
                get numChildren() {
                    return this.hasChildren ? this.children.length : 0
                }
                get hasChildren() {
                    return !this.noChildren
                }
                get noChildren() {
                    return null === this.children
                }
                get firstChild() {
                    return this.hasChildren ? this.children[0] : null
                }
                get lastChild() {
                    return this.hasChildren ? this.children[this.numChildren - 1] : null
                }
                get extents() {
                    return (this.children || []).reduce(((t,e)=>n.maxExtents(t, e.extents)), this.nodeExtents)
                }
                get nodeExtents() {
                    return {
                        top: this.top,
                        bottom: this.bottom,
                        left: this.left,
                        right: this.right
                    }
                }
                static maxExtents(t, e) {
                    return {
                        top: Math.min(t.top, e.top),
                        bottom: Math.max(t.bottom, e.bottom),
                        left: Math.min(t.left, e.left),
                        right: Math.max(t.right, e.right)
                    }
                }
            }
        }
        function a(t, e, n) {
            const r = (e,i)=>{
                const a = new t(e);
                Object.assign(a, {
                    parent: i,
                    depth: null === i ? 0 : i.depth + 1,
                    height: 0,
                    length: 1
                });
                const o = n(e) || [];
                return a.children = 0 === o.length ? null : o.map((t=>r(t, a))),
                a.children && Object.assign(a, a.children.reduce(((t,e)=>({
                    height: Math.max(t.height, e.height + 1),
                    length: t.length + e.length
                })), a)),
                a
            }
            ;
            return r(e, null)
        }
        return Object.assign(r, {
            nodeSize(t) {
                return arguments.length ? (e.nodeSize = t,
                r) : e.nodeSize
            },
            spacing(t) {
                return arguments.length ? (e.spacing = t,
                r) : e.spacing
            },
            children(t) {
                return arguments.length ? (e.children = t,
                r) : e.children
            },
            hierarchy(t, n) {
                const r = void 0 === n ? e.children : n;
                return a(i(), t, r)
            },
            dump(t) {
                const e = n("nodeSize")
                  , r = t=>n=>{
                    const i = t + "  "
                      , a = t + "    "
                      , {x: o, y: s} = n
                      , l = e(n)
                      , c = n.children || []
                      , h = 0 === c.length ? " " : `,${i}children: [${a}${c.map(r(a)).join(a)}${i}],${t}`;
                    return `{ size: [${l.join(", ")}],${i}x: ${o}, y: ${s}${h}},`
                }
                ;
                return r("\n")(t)
            }
        }),
        r
    }
    j.version = w;
    const C = (t,e=0)=>(t.y = e,
    (t.children || []).reduce(((e,n)=>{
        const [r,i] = e;
        C(n, t.y + t.ySize);
        const a = (0 === r ? n.lExt : n.rExt).bottom;
        0 !== r && I(t, r, i);
        return [r + 1, D(a, r, i)]
    }
    ), [0, null]),
    O(t),
    T(t),
    t)
      , X = (t,e,n)=>{
        void 0 === e && (e = -t.relX - t.prelim,
        n = 0);
        const r = e + t.relX;
        return t.relX = r + t.prelim - n,
        t.prelim = 0,
        t.x = n + t.relX,
        (t.children || []).forEach((e=>X(e, r, t.x))),
        t
    }
      , O = t=>{
        (t.children || []).reduce(((t,e)=>{
            const [n,r] = t
              , i = n + e.shift
              , a = r + i + e.change;
            return e.relX += a,
            [i, a]
        }
        ), [0, 0])
    }
      , I = (t,e,n)=>{
        const r = t.children[e - 1]
          , i = t.children[e];
        let a = r
          , o = r.relX
          , s = i
          , l = i.relX
          , c = !0;
        for (; a && s; ) {
            a.bottom > n.lowY && (n = n.next);
            const r = o + a.prelim - (l + s.prelim) + a.xSize / 2 + s.xSize / 2 + a.spacing(s);
            (r > 0 || r < 0 && c) && (l += r,
            M(i, r),
            A(t, e, n.index, r)),
            c = !1;
            const h = a.bottom
              , d = s.bottom;
            h <= d && (a = R(a),
            a && (o += a.relX)),
            h >= d && (s = $(s),
            s && (l += s.relX))
        }
        !a && s ? B(t, e, s, l) : a && !s && N(t, e, a, o)
    }
      , M = (t,e)=>{
        t.relX += e,
        t.lExtRelX += e,
        t.rExtRelX += e
    }
      , A = (t,e,n,r)=>{
        const i = t.children[e]
          , a = e - n;
        if (a > 1) {
            const e = r / a;
            t.children[n + 1].shift += e,
            i.shift -= e,
            i.change -= r - e
        }
    }
      , $ = t=>t.hasChildren ? t.firstChild : t.lThr
      , R = t=>t.hasChildren ? t.lastChild : t.rThr
      , B = (t,e,n,r)=>{
        const i = t.firstChild
          , a = i.lExt
          , o = t.children[e];
        a.lThr = n;
        const s = r - n.relX - i.lExtRelX;
        a.relX += s,
        a.prelim -= s,
        i.lExt = o.lExt,
        i.lExtRelX = o.lExtRelX
    }
      , N = (t,e,n,r)=>{
        const i = t.children[e]
          , a = i.rExt
          , o = t.children[e - 1];
        a.rThr = n;
        const s = r - n.relX - i.rExtRelX;
        a.relX += s,
        a.prelim -= s,
        i.rExt = o.rExt,
        i.rExtRelX = o.rExtRelX
    }
      , T = t=>{
        if (t.hasChildren) {
            const e = t.firstChild
              , n = t.lastChild
              , r = (e.prelim + e.relX - e.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
            Object.assign(t, {
                prelim: r,
                lExt: e.lExt,
                lExtRelX: e.lExtRelX,
                rExt: n.rExt,
                rExtRelX: n.rExtRelX
            })
        }
    }
      , D = (t,e,n)=>{
        for (; null !== n && t >= n.lowY; )
            n = n.next;
        return {
            lowY: t,
            index: e,
            next: n
        }
    }
    ;
    /*! @gera2ld/jsx-dom v2.1.1 | ISC License */
    var H = "http://www.w3.org/1999/xlink"
      , L = {
        show: H,
        actuate: H,
        href: H
    };
    function P(t, e) {
        var n;
        if ("string" == typeof t)
            n = 1;
        else {
            if ("function" != typeof t)
                throw new Error("Invalid VNode type");
            n = 2
        }
        return {
            vtype: n,
            type: t,
            props: e
        }
    }
    function F(t) {
        return t.children
    }
    var Y = {
        isSvg: !1
    };
    function W(t, e) {
        if (1 === e.type)
            null != e.node && t.append(e.node);
        else {
            if (4 !== e.type)
                throw new Error("Unkown ref type " + JSON.stringify(e));
            e.children.forEach((function(e) {
                W(t, e)
            }
            ))
        }
    }
    var _ = {
        className: "class",
        labelFor: "for"
    };
    function U(t, e, n, r) {
        if (e = _[e] || e,
        !0 === n)
            t.setAttribute(e, "");
        else if (!1 === n)
            t.removeAttribute(e);
        else {
            var i = r ? L[e] : void 0;
            void 0 !== i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
        }
    }
    function V(t, e) {
        if (void 0 === e && (e = Y),
        null == t || "boolean" == typeof t)
            return {
                type: 1,
                node: null
            };
        if (t instanceof Node)
            return {
                type: 1,
                node: t
            };
        if (2 === (null == (o = t) ? void 0 : o.vtype)) {
            var n = t
              , r = n.type
              , i = n.props;
            if (r === F) {
                var a = document.createDocumentFragment();
                if (i.children)
                    W(a, V(i.children, e));
                return {
                    type: 1,
                    node: a
                }
            }
            return V(r(i), e)
        }
        var o;
        if (function(t) {
            return "string" == typeof t || "number" == typeof t
        }(t))
            return {
                type: 1,
                node: document.createTextNode("" + t)
            };
        if (function(t) {
            return 1 === (null == t ? void 0 : t.vtype)
        }(t)) {
            var s, l, c = t, h = c.type, d = c.props;
            if (e.isSvg || "svg" !== h || (e = Object.assign({}, e, {
                isSvg: !0
            })),
            function(t, e, n) {
                for (var r in e)
                    "key" !== r && "children" !== r && "ref" !== r && ("dangerouslySetInnerHTML" === r ? t.innerHTML = e[r].__html : "innerHTML" === r || "textContent" === r || "innerText" === r ? t[r] = e[r] : r.startsWith("on") ? t[r.toLowerCase()] = e[r] : U(t, r, e[r], n.isSvg))
            }(s = e.isSvg ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h), d, e),
            d.children) {
                var u = e;
                e.isSvg && "foreignObject" === h && (u = Object.assign({}, u, {
                    isSvg: !1
                })),
                l = V(d.children, u)
            }
            null != l && W(s, l);
            var p = d.ref;
            return "function" == typeof p && p(s),
            {
                type: 1,
                node: s
            }
        }
        if (Array.isArray(t))
            return {
                type: 4,
                children: t.map((function(t) {
                    return V(t, e)
                }
                ))
            };
        throw new Error("mount: Invalid Vnode!")
    }
    function Z(t) {
        for (var e = [], n = 0; n < t.length; n += 1) {
            var r = t[n];
            Array.isArray(r) ? e = e.concat(Z(r)) : null != r && e.push(r)
        }
        return e
    }
    function G(t) {
        return 1 === t.type ? t.node : t.children.map(G)
    }
    function J(t) {
        return Array.isArray(t) ? Z(t.map(J)) : G(V(t))
    }
    var K = ".markmap{font:300 16px/20px sans-serif}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign a{color:#0097e6}.markmap-foreign a:hover{color:#00a8ff}.markmap-foreign code{background-color:#f0f0f0;border-radius:2px;color:#555;font-size:calc(1em - 2px)}.markmap-foreign :not(pre)>code{padding:.2em .4em}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:bolder}.markmap-foreign mark{background:#ffeaa7}.markmap-foreign pre,.markmap-foreign pre[class*=language-]{margin:0;padding:.2em .4em}"
      , q = ".markmap-container{height:0;left:-100px;overflow:hidden;position:absolute;top:-100px;width:0}.markmap-container>.markmap-foreign{display:inline-block}.markmap-container>.markmap-foreign>div:last-child{white-space:nowrap}";
    function Q(t) {
        const e = t.data;
        return Math.max(4 - 2 * e.depth, 1.5)
    }
    function tt(t, e) {
        return t[r.minIndex(t, e)]
    }
    function et(t) {
        t.stopPropagation()
    }
    const nt = new i
      , rt = r.scaleOrdinal(r.schemeCategory10)
      , it = "undefined" != typeof navigator && navigator.userAgent.includes("Macintosh");
    class at {
        constructor(t, e) {
            this.revokers = [],
            ["handleZoom", "handleClick", "handlePan"].forEach((t=>{
                this[t] = this[t].bind(this)
            }
            )),
            this.viewHooks = {
                transformHtml: new i
            },
            this.svg = t.datum ? t : r.select(t),
            this.styleNode = this.svg.append("style"),
            this.zoom = r.zoom().filter((t=>this.options.scrollForPan && "wheel" === t.type ? t.ctrlKey && !t.button : !(t.ctrlKey && "wheel" !== t.type || t.button))).on("zoom", this.handleZoom),
            this.setOptions(e),
            this.state = {
                id: this.options.id || this.svg.attr("id") || (s += 1,
                `mm-${o}-${s}`)
            },
            this.g = this.svg.append("g"),
            this.revokers.push(nt.tap((()=>{
                this.setData()
            }
            )))
        }
        getStyleContent() {
            const {style: t} = this.options
              , {id: e} = this.state
              , n = "function" == typeof t ? t(e) : "";
            return [this.options.embedGlobalCSS && K, n].filter(Boolean).join("\n")
        }
        updateStyle() {
            this.svg.attr("class", function(t, ...e) {
                const n = (t || "").split(" ").filter(Boolean);
                return e.forEach((t=>{
                    t && n.indexOf(t) < 0 && n.push(t)
                }
                )),
                n.join(" ")
            }(this.svg.attr("class"), "markmap", this.state.id));
            const t = this.getStyleContent();
            this.styleNode.text(t)
        }
        handleZoom(t) {
            const {transform: e} = t;
            this.g.attr("transform", e)
        }
        handlePan(t) {
            t.preventDefault();
            const e = r.zoomTransform(this.svg.node())
              , n = e.translate(-t.deltaX / e.k, -t.deltaY / e.k);
            this.svg.call(this.zoom.transform, n)
        }
        handleClick(t, e) {
            var n;
            const {data: r} = e;
            r.payload = g({}, r.payload, {
                fold: null != (n = r.payload) && n.fold ? 0 : 1
            }),
            this.renderData(e.data)
        }
        initializeData(t) {
            let e = 0;
            const {color: n, nodeMinHeight: r, maxWidth: i, initialExpandLevel: a} = this.options
              , {id: o} = this.state
              , s = J(P("div", {
                className: `markmap-container markmap ${o}-g`
            }))
              , l = J(P("style", {
                children: [this.getStyleContent(), q].join("\n")
            }));
            document.body.append(s, l);
            const d = i ? `max-width: ${i}px` : "";
            let u = 0;
            c(t, ((t,r,i)=>{
                var o, l, c;
                t.children = null == (o = t.children) ? void 0 : o.map((t=>g({}, t))),
                e += 1;
                const h = J(P("div", {
                    className: "markmap-foreign",
                    style: d,
                    children: P("div", {
                        dangerouslySetInnerHTML: {
                            __html: t.content
                        }
                    })
                }));
                s.append(h),
                t.state = g({}, t.state, {
                    id: e,
                    el: h.firstChild
                }),
                t.state.path = [null == i || null == (l = i.state) ? void 0 : l.path, t.state.id].filter(Boolean).join("."),
                n(t);
                const p = 2 === (null == (c = t.payload) ? void 0 : c.fold);
                p ? u += 1 : (u || a >= 0 && t.depth >= a) && (t.payload = g({}, t.payload, {
                    fold: 1
                })),
                r(),
                p && (u -= 1)
            }
            ));
            const p = h(s.childNodes).map((t=>t.firstChild));
            this.viewHooks.transformHtml.call(this, p),
            p.forEach((t=>{
                t.parentNode.append(t.cloneNode(!0))
            }
            )),
            c(t, ((t,e,n)=>{
                var i;
                const a = t.state.el.getBoundingClientRect();
                t.content = t.state.el.innerHTML,
                t.state.size = [Math.ceil(a.width) + 1, Math.max(Math.ceil(a.height), r)],
                t.state.key = [null == n || null == (i = n.state) ? void 0 : i.id, t.state.id].filter(Boolean).join(".") + t.content,
                e()
            }
            )),
            s.remove(),
            l.remove()
        }
        setOptions(t) {
            this.options = g({}, at.defaultOptions, t),
            this.options.zoom ? this.svg.call(this.zoom) : this.svg.on(".zoom", null),
            this.svg.on("wheel", this.options.pan ? this.handlePan : null)
        }
        setData(t, e) {
            t && (this.state.data = t),
            e && this.setOptions(e),
            this.initializeData(this.state.data),
            this.updateStyle(),
            this.renderData()
        }
        renderData(t) {
            var e, n;
            if (!this.state.data)
                return;
            const {spacingHorizontal: i, paddingX: a, spacingVertical: o, autoFit: s, color: l} = this.options
              , h = j().children((t=>{
                var e;
                return !(null != (e = t.payload) && e.fold) && t.children
            }
            )).nodeSize((t=>{
                const [e,n] = t.data.state.size;
                return [n, e + (e ? 2 * a : 0) + i]
            }
            )).spacing(((t,e)=>t.parent === e.parent ? o : 2 * o))
              , u = h.hierarchy(this.state.data);
            h(u),
            function(t, e) {
                c(t, ((t,n)=>{
                    t.ySizeInner = t.ySize - e,
                    t.y += e,
                    n()
                }
                ), "children")
            }(u, i);
            const p = u.descendants().reverse()
              , f = u.links()
              , m = r.linkHorizontal()
              , g = r.min(p, (t=>t.x - t.xSize / 2))
              , y = r.max(p, (t=>t.x + t.xSize / 2))
              , v = r.min(p, (t=>t.y))
              , x = r.max(p, (t=>t.y + t.ySizeInner));
            Object.assign(this.state, {
                minX: g,
                maxX: y,
                minY: v,
                maxY: x
            }),
            s && this.fit();
            const k = t && p.find((e=>e.data === t)) || u
              , z = null != (e = k.data.state.x0) ? e : k.x
              , b = null != (n = k.data.state.y0) ? n : k.y
              , S = this.g.selectAll(d("g")).data(p, (t=>t.data.state.key))
              , w = S.enter().append("g").attr("data-depth", (t=>t.data.depth)).attr("data-path", (t=>t.data.state.path)).attr("transform", (t=>`translate(${b + k.ySizeInner - t.ySizeInner},${z + k.xSize / 2 - t.xSize})`))
              , E = this.transition(S.exit());
            E.select("line").attr("x1", (t=>t.ySizeInner)).attr("x2", (t=>t.ySizeInner)),
            E.select("foreignObject").style("opacity", 0),
            E.attr("transform", (t=>`translate(${k.y + k.ySizeInner - t.ySizeInner},${k.x + k.xSize / 2 - t.xSize})`)).remove();
            const C = S.merge(w).attr("class", (t=>{
                var e;
                return ["markmap-node", (null == (e = t.data.payload) ? void 0 : e.fold) && "markmap-fold"].filter(Boolean).join(" ")
            }
            ));
            this.transition(C).attr("transform", (t=>`translate(${t.y},${t.x - t.xSize / 2})`));
            const X = C.selectAll(d("line")).data((t=>[t]), (t=>t.data.state.key)).join((t=>t.append("line").attr("x1", (t=>t.ySizeInner)).attr("x2", (t=>t.ySizeInner))), (t=>t), (t=>t.remove()));
            this.transition(X).attr("x1", -1).attr("x2", (t=>t.ySizeInner + 2)).attr("y1", (t=>t.xSize)).attr("y2", (t=>t.xSize)).attr("stroke", (t=>l(t.data))).attr("stroke-width", Q);
            const O = C.selectAll(d("circle")).data((t=>t.data.children ? [t] : []), (t=>t.data.state.key)).join((t=>t.append("circle").attr("stroke-width", "1.5").attr("cx", (t=>t.ySizeInner)).attr("cy", (t=>t.xSize)).attr("r", 0).on("click", ((t,e)=>this.handleClick(t, e)))), (t=>t), (t=>t.remove()));
            this.transition(O).attr("r", 6).attr("cx", (t=>t.ySizeInner)).attr("cy", (t=>t.xSize)).attr("stroke", (t=>l(t.data))).attr("fill", (t=>{
                var e;
                return null != (e = t.data.payload) && e.fold && t.data.children ? l(t.data) : "#fff"
            }
            ));
            const I = C.selectAll(d("foreignObject")).data((t=>[t]), (t=>t.data.state.key)).join((t=>{
                const e = t.append("foreignObject").attr("class", "markmap-foreign").attr("x", a).attr("y", 0).style("opacity", 0).on("mousedown", et).on("dblclick", et);
                return e.append("xhtml:div").select((function(t) {
                    const e = t.data.state.el.cloneNode(!0);
                    return this.replaceWith(e),
                    e
                }
                )).attr("xmlns", "http://www.w3.org/1999/xhtml"),
                e
            }
            ), (t=>t), (t=>t.remove())).attr("width", (t=>Math.max(0, t.ySizeInner - 2 * a))).attr("height", (t=>t.xSize));
            this.transition(I).style("opacity", 1);
            const M = this.g.selectAll(d("path")).data(f, (t=>t.target.data.state.key)).join((t=>{
                const e = [b + k.ySizeInner, z + k.xSize / 2];
                return t.insert("path", "g").attr("class", "markmap-link").attr("data-depth", (t=>t.target.data.depth)).attr("data-path", (t=>t.target.data.state.path)).attr("d", m({
                    source: e,
                    target: e
                }))
            }
            ), (t=>t), (t=>{
                const e = [k.y + k.ySizeInner, k.x + k.xSize / 2];
                return this.transition(t).attr("d", m({
                    source: e,
                    target: e
                })).remove()
            }
            ));
            this.transition(M).attr("stroke", (t=>l(t.target.data))).attr("stroke-width", (t=>Q(t.target))).attr("d", (t=>{
                const e = [t.source.y + t.source.ySizeInner, t.source.x + t.source.xSize / 2]
                  , n = [t.target.y, t.target.x + t.target.xSize / 2];
                return m({
                    source: e,
                    target: n
                })
            }
            )),
            p.forEach((t=>{
                t.data.state.x0 = t.x,
                t.data.state.y0 = t.y
            }
            ))
        }
        transition(t) {
            const {duration: e} = this.options;
            return t.transition().duration(e)
        }
        async fit() {
            const t = this.svg.node()
              , {width: e, height: n} = t.getBoundingClientRect()
              , {fitRatio: i} = this.options
              , {minX: a, maxX: o, minY: s, maxY: c} = this.state
              , h = c - s
              , d = o - a
              , u = Math.min(e / h * i, n / d * i, 2)
              , p = r.zoomIdentity.translate((e - h * u) / 2 - s * u, (n - d * u) / 2 - a * u).scale(u);
            return this.transition(this.svg).call(this.zoom.transform, p).end().catch(l)
        }
        async ensureView(t, e) {
            let n, i;
            if (this.g.selectAll(d("g")).each((function(e) {
                e.data === t && (n = this,
                i = e)
            }
            )),
            !n || !i)
                return;
            const a = this.svg.node()
              , o = a.getBoundingClientRect()
              , s = r.zoomTransform(a)
              , [c,h] = [i.y, i.y + i.ySizeInner + 2].map((t=>t * s.k + s.x))
              , [u,p] = [i.x - i.xSize / 2, i.x + i.xSize / 2].map((t=>t * s.k + s.y))
              , f = g({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, e)
              , m = [f.left - c, o.width - f.right - h]
              , y = [f.top - u, o.height - f.bottom - p]
              , v = m[0] * m[1] > 0 ? tt(m, Math.abs) / s.k : 0
              , x = y[0] * y[1] > 0 ? tt(y, Math.abs) / s.k : 0;
            if (v || x) {
                const t = s.translate(v, x);
                return this.transition(this.svg).call(this.zoom.transform, t).end().catch(l)
            }
        }
        async rescale(t) {
            const e = this.svg.node()
              , {width: n, height: i} = e.getBoundingClientRect()
              , a = n / 2
              , o = i / 2
              , s = r.zoomTransform(e)
              , c = s.translate((a - s.x) * (1 - t) / s.k, (o - s.y) * (1 - t) / s.k).scale(t);
            return this.transition(this.svg).call(this.zoom.transform, c).end().catch(l)
        }
        destroy() {
            this.svg.on(".zoom", null),
            this.svg.html(null),
            this.revokers.forEach((t=>{
                t()
            }
            ))
        }
        static create(t, e, n) {
            const r = new at(t,e);
            return n && (r.setData(n),
            r.fit()),
            r
        }
    }
    at.defaultOptions = {
        autoFit: !1,
        color: t=>rt(`${t.state.path}`),
        duration: 500,
        embedGlobalCSS: !0,
        fitRatio: .95,
        maxWidth: 0,
        nodeMinHeight: 16,
        paddingX: 8,
        scrollForPan: it,
        spacingHorizontal: 80,
        spacingVertical: 5,
        initialExpandLevel: -1,
        zoom: !0,
        pan: !0
    },
    t.Markmap = at,
    t.defaultColorFn = rt,
    t.deriveOptions = function(t) {
        const e = {};
        t || (t = {});
        const {color: n, colorFreezeLevel: i} = t;
        if (1 === (null == n ? void 0 : n.length)) {
            const t = n[0];
            e.color = ()=>t
        } else if (null != n && n.length) {
            const t = r.scaleOrdinal(n);
            e.color = e=>t(`${e.state.path}`)
        }
        if (i) {
            const t = e.color || at.defaultOptions.color;
            e.color = e=>(e = g({}, e, {
                state: g({}, e.state, {
                    path: e.state.path.split(".").slice(0, i).join(".")
                })
            }),
            t(e))
        }
        return ["duration", "maxWidth", "initialExpandLevel"].forEach((n=>{
            const r = t[n];
            "number" == typeof r && (e[n] = r)
        }
        )),
        ["zoom", "pan"].forEach((n=>{
            const r = t[n];
            null != r && (e[n] = !!r)
        }
        )),
        e
    }
    ,
    t.globalCSS = ".markmap{font:300 16px/20px sans-serif}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign a{color:#0097e6}.markmap-foreign a:hover{color:#00a8ff}.markmap-foreign code{background-color:#f0f0f0;border-radius:2px;color:#555;font-size:calc(1em - 2px)}.markmap-foreign :not(pre)>code{padding:.2em .4em}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:bolder}.markmap-foreign mark{background:#ffeaa7}.markmap-foreign pre,.markmap-foreign pre[class*=language-]{margin:0;padding:.2em .4em}",
    t.loadCSS = function(t) {
        for (const e of t)
            m(e)
    }
    ,
    t.loadJS = async function(t, e) {
        const n = t.filter((t=>{
            var e;
            return "script" === t.type && (null == (e = t.data) ? void 0 : e.src)
        }
        ));
        n.length > 1 && n.forEach((t=>p(t.data.src))),
        e = a({
            getMarkmap: ()=>window.markmap
        }, e);
        for (const n of t)
            await f(n, e)
    }
    ,
    t.refreshHook = nt
}(this.markmap = this.markmap || {}, d3);
//# sourceMappingURL=/sm/f87409a1fbd6c1eea5d434939e1dbcc04bf2548f738e21bde5347c7e45cff4e0.map
