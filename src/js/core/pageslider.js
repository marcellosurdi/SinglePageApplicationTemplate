/**
 * @module js/core/pageslider
 * @author Marcello Surdi
 *
 * @desc
 * The PageSlider function manages page transitions
 *
 * @see {@link https://github.com/ccoenraets/PageSlider|Christophe Coenraets's PageSlider}
 */


export function PageSlider( container ) {
  let current_page, _history = [];

  /**
   * Use this function if you want PageSlider to automatically determine the sliding direction based on the state _history.
   *
   * @param {string} html Current page content
   */
  this.slidePage = function( html ) {
    let l = _history.length, hash = window.location.hash;

    // First page load
    if( l === 0 ) {
      _history.push( hash );
      this.slidePageFrom( html );
      return;
    }

    if( hash === _history[ l - 2 ] ) {
      _history.pop();
      this.slidePageFrom( html, 'left' );
    } else {
      _history.push( hash );
      this.slidePageFrom( html, 'right' );
    }
  }

  /**
   * Use this function directly if you want to control the sliding direction outside PageSlider.
   *
   * @param {string} html Current page content
   * @param {string} from Slide direction
   */
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
