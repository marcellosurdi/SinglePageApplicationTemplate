/**
 * @module custom
 *
 * @desc
 * Custom code
 */

import { Route } from './route';


Route.prototype = {
  constructor: Route,

  beforeAnimationOnPage1: function( params ) {
    console.log( params );
  },
}
