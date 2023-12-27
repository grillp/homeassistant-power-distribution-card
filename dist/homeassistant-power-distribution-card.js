!function(){"use strict";function t(t,e,o,i){var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(o,t,i)},n=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var _;const l=window,d=l.trustedTypes,h=d?d.emptyScript:"",c=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},g=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},v="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{o?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((o=>{const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=u){var i;const r=this.constructor._$Ep(t,o);if(void 0!==r&&!0===o.reflect){const s=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:p).toAttribute(e,o.type);this._$El=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:p;this._$El=r,this[r]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var f;m[v]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(_=l.reactiveElementVersions)&&void 0!==_?_:l.reactiveElementVersions=[]).push("1.6.3");const $=window,w=$.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,A="?"+x,k=`<${A}>`,S=document,E=()=>S.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,F="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,I=/>/g,M=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,H=/"/g,U=/^(?:script|style|textarea|title)$/i,O=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),R=O(1),D=O(2),j=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),B=new WeakMap,V=S.createTreeWalker(S,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const a=t.length-1,n=this.parts,[_,l]=((t,e)=>{const o=t.length-1,i=[];let r,s=2===e?"<svg>":"",a=L;for(let e=0;e<o;e++){const o=t[e];let n,_,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,_=a.exec(o),null!==_);)d=a.lastIndex,a===L?"!--"===_[1]?a=N:void 0!==_[1]?a=I:void 0!==_[2]?(U.test(_[2])&&(r=RegExp("</"+_[2],"g")),a=M):void 0!==_[3]&&(a=M):a===M?">"===_[0]?(a=null!=r?r:L,l=-1):void 0===_[1]?l=-2:(l=a.lastIndex-_[2].length,n=_[1],a=void 0===_[3]?M:'"'===_[3]?H:T):a===H||a===T?a=M:a===N||a===I?a=L:(a=M,r=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";s+=a===L?o+k:l>=0?(i.push(n),o.slice(0,l)+b+o.slice(l)+x+h):o+x+(-2===l?(i.push(void 0),e):h)}return[W(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=G.createElement(_,o),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=V.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(b)||e.startsWith(x)){const o=l[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+b).split(x),e=/([.?@])?(.*)/.exec(o);n.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?X:"@"===e[1]?tt:J})}else n.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],E()),V.nextNode(),n.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)n.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const o=S.createElement("template");return o.innerHTML=t,o}}function q(t,e,o=t,i){var r,s,a,n;if(e===j)return e;let _=void 0!==i?null===(r=o._$Co)||void 0===r?void 0:r[i]:o._$Cl;const l=P(e)?void 0:e._$litDirective$;return(null==_?void 0:_.constructor)!==l&&(null===(s=null==_?void 0:_._$AO)||void 0===s||s.call(_,!1),void 0===l?_=void 0:(_=new l(t),_._$AT(t,o,i)),void 0!==i?(null!==(a=(n=o)._$Co)&&void 0!==a?a:n._$Co=[])[i]=_:o._$Cl=_),void 0!==_&&(e=q(t,_._$AS(t,e.values),_,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(o,!0);V.currentNode=r;let s=V.nextNode(),a=0,n=0,_=i[0];for(;void 0!==_;){if(a===_.index){let e;2===_.type?e=new K(s,s.nextSibling,this,t):1===_.type?e=new _.ctor(s,_.name,_.strings,this,t):6===_.type&&(e=new et(s,this,t)),this._$AV.push(e),_=i[++n]}a!==(null==_?void 0:_.index)&&(s=V.nextNode(),a++)}return V.currentNode=S,r}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class K{constructor(t,e,o,i){var r;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),P(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(W(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(o);else{const t=new Z(r,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new G(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new K(this.k(E()),this.k(E()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,o,i,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(void 0===r)t=q(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==j,s&&(this._$AH=t);else{const i=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=q(this,i[o+a],e,a),n===j&&(n=this._$AH[a]),s||(s=!P(n)||n!==this._$AH[a]),n===z?t=z:t!==z&&(t+=(null!=n?n:"")+r[a+1]),this._$AH[a]=n}s&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}let Y=class extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const Q=w?w.emptyScript:"";class X extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class tt extends J{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=q(this,t,e,0))&&void 0!==o?o:z)===j)return;const i=this._$AH,r=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==z&&(i===z||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const ot=$.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var it,rt;null==ot||ot(G,K),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.8.0");class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,r;const s=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=s._$litPart$;if(void 0===a){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;s._$litPart$=a=new K(e.insertBefore(E(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}st.finalized=!0,st._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:st});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:st}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}},_t=(t,e,o)=>{e.constructor.createProperty(o,t)};function lt(t){return(e,o)=>void 0!==o?_t(t,e,o):nt(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function dt(t){return lt({...t,state:!0})}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;const ct=a`
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
    transition:
      stroke-dashoffset 0.4s,
      stroke-dasharray 0.4s;
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
`,pt="power-distribution";function gt(t){return void 0===t||""==t}function ut(t,e){t._has_generation=!(gt(e.generation_to_grid_power_id)&&gt(e.generation_to_storage_power_id)&&gt(e.generation_to_load_power_id)),t._has_storage=!(gt(e.storage_to_grid_power_id)&&gt(e.generation_to_storage_power_id)&&gt(e.storage_to_load_power_id)),t._has_load_top=!gt(e.load_top_power_id),t._has_load_bottom=!gt(e.load_bottom_power_id)}var vt,mt;function ft(){return(ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(vt||(vt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));var $t=function(t,e,o){var i=e?function(t){switch(t.number_format){case vt.comma_decimal:return["en-US","en"];case vt.decimal_comma:return["de","es","it"];case vt.space_comma:return["fr","sv","cs"];case vt.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==vt.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(i,wt(t,o)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,wt(t,o)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==o?void 0:o.maximumFractionDigits).toString()+("currency"===(null==o?void 0:o.style)?" "+o.currency:"")},wt=function(t,e){var o=ft({maximumFractionDigits:2},e);if("string"!=typeof t)return o;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=t.indexOf(".")>-1?t.split(".")[1].length:0;o.minimumFractionDigits=i,o.maximumFractionDigits=i}return o};const yt=238.76104;class bt extends st{constructor(){super(...arguments),this._grid_to_load_power=0,this._generation_to_grid_power=0,this._generation_to_storage_power=0,this._generation_to_load_power=0,this._storage_to_load_power=0,this._storage_to_grid_power=0,this._total_flow_power=0,this._to_load_power=0,this._from_grid_power=0,this._from_generation_power=0,this._to_load_top_power=0,this._to_load_bottom_power=0,this._to_storage_power=0,this._generation_icon="",this._grid_icon="",this._storage_icon="",this._load_icon="",this._load_top_icon="",this._load_bottom_icon="",this._has_generation=!0,this._has_storage=!0,this._has_load_top=!0,this._has_load_bottom=!0}_is_empty(t){return void 0===t||""==t}setConfig(t){this._grid_to_load_power_id=t.grid_to_load_power_id,this._generation_to_grid_power_id=t.generation_to_grid_power_id,this._generation_to_storage_power_id=t.generation_to_storage_power_id,this._generation_to_load_power_id=t.generation_to_load_power_id,this._storage_to_load_power_id=t.storage_to_load_power_id,this._storage_to_grid_power_id=t.storage_to_grid_power_id,this._storage_info_id=t.storage_info_id,this._load_info_id=t.load_info_id,this._grid_info_id=t.grid_info_id,this._generation_info_id=t.generation_info_id,this._load_top_info_id=t.load_top_info_id,this._load_bottom_info_id=t.load_bottom_info_id,this._load_top_power_id=t.load_top_power_id,this._load_bottom_power_id=t.load_bottom_power_id,this._title=t.card_title,this._grid_title=t.grid_title,this._generation_title=t.generation_title,this._storage_title=t.storage_title,this._load_title=t.load_title,this._load_top_title=t.load_top_title,this._load_bottom_title=t.load_bottom_title,this._generation_icon=t.generation_icon||"mdi:solar-power",this._load_icon=t.load_icon||"mdi:home",this._storage_icon=t.storage_icon||"mdi:battery-high",this._grid_icon=t.grid_icon||"mdi:transmission-tower",this._load_top_icon=t.load_top_icon||"mdi:car-sports",this._load_bottom_icon=t.load_bottom_icon||"mdi:car-sports",ut(this,t),this._has_generation=!(this._is_empty(t.generation_to_grid_power_id)&&this._is_empty(t.generation_to_storage_power_id)&&this._is_empty(t.generation_to_load_power_id)),this._has_storage=!(this._is_empty(t.storage_to_grid_power_id)&&this._is_empty(t.generation_to_storage_power_id)&&this._is_empty(t.storage_to_load_power_id)),this._has_load_top=!this._is_empty(t.load_top_power_id),this._has_load_bottom=!this._is_empty(t.load_bottom_power_id),this._hass&&(this.hass=this._hass)}extractNumberFromId(t){return t?this._hass.states[t]?Number(parseFloat(this._hass.states[t].state).toFixed(1)):parseFloat(t):0}extractStringFromId(t){return t?this._hass.states[t]?this._hass.formatEntityState(this._hass.states[t]):t:void 0}set hass(t){this._hass=t,this._grid_to_load_power=this.extractNumberFromId(this._grid_to_load_power_id),this._grid_to_load_power=this.extractNumberFromId(this._grid_to_load_power_id),this._generation_to_grid_power=this.extractNumberFromId(this._generation_to_grid_power_id),this._generation_to_storage_power=this.extractNumberFromId(this._generation_to_storage_power_id),this._generation_to_load_power=this.extractNumberFromId(this._generation_to_load_power_id),this._storage_to_load_power=this.extractNumberFromId(this._storage_to_load_power_id),this._storage_to_grid_power=this.extractNumberFromId(this._storage_to_grid_power_id),this._storage_info_value=this.extractStringFromId(this._storage_info_id),this._load_info_value=this.extractStringFromId(this._load_info_id),this._grid_info_value=this.extractStringFromId(this._grid_info_id),this._generation_info_value=this.extractStringFromId(this._generation_info_id),this._load_top_info_value=this.extractStringFromId(this._load_top_info_id),this._load_bottom_info_value=this.extractStringFromId(this._load_bottom_info_id),this._to_load_top_power=this.extractNumberFromId(this._load_top_power_id),this._to_load_bottom_power=this.extractNumberFromId(this._load_bottom_power_id),this._to_load_power=Number((this._storage_to_load_power+this._grid_to_load_power+this._generation_to_load_power).toFixed(1)),this._from_grid_power=Number((this._grid_to_load_power+-1*this._storage_to_grid_power+-1*this._generation_to_grid_power).toFixed(1)),this._from_generation_power=Number((this._generation_to_grid_power+this._generation_to_storage_power+this._generation_to_load_power).toFixed(1)),this._to_storage_power=Number((-1*this._storage_to_load_power+this._generation_to_storage_power+-1*this._storage_to_grid_power).toFixed(1)),this._total_flow_power=this._grid_to_load_power+this._generation_to_grid_power+this._generation_to_storage_power+this._generation_to_load_power+this._storage_to_load_power+this._storage_to_grid_power}calcStrokeDashValues(t){let e=t.reduce(((t,e)=>t+e),0),o=0,i=[];return t.reduce(((t,i)=>{let r=yt*(i/e),s={stroke_dashoffset:`${o}`,stroke_dasharray:`${r} ${yt-r}`};return t.push(s),o-=r,t}),i),i}renderPowerAnnimation(t,e,o){return t>0&&this._total_flow_power>0?D`<circle
        r="1"
        class="${e}"
        vector-effect="non-scaling-stroke"
      >
        <animateMotion
          dur="${6-t/(this._total_flow_power==t?6:this._total_flow_power)*6}s"
          repeatCount="indefinite"
          calcMode="linear"
        >
          <mpath href="${o}"></mpath>
        </animateMotion>
      </circle>`:""}render(){let t=this.calcStrokeDashValues([this._storage_to_load_power,this._grid_to_load_power,this._generation_to_load_power]);return R`
      <ha-card .header=${this._title}>
        <div class="card-content">
          ${this._has_generation||this._has_load_top?R` <div class="row">
                  <div class="spacer"></div>
                  <div class="circle-container generation">
                    ${this._has_generation?R`
                          <span class="label">
                            ${this.extractStringFromId(this._generation_title)}
                          </span>
                          <div class="circle">
                            ${this._generation_info_value?R`<span class="info"
                                  >${this.extractStringFromId(this._generation_info_value)}</span
                                >`:""}
                            <ha-icon
                              class="small"
                              icon="${this._generation_icon}"
                            ></ha-icon
                            >${$t(this._from_generation_power,this._hass.locale)}
                            kW
                          </div>
                        `:""}
                  </div>
                  ${this._has_load_top?R` <div class="circle-container load_top">
                        <span class="label"> ${this.extractStringFromId(this._load_top_title)} </span>
                        <div class="circle">
                          ${this._load_top_info_value?R`<span class="info"
                                  >${this.extractStringFromId(this._load_top_info_value)}</span
                                >`:""}
                          <ha-icon class="small" icon="${this._load_top_icon}"></ha-icon>
                          ${$t(this._to_load_top_power,this._hass.locale)} kW
                        </div>
                      </div>
                </div>`:R`<div class="spacer"></div>`}
                </div>`:""}
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                ${this._grid_info_value?R`<span class="info"
                        >${this.extractStringFromId(this._grid_info_value)}</span
                      >`:""}
                <ha-icon class="small" icon="${this._grid_icon}"></ha-icon>
                ${this._from_grid_power>=0?R`
                        <span class="consumption">
                          ${this._from_grid_power>0?R`<ha-svg-icon
                                class="small"
                                .path=${"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}
                              ></ha-svg-icon>`:""}
                          ${$t(this._from_grid_power,this._hass.locale)}
                          kW
                        </span>
                      `:R`
                        <span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
                          ></ha-svg-icon
                          >${-1*this._from_grid_power} kW
                        </span>
                      `}
              </div>
              <span class="label"> ${this.extractStringFromId(this._grid_title)} </span>
            </div>
            <div class="circle-container load">
              <div class="circle">
                ${this._load_info_value?R`<span class="info"
                        >${this.extractStringFromId(this._load_info_value)}</span
                      >`:""}
                <ha-icon class="small" icon="${this._load_icon}"></ha-icon>
                ${$t(this._to_load_power,this._hass.locale)} kW
                <svg>
                  ${D`
                    <circle class="storage" cx="40" cy="40" r="38" stroke-dasharray="${t[0].stroke_dasharray}" stroke-dashoffset="${t[0].stroke_dashoffset}"></circle>
                    <circle class="grid"    cx="40" cy="40" r="38" stroke-dasharray="${t[1].stroke_dasharray}" stroke-dashoffset="${t[1].stroke_dashoffset}"></circle>
                    <circle class="generation"   cx="40" cy="40" r="38" stroke-dasharray="${t[2].stroke_dasharray}" stroke-dashoffset="${t[2].stroke_dashoffset}"></circle>
                  `}
                </svg>
              </div>
              <span class="label"> ${this.extractStringFromId(this._load_title)} </span>
            </div>
          </div>
          ${this._has_storage||this._has_load_bottom?R`
                  <div class="row">
                    <div class="spacer"></div>
                    ${this._has_storage?R` <div class="circle-container storage">
                          <div class="circle">
                            ${this._storage_info_value?R`<span class="info"
                                  >${this.extractStringFromId(this._storage_info_value)}</span
                                >`:""}
                            <ha-icon
                              class="small"
                              icon="${this._storage_icon}"
                            ></ha-icon>
                            ${this._to_storage_power>=0?R`
                                  <span class="storage-in">
                                    ${this._to_storage_power>0?R`<ha-svg-icon
                                          class="small"
                                          .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
                                        ></ha-svg-icon>`:""}
                                    ${$t(this._to_storage_power,this._hass.locale)}
                                    kW
                                  </span>
                                `:R`
                                  <span class="storage-out">
                                    <ha-svg-icon
                                      class="small"
                                      .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                                    ></ha-svg-icon>
                                    ${$t(-1*this._to_storage_power,this._hass.locale)}
                                    kW
                                  </span>
                                `}
                          </div>
                          <span class="label"
                            >${this.extractStringFromId(this._storage_title)}</span
                          >
                        </div>`:R`<div class="spacer"></div>`}
                    ${this._has_load_bottom?R`
                          <div class="circle-container load-bottom">
                            <div class="circle">
                              ${this._load_bottom_info_value?R`<span class="info"
                                    >${this.extractStringFromId(this._load_bottom_info_value)}</span
                                  >`:""}
                              <ha-icon
                                class="small"
                                icon="${this._load_bottom_icon}"
                              ></ha-icon>
                              ${$t(this._to_load_bottom_power,this._hass.locale)}
                              kW
                            </div>
                            <span class="label">
                              ${this.extractStringFromId(this._load_bottom_title)}
                            </span>
                          </div>
                        `:R`<div class="spacer"></div>`}
                  </div>
                `:""}
        </div>
        <div
          class="lines ${this._has_storage||this._has_load_bottom?"high":""}"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            ${D`
                <path
                  class="grid"
                  id="grid-to-load"
                  d="M0,50 H100"
                  vector-effect="non-scaling-stroke"
                >
                </path>
                ${this.renderPowerAnnimation(this._grid_to_load_power,"grid","#grid-to-load")}
            `}
            ${this._has_generation?D`
                  <path
                    id="generation-to-grid"
                    class="return"
                    d="M45,0 v15 c0,35 -10,30 -30,30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(this._generation_to_grid_power,"return","#generation-to-grid")}
                  <path
                    id="generation-to-load"
                    class="generation"
                    d="M55,0 v15 c0,35 10,30 30,30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(this._generation_to_load_power,"generation","#generation-to-load")}
                `:""}
            ${this._has_generation&&this._has_storage?D`
                    <path
                      id="generation-to-storage"
                      class="storage-generation"
                      d="M50,0 V100"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._generation_to_storage_power,"storage-generation","#generation-to-storage")}
                  `:""}
            ${this._has_storage?D`
                    <path
                      id="storage-to-load"
                      class="storage-load"
                      d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._storage_to_load_power,"storage-load","#storage-to-load")}
                    <path
                      id="storage-to-grid"
                      class=""
                      d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(this._storage_to_grid_power,"storage-from-grid","#storage-to-grid")}
                  `:""}
          </svg>
        </div>
        <div
          class="lines right ${this._has_storage||this._has_load_bottom?"high":""}"
          >
          ${this._has_load_top||this._has_load_bottom?R`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 50 100"
                >
                  ${this._has_load_top?D`
                      <path id="load_top" vector-effect="non-scaling-stroke" d="M25,25 v-20" class=""></path>
                      ${this.renderPowerAnnimation(this._to_load_top_power,"grid","#load_top")}`:""}
                  ${this._has_load_bottom?D`
                      <path id="load-bottom" vector-effect="non-scaling-stroke" d="M25,75 v20"" class=""></path>
                      ${this.renderPowerAnnimation(this._to_load_bottom_power,"grid","#load-bottom")}`:""}
                </svg>`:""}
        </div>
      </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement(pt+"-editor")}static getStubConfig(){return{card_title:"Power Distribution",grid_title:"Grid",generation_title:"Generation",storage_title:"Storage",load_title:"Load",load_top_title:"Load Top",load_bottom_title:"Load Bottom"}}}bt.styles=ct,t([dt()],bt.prototype,"_title",void 0),t([dt()],bt.prototype,"_grid_to_load_power_id",void 0),t([dt()],bt.prototype,"_generation_to_grid_power_id",void 0),t([dt()],bt.prototype,"_generation_to_storage_power_id",void 0),t([dt()],bt.prototype,"_generation_to_load_power_id",void 0),t([dt()],bt.prototype,"_storage_to_load_power_id",void 0),t([dt()],bt.prototype,"_storage_to_grid_power_id",void 0),t([dt()],bt.prototype,"_load_top_power_id",void 0),t([dt()],bt.prototype,"_load_bottom_power_id",void 0),t([dt()],bt.prototype,"_grid_info_value",void 0),t([dt()],bt.prototype,"_generation_info_value",void 0),t([dt()],bt.prototype,"_storage_info_value",void 0),t([dt()],bt.prototype,"_load_info_value",void 0),t([dt()],bt.prototype,"_load_top_info_value",void 0),t([dt()],bt.prototype,"_load_bottom_info_value",void 0),t([dt()],bt.prototype,"_grid_title",void 0),t([dt()],bt.prototype,"_load_title",void 0),t([dt()],bt.prototype,"_generation_title",void 0),t([dt()],bt.prototype,"_storage_title",void 0),t([dt()],bt.prototype,"_load_top_title",void 0),t([dt()],bt.prototype,"_load_bottom_title",void 0),t([dt()],bt.prototype,"_grid_to_load_power",void 0),t([dt()],bt.prototype,"_generation_to_grid_power",void 0),t([dt()],bt.prototype,"_generation_to_storage_power",void 0),t([dt()],bt.prototype,"_generation_to_load_power",void 0),t([dt()],bt.prototype,"_storage_to_load_power",void 0),t([dt()],bt.prototype,"_storage_to_grid_power",void 0),t([dt()],bt.prototype,"_total_flow_power",void 0),t([dt()],bt.prototype,"_to_load_power",void 0),t([dt()],bt.prototype,"_from_grid_power",void 0),t([dt()],bt.prototype,"_from_generation_power",void 0),t([dt()],bt.prototype,"_to_load_top_power",void 0),t([dt()],bt.prototype,"_to_load_bottom_power",void 0),t([dt()],bt.prototype,"_to_storage_power",void 0),t([dt()],bt.prototype,"_generation_icon",void 0),t([dt()],bt.prototype,"_grid_icon",void 0),t([dt()],bt.prototype,"_storage_icon",void 0),t([dt()],bt.prototype,"_load_icon",void 0),t([dt()],bt.prototype,"_load_top_icon",void 0),t([dt()],bt.prototype,"_load_bottom_icon",void 0);const xt=["sensor"],At=["power"],kt=["kW"];class St extends st{constructor(){super(...arguments),this._config={type:"power-distribution"},this._has_generation=!1,this._has_storage=!1,this._has_load_top=!1,this._has_load_bottom=!1,this._curTabIndex=0}firstUpdated(){this._curTab="tab-entities"}setConfig(t){this._config=t,ut(this,t),this.loadEntityPicker()}async loadEntityPicker(){if(!window.customElements.get("ha-entity-picker")){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement(),window.customElements.get("ha-entity-picker")}}iconPicker(t,e,o=!1){var i;return R`
      <ha-icon-picker
        id="${t}"
        .hass=${this.hass}
        .value=${null!==(i=this._config[t])&&void 0!==i?i:""}
        .label="${e} (${o?"Required":"Optional"})"
        @value-changed=${this._change}
      ></ha-icon-picker>
    `}entityPicker(t,e){var o;return R`
      <ha-entity-picker
        id="${t}"
        .hass=${this.hass}
        .label="${e} (Optional)"
        .value=${null!==(o=this._config[t])&&void 0!==o?o:""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `}entityPickerForPower(t,e,o=!1){var i;return R`
      <ha-entity-picker
        id="${t}"
        .hass=${this.hass}
        .label="${e} (${o?"Required":"Optional"})"
        .includeDomains=${xt}
        .includeDeviceClasses=${At}
        .includeUnitsOfMeasure=${kt}
        .value=${null!==(i=this._config[t])&&void 0!==i?i:""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `}textField(t,e,o=!1){var i;return R`
      <ha-textfield
        id=${t}
        type="string"
        .value=${null!==(i=this._config[t])&&void 0!==i?i:""}
        .label="${e} (${o?"Required":"Optional"})"
        name=${t}
        @change=${this._change}
        no-spinner
        .required=${!1}
        min="0"
      >
      </ha-textfield>
    `}render(){let t=R``;switch(this._curTab){case"tab-entities":t=R`
          <h2>Card Title</h2>
          ${this.textField("card_title",`${this._config.grid_title||"Grid"} → ${this._config.load_title||"Load"}`)}
          <h2>Flow Entities (kW)</h2>
          ${this.entityPickerForPower("grid_to_load_power_id",`${this._config.grid_title||"Grid"} → ${this._config.load_title||"Load"}`,!0)}
          ${this.entityPickerForPower("generation_to_grid_power_id",`${this._config.generation_title||"Generation"} → ${this._config.grid_title||"Grid"}`)}
          ${this.entityPickerForPower("generation_to_storage_power_id",`${this._config.generation_title||"Generation"} → ${this._config.storage_title||"Storage"}`)}
          ${this.entityPickerForPower("generation_to_load_power_id",`${this._config.generation_title||"Generation"} → ${this._config.load_title||"Load"}`)}
          ${this.entityPickerForPower("storage_to_load_power_id",`${this._config.storage_title||"Storage"} → ${this._config.load_title||"Load"}`)}
          ${this.entityPickerForPower("storage_to_grid_power_id",`${this._config.storage_title||"Storage"} → ${this._config.grid_title||"Grid"}`)}
          ${this.entityPickerForPower("load_top_power_id",`${this._config.load_title||"Load"} → ${this._config.load_top_title||"Top Load"}`)}
          ${this.entityPicker("load_bottom_power_id",`${this._config.load_title||"Load"} → ${this._config.load_bottom_title||"Bottom Load"}`)}
        `;break;case"tab-titles":t=R`<h2>Element Titles</h2>
          ${this.textField("grid_title","Grid")}
          ${this.textField("load_title","Load")}
          ${this._has_generation?this.textField("generation_title","Generation"):z}
          ${this._has_storage?this.textField("storage_title","Storage"):z}
          ${this._has_load_top?this.textField("load_top_title","Load Top"):z}
          ${this._has_load_bottom?this.textField("load_bottom_title","Load Bottom"):z}`;break;case"tab-extras":t=R` <h2>Element Extras</h2>
          ${this.entityPicker("grid_info_id",`${this._config.grid_title||"Grid"}`)}
          ${this.entityPicker("load_info_id",`${this._config.load_title||"Load"}`)}
          ${this._has_generation?this.entityPicker("generation_info_id",`${this._config.generation_title||"Generation"}`):z}
          ${this._has_storage?this.entityPicker("storage_info_id",`${this._config.storage_title||"Storage"}`):z}
          ${this._has_load_top?this.entityPicker("load_top_info_id",`${this._config.load_top_title||"Top Load"}`):z}
          ${this._has_load_bottom?this.entityPicker("load_bottom_info_id",`${this._config.load_bottom_title||"Bottom Load"}`):z}`;break;case"tab-icons":t=R`<h2>Element Icons</h2>
          ${this.iconPicker("grid_icon",`${this._config.grid_title||"Grid"}`)}
          ${this.iconPicker("load_icon",`${this._config.load_title||"Load"}`)}
          ${this._has_generation?this.iconPicker("generation_icon",`${this._config.generation_title||"Generation"}`):z}
          ${this._has_storage?this.iconPicker("storage_icon",`${this._config.storage_title||"Storage"}`):z}
          ${this._has_load_top?this.iconPicker("load_top_icon",`${this._config.load_top_title||"Top Load"}`):z}
          ${this._has_load_bottom?this.iconPicker("load_bottom_icon",`${this._config.load_bottom_title||"Bottom Load"}`):z}`}return R` <div class="card-config">
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
      ${t}
    </div>`}_handleTabSelected(t){t.detail.value&&(this._curTab=t.detail.value.id)}_is_empty(t){return void 0===t||""==t}_nameChanged(t){t.target}_change(t){const e=t.target;t.stopPropagation();var o=e.value;if(o===this._config[e.id])return;const i=Object.assign({},this._config);""===o||null==o?delete i[e.id]:i[e.id]=e.value,ut(this,i);const r=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(r)}}St.styles=a`
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
  `,t([lt({attribute:!1})],St.prototype,"hass",void 0),t([dt()],St.prototype,"_config",void 0),t([dt()],St.prototype,"_has_generation",void 0),t([dt()],St.prototype,"_has_storage",void 0),t([dt()],St.prototype,"_has_load_top",void 0),t([dt()],St.prototype,"_has_load_bottom",void 0),t([dt()],St.prototype,"_curTab",void 0),customElements.define(pt,bt),customElements.define(pt+"-editor",St),window.customCards=window.customCards||[],window.customCards.push({type:"power-distribution",name:"Power Distribution Card",description:"Like the HA Power Distribution Card, but show power and flow rather than energy"})}();
//# sourceMappingURL=homeassistant-power-distribution-card.js.map
