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

  if( !localStorage.getItem( 'lang' ) ) {
    const arr = ( window.navigator.userLanguage || window.navigator.language ).split( '-' );
    if( langs.indexOf( arr[0] ) != -1 ) {
      lang = arr[0];
    }
    localStorage.setItem( 'lang', lang );
  } else {
    lang = localStorage.getItem( 'lang' );
  }

  showLanguage();


  function pickLanguage( e ) {
    lang = e.target.getAttribute( 'data-lang' );
    localStorage.setItem( 'lang', lang );

    showLanguage();

    self.setLanguage();
  }

  function showLanguage() {
    const span_icon = lang_el.querySelector( 'span.svg-icon' );

    span_icon.classList.remove( ...langs );
    span_icon.classList.add( lang );

    langs_el.querySelectorAll( 'a' ).forEach( ( item, i ) => {
      const span = item.querySelector( 'span' );

      if( item.getAttribute( 'data-lang' ) == lang ) {
        lang_el.querySelector( 'span.current-lang' ).textContent = item.textContent;
        if( !span ) {
          item.insertAdjacentHTML( 'beforeend', '<span class="xlight-grey-background icon-checkmark icon-small text-small"></span>' );
        }
      } else {
        if( span ) {
          item.removeChild( span );
        }
      }
    });
  }

  this.getTranslation = function( str ) {
    if( l10n[ lang ][ str ] ) {
      return l10n[ lang ][ str ];
    }
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
