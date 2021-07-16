/**
 * @module sidenav
 *
 * @desc
 * Sidenav
 *
 * @see https://www.w3schools.com/howto/howto_js_sidenav.asp
 */

import './../../css/core/sidenav.scss';

document.getElementById("sidenav").querySelectorAll( 'a.has-children' ).forEach( item => {
  item.addEventListener( 'click', f )
});


function f( e ) {
  this.nextElementSibling.classList.toggle('active');
}

function openNav() {
  document.getElementById("sidenav").style.width = "300px";
  document.getElementById("body").classList.add('shift')
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("body").classList.remove('shift')
}
