/**
 * @module custom
 *
 * @desc
 * Custom code
 */

import { Route } from './core/route';


Route.prototype = {
  constructor: Route,

  beforeAnimationOnPage1: function( params ) {
    console.log( params );
  },
}
