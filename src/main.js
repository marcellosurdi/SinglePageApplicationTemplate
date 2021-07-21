/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.scss';
import './js/core/sidenav';
import { Route } from './js/core/route';


Route.prototype = {
  constructor: Route,

  beforeAnimationOnPage1: function( params ) {
    console.log( params );
  },
}

new Route();
