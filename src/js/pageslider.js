/**
 * @module pageslider
 *
 * @desc
 * PageSlider
 */


export function PageSlider( container ) {
  let current_page, history = [];

  // Use this function if you want PageSlider to automatically determine the sliding direction based on the state history
  this.slidePage = function( html ) {
    let l = history.length, page = window.location.hash;

    // First page load
    if( l === 0 ) {
      history.push( page );
      this.slidePageFrom( html );
      return;
    }

    if( page === history[ l - 2 ] ) {
      history.pop();
      this.slidePageFrom( html, 'left' );
    } else {
      history.push( page );
      this.slidePageFrom( html, 'right' );
    }
  }

  // Use this function directly if you want to control the sliding direction outside PageSlider
  this.slidePageFrom = function( html, from ) {
    // Add current page in div#container
    container.insertAdjacentHTML( 'beforeend', html );
    let page = container.lastElementChild;
    // Triggers 'beforeAnimation' event
    container.dispatchEvent( new Event( 'beforeAnimation' ) );

    // Puts the default page at the center and ends function execution at the first page load
    if( !current_page || !from ) {
      page.className = 'page center';
      current_page = page;
      return;
    }

    // Puts the page at the starting position of the animation
    page.className = 'page ' + from;

    // Removes previous page at the end of animation
    current_page.addEventListener( 'transitionend', function( e ) {
      container.removeChild( e.target );
      container.dispatchEvent( new Event( 'afterAnimation' ) );
    });

    // Forces reflow (@see http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
    container.offsetWidth;

    // Triggers animation
    page.className = 'page transition center';
    current_page.className = 'page transition ' + ( from === 'left' ? 'right' : 'left' );
    current_page = page;
  }
}
