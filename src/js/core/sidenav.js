/**
 * @module sidenav
 *
 * @desc
 * Sidenav
 *
 * @see https://www.w3schools.com/howto/howto_js_sidenav.asp
 */

import './../../css/core/sidenav.scss';
import { Overlay } from './overlay';


function Sidenav() {
  let body = document.getElementById( 'body' );
  let sidenav = document.getElementById( 'sidenav' );

  document.getElementById( 'open-menu' ).addEventListener( 'click', openSidenav );
  document.getElementById( 'close-menu' ).addEventListener( 'click', closeSidenav );

  sidenav.querySelectorAll( 'a.has-children' ).forEach( item => {
    item.addEventListener( 'click', openSubMenu );

    let sub_menu = item.nextElementSibling;
    sub_menu.setAttribute( 'data-max-height', ( ( sub_menu.querySelectorAll( 'li' ).length * 50 ) + 'px') );
    sub_menu.style.maxHeight = '0px';
  });

  sidenav.querySelectorAll( 'a:not(.has-children)' ).forEach( item => {
    item.addEventListener( 'click', closeSidenav );
  });

  function openSubMenu( e ) {
    e.preventDefault();

    this.classList.toggle( 'active' );

    let sub_menu = this.nextElementSibling;
    if( sub_menu.style.maxHeight == '0px' ) {
      sub_menu.style.maxHeight = sub_menu.getAttribute( 'data-max-height' );
      sub_menu.style.opacity = '1';
    } else {
      sub_menu.style.maxHeight = '0px';
      sub_menu.style.opacity = '0';
    }
  }

  function openSidenav() {
    const overlay = Overlay();
    overlay.addEventListener( 'click', function close( e ) {
      closeSidenav();
      e.target.removeEventListener( 'click', close );
    } )

    sidenav.style.width = "275px";
    body.classList.add('shift');
  }

  function closeSidenav() {
    Overlay( false );

    sidenav.style.width = "0";
    body.classList.remove('shift');
  }
}

Sidenav();
