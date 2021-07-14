/**
 * @module pageslider
 *
 * @desc
 * Route
 */

import { PageSlider } from './pageslider';


export function Route( container ) {
  let self = this;
  let slider = new PageSlider( document.getElementById( 'container' ) );
  container.addEventListener( 'beforeAnimation', redirect );
  container.addEventListener( 'afterAnimation', redirect );
  window.addEventListener( 'hashchange', route );
  route();


  function getPageDetails() {
    var query_string = window.location.hash.slice( 1 );
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

  function redirect( e ) {
    var details = self.page_details;

    var method = e.type + 'On' + details.hash.charAt(0).toUpperCase() + details.hash.slice(1);
    if( self[ method ] ) {
      self[ method ]( details.params );
    }
  }

  function route() {
    let html;
    self.page_details = getPageDetails();

    fetch( `inc/${ self.page_details.hash }.html` )
      .then( response => {
        if( response.ok ) return response.text();
        else throw( response.status )
      } )
      .then( html => slider.slidePage( html ) )
      .catch( error => console.log( error ) )
  }
}
