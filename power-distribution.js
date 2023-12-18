(function () {
  'use strict';

  function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
  }
  function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }


  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const $def2de46b9306e8a$var$t = window, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$n = new WeakMap;
  class $def2de46b9306e8a$export$505d1e8739bad805 {
      constructor(t, e, n){
          if (this._$cssResult$ = !0, n !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = t, this.t = e;
      }
      get styleSheet() {
          let t = this.o;
          const s = this.t;
          if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
              const e = void 0 !== s && 1 === s.length;
              e && (t = $def2de46b9306e8a$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$n.set(s, t));
          }
          return t;
      }
      toString() {
          return this.cssText;
      }
  }
  const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
      const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
              if (!0 === t._$cssResult$) return t.cssText;
              if ("number" == typeof t) return t;
              throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
          })(s) + t[n + 1], t[0]);
      return new $def2de46b9306e8a$export$505d1e8739bad805(n, t, $def2de46b9306e8a$var$s);
  }, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, n)=>{
      $def2de46b9306e8a$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
          const n = document.createElement("style"), o = $def2de46b9306e8a$var$t.litNonce;
          void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
      });
  }, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
          let e = "";
          for (const s of t.cssRules)e += s.cssText;
          return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
      })(t) : t;


  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var $19fe8e3abedf4df0$var$s;
  const $19fe8e3abedf4df0$var$e = window, $19fe8e3abedf4df0$var$r = $19fe8e3abedf4df0$var$e.trustedTypes, $19fe8e3abedf4df0$var$h = $19fe8e3abedf4df0$var$r ? $19fe8e3abedf4df0$var$r.emptyScript : "", $19fe8e3abedf4df0$var$o = $19fe8e3abedf4df0$var$e.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
      toAttribute (t, i) {
          switch(i){
              case Boolean:
                  t = t ? $19fe8e3abedf4df0$var$h : null;
                  break;
              case Object:
              case Array:
                  t = null == t ? t : JSON.stringify(t);
          }
          return t;
      },
      fromAttribute (t, i) {
          let s = t;
          switch(i){
              case Boolean:
                  s = null !== t;
                  break;
              case Number:
                  s = null === t ? null : Number(t);
                  break;
              case Object:
              case Array:
                  try {
                      s = JSON.parse(t);
                  } catch (t) {
                      s = null;
                  }
          }
          return s;
      }
  }, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $19fe8e3abedf4df0$var$l = {
      attribute: !0,
      type: String,
      converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
      reflect: !1,
      hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
  }, $19fe8e3abedf4df0$var$d = "finalized";
  class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
      constructor(){
          super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
      }
      static addInitializer(t) {
          var i;
          this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
      }
      static get observedAttributes() {
          this.finalize();
          const t = [];
          return this.elementProperties.forEach((i, s)=>{
              const e = this._$Ep(s, i);
              void 0 !== e && (this._$Ev.set(e, s), t.push(e));
          }), t;
      }
      static createProperty(t, i = $19fe8e3abedf4df0$var$l) {
          if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
              const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
              void 0 !== e && Object.defineProperty(this.prototype, t, e);
          }
      }
      static getPropertyDescriptor(t, i, s) {
          return {
              get () {
                  return this[i];
              },
              set (e) {
                  const r = this[t];
                  this[i] = e, this.requestUpdate(t, r, s);
              },
              configurable: !0,
              enumerable: !0
          };
      }
      static getPropertyOptions(t) {
          return this.elementProperties.get(t) || $19fe8e3abedf4df0$var$l;
      }
      static finalize() {
          if (this.hasOwnProperty($19fe8e3abedf4df0$var$d)) return !1;
          this[$19fe8e3abedf4df0$var$d] = !0;
          const t = Object.getPrototypeOf(this);
          if (t.finalize(), void 0 !== t.h && (this.h = [
              ...t.h
          ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
              const t = this.properties, i = [
                  ...Object.getOwnPropertyNames(t),
                  ...Object.getOwnPropertySymbols(t)
              ];
              for (const s of i)this.createProperty(s, t[s]);
          }
          return this.elementStyles = this.finalizeStyles(this.styles), !0;
      }
      static finalizeStyles(i) {
          const s = [];
          if (Array.isArray(i)) {
              const e = new Set(i.flat(1 / 0).reverse());
              for (const i of e)s.unshift(($def2de46b9306e8a$export$ee69dfd951e24778)(i));
          } else void 0 !== i && s.push(($def2de46b9306e8a$export$ee69dfd951e24778)(i));
          return s;
      }
      static _$Ep(t, i) {
          const s = i.attribute;
          return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
      }
      u() {
          var t;
          this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
      }
      addController(t) {
          var i, s;
          (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
      }
      removeController(t) {
          var i;
          null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
      }
      _$Eg() {
          this.constructor.elementProperties.forEach((t, i)=>{
              this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
          });
      }
      createRenderRoot() {
          var t;
          const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
          return ($def2de46b9306e8a$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
      }
      connectedCallback() {
          var t;
          void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
              var i;
              return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
          });
      }
      enableUpdating(t) {}
      disconnectedCallback() {
          var t;
          null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
              var i;
              return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
          });
      }
      attributeChangedCallback(t, i, s) {
          this._$AK(t, s);
      }
      _$EO(t, i, s = $19fe8e3abedf4df0$var$l) {
          var e;
          const r = this.constructor._$Ep(t, s);
          if (void 0 !== r && !0 === s.reflect) {
              const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(i, s.type);
              this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
          }
      }
      _$AK(t, i) {
          var s;
          const e = this.constructor, r = e._$Ev.get(t);
          if (void 0 !== r && this._$El !== r) {
              const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                  fromAttribute: t.converter
              } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
              this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
          }
      }
      requestUpdate(t, i, s) {
          let e = !0;
          void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
      }
      async _$Ej() {
          this.isUpdatePending = !0;
          try {
              await this._$E_;
          } catch (t) {
              Promise.reject(t);
          }
          const t = this.scheduleUpdate();
          return null != t && await t, !this.isUpdatePending;
      }
      scheduleUpdate() {
          return this.performUpdate();
      }
      performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
          let i = !1;
          const s = this._$AL;
          try {
              i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                  var i;
                  return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
              }), this.update(s)) : this._$Ek();
          } catch (t) {
              throw i = !1, this._$Ek(), t;
          }
          i && this._$AE(s);
      }
      willUpdate(t) {}
      _$AE(t) {
          var i;
          null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
              var i;
              return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
          }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
      }
      _$Ek() {
          this._$AL = new Map, this.isUpdatePending = !1;
      }
      get updateComplete() {
          return this.getUpdateComplete();
      }
      getUpdateComplete() {
          return this._$E_;
      }
      shouldUpdate(t) {
          return !0;
      }
      update(t) {
          void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
      }
      updated(t) {}
      firstUpdated(t) {}
  }
  $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d] = !0, $19fe8e3abedf4df0$export$c7c07a37856565d.elementProperties = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
      mode: "open"
  }, null == $19fe8e3abedf4df0$var$o || $19fe8e3abedf4df0$var$o({
      ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
  }), (null !== ($19fe8e3abedf4df0$var$s = $19fe8e3abedf4df0$var$e.reactiveElementVersions) && void 0 !== $19fe8e3abedf4df0$var$s ? $19fe8e3abedf4df0$var$s : $19fe8e3abedf4df0$var$e.reactiveElementVersions = []).push("1.6.2");


  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var $f58f44579a4747ac$var$t;
  const $f58f44579a4747ac$var$i = window, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
      createHTML: (t)=>t
  }) : void 0, $f58f44579a4747ac$var$o = "$lit$", $f58f44579a4747ac$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$l = "?" + $f58f44579a4747ac$var$n, $f58f44579a4747ac$var$h = `<${$f58f44579a4747ac$var$l}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$d = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$u = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$c = Array.isArray, $f58f44579a4747ac$var$v = (t)=>$f58f44579a4747ac$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f58f44579a4747ac$var$a = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$a}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$a}*=${$f58f44579a4747ac$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$w = (t)=>(i, ...s)=>({
              _$litType$: t,
              strings: i,
              values: s
          }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$w(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$w(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$E = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129, null, !1), $f58f44579a4747ac$var$P = (t, i)=>{
      const s = t.length - 1, l = [];
      let r, d = 2 === i ? "<svg>" : "", u = $f58f44579a4747ac$var$f;
      for(let i = 0; i < s; i++){
          const s = t[i];
          let e, c, v = -1, a = 0;
          for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f58f44579a4747ac$var$f ? "!--" === c[1] ? u = $f58f44579a4747ac$var$_ : void 0 !== c[1] ? u = $f58f44579a4747ac$var$m : void 0 !== c[2] ? ($f58f44579a4747ac$var$y.test(c[2]) && (r = RegExp("</" + c[2], "g")), u = $f58f44579a4747ac$var$p) : void 0 !== c[3] && (u = $f58f44579a4747ac$var$p) : u === $f58f44579a4747ac$var$p ? ">" === c[0] ? (u = null != r ? r : $f58f44579a4747ac$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, e = c[1], u = void 0 === c[3] ? $f58f44579a4747ac$var$p : '"' === c[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : u === $f58f44579a4747ac$var$$ || u === $f58f44579a4747ac$var$g ? u = $f58f44579a4747ac$var$p : u === $f58f44579a4747ac$var$_ || u === $f58f44579a4747ac$var$m ? u = $f58f44579a4747ac$var$f : (u = $f58f44579a4747ac$var$p, r = void 0);
          const w = u === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
          d += u === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$h : v >= 0 ? (l.push(e), s.slice(0, v) + $f58f44579a4747ac$var$o + s.slice(v) + $f58f44579a4747ac$var$n + w) : s + $f58f44579a4747ac$var$n + (-2 === v ? (l.push(void 0), i) : w);
      }
      const c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
      if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
      return [
          void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(c) : c,
          l
      ];
  };
  class $f58f44579a4747ac$var$V {
      constructor({ strings: t , _$litType$: i  }, e){
          let h;
          this.parts = [];
          let r = 0, u = 0;
          const c = t.length - 1, v = this.parts, [a, f] = $f58f44579a4747ac$var$P(t, i);
          if (this.el = $f58f44579a4747ac$var$V.createElement(a, e), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === i) {
              const t = this.el.content, i = t.firstChild;
              i.remove(), t.append(...i.childNodes);
          }
          for(; null !== (h = $f58f44579a4747ac$var$C.nextNode()) && v.length < c;){
              if (1 === h.nodeType) {
                  if (h.hasAttributes()) {
                      const t = [];
                      for (const i of h.getAttributeNames())if (i.endsWith($f58f44579a4747ac$var$o) || i.startsWith($f58f44579a4747ac$var$n)) {
                          const s = f[u++];
                          if (t.push(i), void 0 !== s) {
                              const t = h.getAttribute(s.toLowerCase() + $f58f44579a4747ac$var$o).split($f58f44579a4747ac$var$n), i = /([.?@])?(.*)/.exec(s);
                              v.push({
                                  type: 1,
                                  index: r,
                                  name: i[2],
                                  strings: t,
                                  ctor: "." === i[1] ? $f58f44579a4747ac$var$k : "?" === i[1] ? $f58f44579a4747ac$var$I : "@" === i[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$R
                              });
                          } else v.push({
                              type: 6,
                              index: r
                          });
                      }
                      for (const i of t)h.removeAttribute(i);
                  }
                  if ($f58f44579a4747ac$var$y.test(h.tagName)) {
                      const t = h.textContent.split($f58f44579a4747ac$var$n), i = t.length - 1;
                      if (i > 0) {
                          h.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                          for(let s = 0; s < i; s++)h.append(t[s], $f58f44579a4747ac$var$d()), $f58f44579a4747ac$var$C.nextNode(), v.push({
                              type: 2,
                              index: ++r
                          });
                          h.append(t[i], $f58f44579a4747ac$var$d());
                      }
                  }
              } else if (8 === h.nodeType) {
                  if (h.data === $f58f44579a4747ac$var$l) v.push({
                      type: 2,
                      index: r
                  });
                  else {
                      let t = -1;
                      for(; -1 !== (t = h.data.indexOf($f58f44579a4747ac$var$n, t + 1));)v.push({
                          type: 7,
                          index: r
                      }), t += $f58f44579a4747ac$var$n.length - 1;
                  }
              }
              r++;
          }
      }
      static createElement(t, i) {
          const s = $f58f44579a4747ac$var$r.createElement("template");
          return s.innerHTML = t, s;
      }
  }
  function $f58f44579a4747ac$var$N(t, i, s = t, e) {
      var o, n, l, h;
      if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
      let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
      const d = $f58f44579a4747ac$var$u(i) ? void 0 : i._$litDirective$;
      return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f58f44579a4747ac$var$N(t, r._$AS(t, i.values), r, e)), i;
  }
  class $f58f44579a4747ac$var$S {
      constructor(t, i){
          this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
      }
      get parentNode() {
          return this._$AM.parentNode;
      }
      get _$AU() {
          return this._$AM._$AU;
      }
      u(t) {
          var i;
          const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f58f44579a4747ac$var$r).importNode(s, !0);
          $f58f44579a4747ac$var$C.currentNode = o;
          let n = $f58f44579a4747ac$var$C.nextNode(), l = 0, h = 0, d = e[0];
          for(; void 0 !== d;){
              if (l === d.index) {
                  let i;
                  2 === d.type ? i = new $f58f44579a4747ac$var$M(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new $f58f44579a4747ac$var$z(n, this, t)), this._$AV.push(i), d = e[++h];
              }
              l !== (null == d ? void 0 : d.index) && (n = $f58f44579a4747ac$var$C.nextNode(), l++);
          }
          return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, o;
      }
      v(t) {
          let i = 0;
          for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
      }
  }
  class $f58f44579a4747ac$var$M {
      constructor(t, i, s, e){
          var o;
          this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
      }
      get _$AU() {
          var t, i;
          return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
      }
      get parentNode() {
          let t = this._$AA.parentNode;
          const i = this._$AM;
          return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
      }
      get startNode() {
          return this._$AA;
      }
      get endNode() {
          return this._$AB;
      }
      _$AI(t, i = this) {
          t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$u(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f58f44579a4747ac$var$v(t) ? this.T(t) : this._(t);
      }
      k(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
      }
      $(t) {
          this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
      }
      _(t) {
          this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$u(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
      }
      g(t) {
          var i;
          const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f58f44579a4747ac$var$V.createElement(e.h, this.options)), e);
          if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
          else {
              const t = new $f58f44579a4747ac$var$S(o, this), i = t.u(this.options);
              t.v(s), this.$(i), this._$AH = t;
          }
      }
      _$AC(t) {
          let i = $f58f44579a4747ac$var$E.get(t.strings);
          return void 0 === i && $f58f44579a4747ac$var$E.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
      }
      T(t) {
          $f58f44579a4747ac$var$c(this._$AH) || (this._$AH = [], this._$AR());
          const i = this._$AH;
          let s, e = 0;
          for (const o of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.k($f58f44579a4747ac$var$d()), this.k($f58f44579a4747ac$var$d()), this, this.options)) : s = i[e], s._$AI(o), e++;
          e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
      }
      _$AR(t = this._$AA.nextSibling, i) {
          var s;
          for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
              const i = t.nextSibling;
              t.remove(), t = i;
          }
      }
      setConnected(t) {
          var i;
          void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
      }
  }
  class $f58f44579a4747ac$var$R {
      constructor(t, i, s, e, o){
          this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
      }
      get tagName() {
          return this.element.tagName;
      }
      get _$AU() {
          return this._$AM._$AU;
      }
      _$AI(t, i = this, s, e) {
          const o = this.strings;
          let n = !1;
          if (void 0 === o) t = $f58f44579a4747ac$var$N(this, t, i, 0), n = !$f58f44579a4747ac$var$u(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, n && (this._$AH = t);
          else {
              const e = t;
              let l, h;
              for(t = o[0], l = 0; l < o.length - 1; l++)h = $f58f44579a4747ac$var$N(this, e[s + l], i, l), h === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f58f44579a4747ac$var$u(h) || h !== this._$AH[l]), h === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
          }
          n && !e && this.j(t);
      }
      j(t) {
          t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
      }
  }
  class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
      constructor(){
          super(...arguments), this.type = 3;
      }
      j(t) {
          this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
      }
  }
  const $f58f44579a4747ac$var$H = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
  class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
      constructor(){
          super(...arguments), this.type = 4;
      }
      j(t) {
          t && t !== $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f58f44579a4747ac$var$H) : this.element.removeAttribute(this.name);
      }
  }
  class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$R {
      constructor(t, i, s, e, o){
          super(t, i, s, e, o), this.type = 5;
      }
      _$AI(t, i = this) {
          var s;
          if ((t = null !== (s = $f58f44579a4747ac$var$N(this, t, i, 0)) && void 0 !== s ? s : $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
          const e = this._$AH, o = t === $f58f44579a4747ac$export$45b790e32b2810ee && e !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (e === $f58f44579a4747ac$export$45b790e32b2810ee || o);
          o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
      }
      handleEvent(t) {
          var i, s;
          "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
      }
  }
  class $f58f44579a4747ac$var$z {
      constructor(t, i, s){
          this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
      }
      get _$AU() {
          return this._$AM._$AU;
      }
      _$AI(t) {
          $f58f44579a4747ac$var$N(this, t);
      }
  }
  const $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$i.litHtmlPolyfillSupport;
  null == $f58f44579a4747ac$var$j || $f58f44579a4747ac$var$j($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), (null !== ($f58f44579a4747ac$var$t = $f58f44579a4747ac$var$i.litHtmlVersions) && void 0 !== $f58f44579a4747ac$var$t ? $f58f44579a4747ac$var$t : $f58f44579a4747ac$var$i.litHtmlVersions = []).push("2.7.4");
  const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
      var e, o;
      const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
      let l = n._$litPart$;
      if (void 0 === l) {
          const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
          n._$litPart$ = l = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$d(), t), t, void 0, null != s ? s : {});
      }
      return l._$AI(t), l;
  };




  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
  class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends ($19fe8e3abedf4df0$export$c7c07a37856565d) {
      constructor(){
          super(...arguments), this.renderOptions = {
              host: this
          }, this._$Do = void 0;
      }
      createRenderRoot() {
          var t, e;
          const i = super.createRenderRoot();
          return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
      }
      update(t) {
          const i = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ($f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
          var t;
          super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
      }
      disconnectedCallback() {
          var t;
          super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
      }
      render() {
          return $f58f44579a4747ac$export$9c068ae9cc5db4e8;
      }
  }
  $ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
      LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
  });
  const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
  null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
      LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
  });
  (null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.2");





  const $120c5a859c012378$export$9dd6ff9ea0189349 = ($def2de46b9306e8a$export$dbf350e5966cf602)`
  ha-card {
    min-width: 210px;
  }
  .card-content {
    position: relative;
    direction: ltr;
  }
  .lines {
    position: absolute;
    bottom: -10px;
    left: 0px;
    width: 100%;
    height: 158px;
    display: flex;
    justify-content: center;
    padding: 0px 16px 16px;
    box-sizing: border-box;
  }

  .lines.high {
    bottom: 100px;
  }

  .lines svg {
    width: calc(100% - 160px);
    height: 100%;
    max-width: 340px;
  }

  .lines.right {
    right: 0px;
    width: 110px;
    left: calc(100% - 110px);
    bottom: -8px;
    height: 155px;
  }

  .lines.right.high {
    bottom: 100px;
    height: 156px;
  }

  .lines.right svg {
    width: 100%;
  }

  .right circle.grid {
    stroke-width: 4;
    strok-fill: ;
  }

  .lines svg {
    width: calc(100% - 160px);
    height: 100%;
    max-width: 340px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }
  .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle-container.low-carbon {
    margin-right: 4px;
  }
  .circle-container.generation {
    margin: 0 4px;
    height: 130px;
  }
  .circle-container.load_top {
    margin-left: 4px;
    height: 130px;
  }
  .circle-container.water.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.storage {
    height: 110px;
    justify-content: flex-end;
  }
  .circle-container.load-bottom {
    margin-left: 4px;
    height: 110px;
    justify-content: flex-end;
  }
  .spacer {
    width: 84px;
  }
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    position: relative;
    text-decoration: none;
    color: var(--primary-text-color);
  }
  ha-icon {
    padding-bottom: 2px;
  }
  ha-icon.small {
    --mdc-icon-size: 24px;
  }
  ha-svg-icon.small {
    --mdc-icon-size: 12px;
  }
  ha-svg-icon {
    padding-bottom: 2px;
  }
  .circle span.info {
    padding-bottom: 2px;
  }
  .label {
    color: var(--secondary-text-color);
    font-size: 12px;
    opacity: 1;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
    white-space: nowrap;
  }
  line,
  path {
    stroke: var(--primary-text-color);
    stroke-width: 1;
    fill: none;
  }
  .circle svg {
    position: absolute;
    fill: none;
    stroke-width: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .gas path,
  .gas circle {
    stroke: var(--energy-gas-color);
  }
  circle.gas {
    stroke-width: 4;
    fill: var(--energy-gas-color);
  }
  .gas .circle {
    border-color: var(--energy-gas-color);
  }
  .water path,
  .water circle {
    stroke: var(--energy-water-color);
  }
  circle.water {
    stroke-width: 4;
    fill: var(--energy-water-color);
  }
  .water .circle {
    border-color: var(--energy-water-color);
  }
  .low-carbon line {
    stroke: var(--energy-non-fossil-color);
  }
  .low-carbon .circle {
    border-color: var(--energy-non-fossil-color);
  }
  .low-carbon ha-icon {
    color: var(--energy-non-fossil-color);
  }
  circle.low-carbon {
    stroke: var(--energy-non-fossil-color);
    fill: var(--energy-non-fossil-color);
  }
  .generation .circle {
    border-color: var(--energy-solar-color);
  }
  circle.generation,
  path.generation {
    stroke: var(--energy-solar-color);
  }
  circle.generation {
    stroke-width: 4;
    fill: var(--energy-solar-color);
  }
  .storage .circle {
    border-color: var(--energy-battery-in-color);
  }
  circle.storage,
  path.storage {
    stroke: var(--energy-battery-out-color);
  }
  path.storage-load,
  circle.storage-load {
    stroke: var(--energy-battery-out-color);
  }
  circle.storage-load {
    stroke-width: 4;
    fill: var(--energy-battery-out-color);
  }
  path.storage-generation,
  circle.storage-generation {
    stroke: var(--energy-battery-in-color);
  }
  circle.storage-generation {
    stroke-width: 4;
    fill: var(--energy-battery-in-color);
  }
  .storage-in {
    color: var(--energy-battery-in-color);
  }
  .storage-out {
    color: var(--energy-battery-out-color);
  }
  path.storage-from-grid {
    stroke: var(--energy-grid-consumption-color);
  }
  path.storage-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  path.return,
  circle.return,
  circle.storage-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  circle.return,
  circle.storage-to-grid {
    stroke-width: 4;
    fill: var(--energy-grid-return-color);
  }
  .return {
    color: var(--energy-grid-return-color);
  }
  .grid .circle {
    border-color: var(--energy-grid-consumption-color);
  }
  .consumption {
    color: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.storage-from-grid,
  path.grid {
    stroke: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.storage-from-grid {
    stroke-width: 4;
    fill: var(--energy-grid-consumption-color);
  }
  .load .circle {
    border-width: 0;
    border-color: var(--primary-color);
  }
  .load .circle.border {
    border-width: 2px;
  }
  .circle svg circle {
    animation: rotate-in 0.6s ease-in;
    transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
    fill: none;
  }
  @keyframes rotate-in {
    from {
      stroke-dashoffset: 238.76104;
      stroke-dasharray: 238.76104;
    }
  }
  .card-actions a {
    text-decoration: none;
  }
`;


  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const $9cd908ed2625c047$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
          ...e,
          finisher (n) {
              n.createProperty(e.key, i);
          }
      } : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: e.key,
          initializer () {
              "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
          },
          finisher (n) {
              n.createProperty(e.key, i);
          }
      }, $9cd908ed2625c047$var$e = (i, e, n)=>{
      e.constructor.createProperty(n, i);
  };
  function $9cd908ed2625c047$export$d541bacb2bda4494(n) {
      return (t, o)=>void 0 !== o ? $9cd908ed2625c047$var$e(n, t, o) : $9cd908ed2625c047$var$i(n, t);
  }


  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(t) {
      return ($9cd908ed2625c047$export$d541bacb2bda4494)({
          ...t,
          state: !0
      });
  }




  function $feccc7a5980a21d5$export$cc2e736493e359e2(value) {
      return value === undefined || value == "";
  }
  function $feccc7a5980a21d5$export$ddaf0a93cc777a0d(vis, config) {
      vis._has_generation = !($feccc7a5980a21d5$export$cc2e736493e359e2(config.generation_to_grid_power_id) && $feccc7a5980a21d5$export$cc2e736493e359e2(config.generation_to_storage_power_id) && $feccc7a5980a21d5$export$cc2e736493e359e2(config.generation_to_load_power_id));
      vis._has_storage = !($feccc7a5980a21d5$export$cc2e736493e359e2(config.storage_to_grid_power_id) && $feccc7a5980a21d5$export$cc2e736493e359e2(config.generation_to_storage_power_id) && $feccc7a5980a21d5$export$cc2e736493e359e2(config.storage_to_load_power_id));
      vis._has_load_top = !$feccc7a5980a21d5$export$cc2e736493e359e2(config.load_top_power_id);
      vis._has_load_bottom = !$feccc7a5980a21d5$export$cc2e736493e359e2(config.load_bottom_power_id);
  }


  var $8944235bd8be49ac$exports = {};

  $parcel$export($8944235bd8be49ac$exports, "selectUnit", () => $8944235bd8be49ac$export$b8f7189986dd5395);
  var $8944235bd8be49ac$var$__assign = function() {
      $8944235bd8be49ac$var$__assign = Object.assign || function(t) {
          for(var s, i = 1, n = arguments.length; i < n; i++){
              s = arguments[i];
              for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return $8944235bd8be49ac$var$__assign.apply(this, arguments);
  };
  var $8944235bd8be49ac$var$MS_PER_SECOND = 1e3;
  var $8944235bd8be49ac$var$SECS_PER_MIN = 60;
  var $8944235bd8be49ac$var$SECS_PER_HOUR = $8944235bd8be49ac$var$SECS_PER_MIN * 60;
  var $8944235bd8be49ac$var$SECS_PER_DAY = $8944235bd8be49ac$var$SECS_PER_HOUR * 24;
  var $8944235bd8be49ac$var$SECS_PER_WEEK = $8944235bd8be49ac$var$SECS_PER_DAY * 7;
  function $8944235bd8be49ac$export$b8f7189986dd5395(from, to, thresholds) {
      if (to === void 0) to = Date.now();
      if (thresholds === void 0) thresholds = {};
      var resolvedThresholds = $8944235bd8be49ac$var$__assign($8944235bd8be49ac$var$__assign({}, $8944235bd8be49ac$export$f4fd60e41371f80d), thresholds || {});
      var secs = (+from - +to) / $8944235bd8be49ac$var$MS_PER_SECOND;
      if (Math.abs(secs) < resolvedThresholds.second) return {
          value: Math.round(secs),
          unit: "second"
      };
      var mins = secs / $8944235bd8be49ac$var$SECS_PER_MIN;
      if (Math.abs(mins) < resolvedThresholds.minute) return {
          value: Math.round(mins),
          unit: "minute"
      };
      var hours = secs / $8944235bd8be49ac$var$SECS_PER_HOUR;
      if (Math.abs(hours) < resolvedThresholds.hour) return {
          value: Math.round(hours),
          unit: "hour"
      };
      var days = secs / $8944235bd8be49ac$var$SECS_PER_DAY;
      if (Math.abs(days) < resolvedThresholds.day) return {
          value: Math.round(days),
          unit: "day"
      };
      var fromDate = new Date(from);
      var toDate = new Date(to);
      var years = fromDate.getFullYear() - toDate.getFullYear();
      if (Math.round(Math.abs(years)) > 0) return {
          value: Math.round(years),
          unit: "year"
      };
      var months = years * 12 + fromDate.getMonth() - toDate.getMonth();
      if (Math.round(Math.abs(months)) > 0) return {
          value: Math.round(months),
          unit: "month"
      };
      var weeks = secs / $8944235bd8be49ac$var$SECS_PER_WEEK;
      return {
          value: Math.round(weeks),
          unit: "week"
      };
  }
  var $8944235bd8be49ac$export$f4fd60e41371f80d = {
      second: 45,
      minute: 45,
      hour: 22,
      day: 5
  };


  var $ee1328194d522913$export$27bce688931fdfcc, $ee1328194d522913$export$7fd1ce15b01d50ca;
  !function(e) {
      e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
  }($ee1328194d522913$export$27bce688931fdfcc || ($ee1328194d522913$export$27bce688931fdfcc = {})), function(e) {
      e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
  }($ee1328194d522913$export$7fd1ce15b01d50ca || ($ee1328194d522913$export$7fd1ce15b01d50ca = {}));
  function $ee1328194d522913$var$O() {
      return ($ee1328194d522913$var$O = Object.assign || function(e) {
          for(var t = 1; t < arguments.length; t++){
              var r = arguments[t];
              for(var n in r)Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
      }).apply(this, arguments);
  }
  var $ee1328194d522913$export$5e25e39d6a8c0c11 = function(e) {
      switch(e.number_format){
          case $ee1328194d522913$export$27bce688931fdfcc.comma_decimal:
              return [
                  "en-US",
                  "en"
              ];
          case $ee1328194d522913$export$27bce688931fdfcc.decimal_comma:
              return [
                  "de",
                  "es",
                  "it"
              ];
          case $ee1328194d522913$export$27bce688931fdfcc.space_comma:
              return [
                  "fr",
                  "sv",
                  "cs"
              ];
          case $ee1328194d522913$export$27bce688931fdfcc.system:
              return;
          default:
              return e.language;
      }
  }, $ee1328194d522913$export$2077e0241d6afd3c = function(e, t) {
      return void 0 === t && (t = 2), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
  }, $ee1328194d522913$export$f5dd818bff069720 = function(e, r, n) {
      var i = r ? $ee1328194d522913$export$5e25e39d6a8c0c11(r) : void 0;
      if (Number.isNaN = Number.isNaN || function e(t) {
          return "number" == typeof t && e(t);
      }, (null == r ? void 0 : r.number_format) !== $ee1328194d522913$export$27bce688931fdfcc.none && !Number.isNaN(Number(e)) && Intl) try {
          return new Intl.NumberFormat(i, $ee1328194d522913$var$V(e, n)).format(Number(e));
      } catch (t) {
          return console.error(t), new Intl.NumberFormat(void 0, $ee1328194d522913$var$V(e, n)).format(Number(e));
      }
      return "string" == typeof e ? e : $ee1328194d522913$export$2077e0241d6afd3c(e, null == n ? void 0 : n.maximumFractionDigits).toString() + ("currency" === (null == n ? void 0 : n.style) ? " " + n.currency : "");
  }, $ee1328194d522913$var$V = function(e, t) {
      var r = $ee1328194d522913$var$O({
          maximumFractionDigits: 2
      }, t);
      if ("string" != typeof e) return r;
      if (!t || !t.minimumFractionDigits && !t.maximumFractionDigits) {
          var n = e.indexOf(".") > -1 ? e.split(".")[1].length : 0;
          r.minimumFractionDigits = n, r.maximumFractionDigits = n;
      }
      return r;
  };
  var $04557c061247a0a6$export$9b2580347f0d218f = "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";
  var $04557c061247a0a6$export$9e1028c34656e2fe = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
  var $04557c061247a0a6$export$f66c996b267e1dc0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
  var $04557c061247a0a6$export$9ac2ce0684fedc2d = "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";


  const $a399cc6bbb0eb26a$var$CIRCLE_CIRCUMFERENCE = 238.76104;
  class $a399cc6bbb0eb26a$export$91e33cf09c77c6c4 extends ($ab210b2da7b39b9d$export$3f2f9f5909897157) {
      _is_empty(value) {
          return value === undefined || value == "";
      }
      setConfig(config) {
          this._grid_to_load_power_id = config.grid_to_load_power_id;
          this._generation_to_grid_power_id = config.generation_to_grid_power_id;
          this._generation_to_storage_power_id = config.generation_to_storage_power_id;
          this._generation_to_load_power_id = config.generation_to_load_power_id;
          this._storage_to_load_power_id = config.storage_to_load_power_id;
          this._storage_to_grid_power_id = config.storage_to_grid_power_id;
          this._storage_info_id = config.storage_info_id;
          this._load_info_id = config.load_info_id;
          this._grid_info_id = config.grid_info_id;
          this._generation_info_id = config.generation_info_id;
          this._load_top_info_id = config.load_top_info_id;
          this._load_top_power_id = config.load_top_power_id;
          this._load_bottom_info_id = config.load_bottom_info_id;
          this._load_bottom_power_id = config.load_bottom_power_id;
          this._card_title = config.card_title;
          this._grid_title = config.grid_title;
          this._generation_title = config.generation_title;
          this._storage_title = config.storage_title;
          this._load_title = config.load_title;
          this._load_top_title = config.load_top_title;
          this._load_bottom_title = config.load_bottom_title;
          this._generation_icon = config.generation_icon || "mdi:solar-power";
          this._load_icon = config.load_icon || "mdi:home";
          this._storage_icon = config.storage_icon || "mdi:battery-high";
          this._grid_icon = config.grid_icon || "mdi:transmission-tower";
          this._load_top_icon = config.load_top_icon || "mdi:car-sports";
          this._load_bottom_icon = config.load_bottom_icon || "mdi:car-sports";
          ($feccc7a5980a21d5$export$ddaf0a93cc777a0d)(this, config);
          this._has_generation = !(this._is_empty(config.generation_to_grid_power_id) && this._is_empty(config.generation_to_storage_power_id) && this._is_empty(config.generation_to_load_power_id));
          this._has_storage = !(this._is_empty(config.storage_to_grid_power_id) && this._is_empty(config.generation_to_storage_power_id) && this._is_empty(config.storage_to_load_power_id));
          this._has_load_top = !this._is_empty(config.load_top_power_id);
          this._has_load_bottom = !this._is_empty(config.load_bottom_power_id);
          // call set hass() to immediately adjust to a changed entity
          // while editing the entity in the card editor
          if (this._hass) this.hass = this._hass;
      }
      extractNumberFromId(entity_id) {
          if (entity_id) {
              if (this._hass.states[entity_id]) return Number(parseFloat(this._hass.states[entity_id].state).toFixed(1));
              else return parseFloat(entity_id);
          } else return 0;
      }
      extractStringFromId(entity_id) {
          if (entity_id) {
              if (this._hass.states[entity_id]) return this._hass.formatEntityState(this._hass.states[entity_id]);
              else return entity_id;
          } else return undefined;
      }
      set hass(hass) {
          this._hass = hass;
          this._grid_to_load_power = this.extractNumberFromId(this._grid_to_load_power_id);
          this._grid_to_load_power = this.extractNumberFromId(this._grid_to_load_power_id);
          this._generation_to_grid_power = this.extractNumberFromId(this._generation_to_grid_power_id);
          this._generation_to_storage_power = this.extractNumberFromId(this._generation_to_storage_power_id);
          this._generation_to_load_power = this.extractNumberFromId(this._generation_to_load_power_id);
          this._storage_to_load_power = this.extractNumberFromId(this._storage_to_load_power_id);
          this._storage_to_grid_power = this.extractNumberFromId(this._storage_to_grid_power_id);
          this._storage_info_id = this.extractStringFromId(this._storage_info_id);
          this._load_info_id = this.extractStringFromId(this._load_info_id);
          this._grid_info_id = this.extractStringFromId(this._grid_info_id);
          this._to_load_top_power = this.extractNumberFromId(this._load_top_power_id);
          this._to_load_bottom_power = this.extractNumberFromId(this._load_bottom_power_id);
          this._to_load_power = Number((this._storage_to_load_power + this._grid_to_load_power + this._generation_to_load_power).toFixed(1));
          this._from_grid_power = Number((this._grid_to_load_power + -1 * this._storage_to_grid_power + -1 * this._generation_to_grid_power).toFixed(1));
          this._from_generation_power = Number((this._generation_to_grid_power + this._generation_to_storage_power + this._generation_to_load_power).toFixed(1));
          this._to_storage_power = Number((-1 * this._storage_to_load_power + this._generation_to_storage_power + -1 * this._storage_to_grid_power).toFixed(1));
          this._total_flow_power = this._grid_to_load_power + this._generation_to_grid_power + this._generation_to_storage_power + this._generation_to_load_power + this._storage_to_load_power + this._storage_to_grid_power;
      }
      static #_ = (()=>{
          // declarative part
          this.styles = ($120c5a859c012378$export$9dd6ff9ea0189349);
      })();
      calcStrokeDashValues(values) {
          let total = values.reduce((a, v)=>{
              return a + v;
          }, 0);
          let offset = 0;
          let return_values = [];
          values.reduce((a, v)=>{
              let circle_slice = $a399cc6bbb0eb26a$var$CIRCLE_CIRCUMFERENCE * (v / total);
              let newDashValue = {
                  stroke_dashoffset: `${offset}`,
                  stroke_dasharray: `${circle_slice} ${$a399cc6bbb0eb26a$var$CIRCLE_CIRCUMFERENCE - circle_slice}`
              };
              a.push(newDashValue);
              offset -= circle_slice;
              return a;
          }, return_values);
          return return_values;
      }
      renderPowerAnnimation(power, style, href) {
          return power > 0 && this._total_flow_power > 0 ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`<circle
        r="1"
        class="${style}"
        vector-effect="non-scaling-stroke"
      >
        <animateMotion
          dur="${6 - power / (this._total_flow_power == power ? 6 : this._total_flow_power) * 6}s"
          repeatCount="indefinite"
          calcMode="linear"
        >
          <mpath href="${href}"></mpath>
        </animateMotion>
      </circle>` : "";
      }
      render() {
          let loadSliceDashValues = this.calcStrokeDashValues([
              this._storage_to_load_power,
              this._grid_to_load_power,
              this._generation_to_load_power
          ]);
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-card .header=${this._card_title}>
        <div class="card-content">
          ${this._has_generation || this._has_load_top ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="row">
                  <div class="spacer"></div>
                  <div class="circle-container generation">
                    ${this._has_generation ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                          <span class="label">
                            ${this.extractStringFromId(this._generation_title)}
                          </span>
                          <div class="circle">
                            ${this._generation_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                                  >${this.extractStringFromId(this._generation_info_id)}</span
                                >` : ""}
                            <ha-icon
                              class="small"
                              icon="${this._generation_icon}"
                            ></ha-icon
                            >${($ee1328194d522913$export$f5dd818bff069720)(this._from_generation_power, this._hass.locale)}
                            kW
                          </div>
                        ` : ""}
                  </div>
                  ${this._has_load_top ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="circle-container load_top">
                        <span class="label"> ${this.extractStringFromId(this._load_top_title)} </span>
                        <div class="circle">
                          ${this._load_top_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                                  >${this.extractStringFromId(this._load_top_info_id)}</span
                                >` : ""}
                          <ha-icon class="small" icon="${this._load_top_icon}"></ha-icon>
                          ${($ee1328194d522913$export$f5dd818bff069720)(this._to_load_top_power, this._hass.locale)} kW
                        </div>
                      </div>
                </div>` : ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="spacer"></div>`}
                </div>` : ""}
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                ${this._grid_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                        >${this.extractStringFromId(this._grid_info_id)}</span
                      >` : ""}
                <ha-icon class="small" icon="${this._grid_icon}"></ha-icon>
                ${this._from_grid_power >= 0 ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <span class="consumption">
                          ${this._from_grid_power > 0 ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-svg-icon
                                class="small"
                                .path=${$04557c061247a0a6$export$f66c996b267e1dc0}
                              ></ha-svg-icon>` : ""}
                          ${($ee1328194d522913$export$f5dd818bff069720)(this._from_grid_power, this._hass.locale)}
                          kW
                        </span>
                      ` : ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${$04557c061247a0a6$export$9e1028c34656e2fe}
                          ></ha-svg-icon
                          >${this._from_grid_power * -1} kW
                        </span>
                      `}
              </div>
              <span class="label"> ${this.extractStringFromId(this._grid_title)} </span>
            </div>
            <div class="circle-container load">
              <div class="circle">
                ${this._load_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                        >${this.extractStringFromId(this._load_info_id)}</span
                      >` : ""}
                <ha-icon class="small" icon="${this._load_icon}"></ha-icon>
                ${($ee1328194d522913$export$f5dd818bff069720)(this._to_load_power, this._hass.locale)} kW
                <svg>
                  ${($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                    <circle class="storage" cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[0].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[0].stroke_dashoffset}"></circle>
                    <circle class="grid"    cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[1].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[1].stroke_dashoffset}"></circle>
                    <circle class="generation"   cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[2].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[2].stroke_dashoffset}"></circle>
                  `}
                </svg>
              </div>
              <span class="label"> ${this.extractStringFromId(this._load_title)} </span>
            </div>
          </div>
          ${this._has_storage || this._has_load_bottom ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                  <div class="row">
                    <div class="spacer"></div>
                    ${this._has_storage ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="circle-container storage">
                          <div class="circle">
                            ${this._storage_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                                  >${this.extractStringFromId(this._storage_info_id)}</span
                                >` : ""}
                            <ha-icon
                              class="small"
                              icon="${this._storage_icon}"
                            ></ha-icon>
                            ${this._to_storage_power >= 0 ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                  <span class="storage-in">
                                    ${this._to_storage_power > 0 ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-svg-icon
                                          class="small"
                                          .path=${$04557c061247a0a6$export$9b2580347f0d218f}
                                        ></ha-svg-icon>` : ""}
                                    ${($ee1328194d522913$export$f5dd818bff069720)(this._to_storage_power, this._hass.locale)}
                                    kW
                                  </span>
                                ` : ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                  <span class="storage-out">
                                    <ha-svg-icon
                                      class="small"
                                      .path=${$04557c061247a0a6$export$9ac2ce0684fedc2d}
                                    ></ha-svg-icon>
                                    ${($ee1328194d522913$export$f5dd818bff069720)(this._to_storage_power * -1, this._hass.locale)}
                                    kW
                                  </span>
                                `}
                          </div>
                          <span class="label"
                            >${this.extractStringFromId(this._storage_title)}</span
                          >
                        </div>` : ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="spacer"></div>`}
                    ${this._has_load_bottom ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
                          <div class="circle-container load-bottom">
                            <div class="circle">
                              ${this._load_bottom_info_id ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="info"
                                    >${this.extractStringFromId(this._load_bottom_info_id)}</span
                                  >` : ""}
                              <ha-icon
                                class="small"
                                icon="${this._load_bottom_icon}"
                              ></ha-icon>
                              ${($ee1328194d522913$export$f5dd818bff069720)(this._to_load_bottom_power, this._hass.locale)}
                              kW
                            </div>
                            <span class="label">
                              ${this.extractStringFromId(this._load_bottom_title)}
                            </span>
                          </div>
                        ` : ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="spacer"></div>`}
                  </div>
                ` : ""}
        </div>
        <div
          class="lines ${this._has_storage || this._has_load_bottom ? "high" : ""}"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            ${($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path
                  class="grid"
                  id="grid-to-load"
                  d="M0,50 H100"
                  vector-effect="non-scaling-stroke"
                >
                </path>
                ${this.renderPowerAnnimation(this._grid_to_load_power, "grid", "#grid-to-load")}
            `}
            ${this._has_generation ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                  <path
                    id="generation-to-grid"
                    class="return"
                    d="M45,0 v15 c0,35 -10,30 -30,30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(this._generation_to_grid_power, "return", "#generation-to-grid")}
                  <path
                    id="generation-to-load"
                    class="generation"
                    d="M55,0 v15 c0,35 10,30 30,30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(this._generation_to_load_power, "generation", "#generation-to-load")}
                ` : ""}
            ${this._has_generation && this._has_storage ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                    <path
                      id="generation-to-storage"
                      class="storage-generation"
                      d="M50,0 V100"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._generation_to_storage_power, "storage-generation", "#generation-to-storage")}
                  ` : ""}
            ${this._has_storage ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                    <path
                      id="storage-to-load"
                      class="storage-load"
                      d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._storage_to_load_power, "storage-load", "#storage-to-load")}
                    <path
                      id="storage-to-grid"
                      class="storage-from-grid"
                      d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._storage_to_grid_power, "storage-from-grid", "#storage-to-grid")}
                  ` : ""}
          </svg>
        </div>
        <div
          class="lines right ${this._has_storage || this._has_load_bottom ? "high" : ""}"
          >
          ${this._has_load_top || this._has_load_bottom ? ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 50 100"
                >
                  ${this._has_load_top ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                      <path id="load_top" vector-effect="non-scaling-stroke" d="M25,25 v-20" class=""></path>
                      ${this.renderPowerAnnimation(this._to_load_top_power, "grid", "#load_top")}` : ""}
                  ${this._has_load_bottom ? ($f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                      <path id="load-bottom" vector-effect="non-scaling-stroke" d="M25,75 v20"" class=""></path>
                      ${this.renderPowerAnnimation(this._to_load_bottom_power, "grid", "#load-bottom")}` : ""}
                </svg>` : ""}
        </div>
      </div>
      </ha-card>
    `;
      }
      // card configuration
      static getConfigElement() {
          return document.createElement("power-distribution-editor");
      }
      static getStubConfig() {
          return {
              card_title: "Power Distribution",
              grid_title: "Grid",
              generation_title: "Generation",
              storage_title: "Storage",
              load_title: "Load",
              load_top_title: "Load Top",
              load_bottom_title: "Load Bottom"
          };
      }
  }
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_grid_to_load_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_grid_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_storage_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_load_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_to_load_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_to_grid_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_top_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_bottom_power_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_grid_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_top_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_bottom_info_id", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_card_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_grid_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_top_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_bottom_title", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_grid_to_load_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_grid_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_storage_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_to_load_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_to_load_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_to_grid_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_total_flow_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_to_load_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_from_grid_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_from_generation_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_to_load_top_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_to_load_bottom_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_to_storage_power", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_generation_icon", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_grid_icon", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_storage_icon", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_icon", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_top_icon", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $a399cc6bbb0eb26a$export$91e33cf09c77c6c4.prototype, "_load_bottom_icon", void 0);









  const $d067581fc0d59830$var$includeDomains = [
      "sensor"
  ];
  const $d067581fc0d59830$var$includeClasses = [
      "power"
  ];
  const $d067581fc0d59830$var$includeUnits = [
      "kW"
  ];
  class $d067581fc0d59830$export$fdd9212c0ea52737 extends ($ab210b2da7b39b9d$export$3f2f9f5909897157) {
      firstUpdated() {
          // Elements can only be added to the local customElement registry after
          // createRenderRoot has run(which ScopedRegistryRoot handles).
          // It's definitely run before first render, so firstUpdated can be a good
          // place to start loading elements.
          this._curTab = "tab-entities";
      }
      setConfig(config) {
          this._config = config;
          ($feccc7a5980a21d5$export$ddaf0a93cc777a0d)(this, config);
          this.loadEntityPicker();
      }
      async loadEntityPicker() {
          if (!window.customElements.get("ha-entity-picker")) {
              const ch = await window.loadCardHelpers();
              const c = await ch.createCardElement({
                  type: "entities",
                  entities: []
              });
              await c.constructor.getConfigElement();
              // Since ha-elements are not using scopedRegistry we can get a reference to
              // the newly loaded element from the global customElement registry...
              window.customElements.get("ha-entity-picker");
          }
      }
      static #_ = (()=>{
          this.styles = ($def2de46b9306e8a$export$dbf350e5966cf602)`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
    ha-icon-picker,
    ha-entity-picker,
    ha-textfield {
      display: block;
      margin-bottom: 16px;
    }

    .card-config paper-tabs {
      text-transform: uppercase;
      padding: 0px 20px;
      color: var(--primary-text-color);
      --paper-tabs-selection-bar-color: var(--primary-color);
      border-bottom: 1px solid
        var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
      padding-left: 0px;
      padding-right: 0px;
    }
  `;
      })();
      iconPicker(name, label, required = false) {
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-icon-picker
        id="${name}"
        .hass=${this.hass}
        .value=${this._config[name] ?? ""}
        .label="${label} (${required ? "Required" : "Optional"})"
        @value-changed=${this._change}
      ></ha-icon-picker>
    `;
      }
      entityPicker(name, label) {
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-entity-picker
        id="${name}"
        .hass=${this.hass}
        .label="${label} (Optional)"
        .value=${this._config[name] ?? ""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `;
      }
      entityPickerForPower(name, label, required = false) {
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-entity-picker
        id="${name}"
        .hass=${this.hass}
        .label="${label} (${required ? "Required" : "Optional"})"
        .includeDomains=${$d067581fc0d59830$var$includeDomains}
        .includeDeviceClasses=${$d067581fc0d59830$var$includeClasses}
        .includeUnitsOfMeasure=${$d067581fc0d59830$var$includeUnits}
        .value=${this._config[name] ?? ""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `;
      }
      textField(name, label, required = false) {
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-textfield
        id=${name}
        type="string"
        .value=${this._config[name] ?? ""}
        .label="${label} (${required ? "Required" : "Optional"})"
        name=${name}
        @change=${this._change}
        no-spinner
        .required="false"
        min="0"
      >
      </ha-textfield>
    `;
      }
      render() {
          let content;
          switch(this._curTab){
              case "tab-entities":
                  content = ($f58f44579a4747ac$export$c0bb0b647f701bb5)`
          <h2>Card Title</h2>
          ${this.textField("card_title", `${this._config.grid_title || "Grid"} → ${this._config.load_title || "Load"}`)}
          <h2>Flow Entities (kW)</h2>
          ${this.entityPickerForPower("grid_to_load_power_id", `${this._config.grid_title || "Grid"} → ${this._config.load_title || "Load"}`, true)}
          ${this.entityPickerForPower("generation_to_grid_power_id", `${this._config.generation_title || "Generation"} → ${this._config.grid_title || "Grid"}`)}
          ${this.entityPickerForPower("generation_to_storage_power_id", `${this._config.generation_title || "Generation"} → ${this._config.storage_title || "Storage"}`)}
          ${this.entityPickerForPower("generation_to_load_power_id", `${this._config.generation_title || "Generation"} → ${this._config.load_title || "Load"}`)}
          ${this.entityPickerForPower("storage_to_load_power_id", `${this._config.storage_title || "Storage"} → ${this._config.load_title || "Load"}`)}
          ${this.entityPickerForPower("storage_to_grid_power_id", `${this._config.storage_title || "Storage"} → ${this._config.grid_title || "Grid"}`)}
          ${this.entityPickerForPower("load_top_power_id", `${this._config.load_title || "Load"} → ${this._config.load_top_title || "Top Load"}`)}
          ${this.entityPicker("load_bottom_power_id", `${this._config.load_title || "Load"} → ${this._config.load_bottom_title || "Bottom Load"}`)}
        `;
                  break;
              case "tab-titles":
                  content = ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<h2>Element Titles</h2>
          ${this.textField("grid_title", "Grid")}
          ${this.textField("load_title", "Load")}
          ${this._has_generation ? this.textField("generation_title", "Generation") : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_storage ? this.textField("storage_title", "Storage") : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_top ? this.textField("load_top_title", "Load Top") : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_bottom ? this.textField("load_bottom_title", "Load Bottom") : ($f58f44579a4747ac$export$45b790e32b2810ee)}`;
                  break;
              case "tab-extras":
                  content = ($f58f44579a4747ac$export$c0bb0b647f701bb5)` <h2>Element Extras</h2>
          ${this.entityPicker("grid_info_id", `${this._config.grid_title || "Grid"}`)}
          ${this.entityPicker("load_info_id", `${this._config.load_title || "Load"}`)}
          ${this._has_generation ? this.entityPicker("generation_info_id", `${this._config.generation_title || "Generation"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_storage ? this.entityPicker("storage_info_id", `${this._config.storage_title || "Storage"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_top ? this.entityPicker("load_top_info_id", `${this._config.load_top_title || "Top Load"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_bottom ? this.entityPicker("load_bottom_info_id", `${this._config.load_bottom_title || "Bottom Load"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}`;
                  break;
              case "tab-icons":
                  content = ($f58f44579a4747ac$export$c0bb0b647f701bb5)`<h2>Element Icons</h2>
          ${this.iconPicker("grid_icon", `${this._config.grid_title || "Grid"}`)}
          ${this.iconPicker("load_icon", `${this._config.load_title || "Load"}`)}
          ${this._has_generation ? this.iconPicker("generation_icon", `${this._config.generation_title || "Generation"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_storage ? this.iconPicker("storage_icon", `${this._config.storage_title || "Storage"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_top ? this.iconPicker("load_top_icon", `${this._config.load_top_title || "Top Load"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}
          ${this._has_load_bottom ? this.iconPicker("load_bottom_icon", `${this._config.load_bottom_title || "Bottom Load"}`) : ($f58f44579a4747ac$export$45b790e32b2810ee)}`;
                  break;
          }
          return ($f58f44579a4747ac$export$c0bb0b647f701bb5)` <div class="card-config">
      <paper-tabs
        scrollable
        hide-scroll-buttons
        .selected=${this._curTabIndex}
        @selected-item-changed=${this._handleTabSelected}
      >
        <paper-tab id="tab-entities" dialogInitialFocus> Entities </paper-tab>
        <paper-tab id="tab-titles"> Titles </paper-tab>
        <paper-tab id="tab-extras"> Extra Info </paper-tab>
        <paper-tab id="tab-icons"> Icons </paper-tab>
      </paper-tabs>
      ${content}
    </div>`;
      }
      _handleTabSelected(ev) {
          if (!ev.detail.value) return;
          this._curTab = ev.detail.value.id;
      }
      _is_empty(value) {
          return value === undefined || value == "";
      }
      _nameChanged(ev) {
          ev.target;
      }
      _change(ev) {
          const target = ev.target;
          ev.stopPropagation();
          // this._config is readonly, copy needed
          var newValue = target.value;
          if (newValue === this._config[target.id]) return;
          const newConfig = Object.assign({}, this._config);
          if (newValue === "" || newValue == undefined) delete newConfig[target.id];
          else newConfig[target.id] = target.value;
          ($feccc7a5980a21d5$export$ddaf0a93cc777a0d)(this, newConfig);
          const messageEvent = new CustomEvent("config-changed", {
              detail: {
                  config: newConfig
              },
              bubbles: true,
              composed: true
          });
          this.dispatchEvent(messageEvent);
      }
      constructor(...args){
          super(...args);
          this._curTabIndex = 0;
      }
  }
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($9cd908ed2625c047$export$d541bacb2bda4494)({
          attribute: false
      })
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "hass", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_config", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_has_generation", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_has_storage", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_has_load_top", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_has_load_bottom", void 0);
  ($24c52f343453d62d$export$29e00dfd3077644b)([
      ($04c21ea1ce1f6057$export$ca000e230c0caa3e)()
  ], $d067581fc0d59830$export$fdd9212c0ea52737.prototype, "_curTab", void 0);


  customElements.define("power-distribution", ($a399cc6bbb0eb26a$export$91e33cf09c77c6c4));
  customElements.define("power-distribution-editor", ($d067581fc0d59830$export$fdd9212c0ea52737));
  window.customCards = window.customCards || [];
  window.customCards.push({
      type: "power-distribution",
      name: "Power Distribution Card",
      description: "Like the HA Power Distribution Card, but show power and flow rather than energy"
  });

})();
