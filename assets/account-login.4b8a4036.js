const y=c=>{let e=document.getElementById("login_form"),l=document.getElementById("recover"),n=document.getElementById("recovery_link"),o=document.getElementById("cancel_recover"),s=!!document.location.hash.match(/#recover/),r=c.querySelector(".recovery-success")!==null;s||r?(e.style.display="none",l.style.display="block"):e.style.display="block",n.addEventListener("click",t=>{t.preventDefault(),e.style.display="none",l.style.display="block"}),o.addEventListener("click",t=>{t.preventDefault(),l.style.display="none",e.style.display="block"})};export{y as default};
//# sourceMappingURL=account-login.4b8a4036.js.map
