/**
 * @module route
 *
 * @desc
 * Route
 */

import { pages } from './../pages';
import { PageSlider } from './pageslider';


export function Route( container ) {
  let self = this;
  let slider = new PageSlider( container );
  container.addEventListener( 'beforeAnimation', invokeMethod );
  container.addEventListener( 'afterAnimation', invokeMethod );
  window.addEventListener( 'hashchange', route );
  route();


  function getPageDetails() {
    let query_string = window.location.hash.slice( 1 );
    if( !query_string ) {
      query_string = 'index';
    }
    let array = query_string.replace( '?', '&' ).split( '&' );
    let page_name = array[0];

    array.splice( 0, 1 );
    let l = array.length;
    let params = {};
    if( l > 0 ) {
      for( let i = 0; i < l; i++ ) {
        let param = array[ i ].split( '=' );
        params[ param[0] ] = param[1];
      }
    }

    return { hash: page_name, params: params };
  }

  function invokeMethod( e ) {
    let page = self.page;

    let method = e.type + 'On' + page.hash.charAt(0).toUpperCase() + page.hash.slice(1);
    if( self[ method ] ) {
      self[ method ]( page.params );
    }
  }

  function route() {
    let html;
    self.page = getPageDetails();

    if( pages[ self.page.hash ] ) {
      slider.slidePage( pages[ self.page.hash ] );
    } else {
      slider.slidePage( pages[ 404 ] );
    }
  }
}
