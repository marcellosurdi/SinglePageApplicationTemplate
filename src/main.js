/**
 * @module main
 *
 * @desc
 * Entry point
 */

import './css/style.scss';
import './css/pageslider.scss';
import './js/custom';
import { Sidenav } from './js/core/sidenav';
import { Route } from './js/core/route';


Sidenav();
new Route();
