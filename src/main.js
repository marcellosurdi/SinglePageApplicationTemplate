/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.scss';
import './js/core/sidenav';
import { Route } from './js/core/route';
import { Overlay } from './js/core/overlay';
import { Notification } from './js/core/notification';


Route.prototype = {
  constructor: Route,

  beforeAnimationOnDynamiccontent: function() {
    setTimeout( loadContent, 2000 );

    function loadContent() {
      fetch( 'inc/sample-content.html' )
        .then( response => {
          if( response.ok ) return response.text();
          else throw( response.status )
        } )
        .then( text => {
          const container = document.getElementById( 'dynamic-content-sample' );
          container.innerHTML = text;
          container.classList.remove( 'lazy', 'preload' );
          container.classList.add( 'complete' );
        } )
        .catch( error => console.log( error ) )
    }
  },


  beforeAnimationOnForms: function() {
    document.getElementById( 'form-example' ).addEventListener( 'submit', function( e ) {
      console.log( 'submit' );

      e.preventDefault();

      const btn = this.querySelector( 'button[type=submit]' );
      const icon = btn.querySelector( 'span' );

      btn.disabled = true;
      btn.classList.add( 'disable-background' );
      btn.classList.remove( 'light-btn-background' );
      icon.classList.add( 'icon-spinner', 'rotate-icon' );
      icon.classList.remove( 'icon-checkmark' );

      setTimeout( ()=>{
        btn.disabled = false;
        btn.classList.add( 'light-btn-background' );
        btn.classList.remove( 'disable-background' );
        icon.classList.add( 'icon-checkmark' );
        icon.classList.remove( 'icon-spinner', 'rotate-icon' );
      }, 4000 )
    } );
  },


  beforeAnimationOnNotifications: function() {
    document.getElementById( 'notification1' ).addEventListener( 'click', () => {
      Notification( 'alert', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet.' )
    } );

    document.getElementById( 'notification2' ).addEventListener( 'click', () => {
      Notification( 'success', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet.' )
    } );

    document.getElementById( 'notification3' ).addEventListener( 'click', () => {
      Notification( 'warning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet.' )
    } );

    document.getElementById( 'notification4' ).addEventListener( 'click', () => {
      Notification( 'notice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet.', 0, () => { alert( 'Confirm action' ); } )
    } );
  },


  beforeAnimationOnOverlay: function() {
    document.getElementById( 'overlay1' ).addEventListener( 'click', () => {
      Overlay();
      setTimeout( () => { Overlay( false ) }, 2000 )
    } );

    document.getElementById( 'overlay2' ).addEventListener( 'click', () => {
      const overlay = Overlay();
      overlay.addEventListener( 'click', function close( e ) {
        Overlay( false );
        overlay.removeEventListener( 'click', close );
      } );
    } );


    document.getElementById( 'overlay3' ).addEventListener( 'click', () => {
      Overlay( true, true );
      setTimeout( () => { Overlay( false ) }, 2000 )
    } );
  },

  beforeAnimationOnQuerystring: function( params ) {
    let string = '';
    for( let item in params ) {
      string += item + ':<strong>' + params[ item ] + '</strong> - ';
    }
    document.getElementById( 'show-vars' ).innerHTML = string.substr( 0, ( string.length - 2 ) );
  },
}

new Route();
