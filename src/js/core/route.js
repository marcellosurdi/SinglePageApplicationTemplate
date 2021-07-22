/**
 * @module route
 *
 * @desc
 * Route
 */

import './../../css/core/pageslider.scss';
import { pages } from './../pages';
import { PageSlider } from './pageslider';
import { I18n } from './i18n';


export function Route() {
  let page = null;
  const self = this;
  const container = document.getElementById( 'container' );
  const page_slider = new PageSlider( container );
  const i18n = new I18n();
  container.addEventListener( 'beforeAnimation', searchOnPrototype );
  container.addEventListener( 'beforeAnimation', i18n.setLanguage );
  container.addEventListener( 'afterAnimation', searchOnPrototype );
  window.addEventListener( 'hashchange', route );
  route();


  function getPageDetails() {
    let query_string = window.location.hash.slice( 1 );
    if( !query_string ) {
      query_string = 'index';
    }
    let arr = query_string.replace( '?', '&' ).split( '&' );
    let page_name = arr[0];

    arr.splice( 0, 1 );
    let l = arr.length;
    let params = {};
    if( l > 0 ) {
      for( let i = 0; i < l; i++ ) {
        let param = arr[ i ].split( '=' );
        params[ param[0] ] = param[1];
      }
    }

    return { hash: page_name, params: params };
  }

  function searchOnPrototype( e ) {
    let method = e.type + 'On' + page.hash.charAt(0).toUpperCase() + page.hash.replace( '-', '' ).slice(1);
    if( self[ method ] ) {
      self[ method ]( page.params );
    }
  }

  function route() {
    let html;
    page = getPageDetails();

    if( pages[ page.hash ] ) {
      page_slider.slidePage( pages[ page.hash ] );
    } else {
      page_slider.slidePage( pages[ 404 ] );
    }
  }
}
