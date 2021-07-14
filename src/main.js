/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.css';
import './css/pageslider.css';
import { Route } from './js/route';


Route.prototype.beforeAnimationOnPage1 = function( params ) {
    console.log( params );
}

new Route( document.getElementById( 'container' ) );
