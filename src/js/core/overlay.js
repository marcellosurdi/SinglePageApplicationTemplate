/**
 * @module js/components/overlay
 * @author Marcello Surdi
 * @version 1.0.0
 *
 * @desc
 * Contiene il componente **Overlay**.
 * *Un overlay è un elemento semitrasparente che oscura la pagina tranne la parte che si intende evidenziare.*
 */

 /**
  * @desc
  * Mostra o nasconde l'overlay
  *
  * @param {boolean} [action=true] - true per apertura, false per la chiusura dell'overlay
  * @param {boolean} [spinner=false] Indica se mostrare o meno lo spinner di caricamento
  * @param {number} [zIndex=10] Il valore della proprietà CSS z-index
  * @returns {HTMLDivElement|undefined} Restituisce l'overlay contestualmente all'apertura o undefined in chiusura
  *
  * @example
  * Overlay( true );
  */
export function Overlay( action = true, spinner = false, zIndex = 10 ) {
  let overlay = document.getElementById( 'overlay' );

  if( !overlay ) {
    overlay = document.createElement( 'DIV' );
    overlay.id = 'overlay';

    document.getElementById( 'body' ).appendChild( overlay );
  }

  if( action ) {
    overlay.style.display = 'block';
    if( spinner ) {
      overlay.classList.add( 'preload' );
    }
    overlay.style.zIndex = zIndex;

    return overlay;
  } else {
    overlay.style.display = 'none';
    overlay.classList.remove( 'preload' );
  }
}
