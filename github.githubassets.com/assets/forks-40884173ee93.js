"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["forks"],{97111:(t,e,o)=>{var n=o(62926),a=o(39595);function r(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i}let i=class SearchControlMenuElement extends HTMLElement{async saveDefaultOptions(){this.allowSubmit&&this.submitPolitely()}buildFormData(){let t=new FormData,e=this.selectedRepositoryTypeOptions.map(t=>t.getAttribute("data-value")).join(",");return t.append("period",this.selectedPeriodOption.getAttribute("data-value")),t.append("sort_by",this.selectedSortOption.getAttribute("data-value")),t.append("include",e),t}restoreSubmitButtonWidth(t){this.saveOptionsButton.style.width=`${t}px`}disableSubmit(t){let e=this.saveOptionsButton.getBoundingClientRect().width;void 0===t&&(t=this.saveOptionsButton.getAttribute("data-disable-with")),this.allowSubmit=!1,this.saveOptionsButton.setAttribute("disabled","disabled"),this.saveOptionsButton.textContent=t,this.restoreSubmitButtonWidth(e)}enableSubmit(){let t=this.saveOptionsButton.getBoundingClientRect().width;this.allowSubmit=!0,this.saveOptionsButton.removeAttribute("disabled"),this.saveOptionsButton.textContent=this.buttonEnabledMessage,this.restoreSubmitButtonWidth(t)}async submitPolitely(){this.buttonEnabledMessage=this.saveOptionsButton.textContent,this.disableSubmit("Saving...");try{let t=await fetch(this.saveOptionsButton.getAttribute("data-href"),{method:"POST",body:this.buildFormData(),headers:{Accept:"application/json",mode:"same-origin","Scoped-CSRF-Token":this.authenticityTokenInput.value}});if(200!==t.status)throw Error("Error saving default options.");this.disableSubmit(),(0,n.e)(this.successToast.innerHTML)}catch{(0,n.e)(this.errorToast.innerHTML),this.enableSubmit()}}constructor(...t){super(...t),this.allowSubmit=!0}};r([a.aC],i.prototype,"selectedPeriodOption",void 0),r([a.aC],i.prototype,"selectedSortOption",void 0),r([a.zV],i.prototype,"selectedRepositoryTypeOptions",void 0),r([a.aC],i.prototype,"saveOptionsButton",void 0),r([a.aC],i.prototype,"authenticityTokenInput",void 0),r([a.aC],i.prototype,"successToast",void 0),r([a.aC],i.prototype,"errorToast",void 0),i=r([a.p_],i)},62926:(t,e,o)=>{let n;function a(t,e){if(r(),!t)return;let o=document.createElement("div");o.innerHTML=t,document.body&&document.body.append(o);let a=o.querySelector("button");a&&a.addEventListener("click",r,{once:!0}),document.addEventListener("keydown",t=>{"Escape"===t.key&&r()&&t.stopImmediatePropagation()}),n=o,e?.closeAfter&&setTimeout(()=>{n===o&&r()},e.closeAfter)}function r(){return!!n&&(n.remove(),n=null,!0)}o.d(e,{e:()=>a})},39595:(t,e,o)=>{let n;o.d(e,{CF:()=>h,p_:()=>R,FB:()=>u,Se:()=>O,aC:()=>$,zV:()=>L});let a=new WeakSet,r=new WeakMap;function i(t=document){if(r.has(t))return r.get(t);let e=!1,o=new MutationObserver(t=>{for(let e of t)if("attributes"===e.type&&e.target instanceof Element)c(e.target);else if("childList"===e.type&&e.addedNodes.length)for(let t of e.addedNodes)t instanceof Element&&s(t)});o.observe(t,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let n={get closed(){return e},unsubscribe(){e=!0,r.delete(t),o.disconnect()}};return r.set(t,n),n}function s(t){for(let e of t.querySelectorAll("[data-action]"))c(e);t instanceof Element&&t.hasAttribute("data-action")&&c(t)}function l(t){let e=t.currentTarget;for(let o of d(e))if(t.type===o.type){let n=e.closest(o.tag);a.has(n)&&"function"==typeof n[o.method]&&n[o.method](t);let r=e.getRootNode();if(r instanceof ShadowRoot&&a.has(r.host)&&r.host.matches(o.tag)){let e=r.host;"function"==typeof e[o.method]&&e[o.method](t)}}}function*d(t){for(let e of(t.getAttribute("data-action")||"").trim().split(/\s+/)){let t=e.lastIndexOf(":"),o=Math.max(0,e.lastIndexOf("#"))||e.length;yield{type:e.slice(0,t),tag:e.slice(t+1,o),method:e.slice(o+1)||"handleEvent"}}}function c(t){for(let e of d(t))t.addEventListener(e.type,l)}function u(t,e){let o=t.tagName.toLowerCase();if(t.shadowRoot){for(let n of t.shadowRoot.querySelectorAll(`[data-target~="${o}.${e}"]`))if(!n.closest(o))return n}for(let n of t.querySelectorAll(`[data-target~="${o}.${e}"]`))if(n.closest(o)===t)return n}let f=t=>String("symbol"==typeof t?t.description:t).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),p=(t,e="property")=>{let o=f(t);if(!o.includes("-"))throw new DOMException(`${e}: ${String(t)} is not a valid ${e} name`,"SyntaxError");return o},b="attr";function h(t,e){P(t,b).add(e)}let g=new WeakSet;function m(t,e){if(g.has(t))return;g.add(t);let o=Object.getPrototypeOf(t),n=o?.constructor?.attrPrefix??"data-";for(let a of(e||(e=P(o,b)),e)){let e=t[a],o=p(`${n}${a}`),r={configurable:!0,get(){return this.getAttribute(o)||""},set(t){this.setAttribute(o,t||"")}};"number"==typeof e?r={configurable:!0,get(){return Number(this.getAttribute(o)||0)},set(t){this.setAttribute(o,t)}}:"boolean"==typeof e&&(r={configurable:!0,get(){return this.hasAttribute(o)},set(t){this.toggleAttribute(o,t)}}),Object.defineProperty(t,a,r),a in t&&!t.hasAttribute(o)&&r.set.call(t,e)}}let y=new Map,w=new Promise(t=>{"loading"!==document.readyState?t():document.addEventListener("readystatechange",()=>t(),{once:!0})}),v=new Promise(t=>{let e=new AbortController;e.signal.addEventListener("abort",()=>t());let o={once:!0,passive:!0,signal:e.signal},n=()=>e.abort();document.addEventListener("mousedown",n,o),document.addEventListener("touchstart",n,o),document.addEventListener("keydown",n,o),document.addEventListener("pointerdown",n,o)}),S={ready:()=>w,firstInteraction:()=>v,visible:t=>new Promise(e=>{let o=new IntersectionObserver(t=>{for(let n of t)if(n.isIntersecting){e(),o.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let e of document.querySelectorAll(t))o.observe(e)})},A=new WeakMap;function C(t){cancelAnimationFrame(A.get(t)||0),A.set(t,requestAnimationFrame(()=>{for(let e of y.keys()){let o=t instanceof Element&&t.matches(e)?t:t.querySelector(e);if(customElements.get(e)||o){let n=o?.getAttribute("data-load-on")||"ready",a=n in S?S[n]:S.ready;for(let t of y.get(e)||[])a(e).then(t);y.delete(e),A.delete(t)}}}))}function O(t,e){for(let[o,n]of("string"==typeof t&&e&&(t={[t]:e}),Object.entries(t)))y.has(o)||y.set(o,new Set),y.get(o).add(n);E(document)}function E(t){n||(n=new MutationObserver(t=>{if(y.size)for(let e of t)for(let t of e.addedNodes)t instanceof Element&&C(t)})),C(t),n.observe(t,{subtree:!0,childList:!0})}let k=Symbol.for("catalyst");let CatalystDelegate=class CatalystDelegate{constructor(t){let e=this,o=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){e.connectedCallback(this,o)};let n=t.prototype.disconnectedCallback;t.prototype.disconnectedCallback=function(){e.disconnectedCallback(this,n)};let a=t.prototype.attributeChangedCallback;t.prototype.attributeChangedCallback=function(t,o,n){e.attributeChangedCallback(this,t,o,n,a)};let r=t.observedAttributes||[];Object.defineProperty(t,"observedAttributes",{configurable:!0,get(){return e.observedAttributes(this,r)},set(t){r=t}}),function(t){let e=t.observedAttributes||[],o=t.attrPrefix??"data-",n=t=>p(`${o}${t}`);Object.defineProperty(t,"observedAttributes",{configurable:!0,get:()=>[...P(t.prototype,b)].map(n).concat(e),set(t){e=t}})}(t),function(t){let e=f(t.name).replace(/-element$/,"");try{window.customElements.define(e,t),window[t.name]=customElements.get(e)}catch(t){if(!(t instanceof DOMException&&"NotSupportedError"===t.name))throw t}}(t)}observedAttributes(t,e){return e}connectedCallback(t,e){var o,n;t.toggleAttribute("data-catalyst",!0),customElements.upgrade(t),!function(t){for(let e of t.querySelectorAll("template[data-shadowroot]"))e.parentElement===t&&t.attachShadow({mode:"closed"===e.getAttribute("data-shadowroot")?"closed":"open"}).append(e.content.cloneNode(!0))}(t),m(t),a.add(t),t.shadowRoot&&(s(n=t.shadowRoot),i(n)),s(t),i(t.ownerDocument),e?.call(t),t.shadowRoot&&(s(o=t.shadowRoot),i(o),E(t.shadowRoot))}disconnectedCallback(t,e){e?.call(t)}attributeChangedCallback(t,e,o,n,a){m(t),"data-catalyst"!==e&&a&&a.call(t,e,o,n)}};function P(t,e){if(!Object.prototype.hasOwnProperty.call(t,k)){let e=t[k],o=t[k]=new Map;if(e)for(let[t,n]of e)o.set(t,new Set(n))}let o=t[k];return o.has(e)||o.set(e,new Set),o.get(e)}function $(t,e){P(t,"target").add(e),Object.defineProperty(t,e,{configurable:!0,get(){return u(this,e)}})}function L(t,e){P(t,"targets").add(e),Object.defineProperty(t,e,{configurable:!0,get(){return function(t,e){let o=t.tagName.toLowerCase(),n=[];if(t.shadowRoot)for(let a of t.shadowRoot.querySelectorAll(`[data-targets~="${o}.${e}"]`))a.closest(o)||n.push(a);for(let a of t.querySelectorAll(`[data-targets~="${o}.${e}"]`))a.closest(o)===t&&n.push(a);return n}(this,e)}})}function R(t){new CatalystDelegate(t)}}},t=>{t(t.s=97111)}]);
//# sourceMappingURL=forks-cbea38afc44a.js.map