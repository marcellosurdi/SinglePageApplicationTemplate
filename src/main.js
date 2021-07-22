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

  beforeAnimationOnNotifications: function() {
    document.getElementById( 'notification1' ).addEventListener( 'click', () => {
      Notification( 'alert', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet. Praesent aliquam nisi ac rhoncus fringilla. Nulla sit amet ultrices nisi, et interdum felis. Etiam rutrum sit amet nulla vitae auctor.' )
    } );

    document.getElementById( 'notification2' ).addEventListener( 'click', () => {
      Notification( 'success', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet. Praesent aliquam nisi ac rhoncus fringilla. Nulla sit amet ultrices nisi, et interdum felis. Etiam rutrum sit amet nulla vitae auctor.' )
    } );

    document.getElementById( 'notification3' ).addEventListener( 'click', () => {
      Notification( 'warning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet. Praesent aliquam nisi ac rhoncus fringilla. Nulla sit amet ultrices nisi, et interdum felis. Etiam rutrum sit amet nulla vitae auctor.' )
    } );

    document.getElementById( 'notification4' ).addEventListener( 'click', () => {
      Notification( 'notice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra efficitur dignissim. Curabitur eu dapibus mauris. Donec bibendum elit risus, eu vulputate nulla efficitur sit amet. Praesent aliquam nisi ac rhoncus fringilla. Nulla sit amet ultrices nisi, et interdum felis. Etiam rutrum sit amet nulla vitae auctor.', 0, () => { alert( 'Confirm action' ); } )
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
