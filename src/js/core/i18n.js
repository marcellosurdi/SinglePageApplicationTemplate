/**
 * @module i18n
 *
 * @desc
 * I18n
 */

import { l10n } from './../l10n';


export function I18n() {
  const self = this;
  // Available languages
  const langs_el = document.querySelector( 'ul#langs' );
  let langs = [];
  // Default language
  const lang_el = document.querySelector( 'a#lang' );
  let lang = 'en';

  langs_el.querySelectorAll( 'a' ).forEach( ( item, i ) => {
    langs.push( item.getAttribute( 'data-lang' ) );
    item.addEventListener( 'click', pickLanguage );
  });

  const arr = ( window.navigator.userLanguage || window.navigator.language ).split( '-' );
  if( langs.indexOf( arr[0] ) != -1 ) {
    lang = arr[0];
  }

  showLanguage();


  function pickLanguage( e ) {
    lang = e.target.getAttribute( 'data-lang' );
    showLanguage();
    self.setLanguage();
  }

  function showLanguage() {
    const span_icon = lang_el.querySelector( 'span.svg-icon' );

    span_icon.classList.remove( ...langs );
    span_icon.classList.add( lang );

    langs_el.querySelectorAll( 'a' ).forEach( ( item, i ) => {
      if( item.getAttribute( 'data-lang' ) == lang ) {
        lang_el.querySelector( 'span.current-lang' ).textContent = item.textContent;
        item.insertAdjacentHTML( 'beforeend', '<span class="xlight-grey-background icon-checkmark icon-small text-small"></span>' );
      } else {
        item.removeChild( item.querySelector( 'span' ) );
      }
    });
  }

  this.setLanguage = function() {
    const strings = l10n[ lang ];
    const coll = document.querySelectorAll( '[data-i18n]' );

    for( let i = 0, n = coll.length; i < n; i++ ) {
      let attr = coll[i].getAttribute( 'data-i18n' );
      coll[i].innerHTML = strings[ attr ];
    }
  }
}
