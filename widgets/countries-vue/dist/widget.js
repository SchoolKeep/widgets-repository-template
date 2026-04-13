/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const V = {}, st = [], Te = () => {
}, Dn = () => !1, Yt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zt = (e) => e.startsWith("onUpdate:"), X = Object.assign, Ms = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Wr = Object.prototype.hasOwnProperty, H = (e, t) => Wr.call(e, t), P = Array.isArray, nt = (e) => At(e) === "[object Map]", Hn = (e) => At(e) === "[object Set]", sn = (e) => At(e) === "[object Date]", I = (e) => typeof e == "function", Y = (e) => typeof e == "string", Ee = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", jn = (e) => (N(e) || I(e)) && I(e.then) && I(e.catch), Nn = Object.prototype.toString, At = (e) => Nn.call(e), Br = (e) => At(e).slice(8, -1), $n = (e) => At(e) === "[object Object]", Is = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, qr = /-\w/g, ae = kt(
  (e) => e.replace(qr, (t) => t.slice(1).toUpperCase())
), Gr = /\B([A-Z])/g, Xe = kt(
  (e) => e.replace(Gr, "-$1").toLowerCase()
), Ln = kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), is = kt(
  (e) => e ? `on${Ln(e)}` : ""
), we = (e, t) => !Object.is(e, t), os = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Kn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let nn;
const Xt = () => nn || (nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = Y(n) ? Xr(n) : Rs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Y(e) || N(e))
    return e;
}
const Yr = /;(?![^(]*\))/g, zr = /:([^]+)/, kr = /\/\*[^]*?\*\//g;
function Xr(e) {
  const t = {};
  return e.replace(kr, "").split(Yr).forEach((s) => {
    if (s) {
      const n = s.split(zr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fs(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Fs(e[s]);
      n && (t += n + " ");
    }
  else if (N(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Ps(Zr);
function Un(e) {
  return !!e || e === "";
}
function ei(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Ds(e[n], t[n]);
  return s;
}
function Ds(e, t) {
  if (e === t) return !0;
  let s = sn(e), n = sn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Ee(e), n = Ee(t), s || n)
    return e === t;
  if (s = P(e), n = P(t), s || n)
    return s && n ? ei(e, t) : !1;
  if (s = N(e), n = N(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !Ds(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Vn = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Y(e) ? e : e == null ? "" : P(e) || N(e) && (e.toString === Nn || !I(e.toString)) ? Vn(e) ? tt(e.value) : JSON.stringify(e, Wn, 2) : String(e), Wn = (e, t) => Vn(t) ? Wn(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[ls(n, i) + " =>"] = r, s),
    {}
  )
} : Hn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ls(s))
} : Ee(t) ? ls(t) : N(t) && !P(t) && !$n(t) ? String(t) : t, ls = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ee(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function si() {
  return ie;
}
let U;
const cs = /* @__PURE__ */ new WeakSet();
class Bn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cs.has(this) && (cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rn(this), Jn(this);
    const t = U, s = de;
    U = this, de = !0;
    try {
      return this.fn();
    } finally {
      Yn(this), U = t, de = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, rn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bs(this) && this.run();
  }
  get dirty() {
    return bs(this);
  }
}
let qn = 0, mt, bt;
function Gn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bt, bt = e;
    return;
  }
  e.next = mt, mt = e;
}
function Hs() {
  qn++;
}
function js() {
  if (--qn > 0)
    return;
  if (bt) {
    let t = bt;
    for (bt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; mt; ) {
    let t = mt;
    for (mt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Jn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ns(n), ni(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wt) || (e.globalVersion = wt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = U, n = de;
  U = e, de = !0;
  try {
    Jn(e);
    const r = e.fn(e._value);
    (t.version === 0 || we(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = s, de = n, Yn(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ns(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ni(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const kn = [];
function Fe() {
  kn.push(de), de = !1;
}
function De() {
  const e = kn.pop();
  de = e === void 0 ? !0 : e;
}
function rn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = U;
    U = void 0;
    try {
      t();
    } finally {
      U = s;
    }
  }
}
let wt = 0;
class ri {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $s {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !de || U === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== U)
      s = this.activeLink = new ri(U, this), U.deps ? (s.prevDep = U.depsTail, U.depsTail.nextDep = s, U.depsTail = s) : U.deps = U.depsTail = s, Xn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = U.depsTail, s.nextDep = void 0, U.depsTail.nextDep = s, U.depsTail = s, U.deps === s && (U.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, wt++, this.notify(t);
  }
  notify(t) {
    Hs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      js();
    }
  }
}
function Xn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), Ct = /* @__PURE__ */ Symbol(
  ""
);
function Z(e, t, s) {
  if (de && U) {
    let n = ys.get(e);
    n || ys.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new $s()), r.map = n, r.key = s), r.track();
  }
}
function Re(e, t, s, n, r, i) {
  const o = ys.get(e);
  if (!o) {
    wt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Hs(), t === "clear")
    o.forEach(l);
  else {
    const f = P(e), h = f && Is(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === Ct || !Ee(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(Ct)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ze)), nt(e) && l(o.get(xs)));
          break;
        case "delete":
          f || (l(o.get(ze)), nt(e) && l(o.get(xs)));
          break;
        case "set":
          nt(e) && l(o.get(ze));
          break;
      }
  }
  js();
}
function Ze(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (Z(t, "iterate", Ct), /* @__PURE__ */ fe(e) ? t : t.map(he));
}
function Zt(e) {
  return Z(e = /* @__PURE__ */ D(e), "iterate", Ct), e;
}
function ve(e, t) {
  return /* @__PURE__ */ He(e) ? ot(/* @__PURE__ */ ke(e) ? he(t) : t) : he(t);
}
const ii = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => ve(this, e));
  },
  concat(...e) {
    return Ze(this).concat(
      ...e.map((t) => P(t) ? Ze(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = ve(this, e[1]), e));
  },
  every(e, t) {
    return Ae(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ae(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => ve(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ae(
      this,
      "find",
      e,
      t,
      (s) => ve(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ae(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ae(
      this,
      "findLast",
      e,
      t,
      (s) => ve(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ae(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ae(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return us(this, "includes", e);
  },
  indexOf(...e) {
    return us(this, "indexOf", e);
  },
  join(e) {
    return Ze(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return us(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ht(this, "pop");
  },
  push(...e) {
    return ht(this, "push", e);
  },
  reduce(e, ...t) {
    return on(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return on(this, "reduceRight", e, t);
  },
  shift() {
    return ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ht(this, "splice", e);
  },
  toReversed() {
    return Ze(this).toReversed();
  },
  toSorted(e) {
    return Ze(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ze(this).toSpliced(...e);
  },
  unshift(...e) {
    return ht(this, "unshift", e);
  },
  values() {
    return fs(this, "values", (e) => ve(this, e));
  }
};
function fs(e, t, s) {
  const n = Zt(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ fe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const oi = Array.prototype;
function Ae(e, t, s, n, r, i) {
  const o = Zt(e), l = o !== e && !/* @__PURE__ */ fe(e), f = o[t];
  if (f !== oi[t]) {
    const p = f.apply(e, i);
    return l ? he(p) : p;
  }
  let h = s;
  o !== e && (l ? h = function(p, w) {
    return s.call(this, ve(e, p), w, e);
  } : s.length > 2 && (h = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = f.call(o, h, n);
  return l && r ? r(a) : a;
}
function on(e, t, s, n) {
  const r = Zt(e), i = r !== e && !/* @__PURE__ */ fe(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(h, a, p) {
    return l && (l = !1, h = ve(e, h)), s.call(this, h, ve(e, a), p, e);
  }) : s.length > 3 && (o = function(h, a, p) {
    return s.call(this, h, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? ve(e, f) : f;
}
function us(e, t, s) {
  const n = /* @__PURE__ */ D(e);
  Z(n, "iterate", Ct);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Vs(s[0]) ? (s[0] = /* @__PURE__ */ D(s[0]), n[t](...s)) : r;
}
function ht(e, t, s = []) {
  Fe(), Hs();
  const n = (/* @__PURE__ */ D(e))[t].apply(e, s);
  return js(), De(), n;
}
const li = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), Zn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ee)
);
function ci(e) {
  Ee(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class Qn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? bi : nr : i ? sr : tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let f;
      if (o && (f = ii[s]))
        return f;
      if (s === "hasOwnProperty")
        return ci;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Q(t) ? t : n
    );
    if ((Ee(s) ? Zn.has(s) : li(s)) || (r || Z(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ Q(l)) {
      const f = o && Is(s) ? l : l.value;
      return r && N(f) ? /* @__PURE__ */ Ss(f) : f;
    }
    return N(l) ? r ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ Ks(l) : l;
  }
}
class er extends Qn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = P(t) && Is(s);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ He(i);
      if (!/* @__PURE__ */ fe(n) && !/* @__PURE__ */ He(n) && (i = /* @__PURE__ */ D(i), n = /* @__PURE__ */ D(n)), !o && /* @__PURE__ */ Q(i) && !/* @__PURE__ */ Q(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : H(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ Q(t) ? t : r
    );
    return t === /* @__PURE__ */ D(r) && (l ? we(n, i) && Re(t, "set", s, n) : Re(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = H(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Re(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ee(s) || !Zn.has(s)) && Z(t, "has", s), n;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      P(t) ? "length" : ze
    ), Reflect.ownKeys(t);
  }
}
class fi extends Qn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const ui = /* @__PURE__ */ new er(), ai = /* @__PURE__ */ new fi(), di = /* @__PURE__ */ new er(!0);
const vs = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function hi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ D(r), o = nt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), a = s ? vs : t ? ot : he;
    return !t && Z(
      i,
      "iterate",
      f ? xs : ze
    ), X(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = h.next();
          return w ? { value: p, done: w } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: w
          };
        }
      }
    );
  };
}
function Nt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      e || (we(r, l) && Z(o, "get", r), Z(o, "get", l));
      const { has: f } = jt(o), h = t ? vs : e ? ot : he;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Z(/* @__PURE__ */ D(r), "iterate", ze), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      return e || (we(r, l) && Z(o, "has", r), Z(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ D(l), h = t ? vs : e ? ot : he;
      return !e && Z(f, "iterate", ze), l.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return X(
    s,
    e ? {
      add: Nt("add"),
      set: Nt("set"),
      delete: Nt("delete"),
      clear: Nt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ D(this), o = jt(i), l = /* @__PURE__ */ D(r), f = !t && !/* @__PURE__ */ fe(r) && !/* @__PURE__ */ He(r) ? l : r;
        return o.has.call(i, f) || we(r, f) && o.has.call(i, r) || we(l, f) && o.has.call(i, l) || (i.add(f), Re(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ fe(i) && !/* @__PURE__ */ He(i) && (i = /* @__PURE__ */ D(i));
        const o = /* @__PURE__ */ D(this), { has: l, get: f } = jt(o);
        let h = l.call(o, r);
        h || (r = /* @__PURE__ */ D(r), h = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), h ? we(i, a) && Re(o, "set", r, i) : Re(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ D(this), { has: o, get: l } = jt(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ D(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Re(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ D(this), i = r.size !== 0, o = r.clear();
        return i && Re(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = hi(r, e, t);
  }), s;
}
function Ls(e, t) {
  const s = pi(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    H(s, r) && r in n ? s : n,
    r,
    i
  );
}
const gi = {
  get: /* @__PURE__ */ Ls(!1, !1)
}, _i = {
  get: /* @__PURE__ */ Ls(!1, !0)
}, mi = {
  get: /* @__PURE__ */ Ls(!0, !1)
};
const tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap();
function yi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yi(Br(e));
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return /* @__PURE__ */ He(e) ? e : Us(
    e,
    !1,
    ui,
    gi,
    tr
  );
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return Us(
    e,
    !1,
    di,
    _i,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Us(
    e,
    !0,
    ai,
    mi,
    nr
  );
}
function Us(e, t, s, n, r) {
  if (!N(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = xi(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return /* @__PURE__ */ He(e) ? /* @__PURE__ */ ke(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ D(t) : e;
}
function Si(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Kn(e, "__v_skip", !0), e;
}
const he = (e) => N(e) ? /* @__PURE__ */ Ks(e) : e, ot = (e) => N(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return wi(e, !1);
}
function wi(e, t) {
  return /* @__PURE__ */ Q(e) ? e : new Ci(e, t);
}
class Ci {
  constructor(t, s) {
    this.dep = new $s(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ D(t), this._value = s ? t : he(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ fe(t) || /* @__PURE__ */ He(t);
    t = n ? t : /* @__PURE__ */ D(t), we(t, s) && (this._rawValue = t, this._value = n ? t : he(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ Q(e) ? e.value : e;
}
const Ti = {
  get: (e, t, s) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ Q(r) && !/* @__PURE__ */ Q(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function rr(e) {
  return /* @__PURE__ */ ke(e) ? e : new Proxy(e, Ti);
}
class Ei {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new $s(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Gn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return zn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t, s = !1) {
  let n, r;
  return I(e) ? n = e : (n = e.get, r = e.set), new Ei(n, r, s);
}
const $t = {}, Vt = /* @__PURE__ */ new WeakMap();
let Ye;
function Ai(e, t = !1, s = Ye) {
  if (s) {
    let n = Vt.get(s);
    n || Vt.set(s, n = []), n.push(e);
  }
}
function Pi(e, t, s = V) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (A) => r ? A : /* @__PURE__ */ fe(A) || r === !1 || r === 0 ? Ue(A, 1) : Ue(A);
  let a, p, w, C, j = !1, M = !1;
  if (/* @__PURE__ */ Q(e) ? (p = () => e.value, j = /* @__PURE__ */ fe(e)) : /* @__PURE__ */ ke(e) ? (p = () => h(e), j = !0) : P(e) ? (M = !0, j = e.some((A) => /* @__PURE__ */ ke(A) || /* @__PURE__ */ fe(A)), p = () => e.map((A) => {
    if (/* @__PURE__ */ Q(A))
      return A.value;
    if (/* @__PURE__ */ ke(A))
      return h(A);
    if (I(A))
      return f ? f(A, 2) : A();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      Fe();
      try {
        w();
      } finally {
        De();
      }
    }
    const A = Ye;
    Ye = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      Ye = A;
    }
  } : p = Te, t && r) {
    const A = p, z = r === !0 ? 1 / 0 : r;
    p = () => Ue(A(), z);
  }
  const G = si(), B = () => {
    a.stop(), G && G.active && Ms(G.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...z) => {
      A(...z), B();
    };
  }
  let R = M ? new Array(e.length).fill($t) : $t;
  const W = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const z = a.run();
        if (r || j || (M ? z.some((Ne, pe) => we(Ne, R[pe])) : we(z, R))) {
          w && w();
          const Ne = Ye;
          Ye = a;
          try {
            const pe = [
              z,
              // pass undefined as the old value when it's changed for the first time
              R === $t ? void 0 : M && R[0] === $t ? [] : R,
              C
            ];
            R = z, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Ye = Ne;
          }
        }
      } else
        a.run();
  };
  return l && l(W), a = new Bn(p), a.scheduler = o ? () => o(W, !1) : W, C = (A) => Ai(A, !1, a), w = a.onStop = () => {
    const A = Vt.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const z of A) z();
      Vt.delete(a);
    }
  }, t ? n ? W(!0) : R = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function Ue(e, t = 1 / 0, s) {
  if (t <= 0 || !N(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ Q(e))
    Ue(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Ue(e[n], t, s);
  else if (Hn(e) || nt(e))
    e.forEach((n) => {
      Ue(n, t, s);
    });
  else if ($n(e)) {
    for (const n in e)
      Ue(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ue(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Pt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Qt(r, t, s);
  }
}
function Oe(e, t, s, n) {
  if (I(e)) {
    const r = Pt(e, t, s, n);
    return r && jn(r) && r.catch((i) => {
      Qt(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, s, n));
    return r;
  }
}
function Qt(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || V;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Fe(), Pt(i, null, 10, [
        e,
        f,
        h
      ]), De();
      return;
    }
  }
  Mi(e, s, r, n, o);
}
function Mi(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const se = [];
let xe = -1;
const rt = [];
let Ke = null, et = 0;
const ir = /* @__PURE__ */ Promise.resolve();
let Wt = null;
function Ii(e) {
  const t = Wt || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ri(e) {
  let t = xe + 1, s = se.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = se[n], i = Tt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = Tt(e), s = se[se.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tt(s) ? se.push(e) : se.splice(Ri(t), 0, e), e.flags |= 1, or();
  }
}
function or() {
  Wt || (Wt = ir.then(cr));
}
function Fi(e) {
  P(e) ? rt.push(...e) : Ke && e.id === -1 ? Ke.splice(et + 1, 0, e) : e.flags & 1 || (rt.push(e), e.flags |= 1), or();
}
function ln(e, t, s = xe + 1) {
  for (; s < se.length; s++) {
    const n = se[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      se.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function lr(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort(
      (s, n) => Tt(s) - Tt(n)
    );
    if (rt.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, et = 0; et < Ke.length; et++) {
      const s = Ke[et];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ke = null, et = 0;
  }
}
const Tt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  try {
    for (xe = 0; xe < se.length; xe++) {
      const t = se[xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xe < se.length; xe++) {
      const t = se[xe];
      t && (t.flags &= -2);
    }
    xe = -1, se.length = 0, lr(), Wt = null, (se.length || rt.length) && cr();
  }
}
let Ce = null, fr = null;
function Bt(e) {
  const t = Ce;
  return Ce = e, fr = e && e.type.__scopeId || null, t;
}
function Di(e, t = Ce, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && yn(-1);
    const i = Bt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bt(i), n._d && yn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ge(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Fe(), Oe(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), De());
  }
}
function Hi(e, t) {
  if (ne) {
    let s = ne.provides;
    const n = ne.parent && ne.parent.provides;
    n === s && (s = ne.provides = Object.create(n)), s[e] = t;
  }
}
function Lt(e, t, s = !1) {
  const n = jo();
  if (n || it) {
    let r = it ? it._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const ji = /* @__PURE__ */ Symbol.for("v-scx"), Ni = () => Lt(ji);
function ds(e, t, s) {
  return ur(e, t, s);
}
function ur(e, t, s = V) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = X({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Ot) {
    if (i === "sync") {
      const C = Ni();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = Te, C.resume = Te, C.pause = Te, C;
    }
  }
  const a = ne;
  l.call = (C, j, M) => Oe(C, a, j, M);
  let p = !1;
  i === "post" ? l.scheduler = (C) => {
    re(C, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (C, j) => {
    j ? C() : Ws(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = Pi(e, t, l);
  return Ot && (h ? h.push(w) : f && w()), w;
}
function $i(e, t, s) {
  const n = this.proxy, r = Y(e) ? e.includes(".") ? ar(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = Mt(this), l = ur(r, i.bind(n), s);
  return o(), l;
}
function ar(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Li = /* @__PURE__ */ Symbol("_vte"), Ki = (e) => e.__isTeleport, Ui = /* @__PURE__ */ Symbol("_leaveCb");
function Bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    X({ name: e.name }, t, { setup: e })
  ) : e;
}
function hr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const qt = /* @__PURE__ */ new WeakMap();
function yt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (M, G) => yt(
        M,
        t && (P(t) ? t[G] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (xt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && yt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? zs(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, a = l.refs === V ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ D(p), C = p === V ? Dn : (M) => cn(a, M) ? !1 : H(w, M), j = (M, G) => !(G && cn(a, G));
  if (h != null && h !== f) {
    if (fn(t), Y(h))
      a[h] = null, C(h) && (p[h] = null);
    else if (/* @__PURE__ */ Q(h)) {
      const M = t;
      j(h, M.k) && (h.value = null), M.k && (a[M.k] = null);
    }
  }
  if (I(f))
    Pt(f, l, 12, [o, a]);
  else {
    const M = Y(f), G = /* @__PURE__ */ Q(f);
    if (M || G) {
      const B = () => {
        if (e.f) {
          const R = M ? C(f) ? p[f] : a[f] : j() || !e.k ? f.value : a[e.k];
          if (r)
            P(R) && Ms(R, i);
          else if (P(R))
            R.includes(i) || R.push(i);
          else if (M)
            a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const W = [i];
            j(f, e.k) && (f.value = W), e.k && (a[e.k] = W);
          }
        } else M ? (a[f] = o, C(f) && (p[f] = o)) : G && (j(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const R = () => {
          B(), qt.delete(e);
        };
        R.id = -1, qt.set(e, R), re(R, s);
      } else
        fn(e), B();
    }
  }
}
function fn(e) {
  const t = qt.get(e);
  t && (t.flags |= 8, qt.delete(e));
}
Xt().requestIdleCallback;
Xt().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, pr = (e) => e.type.__isKeepAlive;
function Vi(e, t) {
  gr(e, "a", t);
}
function Wi(e, t) {
  gr(e, "da", t);
}
function gr(e, t, s = ne) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (es(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      pr(r.parent.vnode) && Bi(n, t, s, r), r = r.parent;
  }
}
function Bi(e, t, s, n) {
  const r = es(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  qs(() => {
    Ms(n[t], r);
  }, s);
}
function es(e, t, s = ne, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Fe();
      const l = Mt(s), f = Oe(t, s, e, o);
      return l(), De(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const je = (e) => (t, s = ne) => {
  (!Ot || e === "sp") && es(e, (...n) => t(...n), s);
}, qi = je("bm"), _r = je("m"), Gi = je(
  "bu"
), Ji = je("u"), Yi = je(
  "bum"
), qs = je("um"), zi = je(
  "sp"
), ki = je("rtg"), Xi = je("rtc");
function Zi(e, t = ne) {
  es("ec", e, t);
}
const Qi = /* @__PURE__ */ Symbol.for("v-ndc");
function un(e, t, s, n) {
  let r;
  const i = s, o = P(e);
  if (o || Y(e)) {
    const l = o && /* @__PURE__ */ ke(e);
    let f = !1, h = !1;
    l && (f = !/* @__PURE__ */ fe(e), h = /* @__PURE__ */ He(e), e = Zt(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? h ? ot(he(e[a])) : he(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (N(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const ws = (e) => e ? Nr(e) ? zs(e) : ws(e.parent) : null, vt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => br(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ii.bind(e.proxy)),
    $watch: (e) => $i.bind(e)
  })
), hs = (e, t) => e !== V && !e.__isScriptSetup && H(e, t), eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (hs(n, t))
          return o[t] = 1, n[t];
        if (r !== V && H(r, t))
          return o[t] = 2, r[t];
        if (H(i, t))
          return o[t] = 3, i[t];
        if (s !== V && H(s, t))
          return o[t] = 4, s[t];
        Cs && (o[t] = 0);
      }
    }
    const h = vt[t];
    let a, p;
    if (h)
      return t === "$attrs" && Z(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== V && H(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, H(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return hs(r, t) ? (r[t] = s, !0) : n !== V && H(n, t) ? (n[t] = s, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== V && l[0] !== "$" && H(e, l) || hs(t, l) || H(i, l) || H(n, l) || H(vt, l) || H(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : H(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function an(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Cs = !0;
function to(e) {
  const t = br(e), s = e.proxy, n = e.ctx;
  Cs = !1, t.beforeCreate && dn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: C,
    updated: j,
    activated: M,
    deactivated: G,
    beforeDestroy: B,
    beforeUnmount: R,
    destroyed: W,
    unmounted: A,
    render: z,
    renderTracked: Ne,
    renderTriggered: pe,
    errorCaptured: $e,
    serverPrefetch: It,
    // public API
    expose: We,
    inheritAttrs: ft,
    // assets
    components: Rt,
    directives: Ft,
    filters: ns
  } = t;
  if (h && so(h, n, null), o)
    for (const q in o) {
      const L = o[q];
      I(L) && (n[q] = L.bind(s));
    }
  if (r) {
    const q = r.call(s, s);
    N(q) && (e.data = /* @__PURE__ */ Ks(q));
  }
  if (Cs = !0, i)
    for (const q in i) {
      const L = i[q], Be = I(L) ? L.bind(s, s) : I(L.get) ? L.get.bind(s, s) : Te, Dt = !I(L) && I(L.set) ? L.set.bind(s) : Te, qe = Vo({
        get: Be,
        set: Dt
      });
      Object.defineProperty(n, q, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (ge) => qe.value = ge
      });
    }
  if (l)
    for (const q in l)
      mr(l[q], n, s, q);
  if (f) {
    const q = I(f) ? f.call(s) : f;
    Reflect.ownKeys(q).forEach((L) => {
      Hi(L, q[L]);
    });
  }
  a && dn(a, e, "c");
  function ee(q, L) {
    P(L) ? L.forEach((Be) => q(Be.bind(s))) : L && q(L.bind(s));
  }
  if (ee(qi, p), ee(_r, w), ee(Gi, C), ee(Ji, j), ee(Vi, M), ee(Wi, G), ee(Zi, $e), ee(Xi, Ne), ee(ki, pe), ee(Yi, R), ee(qs, A), ee(zi, It), P(We))
    if (We.length) {
      const q = e.exposed || (e.exposed = {});
      We.forEach((L) => {
        Object.defineProperty(q, L, {
          get: () => s[L],
          set: (Be) => s[L] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === Te && (e.render = z), ft != null && (e.inheritAttrs = ft), Rt && (e.components = Rt), Ft && (e.directives = Ft), It && hr(e);
}
function so(e, t, s = Te) {
  P(e) && (e = Ts(e));
  for (const n in e) {
    const r = e[n];
    let i;
    N(r) ? "default" in r ? i = Lt(
      r.from || n,
      r.default,
      !0
    ) : i = Lt(r.from || n) : i = Lt(r), /* @__PURE__ */ Q(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function dn(e, t, s) {
  Oe(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mr(e, t, s, n) {
  let r = n.includes(".") ? ar(s, n) : () => s[n];
  if (Y(e)) {
    const i = t[e];
    I(i) && ds(r, i);
  } else if (I(e))
    ds(r, e.bind(s));
  else if (N(e))
    if (P(e))
      e.forEach((i) => mr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && ds(r, i, e);
    }
}
function br(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => Gt(f, h, o, !0)
  ), Gt(f, t, o)), N(t) && i.set(t, f), f;
}
function Gt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Gt(e, i, s, !0), r && r.forEach(
    (o) => Gt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = no[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const no = {
  data: hn,
  props: pn,
  emits: pn,
  // objects
  methods: gt,
  computed: gt,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: gt,
  directives: gt,
  // watch
  watch: io,
  // provide / inject
  provide: hn,
  inject: ro
};
function hn(e, t) {
  return t ? e ? function() {
    return X(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ro(e, t) {
  return gt(Ts(e), Ts(t));
}
function Ts(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    an(e),
    an(t ?? {})
  ) : t;
}
function io(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = X(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Dn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let oo = 0;
function lo(e, t) {
  return function(n, r = null) {
    I(n) || (n = X({}, n)), r != null && !N(r) && (r = null);
    const i = yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: oo++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Wo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && I(a.install) ? (o.add(a), a.install(h, ...p)) : I(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, w) {
        if (!f) {
          const C = h._ceVNode || Ve(n, r);
          return C.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(C, a, w), f = !0, h._container = a, a.__vue_app__ = h, zs(C.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = it;
        it = h;
        try {
          return a();
        } finally {
          it = p;
        }
      }
    };
    return h;
  };
}
let it = null;
const co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function fo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || V;
  let r = s;
  const i = t.startsWith("update:"), o = i && co(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => Y(a) ? a.trim() : a)), o.number && (r = s.map(Jr)));
  let l, f = n[l = is(t)] || // also try camelCase event handler (#2249)
  n[l = is(ae(t))];
  !f && i && (f = n[l = is(Xe(t))]), f && Oe(
    f,
    e,
    6,
    r
  );
  const h = n[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      h,
      e,
      6,
      r
    );
  }
}
const uo = /* @__PURE__ */ new WeakMap();
function xr(e, t, s = !1) {
  const n = s ? uo : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (h) => {
      const a = xr(h, t, !0);
      a && (l = !0, X(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (N(e) && n.set(e, null), null) : (P(i) ? i.forEach((f) => o[f] = null) : X(o, i), N(e) && n.set(e, o), o);
}
function ts(e, t) {
  return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Xe(t)) || H(e, t));
}
function gn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: h,
    renderCache: a,
    props: p,
    data: w,
    setupState: C,
    ctx: j,
    inheritAttrs: M
  } = e, G = Bt(e);
  let B, R;
  try {
    if (s.shapeFlag & 4) {
      const A = r || n, z = A;
      B = Se(
        h.call(
          z,
          A,
          a,
          p,
          C,
          w,
          j
        )
      ), R = l;
    } else {
      const A = t;
      B = Se(
        A.length > 1 ? A(
          p,
          { attrs: l, slots: o, emit: f }
        ) : A(
          p,
          null
        )
      ), R = t.props ? l : ao(l);
    }
  } catch (A) {
    St.length = 0, Qt(A, e, 1), B = Ve(lt);
  }
  let W = B;
  if (R && M !== !1) {
    const A = Object.keys(R), { shapeFlag: z } = W;
    A.length && z & 7 && (i && A.some(zt) && (R = ho(
      R,
      i
    )), W = ct(W, R, !1, !0));
  }
  return s.dirs && (W = ct(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && Bs(W, s.transition), B = W, Bt(G), B;
}
const ao = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Yt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ho = (e, t) => {
  const s = {};
  for (const n in e)
    (!zt(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function po(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? _n(n, o, h) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (vr(o, n, w) && !ts(h, w))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? _n(n, o, h) : !0 : !!o;
  return !1;
}
function _n(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (vr(t, e, i) && !ts(s, i))
      return !0;
  }
  return !1;
}
function vr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && N(n) && N(r) ? !Ds(n, r) : n !== r;
}
function go({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Sr = {}, wr = () => Object.create(Sr), Cr = (e) => Object.getPrototypeOf(e) === Sr;
function _o(e, t, s, n = !1) {
  const r = {}, i = wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Tr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ vi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function mo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ D(r), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (ts(e.emitsOptions, w))
          continue;
        const C = t[w];
        if (f)
          if (H(i, w))
            C !== i[w] && (i[w] = C, h = !0);
          else {
            const j = ae(w);
            r[j] = Es(
              f,
              l,
              j,
              C,
              e,
              !1
            );
          }
        else
          C !== i[w] && (i[w] = C, h = !0);
      }
    }
  } else {
    Tr(e, t, r, i) && (h = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Xe(p)) === p || !H(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Es(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !H(t, p)) && (delete i[p], h = !0);
  }
  h && Re(e.attrs, "set", "");
}
function Tr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (_t(f))
        continue;
      const h = t[f];
      let a;
      r && H(r, a = ae(f)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : ts(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ D(s), h = l || V;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Es(
        r,
        f,
        p,
        h[p],
        e,
        !H(h, p)
      );
    }
  }
  return o;
}
function Es(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = H(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Mt(r);
          n = h[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Xe(s)) && (n = !0));
  }
  return n;
}
const bo = /* @__PURE__ */ new WeakMap();
function Er(e, t, s = !1) {
  const n = s ? bo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [w, C] = Er(p, t, !0);
      X(o, w), C && l.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return N(e) && n.set(e, st), st;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = ae(i[a]);
      mn(p) && (o[p] = V);
    }
  else if (i)
    for (const a in i) {
      const p = ae(a);
      if (mn(p)) {
        const w = i[a], C = o[p] = P(w) || I(w) ? { type: w } : X({}, w), j = C.type;
        let M = !1, G = !0;
        if (P(j))
          for (let B = 0; B < j.length; ++B) {
            const R = j[B], W = I(R) && R.name;
            if (W === "Boolean") {
              M = !0;
              break;
            } else W === "String" && (G = !1);
          }
        else
          M = I(j) && j.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = M, C[
          1
          /* shouldCastTrue */
        ] = G, (M || H(C, "default")) && l.push(p);
      }
    }
  const h = [o, l];
  return N(e) && n.set(e, h), h;
}
function mn(e) {
  return e[0] !== "$" && !_t(e);
}
const Gs = (e) => e === "_" || e === "_ctx" || e === "$stable", Js = (e) => P(e) ? e.map(Se) : [Se(e)], yo = (e, t, s) => {
  if (t._n)
    return t;
  const n = Di((...r) => Js(t(...r)), s);
  return n._c = !1, n;
}, Or = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Gs(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = yo(r, i, n);
    else if (i != null) {
      const o = Js(i);
      t[r] = () => o;
    }
  }
}, Ar = (e, t) => {
  const s = Js(t);
  e.slots.default = () => s;
}, Pr = (e, t, s) => {
  for (const n in t)
    (s || !Gs(n)) && (e[n] = t[n]);
}, xo = (e, t, s) => {
  const n = e.slots = wr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Pr(n, t, s), s && Kn(n, "_", r, !0)) : Or(t, n);
  } else t && Ar(e, t);
}, vo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = V;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Pr(r, t, s) : (i = !t.$stable, Or(t, r)), o = t;
  } else t && (Ar(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Gs(l) && o[l] == null && delete r[l];
}, re = Eo;
function So(e) {
  return wo(e);
}
function wo(e, t) {
  const s = Xt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: C = Te,
    insertStaticContent: j
  } = e, M = (c, u, d, b = null, g = null, _ = null, v = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !pt(c, u) && (b = Ht(c), ge(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: S } = u;
    switch (m) {
      case ss:
        G(c, u, d, b);
        break;
      case lt:
        B(c, u, d, b);
        break;
      case gs:
        c == null && R(u, d, b, v);
        break;
      case ue:
        Rt(
          c,
          u,
          d,
          b,
          g,
          _,
          v,
          x,
          y
        );
        break;
      default:
        S & 1 ? z(
          c,
          u,
          d,
          b,
          g,
          _,
          v,
          x,
          y
        ) : S & 6 ? Ft(
          c,
          u,
          d,
          b,
          g,
          _,
          v,
          x,
          y
        ) : (S & 64 || S & 128) && m.process(
          c,
          u,
          d,
          b,
          g,
          _,
          v,
          x,
          y,
          at
        );
    }
    E != null && g ? yt(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && yt(c.ref, null, _, c, !0);
  }, G = (c, u, d, b) => {
    if (c == null)
      n(
        u.el = l(u.children),
        d,
        b
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && h(g, u.children);
    }
  }, B = (c, u, d, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      d,
      b
    ) : u.el = c.el;
  }, R = (c, u, d, b) => {
    [c.el, c.anchor] = j(
      c.children,
      u,
      d,
      b,
      c.el,
      c.anchor
    );
  }, W = ({ el: c, anchor: u }, d, b) => {
    let g;
    for (; c && c !== u; )
      g = w(c), n(c, d, b), c = g;
    n(u, d, b);
  }, A = ({ el: c, anchor: u }) => {
    let d;
    for (; c && c !== u; )
      d = w(c), r(c), c = d;
    r(u);
  }, z = (c, u, d, b, g, _, v, x, y) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null)
      Ne(
        u,
        d,
        b,
        g,
        _,
        v,
        x,
        y
      );
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), It(
          c,
          u,
          g,
          _,
          v,
          x,
          y
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, Ne = (c, u, d, b, g, _, v, x) => {
    let y, m;
    const { props: E, shapeFlag: S, transition: T, dirs: O } = c;
    if (y = c.el = o(
      c.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(y, c.children) : S & 16 && $e(
      c.children,
      y,
      null,
      b,
      g,
      ps(c, _),
      v,
      x
    ), O && Ge(c, null, b, "created"), pe(y, c, c.scopeId, v, b), E) {
      for (const $ in E)
        $ !== "value" && !_t($) && i(y, $, null, E[$], _, b);
      "value" in E && i(y, "value", null, E.value, _), (m = E.onVnodeBeforeMount) && ye(m, b, c);
    }
    O && Ge(c, null, b, "beforeMount");
    const F = Co(g, T);
    F && T.beforeEnter(y), n(y, u, d), ((m = E && E.onVnodeMounted) || F || O) && re(() => {
      try {
        m && ye(m, b, c), F && T.enter(y), O && Ge(c, null, b, "mounted");
      } finally {
      }
    }, g);
  }, pe = (c, u, d, b, g) => {
    if (d && C(c, d), b)
      for (let _ = 0; _ < b.length; _++)
        C(c, b[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Fr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const v = g.vnode;
        pe(
          c,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, $e = (c, u, d, b, g, _, v, x, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const E = c[m] = x ? Ie(c[m]) : Se(c[m]);
      M(
        null,
        E,
        u,
        d,
        b,
        g,
        _,
        v,
        x
      );
    }
  }, It = (c, u, d, b, g, _, v) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: E } = u;
    y |= c.patchFlag & 16;
    const S = c.props || V, T = u.props || V;
    let O;
    if (d && Je(d, !1), (O = T.onVnodeBeforeUpdate) && ye(O, d, u, c), E && Ge(u, c, d, "beforeUpdate"), d && Je(d, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(x, ""), m ? We(
      c.dynamicChildren,
      m,
      x,
      d,
      b,
      ps(u, g),
      _
    ) : v || L(
      c,
      u,
      x,
      null,
      d,
      b,
      ps(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        ft(x, S, T, d, g);
      else if (y & 2 && S.class !== T.class && i(x, "class", null, T.class, g), y & 4 && i(x, "style", S.style, T.style, g), y & 8) {
        const F = u.dynamicProps;
        for (let $ = 0; $ < F.length; $++) {
          const K = F[$], J = S[K], k = T[K];
          (k !== J || K === "value") && i(x, K, J, k, g, d);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !v && m == null && ft(x, S, T, d, g);
    ((O = T.onVnodeUpdated) || E) && re(() => {
      O && ye(O, d, u, c), E && Ge(u, c, d, "updated");
    }, b);
  }, We = (c, u, d, b, g, _, v) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], m = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pt(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        y,
        m,
        E,
        null,
        b,
        g,
        _,
        v,
        !0
      );
    }
  }, ft = (c, u, d, b, g) => {
    if (u !== d) {
      if (u !== V)
        for (const _ in u)
          !_t(_) && !(_ in d) && i(
            c,
            _,
            u[_],
            null,
            g,
            b
          );
      for (const _ in d) {
        if (_t(_)) continue;
        const v = d[_], x = u[_];
        v !== x && _ !== "value" && i(c, _, x, v, g, b);
      }
      "value" in d && i(c, "value", u.value, d.value, g);
    }
  }, Rt = (c, u, d, b, g, _, v, x, y) => {
    const m = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: O } = u;
    O && (x = x ? x.concat(O) : O), c == null ? (n(m, d, b), n(E, d, b), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
      E,
      g,
      _,
      v,
      x,
      y
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === T.length ? (We(
      c.dynamicChildren,
      T,
      d,
      g,
      _,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Mr(
      c,
      u,
      !0
      /* shallow */
    )) : L(
      c,
      u,
      d,
      E,
      g,
      _,
      v,
      x,
      y
    );
  }, Ft = (c, u, d, b, g, _, v, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      d,
      b,
      v,
      y
    ) : ns(
      u,
      d,
      b,
      g,
      _,
      v,
      y
    ) : ks(c, u, y);
  }, ns = (c, u, d, b, g, _, v) => {
    const x = c.component = Ho(
      c,
      b,
      g
    );
    if (pr(c) && (x.ctx.renderer = at), No(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, ee, v), !c.el) {
        const y = x.subTree = Ve(lt);
        B(null, y, u, d), c.placeholder = y.el;
      }
    } else
      ee(
        x,
        c,
        u,
        d,
        g,
        _,
        v
      );
  }, ks = (c, u, d) => {
    const b = u.component = c.component;
    if (po(c, u, d))
      if (b.asyncDep && !b.asyncResolved) {
        q(b, u, d);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, ee = (c, u, d, b, g, _, v) => {
    const x = () => {
      if (c.isMounted) {
        let { next: S, bu: T, u: O, parent: F, vnode: $ } = c;
        {
          const me = Ir(c);
          if (me) {
            S && (S.el = $.el, q(c, S, v)), me.asyncDep.then(() => {
              re(() => {
                c.isUnmounted || m();
              }, g);
            });
            return;
          }
        }
        let K = S, J;
        Je(c, !1), S ? (S.el = $.el, q(c, S, v)) : S = $, T && os(T), (J = S.props && S.props.onVnodeBeforeUpdate) && ye(J, F, S, $), Je(c, !0);
        const k = gn(c), _e = c.subTree;
        c.subTree = k, M(
          _e,
          k,
          // parent may have changed if it's in a teleport
          p(_e.el),
          // anchor may have changed if it's in a fragment
          Ht(_e),
          c,
          g,
          _
        ), S.el = k.el, K === null && go(c, k.el), O && re(O, g), (J = S.props && S.props.onVnodeUpdated) && re(
          () => ye(J, F, S, $),
          g
        );
      } else {
        let S;
        const { el: T, props: O } = u, { bm: F, m: $, parent: K, root: J, type: k } = c, _e = xt(u);
        Je(c, !1), F && os(F), !_e && (S = O && O.onVnodeBeforeMount) && ye(S, K, u), Je(c, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            k,
            c.parent ? c.parent.type : void 0
          );
          const me = c.subTree = gn(c);
          M(
            null,
            me,
            d,
            b,
            c,
            g,
            _
          ), u.el = me.el;
        }
        if ($ && re($, g), !_e && (S = O && O.onVnodeMounted)) {
          const me = u;
          re(
            () => ye(S, K, me),
            g
          );
        }
        (u.shapeFlag & 256 || K && xt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && re(c.a, g), c.isMounted = !0, u = d = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Bn(x);
    c.scope.off();
    const m = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Ws(E), Je(c, !0), m();
  }, q = (c, u, d) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, mo(c, u.props, b, d), vo(c, u.children, d), Fe(), ln(c), De();
  }, L = (c, u, d, b, g, _, v, x, y = !1) => {
    const m = c && c.children, E = c ? c.shapeFlag : 0, S = u.children, { patchFlag: T, shapeFlag: O } = u;
    if (T > 0) {
      if (T & 128) {
        Dt(
          m,
          S,
          d,
          b,
          g,
          _,
          v,
          x,
          y
        );
        return;
      } else if (T & 256) {
        Be(
          m,
          S,
          d,
          b,
          g,
          _,
          v,
          x,
          y
        );
        return;
      }
    }
    O & 8 ? (E & 16 && ut(m, g, _), S !== m && a(d, S)) : E & 16 ? O & 16 ? Dt(
      m,
      S,
      d,
      b,
      g,
      _,
      v,
      x,
      y
    ) : ut(m, g, _, !0) : (E & 8 && a(d, ""), O & 16 && $e(
      S,
      d,
      b,
      g,
      _,
      v,
      x,
      y
    ));
  }, Be = (c, u, d, b, g, _, v, x, y) => {
    c = c || st, u = u || st;
    const m = c.length, E = u.length, S = Math.min(m, E);
    let T;
    for (T = 0; T < S; T++) {
      const O = u[T] = y ? Ie(u[T]) : Se(u[T]);
      M(
        c[T],
        O,
        d,
        null,
        g,
        _,
        v,
        x,
        y
      );
    }
    m > E ? ut(
      c,
      g,
      _,
      !0,
      !1,
      S
    ) : $e(
      u,
      d,
      b,
      g,
      _,
      v,
      x,
      y,
      S
    );
  }, Dt = (c, u, d, b, g, _, v, x, y) => {
    let m = 0;
    const E = u.length;
    let S = c.length - 1, T = E - 1;
    for (; m <= S && m <= T; ) {
      const O = c[m], F = u[m] = y ? Ie(u[m]) : Se(u[m]);
      if (pt(O, F))
        M(
          O,
          F,
          d,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= S && m <= T; ) {
      const O = c[S], F = u[T] = y ? Ie(u[T]) : Se(u[T]);
      if (pt(O, F))
        M(
          O,
          F,
          d,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      S--, T--;
    }
    if (m > S) {
      if (m <= T) {
        const O = T + 1, F = O < E ? u[O].el : b;
        for (; m <= T; )
          M(
            null,
            u[m] = y ? Ie(u[m]) : Se(u[m]),
            d,
            F,
            g,
            _,
            v,
            x,
            y
          ), m++;
      }
    } else if (m > T)
      for (; m <= S; )
        ge(c[m], g, _, !0), m++;
    else {
      const O = m, F = m, $ = /* @__PURE__ */ new Map();
      for (m = F; m <= T; m++) {
        const oe = u[m] = y ? Ie(u[m]) : Se(u[m]);
        oe.key != null && $.set(oe.key, m);
      }
      let K, J = 0;
      const k = T - F + 1;
      let _e = !1, me = 0;
      const dt = new Array(k);
      for (m = 0; m < k; m++) dt[m] = 0;
      for (m = O; m <= S; m++) {
        const oe = c[m];
        if (J >= k) {
          ge(oe, g, _, !0);
          continue;
        }
        let be;
        if (oe.key != null)
          be = $.get(oe.key);
        else
          for (K = F; K <= T; K++)
            if (dt[K - F] === 0 && pt(oe, u[K])) {
              be = K;
              break;
            }
        be === void 0 ? ge(oe, g, _, !0) : (dt[be - F] = m + 1, be >= me ? me = be : _e = !0, M(
          oe,
          u[be],
          d,
          null,
          g,
          _,
          v,
          x,
          y
        ), J++);
      }
      const Qs = _e ? To(dt) : st;
      for (K = Qs.length - 1, m = k - 1; m >= 0; m--) {
        const oe = F + m, be = u[oe], en = u[oe + 1], tn = oe + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          en.el || Rr(en)
        ) : b;
        dt[m] === 0 ? M(
          null,
          be,
          d,
          tn,
          g,
          _,
          v,
          x,
          y
        ) : _e && (K < 0 || m !== Qs[K] ? qe(be, d, tn, 2) : K--);
      }
    }
  }, qe = (c, u, d, b, g = null) => {
    const { el: _, type: v, transition: x, children: y, shapeFlag: m } = c;
    if (m & 6) {
      qe(c.component.subTree, u, d, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, d, b);
      return;
    }
    if (m & 64) {
      v.move(c, u, d, at);
      return;
    }
    if (v === ue) {
      n(_, u, d);
      for (let S = 0; S < y.length; S++)
        qe(y[S], u, d, b);
      n(c.anchor, u, d);
      return;
    }
    if (v === gs) {
      W(c, u, d);
      return;
    }
    if (b !== 2 && m & 1 && x)
      if (b === 0)
        x.beforeEnter(_), n(_, u, d), re(() => x.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: O } = x, F = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, d);
        }, $ = () => {
          _._isLeaving && _[Ui](
            !0
            /* cancelled */
          ), S(_, () => {
            F(), O && O();
          });
        };
        T ? T(_, F, $) : $();
      }
    else
      n(_, u, d);
  }, ge = (c, u, d, b = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: m,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: O,
      memo: F
    } = c;
    if (S === -2 && (g = !1), x != null && (Fe(), yt(x, null, d, c, !0), De()), O != null && (u.renderCache[O] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const $ = E & 1 && T, K = !xt(c);
    let J;
    if (K && (J = v && v.onVnodeBeforeUnmount) && ye(J, u, c), E & 6)
      Vr(c.component, d, b);
    else {
      if (E & 128) {
        c.suspense.unmount(d, b);
        return;
      }
      $ && Ge(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        d,
        at,
        b
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ue || S > 0 && S & 64) ? ut(
        m,
        u,
        d,
        !1,
        !0
      ) : (_ === ue && S & 384 || !g && E & 16) && ut(y, u, d), b && Xs(c);
    }
    const k = F != null && O == null;
    (K && (J = v && v.onVnodeUnmounted) || $ || k) && re(() => {
      J && ye(J, u, c), $ && Ge(c, null, u, "unmounted"), k && (c.el = null);
    }, d);
  }, Xs = (c) => {
    const { type: u, el: d, anchor: b, transition: g } = c;
    if (u === ue) {
      Ur(d, b);
      return;
    }
    if (u === gs) {
      A(c);
      return;
    }
    const _ = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, y = () => v(d, _);
      x ? x(c.el, _, y) : y();
    } else
      _();
  }, Ur = (c, u) => {
    let d;
    for (; c !== u; )
      d = w(c), r(c), c = d;
    r(u);
  }, Vr = (c, u, d) => {
    const { bum: b, scope: g, job: _, subTree: v, um: x, m: y, a: m } = c;
    bn(y), bn(m), b && os(b), g.stop(), _ && (_.flags |= 8, ge(v, c, u, d)), x && re(x, u), re(() => {
      c.isUnmounted = !0;
    }, u);
  }, ut = (c, u, d, b = !1, g = !1, _ = 0) => {
    for (let v = _; v < c.length; v++)
      ge(c[v], u, d, b, g);
  }, Ht = (c) => {
    if (c.shapeFlag & 6)
      return Ht(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), d = u && u[Li];
    return d ? w(d) : u;
  };
  let rs = !1;
  const Zs = (c, u, d) => {
    let b;
    c == null ? u._vnode && (ge(u._vnode, null, null, !0), b = u._vnode.component) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, rs || (rs = !0, ln(b), lr(), rs = !1);
  }, at = {
    p: M,
    um: ge,
    m: qe,
    r: Xs,
    mt: ns,
    mc: $e,
    pc: L,
    pbc: We,
    n: Ht,
    o: e
  };
  return {
    render: Zs,
    hydrate: void 0,
    createApp: lo(Zs)
  };
}
function ps({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Je({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Co(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ie(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Mr(o, l)), l.type === ss && (l.patchFlag === -1 && (l = r[i] = Ie(l)), l.el = o.el), l.type === lt && !l.el && (l.el = o.el);
    }
}
function To(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < h ? i = l + 1 : o = l;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Ir(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ir(t);
}
function bn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rr(t.subTree) : null;
}
const Fr = (e) => e.__isSuspense;
function Eo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), lt = /* @__PURE__ */ Symbol.for("v-cmt"), gs = /* @__PURE__ */ Symbol.for("v-stc"), St = [];
let le = null;
function Pe(e = !1) {
  St.push(le = e ? null : []);
}
function Oo() {
  St.pop(), le = St[St.length - 1] || null;
}
let Et = 1;
function yn(e, t = !1) {
  Et += e, e < 0 && le && t && (le.hasOnce = !0);
}
function Dr(e) {
  return e.dynamicChildren = Et > 0 ? le || st : null, Oo(), Et > 0 && le && le.push(e), e;
}
function Le(e, t, s, n, r, i) {
  return Dr(
    ce(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ao(e, t, s, n, r) {
  return Dr(
    Ve(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Hr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jr = ({ key: e }) => e ?? null, Kt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || /* @__PURE__ */ Q(e) || I(e) ? { i: Ce, r: e, k: t, f: !!s } : e : null);
function ce(e, t = null, s = null, n = 0, r = null, i = e === ue ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jr(t),
    ref: t && Kt(t),
    scopeId: fr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return l ? (Ys(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= Y(s) ? 8 : 16), Et > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && le.push(f), f;
}
const Ve = Po;
function Po(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Qi) && (e = lt), Hr(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ys(l, s), Et > 0 && !i && le && (l.shapeFlag & 6 ? le[le.indexOf(e)] = l : le.push(l)), l.patchFlag = -2, l;
  }
  if (Uo(e) && (e = e.__vccOpts), t) {
    t = Mo(t);
    let { class: l, style: f } = t;
    l && !Y(l) && (t.class = Fs(l)), N(f) && (/* @__PURE__ */ Vs(f) && !P(f) && (f = X({}, f)), t.style = Rs(f));
  }
  const o = Y(e) ? 1 : Fr(e) ? 128 : Ki(e) ? 64 : N(e) ? 4 : I(e) ? 2 : 0;
  return ce(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Mo(e) {
  return e ? /* @__PURE__ */ Vs(e) || Cr(e) ? X({}, e) : e : null;
}
function ct(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Ro(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && jr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Kt(t)) : [i, Kt(t)] : Kt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Bs(
    a,
    f.clone(a)
  ), a;
}
function Io(e = " ", t = 0) {
  return Ve(ss, null, e, t);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Ve(lt) : P(e) ? Ve(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hr(e) ? Ie(e) : Ve(ss, null, String(e));
}
function Ie(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function Ys(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Cr(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Ce }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Io(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ro(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Fs([t.class, n.class]));
      else if (r === "style")
        t.style = Rs([t.style, n.style]);
      else if (Yt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !zt(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const Fo = yr();
let Do = 0;
function Ho(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Fo, i = {
    uid: Do++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ti(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Er(n, r),
    emitsOptions: xr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: V,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: V,
    data: V,
    props: V,
    attrs: V,
    slots: V,
    refs: V,
    setupState: V,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fo.bind(null, i), e.ce && e.ce(i), i;
}
let ne = null;
const jo = () => ne || Ce;
let Jt, Os;
{
  const e = Xt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Jt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ne = s
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ot = s
  );
}
const Mt = (e) => {
  const t = ne;
  return Jt(e), e.scope.on(), () => {
    e.scope.off(), Jt(t);
  };
}, xn = () => {
  ne && ne.scope.off(), Jt(null);
};
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ot = !1;
function No(e, t = !1, s = !1) {
  t && Os(t);
  const { props: n, children: r } = e.vnode, i = Nr(e);
  _o(e, n, i, t), xo(e, r, s || t);
  const o = i ? $o(e, t) : void 0;
  return t && Os(!1), o;
}
function $o(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eo);
  const { setup: n } = s;
  if (n) {
    Fe();
    const r = e.setupContext = n.length > 1 ? Ko(e) : null, i = Mt(e), o = Pt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = jn(o);
    if (De(), i(), (l || e.sp) && !xt(e) && hr(e), l) {
      if (o.then(xn, xn), t)
        return o.then((f) => {
          vn(e, f);
        }).catch((f) => {
          Qt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      vn(e, o);
  } else
    $r(e);
}
function vn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = rr(t)), $r(e);
}
function $r(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Te);
  {
    const r = Mt(e);
    Fe();
    try {
      to(e);
    } finally {
      De(), r();
    }
  }
}
const Lo = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Ko(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Lo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rr(Si(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in vt)
        return vt[s](e);
    },
    has(t, s) {
      return s in t || s in vt;
    }
  })) : e.proxy;
}
function Uo(e) {
  return I(e) && "__vccOpts" in e;
}
const Vo = (e, t) => /* @__PURE__ */ Oi(e, t, Ot), Wo = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let As;
const Sn = typeof window < "u" && window.trustedTypes;
if (Sn)
  try {
    As = /* @__PURE__ */ Sn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Lr = As ? (e) => As.createHTML(e) : (e) => e, Bo = "http://www.w3.org/2000/svg", qo = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, wn = Me && /* @__PURE__ */ Me.createElement("template"), Go = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Me.createElementNS(Bo, e) : t === "mathml" ? Me.createElementNS(qo, e) : s ? Me.createElement(e, { is: s }) : Me.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Me.createTextNode(e),
  createComment: (e) => Me.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Me.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      wn.innerHTML = Lr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = wn.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Jo = /* @__PURE__ */ Symbol("_vtc");
function Yo(e, t, s) {
  const n = e[Jo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Cn = /* @__PURE__ */ Symbol("_vod"), zo = /* @__PURE__ */ Symbol("_vsh"), ko = /* @__PURE__ */ Symbol(""), Xo = /(?:^|;)\s*display\s*:/;
function Zo(e, t, s) {
  const n = e.style, r = Y(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (Y(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ut(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Ut(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Ut(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[ko];
      o && (s += ";" + o), n.cssText = s, i = Xo.test(s);
    }
  } else t && e.removeAttribute("style");
  Cn in e && (e[Cn] = i ? n.display : "", e[zo] && (n.display = "none"));
}
const Tn = /\s*!important$/;
function Ut(e, t, s) {
  if (P(s))
    s.forEach((n) => Ut(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Qo(e, t);
    Tn.test(s) ? e.setProperty(
      Xe(n),
      s.replace(Tn, ""),
      "important"
    ) : e[n] = s;
  }
}
const En = ["Webkit", "Moz", "ms"], _s = {};
function Qo(e, t) {
  const s = _s[t];
  if (s)
    return s;
  let n = ae(t);
  if (n !== "filter" && n in e)
    return _s[t] = n;
  n = Ln(n);
  for (let r = 0; r < En.length; r++) {
    const i = En[r] + n;
    if (i in e)
      return _s[t] = i;
  }
  return t;
}
const On = "http://www.w3.org/1999/xlink";
function An(e, t, s, n, r, i = Qr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(On, t.slice(6, t.length)) : e.setAttributeNS(On, t, s) : s == null || i && !Un(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ee(s) ? String(s) : s
  );
}
function Pn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Lr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Un(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function el(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Mn = /* @__PURE__ */ Symbol("_vei");
function sl(e, t, s, n, r = null) {
  const i = e[Mn] || (e[Mn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = nl(t);
    if (n) {
      const h = i[t] = ol(
        n,
        r
      );
      el(e, l, h, f);
    } else o && (tl(e, l, o, f), i[t] = void 0);
  }
}
const In = /(?:Once|Passive|Capture)$/;
function nl(e) {
  let t;
  if (In.test(e)) {
    t = {};
    let n;
    for (; n = e.match(In); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let ms = 0;
const rl = /* @__PURE__ */ Promise.resolve(), il = () => ms || (rl.then(() => ms = 0), ms = Date.now());
function ol(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      ll(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = il(), s;
}
function ll(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Rn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cl = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Yo(e, n, o) : t === "style" ? Zo(e, s, n) : Yt(t) ? zt(t) || sl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fl(e, t, n, o)) ? (Pn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && An(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ul(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Y(n))) ? Pn(e, ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), An(e, t, n, o));
};
function fl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Rn(t) && Y(s) ? !1 : t in e;
}
function ul(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ae(t);
  return Array.isArray(s) ? s.some((r) => ae(r) === n) : Object.keys(s).some((r) => ae(r) === n);
}
const al = /* @__PURE__ */ X({ patchProp: cl }, Go);
let Fn;
function dl() {
  return Fn || (Fn = So(al));
}
const hl = ((...e) => {
  const t = dl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = gl(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, pl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function pl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gl(e) {
  return Y(e) ? document.querySelector(e) : e;
}
const _l = "rest-countries", Kr = 5, ml = () => {
  const e = /* @__PURE__ */ as([]), t = /* @__PURE__ */ as(!0), s = /* @__PURE__ */ as(null);
  let n = !1;
  return qs(() => {
    n = !0;
  }), _r(async () => {
    try {
      const r = await new window.WidgetServiceSDK().connectors.execute({
        permalink: _l,
        method: "GET"
      });
      if (n) return;
      e.value = r.toSorted((i, o) => o.population - i.population).slice(0, Kr).map((i) => {
        var o;
        return {
          name: i.name.common,
          capital: ((o = i.capital) == null ? void 0 : o[0]) ?? "N/A",
          population: i.population,
          flag: i.flags.png,
          region: i.region
        };
      });
    } catch (r) {
      if (n) return;
      s.value = r instanceof Error ? r.message : "Failed to load country data";
    } finally {
      n || (t.value = !1);
    }
  }), { countries: e, loading: t, error: s };
}, bl = ["aria-label"], yl = ["src", "alt"], xl = { class: "country-details" }, vl = { class: "country-name" }, Sl = { class: "country-meta" }, wl = /* @__PURE__ */ dr({
  __name: "CountryCard",
  props: {
    country: {}
  },
  setup(e) {
    const t = (s) => {
      s.target instanceof HTMLImageElement && (s.target.style.opacity = "0");
    };
    return (s, n) => (Pe(), Le("li", {
      class: "country-item",
      "aria-label": e.country.name
    }, [
      ce("img", {
        class: "country-flag",
        src: e.country.flag,
        alt: `Flag of ${e.country.name}`,
        onError: t
      }, null, 40, yl),
      ce("div", xl, [
        ce("span", vl, tt(e.country.name), 1),
        ce("span", Sl, tt(e.country.capital) + " · " + tt(e.country.population.toLocaleString("en-US")) + " · " + tt(e.country.region), 1)
      ])
    ], 8, bl));
  }
}), Cl = { class: "vue-widget-section" }, Tl = {
  key: 0,
  role: "status",
  "aria-label": "Loading country data",
  class: "country-list"
}, El = {
  key: 1,
  role: "alert",
  class: "country-error"
}, Ol = {
  key: 2,
  class: "country-list"
}, Al = /* @__PURE__ */ dr({
  __name: "App",
  setup(e) {
    const { countries: t, loading: s, error: n } = ml();
    return (r, i) => (Pe(), Le("section", Cl, [
      i[1] || (i[1] = ce("p", { class: "widget-framework-header" }, "Vue", -1)),
      Qe(s) ? (Pe(), Le("ul", Tl, [
        (Pe(!0), Le(ue, null, un(Qe(Kr), (o) => (Pe(), Le("li", {
          key: o,
          class: "country-item country-item--skeleton"
        }, [...i[0] || (i[0] = [
          ce("div", { class: "country-flag country-flag--skeleton" }, null, -1),
          ce("div", { class: "country-details" }, [
            ce("div", { class: "country-skeleton-line country-skeleton-line--name" }),
            ce("div", { class: "country-skeleton-line country-skeleton-line--meta" })
          ], -1)
        ])]))), 128))
      ])) : Qe(n) ? (Pe(), Le("div", El, [
        ce("p", null, tt(Qe(n)), 1)
      ])) : (Pe(), Le("ul", Ol, [
        (Pe(!0), Le(ue, null, un(Qe(t), (o) => (Pe(), Ao(wl, {
          key: o.name,
          country: o
        }, null, 8, ["country"]))), 128))
      ]))
    ]));
  }
});
async function Ml(e) {
  await e.whenReady();
  const t = hl(Al);
  t.mount(e.getContainer()), e.on("destroy", () => t.unmount());
}
export {
  Ml as init
};
