/**
 * @module js/core/route
 * @author Marcello Surdi
 *
 * @desc
 * The Route function manages page routing
 */

import './../../css/core/pageslider.scss';
import { pages } from './../pages';
import { PageSlider } from './pageslider';
import { I18n } from './i18n';


export function Route() {
  let details = null;
  const self = this;
  const container = document.getElementById( 'container' );
  const page_slider = new PageSlider( container );
  const i18n = new I18n();
  container.addEventListener( 'beforeAnimation', searchOnPrototype );
  container.addEventListener( 'beforeAnimation', i18n.setLanguage );
  container.addEventListener( 'afterAnimation', searchOnPrototype );
  window.addEventListener( 'hashchange', doSlide );
  doSlide();


  function getPageDetails() {
    let hash = window.location.hash.slice( 1 );
    if( !hash ) {
      hash = 'index';
    }

    let arr = hash.replace( '?', '&' ).split( '&' );
    hash = arr[0];

    arr.splice( 0, 1 );
    let l = arr.length;
    let params = {};
    if( l > 0 ) {
      for( let i = 0; i < l; i++ ) {
        let param = arr[ i ].split( '=' );
        params[ param[0] ] = param[1];
      }
    }

    return { hash: hash, params: params };
  }

  function doSlide() {
    details = getPageDetails();

    if( pages[ details.hash ] ) {
      page_slider.slidePage( pages[ details.hash ] );
    } else {
      page_slider.slidePage( pages[ 404 ] );
    }
  }

  function searchOnPrototype( e ) {
    let method = e.type + 'On' + details.hash.charAt(0).toUpperCase() + details.hash.replace( '-', '' ).slice(1);
    if( self[ method ] ) {
      self[ method ]( details );
    }
  }
}
