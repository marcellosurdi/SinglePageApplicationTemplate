/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.scss';
import './css/pageslider.scss';
import './js/custom';
import './js/core/sidenav';
import { Route } from './js/core/route';


new Route( document.getElementById( 'container' ) );
