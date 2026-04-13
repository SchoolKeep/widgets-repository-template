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
}, Hn = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xt = (e) => e.startsWith("onUpdate:"), Z = Object.assign, Rs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, qr = Object.prototype.hasOwnProperty, H = (e, t) => qr.call(e, t), P = Array.isArray, nt = (e) => Rt(e) === "[object Map]", jn = (e) => Rt(e) === "[object Set]", sn = (e) => Rt(e) === "[object Date]", M = (e) => typeof e == "function", Y = (e) => typeof e == "string", Ee = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", Nn = (e) => (N(e) || M(e)) && M(e.then) && M(e.catch), $n = Object.prototype.toString, Rt = (e) => $n.call(e), Gr = (e) => Rt(e).slice(8, -1), Ln = (e) => Rt(e) === "[object Object]", Ms = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Jr = /-\w/g, ae = Zt(
  (e) => e.replace(Jr, (t) => t.slice(1).toUpperCase())
), Yr = /\B([A-Z])/g, ke = Zt(
  (e) => e.replace(Yr, "-$1").toLowerCase()
), Kn = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), os = Zt(
  (e) => e ? `on${Kn(e)}` : ""
), we = (e, t) => !Object.is(e, t), ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Un = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, zr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let nn;
const Qt = () => nn || (nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Is(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = Y(n) ? kr(n) : Is(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Y(e) || N(e))
    return e;
}
const Xr = /;(?![^(]*\))/g, Zr = /:([^]+)/, Qr = /\/\*[^]*?\*\//g;
function kr(e) {
  const t = {};
  return e.replace(Qr, "").split(Xr).forEach((s) => {
    if (s) {
      const n = s.split(Zr);
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
const ei = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ti = /* @__PURE__ */ Ps(ei);
function Vn(e) {
  return !!e || e === "";
}
function si(e, t) {
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
    return s && n ? si(e, t) : !1;
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
const Wn = (e) => !!(e && e.__v_isRef === !0), Xe = (e) => Y(e) ? e : e == null ? "" : P(e) || N(e) && (e.toString === $n || !M(e.toString)) ? Wn(e) ? Xe(e.value) : JSON.stringify(e, Bn, 2) : String(e), Bn = (e, t) => Wn(t) ? Bn(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[cs(n, i) + " =>"] = r, s),
    {}
  )
} : jn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => cs(s))
} : Ee(t) ? cs(t) : N(t) && !P(t) && !Ln(t) ? String(t) : t, cs = (e, t = "") => {
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
class ni {
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
function ri() {
  return ie;
}
let U;
const fs = /* @__PURE__ */ new WeakSet();
class qn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rn(this), Yn(this);
    const t = U, s = de;
    U = this, de = !0;
    try {
      return this.fn();
    } finally {
      zn(this), U = t, de = s, this.flags &= -3;
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
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Gn = 0, mt, bt;
function Jn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bt, bt = e;
    return;
  }
  e.next = mt, mt = e;
}
function Hs() {
  Gn++;
}
function js() {
  if (--Gn > 0)
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
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ns(n), ii(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tt) || (e.globalVersion = Tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = U, n = de;
  U = e, de = !0;
  try {
    Yn(e);
    const r = e.fn(e._value);
    (t.version === 0 || we(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = s, de = n, zn(e), e.flags &= -3;
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
function ii(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const Zn = [];
function Fe() {
  Zn.push(de), de = !1;
}
function De() {
  const e = Zn.pop();
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
let Tt = 0;
class oi {
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
      s = this.activeLink = new oi(U, this), U.deps ? (s.prevDep = U.depsTail, U.depsTail.nextDep = s, U.depsTail = s) : U.deps = U.depsTail = s, Qn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = U.depsTail, s.nextDep = void 0, U.depsTail.nextDep = s, U.depsTail = s, U.deps === s && (U.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, Tt++, this.notify(t);
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
function Qn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Qn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), Et = /* @__PURE__ */ Symbol(
  ""
);
function Q(e, t, s) {
  if (de && U) {
    let n = ys.get(e);
    n || ys.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new $s()), r.map = n, r.key = s), r.track();
  }
}
function Ie(e, t, s, n, r, i) {
  const o = ys.get(e);
  if (!o) {
    Tt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Hs(), t === "clear")
    o.forEach(l);
  else {
    const f = P(e), h = f && Ms(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === Et || !Ee(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(Et)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(Ze)), nt(e) && l(o.get(xs)));
          break;
        case "delete":
          f || (l(o.get(Ze)), nt(e) && l(o.get(xs)));
          break;
        case "set":
          nt(e) && l(o.get(Ze));
          break;
      }
  }
  js();
}
function et(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (Q(t, "iterate", Et), /* @__PURE__ */ fe(e) ? t : t.map(he));
}
function kt(e) {
  return Q(e = /* @__PURE__ */ D(e), "iterate", Et), e;
}
function ve(e, t) {
  return /* @__PURE__ */ He(e) ? ot(/* @__PURE__ */ Qe(e) ? he(t) : t) : he(t);
}
const li = {
  __proto__: null,
  [Symbol.iterator]() {
    return us(this, Symbol.iterator, (e) => ve(this, e));
  },
  concat(...e) {
    return et(this).concat(
      ...e.map((t) => P(t) ? et(t) : t)
    );
  },
  entries() {
    return us(this, "entries", (e) => (e[1] = ve(this, e[1]), e));
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
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
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
    return et(this).toReversed();
  },
  toSorted(e) {
    return et(this).toSorted(e);
  },
  toSpliced(...e) {
    return et(this).toSpliced(...e);
  },
  unshift(...e) {
    return ht(this, "unshift", e);
  },
  values() {
    return us(this, "values", (e) => ve(this, e));
  }
};
function us(e, t, s) {
  const n = kt(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ fe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const ci = Array.prototype;
function Ae(e, t, s, n, r, i) {
  const o = kt(e), l = o !== e && !/* @__PURE__ */ fe(e), f = o[t];
  if (f !== ci[t]) {
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
  const r = kt(e), i = r !== e && !/* @__PURE__ */ fe(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(h, a, p) {
    return l && (l = !1, h = ve(e, h)), s.call(this, h, ve(e, a), p, e);
  }) : s.length > 3 && (o = function(h, a, p) {
    return s.call(this, h, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? ve(e, f) : f;
}
function as(e, t, s) {
  const n = /* @__PURE__ */ D(e);
  Q(n, "iterate", Et);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Vs(s[0]) ? (s[0] = /* @__PURE__ */ D(s[0]), n[t](...s)) : r;
}
function ht(e, t, s = []) {
  Fe(), Hs();
  const n = (/* @__PURE__ */ D(e))[t].apply(e, s);
  return js(), De(), n;
}
const fi = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), kn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ee)
);
function ui(e) {
  Ee(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class er {
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
      return n === (r ? i ? xi : rr : i ? nr : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let f;
      if (o && (f = li[s]))
        return f;
      if (s === "hasOwnProperty")
        return ui;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ k(t) ? t : n
    );
    if ((Ee(s) ? kn.has(s) : fi(s)) || (r || Q(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ k(l)) {
      const f = o && Ms(s) ? l : l.value;
      return r && N(f) ? /* @__PURE__ */ Ss(f) : f;
    }
    return N(l) ? r ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ Ks(l) : l;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = P(t) && Ms(s);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ He(i);
      if (!/* @__PURE__ */ fe(n) && !/* @__PURE__ */ He(n) && (i = /* @__PURE__ */ D(i), n = /* @__PURE__ */ D(n)), !o && /* @__PURE__ */ k(i) && !/* @__PURE__ */ k(n))
        return h || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : H(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ k(t) ? t : r
    );
    return t === /* @__PURE__ */ D(r) && (l ? we(n, i) && Ie(t, "set", s, n) : Ie(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = H(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ie(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ee(s) || !kn.has(s)) && Q(t, "has", s), n;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      P(t) ? "length" : Ze
    ), Reflect.ownKeys(t);
  }
}
class ai extends er {
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
const di = /* @__PURE__ */ new tr(), hi = /* @__PURE__ */ new ai(), pi = /* @__PURE__ */ new tr(!0);
const vs = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function gi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ D(r), o = nt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), a = s ? vs : t ? ot : he;
    return !t && Q(
      i,
      "iterate",
      f ? xs : Ze
    ), Z(
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
function Lt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _i(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      e || (we(r, l) && Q(o, "get", r), Q(o, "get", l));
      const { has: f } = $t(o), h = t ? vs : e ? ot : he;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Q(/* @__PURE__ */ D(r), "iterate", Ze), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      return e || (we(r, l) && Q(o, "has", r), Q(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ D(l), h = t ? vs : e ? ot : he;
      return !e && Q(f, "iterate", Ze), l.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return Z(
    s,
    e ? {
      add: Lt("add"),
      set: Lt("set"),
      delete: Lt("delete"),
      clear: Lt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ D(this), o = $t(i), l = /* @__PURE__ */ D(r), f = !t && !/* @__PURE__ */ fe(r) && !/* @__PURE__ */ He(r) ? l : r;
        return o.has.call(i, f) || we(r, f) && o.has.call(i, r) || we(l, f) && o.has.call(i, l) || (i.add(f), Ie(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ fe(i) && !/* @__PURE__ */ He(i) && (i = /* @__PURE__ */ D(i));
        const o = /* @__PURE__ */ D(this), { has: l, get: f } = $t(o);
        let h = l.call(o, r);
        h || (r = /* @__PURE__ */ D(r), h = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), h ? we(i, a) && Ie(o, "set", r, i) : Ie(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ D(this), { has: o, get: l } = $t(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ D(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Ie(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ D(this), i = r.size !== 0, o = r.clear();
        return i && Ie(
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
    s[r] = gi(r, e, t);
  }), s;
}
function Ls(e, t) {
  const s = _i(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    H(s, r) && r in n ? s : n,
    r,
    i
  );
}
const mi = {
  get: /* @__PURE__ */ Ls(!1, !1)
}, bi = {
  get: /* @__PURE__ */ Ls(!1, !0)
}, yi = {
  get: /* @__PURE__ */ Ls(!0, !1)
};
const sr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap();
function vi(e) {
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
function Si(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vi(Gr(e));
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return /* @__PURE__ */ He(e) ? e : Us(
    e,
    !1,
    di,
    mi,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return Us(
    e,
    !1,
    pi,
    bi,
    nr
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Us(
    e,
    !0,
    hi,
    yi,
    rr
  );
}
function Us(e, t, s, n, r) {
  if (!N(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Si(e);
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
function Qe(e) {
  return /* @__PURE__ */ He(e) ? /* @__PURE__ */ Qe(e.__v_raw) : !!(e && e.__v_isReactive);
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
function Ci(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Un(e, "__v_skip", !0), e;
}
const he = (e) => N(e) ? /* @__PURE__ */ Ks(e) : e, ot = (e) => N(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function k(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return Ti(e, !1);
}
function Ti(e, t) {
  return /* @__PURE__ */ k(e) ? e : new Ei(e, t);
}
class Ei {
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
function Ye(e) {
  return /* @__PURE__ */ k(e) ? e.value : e;
}
const Oi = {
  get: (e, t, s) => t === "__v_raw" ? e : Ye(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ k(r) && !/* @__PURE__ */ k(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ir(e) {
  return /* @__PURE__ */ Qe(e) ? e : new Proxy(e, Oi);
}
class Ai {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new $s(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Jn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t, s = !1) {
  let n, r;
  return M(e) ? n = e : (n = e.get, r = e.set), new Ai(n, r, s);
}
const Kt = {}, Wt = /* @__PURE__ */ new WeakMap();
let ze;
function Ri(e, t = !1, s = ze) {
  if (s) {
    let n = Wt.get(s);
    n || Wt.set(s, n = []), n.push(e);
  }
}
function Mi(e, t, s = V) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (A) => r ? A : /* @__PURE__ */ fe(A) || r === !1 || r === 0 ? Ue(A, 1) : Ue(A);
  let a, p, w, C, j = !1, R = !1;
  if (/* @__PURE__ */ k(e) ? (p = () => e.value, j = /* @__PURE__ */ fe(e)) : /* @__PURE__ */ Qe(e) ? (p = () => h(e), j = !0) : P(e) ? (R = !0, j = e.some((A) => /* @__PURE__ */ Qe(A) || /* @__PURE__ */ fe(A)), p = () => e.map((A) => {
    if (/* @__PURE__ */ k(A))
      return A.value;
    if (/* @__PURE__ */ Qe(A))
      return h(A);
    if (M(A))
      return f ? f(A, 2) : A();
  })) : M(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      Fe();
      try {
        w();
      } finally {
        De();
      }
    }
    const A = ze;
    ze = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      ze = A;
    }
  } : p = Te, t && r) {
    const A = p, z = r === !0 ? 1 / 0 : r;
    p = () => Ue(A(), z);
  }
  const G = ri(), B = () => {
    a.stop(), G && G.active && Rs(G.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...z) => {
      A(...z), B();
    };
  }
  let I = R ? new Array(e.length).fill(Kt) : Kt;
  const W = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const z = a.run();
        if (r || j || (R ? z.some((Ne, pe) => we(Ne, I[pe])) : we(z, I))) {
          w && w();
          const Ne = ze;
          ze = a;
          try {
            const pe = [
              z,
              // pass undefined as the old value when it's changed for the first time
              I === Kt ? void 0 : R && I[0] === Kt ? [] : I,
              C
            ];
            I = z, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            ze = Ne;
          }
        }
      } else
        a.run();
  };
  return l && l(W), a = new qn(p), a.scheduler = o ? () => o(W, !1) : W, C = (A) => Ri(A, !1, a), w = a.onStop = () => {
    const A = Wt.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const z of A) z();
      Wt.delete(a);
    }
  }, t ? n ? W(!0) : I = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function Ue(e, t = 1 / 0, s) {
  if (t <= 0 || !N(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ k(e))
    Ue(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Ue(e[n], t, s);
  else if (jn(e) || nt(e))
    e.forEach((n) => {
      Ue(n, t, s);
    });
  else if (Ln(e)) {
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
function Mt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    es(r, t, s);
  }
}
function Oe(e, t, s, n) {
  if (M(e)) {
    const r = Mt(e, t, s, n);
    return r && Nn(r) && r.catch((i) => {
      es(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, s, n));
    return r;
  }
}
function es(e, t, s, n = !0) {
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
      Fe(), Mt(i, null, 10, [
        e,
        f,
        h
      ]), De();
      return;
    }
  }
  Ii(e, s, r, n, o);
}
function Ii(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const se = [];
let xe = -1;
const rt = [];
let Ke = null, tt = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Bt = null;
function Fi(e) {
  const t = Bt || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Di(e) {
  let t = xe + 1, s = se.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = se[n], i = Ot(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = Ot(e), s = se[se.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ot(s) ? se.push(e) : se.splice(Di(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Bt || (Bt = or.then(fr));
}
function Hi(e) {
  P(e) ? rt.push(...e) : Ke && e.id === -1 ? Ke.splice(tt + 1, 0, e) : e.flags & 1 || (rt.push(e), e.flags |= 1), lr();
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
function cr(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort(
      (s, n) => Ot(s) - Ot(n)
    );
    if (rt.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, tt = 0; tt < Ke.length; tt++) {
      const s = Ke[tt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ke = null, tt = 0;
  }
}
const Ot = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fr(e) {
  try {
    for (xe = 0; xe < se.length; xe++) {
      const t = se[xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mt(
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
    xe = -1, se.length = 0, cr(), Bt = null, (se.length || rt.length) && fr();
  }
}
let Ce = null, ur = null;
function qt(e) {
  const t = Ce;
  return Ce = e, ur = e && e.type.__scopeId || null, t;
}
function ji(e, t = Ce, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && yn(-1);
    const i = qt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      qt(i), n._d && yn(1);
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
function Ni(e, t) {
  if (ne) {
    let s = ne.provides;
    const n = ne.parent && ne.parent.provides;
    n === s && (s = ne.provides = Object.create(n)), s[e] = t;
  }
}
function xt(e, t, s = !1) {
  const n = $o();
  if (n || it) {
    let r = it ? it._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && M(t) ? t.call(n && n.proxy) : t;
  }
}
const $i = /* @__PURE__ */ Symbol.for("v-scx"), Li = () => xt($i);
function ds(e, t, s) {
  return ar(e, t, s);
}
function ar(e, t, s = V) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = Z({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Pt) {
    if (i === "sync") {
      const C = Li();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = Te, C.resume = Te, C.pause = Te, C;
    }
  }
  const a = ne;
  l.call = (C, j, R) => Oe(C, a, j, R);
  let p = !1;
  i === "post" ? l.scheduler = (C) => {
    re(C, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (C, j) => {
    j ? C() : Ws(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = Mi(e, t, l);
  return Pt && (h ? h.push(w) : f && w()), w;
}
function Ki(e, t, s) {
  const n = this.proxy, r = Y(e) ? e.includes(".") ? dr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  M(t) ? i = t : (i = t.handler, s = t);
  const o = It(this), l = ar(r, i.bind(n), s);
  return o(), l;
}
function dr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Ui = /* @__PURE__ */ Symbol("_vte"), Vi = (e) => e.__isTeleport, Wi = /* @__PURE__ */ Symbol("_leaveCb");
function Bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
function pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cn(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Gt = /* @__PURE__ */ new WeakMap();
function vt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (R, G) => vt(
        R,
        t && (P(t) ? t[G] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (St(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && vt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? zs(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, a = l.refs === V ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ D(p), C = p === V ? Hn : (R) => cn(a, R) ? !1 : H(w, R), j = (R, G) => !(G && cn(a, G));
  if (h != null && h !== f) {
    if (fn(t), Y(h))
      a[h] = null, C(h) && (p[h] = null);
    else if (/* @__PURE__ */ k(h)) {
      const R = t;
      j(h, R.k) && (h.value = null), R.k && (a[R.k] = null);
    }
  }
  if (M(f))
    Mt(f, l, 12, [o, a]);
  else {
    const R = Y(f), G = /* @__PURE__ */ k(f);
    if (R || G) {
      const B = () => {
        if (e.f) {
          const I = R ? C(f) ? p[f] : a[f] : j() || !e.k ? f.value : a[e.k];
          if (r)
            P(I) && Rs(I, i);
          else if (P(I))
            I.includes(i) || I.push(i);
          else if (R)
            a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const W = [i];
            j(f, e.k) && (f.value = W), e.k && (a[e.k] = W);
          }
        } else R ? (a[f] = o, C(f) && (p[f] = o)) : G && (j(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const I = () => {
          B(), Gt.delete(e);
        };
        I.id = -1, Gt.set(e, I), re(I, s);
      } else
        fn(e), B();
    }
  }
}
function fn(e) {
  const t = Gt.get(e);
  t && (t.flags |= 8, Gt.delete(e));
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const St = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function Bi(e, t) {
  _r(e, "a", t);
}
function qi(e, t) {
  _r(e, "da", t);
}
function _r(e, t, s = ne) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ts(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      gr(r.parent.vnode) && Gi(n, t, s, r), r = r.parent;
  }
}
function Gi(e, t, s, n) {
  const r = ts(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  qs(() => {
    Rs(n[t], r);
  }, s);
}
function ts(e, t, s = ne, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Fe();
      const l = It(s), f = Oe(t, s, e, o);
      return l(), De(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const je = (e) => (t, s = ne) => {
  (!Pt || e === "sp") && ts(e, (...n) => t(...n), s);
}, Ji = je("bm"), mr = je("m"), Yi = je(
  "bu"
), zi = je("u"), Xi = je(
  "bum"
), qs = je("um"), Zi = je(
  "sp"
), Qi = je("rtg"), ki = je("rtc");
function eo(e, t = ne) {
  ts("ec", e, t);
}
const to = /* @__PURE__ */ Symbol.for("v-ndc");
function un(e, t, s, n) {
  let r;
  const i = s, o = P(e);
  if (o || Y(e)) {
    const l = o && /* @__PURE__ */ Qe(e);
    let f = !1, h = !1;
    l && (f = !/* @__PURE__ */ fe(e), h = /* @__PURE__ */ He(e), e = kt(e)), r = new Array(e.length);
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
const ws = (e) => e ? $r(e) ? zs(e) : ws(e.parent) : null, wt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fi.bind(e.proxy)),
    $watch: (e) => Ki.bind(e)
  })
), hs = (e, t) => e !== V && !e.__isScriptSetup && H(e, t), so = {
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
    const h = wt[t];
    let a, p;
    if (h)
      return t === "$attrs" && Q(e.attrs, "get", ""), h(e);
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
    return !!(s[l] || e !== V && l[0] !== "$" && H(e, l) || hs(t, l) || H(i, l) || H(n, l) || H(wt, l) || H(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
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
function no(e) {
  const t = yr(e), s = e.proxy, n = e.ctx;
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
    activated: R,
    deactivated: G,
    beforeDestroy: B,
    beforeUnmount: I,
    destroyed: W,
    unmounted: A,
    render: z,
    renderTracked: Ne,
    renderTriggered: pe,
    errorCaptured: $e,
    serverPrefetch: Ft,
    // public API
    expose: We,
    inheritAttrs: ft,
    // assets
    components: Dt,
    directives: Ht,
    filters: rs
  } = t;
  if (h && ro(h, n, null), o)
    for (const q in o) {
      const L = o[q];
      M(L) && (n[q] = L.bind(s));
    }
  if (r) {
    const q = r.call(s, s);
    N(q) && (e.data = /* @__PURE__ */ Ks(q));
  }
  if (Cs = !0, i)
    for (const q in i) {
      const L = i[q], Be = M(L) ? L.bind(s, s) : M(L.get) ? L.get.bind(s, s) : Te, jt = !M(L) && M(L.set) ? L.set.bind(s) : Te, qe = Bo({
        get: Be,
        set: jt
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
      br(l[q], n, s, q);
  if (f) {
    const q = M(f) ? f.call(s) : f;
    Reflect.ownKeys(q).forEach((L) => {
      Ni(L, q[L]);
    });
  }
  a && dn(a, e, "c");
  function ee(q, L) {
    P(L) ? L.forEach((Be) => q(Be.bind(s))) : L && q(L.bind(s));
  }
  if (ee(Ji, p), ee(mr, w), ee(Yi, C), ee(zi, j), ee(Bi, R), ee(qi, G), ee(eo, $e), ee(ki, Ne), ee(Qi, pe), ee(Xi, I), ee(qs, A), ee(Zi, Ft), P(We))
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
  z && e.render === Te && (e.render = z), ft != null && (e.inheritAttrs = ft), Dt && (e.components = Dt), Ht && (e.directives = Ht), Ft && pr(e);
}
function ro(e, t, s = Te) {
  P(e) && (e = Ts(e));
  for (const n in e) {
    const r = e[n];
    let i;
    N(r) ? "default" in r ? i = xt(
      r.from || n,
      r.default,
      !0
    ) : i = xt(r.from || n) : i = xt(r), /* @__PURE__ */ k(i) ? Object.defineProperty(t, n, {
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
function br(e, t, s, n) {
  let r = n.includes(".") ? dr(s, n) : () => s[n];
  if (Y(e)) {
    const i = t[e];
    M(i) && ds(r, i);
  } else if (M(e))
    ds(r, e.bind(s));
  else if (N(e))
    if (P(e))
      e.forEach((i) => br(i, t, s, n));
    else {
      const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
      M(i) && ds(r, i, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => Jt(f, h, o, !0)
  ), Jt(f, t, o)), N(t) && i.set(t, f), f;
}
function Jt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Jt(e, i, s, !0), r && r.forEach(
    (o) => Jt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = io[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const io = {
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
  watch: lo,
  // provide / inject
  provide: hn,
  inject: oo
};
function hn(e, t) {
  return t ? e ? function() {
    return Z(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oo(e, t) {
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
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    an(e),
    an(t ?? {})
  ) : t;
}
function lo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Z(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function xr() {
  return {
    app: null,
    config: {
      isNativeTag: Hn,
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
let co = 0;
function fo(e, t) {
  return function(n, r = null) {
    M(n) || (n = Z({}, n)), r != null && !N(r) && (r = null);
    const i = xr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: co++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && M(a.install) ? (o.add(a), a.install(h, ...p)) : M(a) && (o.add(a), a(h, ...p))), h;
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
const uo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${ke(t)}Modifiers`];
function ao(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || V;
  let r = s;
  const i = t.startsWith("update:"), o = i && uo(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => Y(a) ? a.trim() : a)), o.number && (r = s.map(zr)));
  let l, f = n[l = os(t)] || // also try camelCase event handler (#2249)
  n[l = os(ae(t))];
  !f && i && (f = n[l = os(ke(t))]), f && Oe(
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
const ho = /* @__PURE__ */ new WeakMap();
function vr(e, t, s = !1) {
  const n = s ? ho : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!M(e)) {
    const f = (h) => {
      const a = vr(h, t, !0);
      a && (l = !0, Z(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (N(e) && n.set(e, null), null) : (P(i) ? i.forEach((f) => o[f] = null) : Z(o, i), N(e) && n.set(e, o), o);
}
function ss(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, ke(t)) || H(e, t));
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
    inheritAttrs: R
  } = e, G = qt(e);
  let B, I;
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
      ), I = l;
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
      ), I = t.props ? l : po(l);
    }
  } catch (A) {
    Ct.length = 0, es(A, e, 1), B = Ve(lt);
  }
  let W = B;
  if (I && R !== !1) {
    const A = Object.keys(I), { shapeFlag: z } = W;
    A.length && z & 7 && (i && A.some(Xt) && (I = go(
      I,
      i
    )), W = ct(W, I, !1, !0));
  }
  return s.dirs && (W = ct(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && Bs(W, s.transition), B = W, qt(G), B;
}
const po = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, go = (e, t) => {
  const s = {};
  for (const n in e)
    (!Xt(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function _o(e, t, s) {
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
        if (Sr(o, n, w) && !ss(h, w))
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
    if (Sr(t, e, i) && !ss(s, i))
      return !0;
  }
  return !1;
}
function Sr(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && N(n) && N(r) ? !Ds(n, r) : n !== r;
}
function mo({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const wr = {}, Cr = () => Object.create(wr), Tr = (e) => Object.getPrototypeOf(e) === wr;
function bo(e, t, s, n = !1) {
  const r = {}, i = Cr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ wi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function yo(e, t, s, n) {
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
        if (ss(e.emitsOptions, w))
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
    Er(e, t, r, i) && (h = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ke(p)) === p || !H(t, a))) && (f ? s && // for camelCase
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
  h && Ie(e.attrs, "set", "");
}
function Er(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (_t(f))
        continue;
      const h = t[f];
      let a;
      r && H(r, a = ae(f)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : ss(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
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
      if (o.type !== Function && !o.skipFactory && M(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = It(r);
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
    ] && (n === "" || n === ke(s)) && (n = !0));
  }
  return n;
}
const xo = /* @__PURE__ */ new WeakMap();
function Or(e, t, s = !1) {
  const n = s ? xo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!M(e)) {
    const a = (p) => {
      f = !0;
      const [w, C] = Or(p, t, !0);
      Z(o, w), C && l.push(...C);
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
        const w = i[a], C = o[p] = P(w) || M(w) ? { type: w } : Z({}, w), j = C.type;
        let R = !1, G = !0;
        if (P(j))
          for (let B = 0; B < j.length; ++B) {
            const I = j[B], W = M(I) && I.name;
            if (W === "Boolean") {
              R = !0;
              break;
            } else W === "String" && (G = !1);
          }
        else
          R = M(j) && j.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = R, C[
          1
          /* shouldCastTrue */
        ] = G, (R || H(C, "default")) && l.push(p);
      }
    }
  const h = [o, l];
  return N(e) && n.set(e, h), h;
}
function mn(e) {
  return e[0] !== "$" && !_t(e);
}
const Gs = (e) => e === "_" || e === "_ctx" || e === "$stable", Js = (e) => P(e) ? e.map(Se) : [Se(e)], vo = (e, t, s) => {
  if (t._n)
    return t;
  const n = ji((...r) => Js(t(...r)), s);
  return n._c = !1, n;
}, Ar = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Gs(r)) continue;
    const i = e[r];
    if (M(i))
      t[r] = vo(r, i, n);
    else if (i != null) {
      const o = Js(i);
      t[r] = () => o;
    }
  }
}, Pr = (e, t) => {
  const s = Js(t);
  e.slots.default = () => s;
}, Rr = (e, t, s) => {
  for (const n in t)
    (s || !Gs(n)) && (e[n] = t[n]);
}, So = (e, t, s) => {
  const n = e.slots = Cr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Rr(n, t, s), s && Un(n, "_", r, !0)) : Ar(t, n);
  } else t && Pr(e, t);
}, wo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = V;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Rr(r, t, s) : (i = !t.$stable, Ar(t, r)), o = t;
  } else t && (Pr(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Gs(l) && o[l] == null && delete r[l];
}, re = Ao;
function Co(e) {
  return To(e);
}
function To(e, t) {
  const s = Qt();
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
  } = e, R = (c, u, d, b = null, g = null, _ = null, v = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !pt(c, u) && (b = Nt(c), ge(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: S } = u;
    switch (m) {
      case ns:
        G(c, u, d, b);
        break;
      case lt:
        B(c, u, d, b);
        break;
      case gs:
        c == null && I(u, d, b, v);
        break;
      case ue:
        Dt(
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
        ) : S & 6 ? Ht(
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
    E != null && g ? vt(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && vt(c.ref, null, _, c, !0);
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
  }, I = (c, u, d, b) => {
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
        m && m._beginPatch(), Ft(
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
    const F = Eo(g, T);
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
      if (u === _ || Dr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
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
      const E = c[m] = x ? Me(c[m]) : Se(c[m]);
      R(
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
  }, Ft = (c, u, d, b, g, _, v) => {
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
          const K = F[$], J = S[K], X = T[K];
          (X !== J || K === "value") && i(x, K, J, X, g, d);
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
      R(
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
  }, Dt = (c, u, d, b, g, _, v, x, y) => {
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
  }, Ht = (c, u, d, b, g, _, v, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      d,
      b,
      v,
      y
    ) : rs(
      u,
      d,
      b,
      g,
      _,
      v,
      y
    ) : Xs(c, u, y);
  }, rs = (c, u, d, b, g, _, v) => {
    const x = c.component = No(
      c,
      b,
      g
    );
    if (gr(c) && (x.ctx.renderer = at), Lo(x, !1, v), x.asyncDep) {
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
  }, Xs = (c, u, d) => {
    const b = u.component = c.component;
    if (_o(c, u, d))
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
        Je(c, !1), S ? (S.el = $.el, q(c, S, v)) : S = $, T && ls(T), (J = S.props && S.props.onVnodeBeforeUpdate) && ye(J, F, S, $), Je(c, !0);
        const X = gn(c), _e = c.subTree;
        c.subTree = X, R(
          _e,
          X,
          // parent may have changed if it's in a teleport
          p(_e.el),
          // anchor may have changed if it's in a fragment
          Nt(_e),
          c,
          g,
          _
        ), S.el = X.el, K === null && mo(c, X.el), O && re(O, g), (J = S.props && S.props.onVnodeUpdated) && re(
          () => ye(J, F, S, $),
          g
        );
      } else {
        let S;
        const { el: T, props: O } = u, { bm: F, m: $, parent: K, root: J, type: X } = c, _e = St(u);
        Je(c, !1), F && ls(F), !_e && (S = O && O.onVnodeBeforeMount) && ye(S, K, u), Je(c, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            X,
            c.parent ? c.parent.type : void 0
          );
          const me = c.subTree = gn(c);
          R(
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
        (u.shapeFlag & 256 || K && St(K.vnode) && K.vnode.shapeFlag & 256) && c.a && re(c.a, g), c.isMounted = !0, u = d = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new qn(x);
    c.scope.off();
    const m = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Ws(E), Je(c, !0), m();
  }, q = (c, u, d) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, yo(c, u.props, b, d), wo(c, u.children, d), Fe(), ln(c), De();
  }, L = (c, u, d, b, g, _, v, x, y = !1) => {
    const m = c && c.children, E = c ? c.shapeFlag : 0, S = u.children, { patchFlag: T, shapeFlag: O } = u;
    if (T > 0) {
      if (T & 128) {
        jt(
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
    O & 8 ? (E & 16 && ut(m, g, _), S !== m && a(d, S)) : E & 16 ? O & 16 ? jt(
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
      const O = u[T] = y ? Me(u[T]) : Se(u[T]);
      R(
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
  }, jt = (c, u, d, b, g, _, v, x, y) => {
    let m = 0;
    const E = u.length;
    let S = c.length - 1, T = E - 1;
    for (; m <= S && m <= T; ) {
      const O = c[m], F = u[m] = y ? Me(u[m]) : Se(u[m]);
      if (pt(O, F))
        R(
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
      const O = c[S], F = u[T] = y ? Me(u[T]) : Se(u[T]);
      if (pt(O, F))
        R(
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
          R(
            null,
            u[m] = y ? Me(u[m]) : Se(u[m]),
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
        const oe = u[m] = y ? Me(u[m]) : Se(u[m]);
        oe.key != null && $.set(oe.key, m);
      }
      let K, J = 0;
      const X = T - F + 1;
      let _e = !1, me = 0;
      const dt = new Array(X);
      for (m = 0; m < X; m++) dt[m] = 0;
      for (m = O; m <= S; m++) {
        const oe = c[m];
        if (J >= X) {
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
        be === void 0 ? ge(oe, g, _, !0) : (dt[be - F] = m + 1, be >= me ? me = be : _e = !0, R(
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
      const ks = _e ? Oo(dt) : st;
      for (K = ks.length - 1, m = X - 1; m >= 0; m--) {
        const oe = F + m, be = u[oe], en = u[oe + 1], tn = oe + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          en.el || Fr(en)
        ) : b;
        dt[m] === 0 ? R(
          null,
          be,
          d,
          tn,
          g,
          _,
          v,
          x,
          y
        ) : _e && (K < 0 || m !== ks[K] ? qe(be, d, tn, 2) : K--);
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
          _._isLeaving && _[Wi](
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
    if (S === -2 && (g = !1), x != null && (Fe(), vt(x, null, d, c, !0), De()), O != null && (u.renderCache[O] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const $ = E & 1 && T, K = !St(c);
    let J;
    if (K && (J = v && v.onVnodeBeforeUnmount) && ye(J, u, c), E & 6)
      Br(c.component, d, b);
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
      ) : (_ === ue && S & 384 || !g && E & 16) && ut(y, u, d), b && Zs(c);
    }
    const X = F != null && O == null;
    (K && (J = v && v.onVnodeUnmounted) || $ || X) && re(() => {
      J && ye(J, u, c), $ && Ge(c, null, u, "unmounted"), X && (c.el = null);
    }, d);
  }, Zs = (c) => {
    const { type: u, el: d, anchor: b, transition: g } = c;
    if (u === ue) {
      Wr(d, b);
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
  }, Wr = (c, u) => {
    let d;
    for (; c !== u; )
      d = w(c), r(c), c = d;
    r(u);
  }, Br = (c, u, d) => {
    const { bum: b, scope: g, job: _, subTree: v, um: x, m: y, a: m } = c;
    bn(y), bn(m), b && ls(b), g.stop(), _ && (_.flags |= 8, ge(v, c, u, d)), x && re(x, u), re(() => {
      c.isUnmounted = !0;
    }, u);
  }, ut = (c, u, d, b = !1, g = !1, _ = 0) => {
    for (let v = _; v < c.length; v++)
      ge(c[v], u, d, b, g);
  }, Nt = (c) => {
    if (c.shapeFlag & 6)
      return Nt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), d = u && u[Ui];
    return d ? w(d) : u;
  };
  let is = !1;
  const Qs = (c, u, d) => {
    let b;
    c == null ? u._vnode && (ge(u._vnode, null, null, !0), b = u._vnode.component) : R(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, is || (is = !0, ln(b), cr(), is = !1);
  }, at = {
    p: R,
    um: ge,
    m: qe,
    r: Zs,
    mt: rs,
    mc: $e,
    pc: L,
    pbc: We,
    n: Nt,
    o: e
  };
  return {
    render: Qs,
    hydrate: void 0,
    createApp: fo(Qs)
  };
}
function ps({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Je({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Eo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Me(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Mr(o, l)), l.type === ns && (l.patchFlag === -1 && (l = r[i] = Me(l)), l.el = o.el), l.type === lt && !l.el && (l.el = o.el);
    }
}
function Oo(e) {
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
function Fr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fr(t.subTree) : null;
}
const Dr = (e) => e.__isSuspense;
function Ao(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Hi(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), ns = /* @__PURE__ */ Symbol.for("v-txt"), lt = /* @__PURE__ */ Symbol.for("v-cmt"), gs = /* @__PURE__ */ Symbol.for("v-stc"), Ct = [];
let le = null;
function Pe(e = !1) {
  Ct.push(le = e ? null : []);
}
function Po() {
  Ct.pop(), le = Ct[Ct.length - 1] || null;
}
let At = 1;
function yn(e, t = !1) {
  At += e, e < 0 && le && t && (le.hasOnce = !0);
}
function Hr(e) {
  return e.dynamicChildren = At > 0 ? le || st : null, Po(), At > 0 && le && le.push(e), e;
}
function Le(e, t, s, n, r, i) {
  return Hr(
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
function Ro(e, t, s, n, r) {
  return Hr(
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
function jr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nr = ({ key: e }) => e ?? null, Ut = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || /* @__PURE__ */ k(e) || M(e) ? { i: Ce, r: e, k: t, f: !!s } : e : null);
function ce(e, t = null, s = null, n = 0, r = null, i = e === ue ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nr(t),
    ref: t && Ut(t),
    scopeId: ur,
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
  return l ? (Ys(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= Y(s) ? 8 : 16), At > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && le.push(f), f;
}
const Ve = Mo;
function Mo(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === to) && (e = lt), jr(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ys(l, s), At > 0 && !i && le && (l.shapeFlag & 6 ? le[le.indexOf(e)] = l : le.push(l)), l.patchFlag = -2, l;
  }
  if (Wo(e) && (e = e.__vccOpts), t) {
    t = Io(t);
    let { class: l, style: f } = t;
    l && !Y(l) && (t.class = Fs(l)), N(f) && (/* @__PURE__ */ Vs(f) && !P(f) && (f = Z({}, f)), t.style = Is(f));
  }
  const o = Y(e) ? 1 : Dr(e) ? 128 : Vi(e) ? 64 : N(e) ? 4 : M(e) ? 2 : 0;
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
function Io(e) {
  return e ? /* @__PURE__ */ Vs(e) || Tr(e) ? Z({}, e) : e : null;
}
function ct(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Do(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Nr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Ut(t)) : [i, Ut(t)] : Ut(t)
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
function Fo(e = " ", t = 0) {
  return Ve(ns, null, e, t);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Ve(lt) : P(e) ? Ve(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jr(e) ? Me(e) : Ve(ns, null, String(e));
}
function Me(e) {
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
      !r && !Tr(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: Ce }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Fo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Do(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Fs([t.class, n.class]));
      else if (r === "style")
        t.style = Is([t.style, n.style]);
      else if (zt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xt(r) && (t[r] = o);
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
const Ho = xr();
let jo = 0;
function No(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ho, i = {
    uid: jo++,
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
    scope: new ni(
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
    propsOptions: Or(n, r),
    emitsOptions: vr(n, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ao.bind(null, i), e.ce && e.ce(i), i;
}
let ne = null;
const $o = () => ne || Ce;
let Yt, Os;
{
  const e = Qt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Yt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ne = s
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (s) => Pt = s
  );
}
const It = (e) => {
  const t = ne;
  return Yt(e), e.scope.on(), () => {
    e.scope.off(), Yt(t);
  };
}, xn = () => {
  ne && ne.scope.off(), Yt(null);
};
function $r(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Lo(e, t = !1, s = !1) {
  t && Os(t);
  const { props: n, children: r } = e.vnode, i = $r(e);
  bo(e, n, i, t), So(e, r, s || t);
  const o = i ? Ko(e, t) : void 0;
  return t && Os(!1), o;
}
function Ko(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so);
  const { setup: n } = s;
  if (n) {
    Fe();
    const r = e.setupContext = n.length > 1 ? Vo(e) : null, i = It(e), o = Mt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Nn(o);
    if (De(), i(), (l || e.sp) && !St(e) && pr(e), l) {
      if (o.then(xn, xn), t)
        return o.then((f) => {
          vn(e, f);
        }).catch((f) => {
          es(f, e, 0);
        });
      e.asyncDep = o;
    } else
      vn(e, o);
  } else
    Lr(e);
}
function vn(e, t, s) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = ir(t)), Lr(e);
}
function Lr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Te);
  {
    const r = It(e);
    Fe();
    try {
      no(e);
    } finally {
      De(), r();
    }
  }
}
const Uo = {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ir(Ci(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in wt)
        return wt[s](e);
    },
    has(t, s) {
      return s in t || s in wt;
    }
  })) : e.proxy;
}
function Wo(e) {
  return M(e) && "__vccOpts" in e;
}
const Bo = (e, t) => /* @__PURE__ */ Pi(e, t, Pt), qo = "3.5.32";
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
const Kr = As ? (e) => As.createHTML(e) : (e) => e, Go = "http://www.w3.org/2000/svg", Jo = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, wn = Re && /* @__PURE__ */ Re.createElement("template"), Yo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Re.createElementNS(Go, e) : t === "mathml" ? Re.createElementNS(Jo, e) : s ? Re.createElement(e, { is: s }) : Re.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
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
      wn.innerHTML = Kr(
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
}, zo = /* @__PURE__ */ Symbol("_vtc");
function Xo(e, t, s) {
  const n = e[zo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Cn = /* @__PURE__ */ Symbol("_vod"), Zo = /* @__PURE__ */ Symbol("_vsh"), Qo = /* @__PURE__ */ Symbol(""), ko = /(?:^|;)\s*display\s*:/;
function el(e, t, s) {
  const n = e.style, r = Y(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (Y(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Vt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Vt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Vt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Qo];
      o && (s += ";" + o), n.cssText = s, i = ko.test(s);
    }
  } else t && e.removeAttribute("style");
  Cn in e && (e[Cn] = i ? n.display : "", e[Zo] && (n.display = "none"));
}
const Tn = /\s*!important$/;
function Vt(e, t, s) {
  if (P(s))
    s.forEach((n) => Vt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tl(e, t);
    Tn.test(s) ? e.setProperty(
      ke(n),
      s.replace(Tn, ""),
      "important"
    ) : e[n] = s;
  }
}
const En = ["Webkit", "Moz", "ms"], _s = {};
function tl(e, t) {
  const s = _s[t];
  if (s)
    return s;
  let n = ae(t);
  if (n !== "filter" && n in e)
    return _s[t] = n;
  n = Kn(n);
  for (let r = 0; r < En.length; r++) {
    const i = En[r] + n;
    if (i in e)
      return _s[t] = i;
  }
  return t;
}
const On = "http://www.w3.org/1999/xlink";
function An(e, t, s, n, r, i = ti(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(On, t.slice(6, t.length)) : e.setAttributeNS(On, t, s) : s == null || i && !Vn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ee(s) ? String(s) : s
  );
}
function Pn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Kr(s) : s);
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
    l === "boolean" ? s = Vn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function sl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function nl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Rn = /* @__PURE__ */ Symbol("_vei");
function rl(e, t, s, n, r = null) {
  const i = e[Rn] || (e[Rn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = il(t);
    if (n) {
      const h = i[t] = cl(
        n,
        r
      );
      sl(e, l, h, f);
    } else o && (nl(e, l, o, f), i[t] = void 0);
  }
}
const Mn = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (Mn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Mn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ke(e.slice(2)), t];
}
let ms = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => ms || (ol.then(() => ms = 0), ms = Date.now());
function cl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      fl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = ll(), s;
}
function fl(e, t) {
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
const In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Xo(e, n, o) : t === "style" ? el(e, s, n) : zt(t) ? Xt(t) || rl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, n, o)) ? (Pn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && An(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Y(n))) ? Pn(e, ae(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), An(e, t, n, o));
};
function al(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && In(t) && M(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return In(t) && Y(s) ? !1 : t in e;
}
function dl(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = ae(t);
  return Array.isArray(s) ? s.some((r) => ae(r) === n) : Object.keys(s).some((r) => ae(r) === n);
}
const hl = /* @__PURE__ */ Z({ patchProp: ul }, Yo);
let Fn;
function pl() {
  return Fn || (Fn = Co(hl));
}
const gl = ((...e) => {
  const t = pl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = ml(n);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, _l(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function _l(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ml(e) {
  return Y(e) ? document.querySelector(e) : e;
}
const bl = "rest-countries", Ur = 5, yl = "header", xl = () => {
  const e = /* @__PURE__ */ yt([]), t = /* @__PURE__ */ yt(!0), s = /* @__PURE__ */ yt(null);
  let n = !1;
  return qs(() => {
    n = !0;
  }), mr(async () => {
    try {
      const r = await new window.WidgetServiceSDK().connectors.execute({
        permalink: bl,
        method: "GET"
      });
      if (n) return;
      e.value = r.toSorted((i, o) => o.population - i.population).slice(0, Ur).map((i) => {
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
}, vl = ["aria-label"], Sl = ["src", "alt"], wl = { class: "country-details" }, Cl = { class: "country-name" }, Tl = { class: "country-meta" }, El = /* @__PURE__ */ hr({
  __name: "CountryCard",
  props: {
    country: {}
  },
  setup(e) {
    const t = (s) => {
      s.currentTarget instanceof HTMLImageElement && (s.currentTarget.style.opacity = "0");
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
      }, null, 40, Sl),
      ce("div", wl, [
        ce("span", Cl, Xe(e.country.name), 1),
        ce("span", Tl, Xe(e.country.capital) + " · " + Xe(e.country.population.toLocaleString("en-US")) + " · " + Xe(e.country.region), 1)
      ])
    ], 8, vl));
  }
}), Vr = Symbol("widgetHeader"), Ol = { class: "vue-widget-section" }, Al = { class: "widget-framework-header" }, Pl = {
  key: 0,
  role: "status",
  "aria-label": "Loading country data",
  class: "country-list"
}, Rl = {
  key: 1,
  role: "alert",
  class: "country-error"
}, Ml = {
  key: 2,
  class: "country-list"
}, Il = /* @__PURE__ */ hr({
  __name: "App",
  setup(e) {
    const { countries: t, loading: s, error: n } = xl(), r = xt(Vr, /* @__PURE__ */ yt("Vue"));
    return (i, o) => (Pe(), Le("section", Ol, [
      ce("p", Al, Xe(Ye(r)), 1),
      Ye(s) ? (Pe(), Le("ul", Pl, [
        (Pe(!0), Le(ue, null, un(Ye(Ur), (l) => (Pe(), Le("li", {
          key: l,
          class: "country-item country-item--skeleton"
        }, [...o[0] || (o[0] = [
          ce("div", { class: "country-flag country-flag--skeleton" }, null, -1),
          ce("div", { class: "country-details" }, [
            ce("div", { class: "country-skeleton-line country-skeleton-line--name" }),
            ce("div", { class: "country-skeleton-line country-skeleton-line--meta" })
          ], -1)
        ])]))), 128))
      ])) : Ye(n) ? (Pe(), Le("div", Rl, [
        ce("p", null, Xe(Ye(n)), 1)
      ])) : (Pe(), Le("ul", Ml, [
        (Pe(!0), Le(ue, null, un(Ye(t), (l) => (Pe(), Ro(El, {
          key: l.name,
          country: l
        }, null, 8, ["country"]))), 128))
      ]))
    ]));
  }
}), Dn = (e) => {
  const t = e.getProps()[yl];
  return typeof t == "string" && t.trim() ? t : "Vue";
};
async function Dl(e) {
  await e.whenReady();
  const t = /* @__PURE__ */ yt(Dn(e)), s = gl(Il);
  s.provide(Vr, t), s.mount(e.getContainer());
  const n = e.on("propsChanged", () => t.value = Dn(e));
  e.on("destroy", () => {
    n(), s.unmount();
  });
}
export {
  Dl as init
};
