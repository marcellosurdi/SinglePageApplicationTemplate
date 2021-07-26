/**
 * @module js/core/notification
 * @author Marcello Surdi
 *
 * @desc
 * The Notification function shows or hides a notification (toast message).
 */

import { I18n } from './i18n';

let timeout_id = 0;

/**
 * @desc
 * Shows or hides a notification (toast message).
 *
 * @param {boolean|string} type false hides the message, 'warning'|'alert'|'notice'|'success' shows it
 * @param {string} text Text to display (can contain HTML)
 * @param {number} [timeout=7000] Number of milliseconds after wich the notification must disappear, 0 to get a persistent notification
 * @param {function} [onConfirm] A function to be invoked if the user confirms the current operation
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
