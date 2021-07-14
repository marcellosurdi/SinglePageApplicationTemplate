/**
 * @module pageslider
 *
 * @desc
 * Route
 */

import { PageSlider } from './pageslider';


let homePage =
  '<div>' +
    '<div class="content">' +
      '<ul class="list">' +
        '<li><a href="#page1?ciao=1&a=a&tutti=tutti"><strong>Page 1</strong></a></li>' +
        '<li><a href="#page2"><strong>Page 2</strong></a></li>' +
        '<li><a href="#page3&anche=1&qui=1&funziona=funziona"><strong>Page 3</strong></a></li>' +
      '</ul>' +
    '</div>' +
  '</div>';

let detailsPage =
  '<div>' +
    '<div class="content">' +
      '<h2>{{name}}</h2>' +
      '<p>{{description}} {{link}}</p>' +
      'Curabitur tempor lacus iaculis pharetra tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae ligula eget felis faucibus facilisis id id velit. Pellentesque non lorem odio. Quisque consequat dictum urna sit amet pulvinar. Aliquam a odio pulvinar, pellentesque urna in, lacinia ex. Fusce ac enim euismod, vehicula lorem in, vestibulum turpis. Sed vehicula dignissim ipsum eu vestibulum. Suspendisse venenatis hendrerit suscipit. Nullam varius consectetur justo, eleifend commodo justo tincidunt vel. Suspendisse vel orci vestibulum, rutrum sem ac, congue lectus. Proin efficitur consequat neque et iaculis. Nam at suscipit ipsum, ut malesuada magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nunc augue, ultricies in tellus quis, egestas ultricies libero.' +
    '</div>' +
  '</div>';


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
      window.location.hash = 'index';
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

    if( self.page_details.hash === "page1" ) {
      html = template( detailsPage, { name: "Page 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", link: '<a href="#page4">Page 4</a>' } );
    } else if( self.page_details.hash === "page2" ) {
      html = template( detailsPage, { name: "Page 2", description: "Aenean ac massa lectus. Pellentesque posuere, tellus sit amet facilisis laoreet, enim purus ornare nunc, eget fermentum ligula ante sit amet risus. Praesent et dui eros. Nullam dignissim venenatis sem, ac dignissim est facilisis ac. Phasellus interdum nibh ut aliquam iaculis. Duis quis lorem tellus. Morbi tortor odio, imperdiet sit amet lacinia ac, auctor in lacus.", link: '<a href="#">Home</a>' } );
    } else if( self.page_details.hash === "page3" ) {
      html = template( detailsPage, { name: "Page 3", description: "Nunc erat massa, elementum in metus blandit, egestas cursus libero. Curabitur efficitur odio eget mi porttitor convallis. Pellentesque sagittis quam lectus, vel accumsan tortor vestibulum at. Quisque enim elit, vehicula eu ornare a, volutpat id lectus. Morbi libero ex, interdum condimentum porta at, sagittis sit amet velit.", link: '<a href="#">Home</a>' } );
    } else if( self.page_details.hash === "page4" ) {
      html = template( detailsPage, { name: "Page 4", description: "Curabitur efficitur odio eget mi porttitor convallis. Quisque enim elit, vehicula eu ornare a, volutpat id lectus. Morbi libero ex, interdum condimentum porta at, sagittis sit amet velit.", link: '<a href="#">Home</a>' } );
    }
    else {
      html = homePage;
    }

    slider.slidePage( html );
  }

  function template( tpl, data ) {
    for( let item in data ) {
      tpl = tpl.replace( `{{${ item }}}`, data[item] );
    }

    return tpl;
  }
}
