/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.scss';
import './css/pageslider.scss';
import './js/custom';
import { Route } from './js/route';


new Route( document.getElementById( 'container' ) );
