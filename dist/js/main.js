!function(){"use strict";var e={404:'\n  <div>\n    <div class="content 404 align-center">\n      <span class="margin-top-big radius-circle xlight-grey-background padding-big icon-unlink text-5xl text-faded-light"></span>\n      <p class="margin-medium text-xxl text-faded-light">Sorry, the page wasn\'t found</p>\n      <a href="#" class="btn display-inline-block radius-5 light-grey-background padding-medium">Back to home</a>\n    </div>\n  </div>\n  ',index:'\n  <div>\n    <div class="content index">\n      <ul class="list">\n        <li><a href="#page1?ciao=1&a=a&tutti=tutti"><strong>Page 1</strong></a></li>\n        <li><a href="#page2"><strong>Page 2</strong></a></li>\n        <li><a href="#page3&anche=1&qui=1&funziona=funziona"><strong>Page 3</strong></a></li>\n      </ul>\n    </div>\n  </div>\n  ',page1:'\n  <div>\n    <div class="content page1">\n      <h2>Page 1</h2>\n      <p>Curabitur tempor lacus iaculis pharetra tincidunt. Suspendisse vel orci vestibulum, <a href="#page4">page 4</a>.</p>\n    </div>\n  </div>\n  ',page2:'\n  <div>\n    <div class="content page2">\n      <h2>Page 2</h2>\n      <p>Nulla egestas lectus vel laoreet porttitor. Aliquam feugiat bibendum sollicitudin, <a href="#">home</a>.</p>\n    </div>\n  </div>\n  ',page3:'\n  <div>\n    <div class="content page3">\n      <h2>Page 3</h2>\n      <p>Praesent eu massa feugiat, tincidunt lectus consectetur, sodales tortor. Cras sit amet ullamcorper sapien, <a href="#">home</a>.</p>\n    </div>\n  </div>\n  ',page4:'\n  <div>\n    <div class="content page4">\n      <h2>Page 4</h2>\n      <p>Duis non erat eget lorem dapibus consectetur euismod non lorem. Vestibulum bibendum vehicula pretium. Cras sit amet ullamcorper sapien, <a href="#">home</a>.</p>\n    </div>\n  </div>\n  '};function n(e){var n,a=[];this.slidePage=function(e){var n=a.length,i=window.location.hash;if(0===n)return a.push(i),void this.slidePageFrom(e);i===a[n-2]?(a.pop(),this.slidePageFrom(e,"left")):(a.push(i),this.slidePageFrom(e,"right"))},this.slidePageFrom=function(a,i){e.insertAdjacentHTML("beforeend",a);var t=e.lastElementChild;if(e.dispatchEvent(new Event("beforeAnimation")),!n||!i)return t.className="page center",void(n=t);t.className="page "+i,n.addEventListener("transitionend",(function(n){e.removeChild(n.target),e.dispatchEvent(new Event("afterAnimation"))})),e.offsetWidth,t.className="page transition center",n.className="page transition "+("left"===i?"right":"left"),n=t}}function a(a){var i=this,t=new n(a);function s(e){var n=i.page,a=e.type+"On"+n.hash.charAt(0).toUpperCase()+n.hash.slice(1);i[a]&&i[a](n.params)}function r(){i.page=function(){var e=window.location.hash.slice(1);e||(e="index");var n=e.replace("?","&").split("&"),a=n[0];n.splice(0,1);var i=n.length,t={};if(i>0)for(var s=0;s<i;s++){var r=n[s].split("=");t[r[0]]=r[1]}return{hash:a,params:t}}(),e[i.page.hash]?t.slidePage(e[i.page.hash]):t.slidePage(e[404])}a.addEventListener("beforeAnimation",s),a.addEventListener("afterAnimation",s),window.addEventListener("hashchange",r),r()}a.prototype={constructor:a,beforeAnimationOnPage1:function(e){console.log(e)}},new a(document.getElementById("container"))}();