/**
 * @module js/core/notification
 * @author Marcello Surdi
 *
 * @desc
 * Contiene il componente **Notification**, un messaggio di notifica in stile toast.
 */

import { I18n } from './i18n';

let timeout_id = 0;

/**
 * @desc
 * Mostra o nasconde un messaggio di notifica
 *
 * @param {boolean|string} type false per nascondere la notifica, 'warning'|'alert'|'notice'|'success' per mostrarla
 * @param {string} text Testo da visualizzare (può contenere HTML)
 * @param {number} [timeout=7000] Indica il numero di millisecondi dopo i quali la notifica deve scomparire, 0 per una notifica persistente
 * @param {function} [onConfirm] Una funzione da eseguire se l'utente conferma l'operazione corrente
 *
 * @example
 * Notification( 'alert', 'text', 0, () => {} );
 */
export function Notification( type, text, timeout = 7000, onConfirm ) {
  const i18n = new I18n();

  if( timeout_id ) {
    clearTimeout( timeout_id );
  }

  let notification = document.getElementById( 'notification' );
  if( !notification ) {
    notification = document.createElement( 'DIV' );
    notification.id = 'notification';
    notification.className = 'display-relative padding-medium';

    const html =
      `<div class="container-max-width">
        <p class="text"></p>
        <a href="javascript:void(0);" class="icon-close icon-medium text-medium"></a>
        <div class="options margin-medium">
          <a href="javascript:void(0);" class="confirm-btn radius-5 padding-medium" data-i18n="confirm">${ i18n.getTranslation( 'confirm' ) }</a>
          <a href="javascript:void(0);" class="cancel-btn radius-5 padding-medium" data-i18n="cancel">${ i18n.getTranslation( 'cancel' ) }</a>
        </div><!-- /.options -->
      </div><!-- /.centered-content -->`;
    notification.innerHTML = html;

    document.getElementById( 'body' ).appendChild( notification );
  }

  if( !type ) {
    close();
    return;
  }

  notification.querySelector( '.icon-close' ).onclick = close;
  notification.querySelector( '.cancel-btn' ).onclick = close;

  if( notification.classList.contains( 'show' ) ) {
    close();
  }

  notification.classList.remove( 'show', 'alert-background', 'notice-background', 'success-background', 'warning-background' );

  notification.classList.add( type + '-background' );
  notification.querySelector( 'p.text' ).innerHTML = text;

  // Evita che la classe venga aggiunta nel DOM contemporaneamente al div
  setTimeout( () => notification.classList.add( 'show' ), 0 );

  if( timeout ) {
    timeout_id = setTimeout( () => {
			notification.classList.remove( 'show' );
		}, timeout );
  }

  if( !onConfirm ) {
    notification.querySelector( 'div.options' ).style.display = 'none';
  } else {
    notification.querySelector( 'div.options' ).style.display = 'block';
    notification.querySelector( 'a.confirm-btn' ).onclick = () => {
      onConfirm();
      close();
    }
  }

  function close() {
    notification.classList.remove( 'show' );
  }
}
