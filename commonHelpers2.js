import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s="feedback-form-state";a.addEventListener("input",i);a.addEventListener("submit",u);const{email:n,message:c}=l(s)||{};a.elements.message.value=c||"";a.elements.email.value=n||"";function m(t,e){localStorage.setItem(t,JSON.stringify(e))}function l(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function i(){const t=a.elements.email.value,e=a.elements.message.value,o={email:t.trim(),message:e.trim()};m(s,o)}function u(t){t.preventDefault();const{email:e,message:o}=l(s)||{};o&&e&&(console.log({email:e,message:o}),localStorage.removeItem(s),a.reset())}const r=document.querySelector("input");r.addEventListener("focus",()=>{r.placeholder="Type area"});r.addEventListener("blur",()=>{r.placeholder=""});
//# sourceMappingURL=commonHelpers2.js.map