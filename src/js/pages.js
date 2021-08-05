/**
 * @module js/pages
 *
 * @desc
 * The content of pages
 */


export const pages = {
  404: `
  <div>
    <div class="content 404 align-center">
      <span class="margin-top-big radius-circle xlight-grey-background padding-big icon-unlink text-5xl text-faded-light"></span>
      <p class="margin-medium text-xxl text-faded-light" data-i18n="short-404-description"></p>
      <a href="#" class="margin-small display-inline-block left-arrow-btn display-relative dark-btn-background" data-i18n="back-to-home"></a>
    </div>
  </div>
  `,

  backgrounds: `
  <div>
    <div class="content backgrounds">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        <span data-i18n="backgrounds"></span>
      </div>

      <h2 class="margin-medium" data-i18n="backgrounds"></h2>

      <p class="margin-medium" data-i18n="short-backgrounds-description"></p>
      <div class="float-container">
        <div class="float-item dark-a-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.dark-a-background</div>
        <div class="float-item light-a-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.light-a-background</div>
        <div class="float-item dark-btn-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.dark-btn-background</div>
        <div class="float-item light-btn-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.light-btn-background</div>
        <div class="float-item xxdark-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.xxdark-grey-background</div>
        <div class="float-item xdark-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.xdark-grey-background</div>
        <div class="float-item dark-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.dark-grey-background</div>
        <div class="float-item light-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.light-grey-background</div>
        <div class="float-item xlight-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.xlight-grey-background</div>
        <div class="float-item xxlight-grey-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.xxlight-grey-background</div>
        <div class="float-item success-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.success-background</div>
        <div class="float-item alert-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.alert-background</div>
        <div class="float-item warning-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.warning-background</div>
        <div class="float-item notice-background padding-medium w-2 w-1366-3 w-864-4 w-640-6 w-424-12 text-1366-medium text-424-big">.notice-background</div>
      </div>
    </div>
  </div>
  `,

  'dynamic-content': `
  <div>
    <div class="content dynamic-content">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        <span data-i18n="dynamic-content"></span>
      </div>

      <h2 class="margin-medium" data-i18n="dynamic-content"></h2>

      <p class="margin-medium" data-i18n="short-dynamic-content-description"></p>
      <div id="dynamic-content-sample" class="display-relative lazy preload text-faded-light" style="min-height: 300px;"></div>
    </div>
  </div>
  `,

  icons: `
  <div>
    <div class="content icons">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        <span data-i18n="icons"></span>
      </div>

      <h2 class="margin-medium" data-i18n="icons"></h2>

      <p class="margin-medium" data-i18n="short-icons-description"></p>
      <div class="float-container">
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-login icon-medium text-medium"></span> .icon-login</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-logout icon-medium text-medium"></span> .icon-logout</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-dollar icon-medium text-medium"></span> .icon-dollar</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-lifebuoy icon-medium text-medium"></span> .icon-lifebuoy</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-signup icon-medium text-medium"></span> .icon-signup</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-company icon-medium text-medium"></span> .icon-company</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-mail icon-medium text-medium"></span> .icon-mail</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-home icon-medium text-medium"></span> .icon-home</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-user icon-medium text-medium"></span> .icon-user</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-phone icon-medium text-medium"></span> .icon-phone</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-faq icon-medium text-medium"></span> .icon-faq</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-info icon-medium text-medium"></span> .icon-info</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-marker icon-medium text-medium"></span> .icon-marker</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-padlock icon-medium text-medium"></span> .icon-padlock</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-arrow icon-medium text-medium"></span> .icon-arrow</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-close icon-medium text-medium"></span> .icon-close</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-unlink icon-medium text-medium"></span> .icon-unlink</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-menu icon-medium text-medium"></span> .icon-menu</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-checkmark icon-medium text-medium"></span> .icon-checkmark</div>
        <div class="float-item margin-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12"><span class="light-grey-background icon-spinner rotate-icon icon-medium text-medium"></span> .icon-spinner</div>
      </div>
    </div>
  </div>
  `,

  forms: `
  <div>
    <div class="content forms">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        <span data-i18n="forms"></span>
      </div>

      <h2 class="margin-medium" data-i18n="forms">Form</h2>

      <form id="form-example">
        <fieldset>
          <legend>Legend1</legend>
          <div class="float-container form-section error">
            <label for="text1">Label 1</label>
            <input id="text1" type="text" placeholder="#text1">
          </div>

          <div class="float-container form-section">
            <div class="float-item w-6 padding-right-medium">
              <label for="text2">Label 2</label>
              <input id="text2" type="text" placeholder="#text2">
            </div>
            <div class="float-item w-6">
              <label for="text3">Label 3</label>
              <input id="text3" type="text" placeholder="#text3">
            </div>
          </div>

          <div class="form-section">
            <label for="select1">Label 4</label>
            <select>
              <option>Choose</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div class="float-item form-section w-12">
            <label class="checkboxradio">
              Label 5
              <input type="checkbox" id="checkbox1" checked>
              <span class="checkbox"></span>
            </label>
          </div>

          <div class="float-item form-section w-12">
            <div class="float-item w-6">
              <label class="checkboxradio">
                Label 6
                <input type="radio" id="radio1" name="radio-example" checked>
                <span class="radio"></span>
              </label>
            </div>
            <div class="float-item w-6">
              <label class="checkboxradio">
                Label 7
                <input type="radio" id="radio2" name="radio-example">
                <span class="radio"></span>
              </label>
            </div>
          </div>

          <div class="float-item form-section w-12">
            <button type="submit" class="btn display-block w-12 radius-5 light-btn-background padding-medium text-big uppercase">
              <span class="white-background icon-checkmark icon-small text-small"></span>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  `,

  index: `
  <div>
    <div class="content index">
      <p class="max-width-768" data-i18n="short-template-description"></p>
      <ul class="list-view">
        <li><a href="#backgrounds"><strong data-i18n="backgrounds"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#forms"><strong data-i18n="forms"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#icons"><strong data-i18n="icons"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#notifications"><strong data-i18n="notifications"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#overlay"><strong>Overlay</strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#query-string?var1=1&var2=2&var3=3"><strong>Query string</strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#dynamic-content"><strong data-i18n="dynamic-content"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
      </ul>
    </div>
  </div>
  `,

  notifications: `
  <div>
    <div class="content notifications">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        <span data-i18n="notifications"></span>
      </div>

      <h2 class="margin-medium" data-i18n="notifications"></h2>
      <p data-i18n="short-notifications-description"></p>
      <p>
        <span data-i18n="notification-btn-1"></span><br>
        <a href="javascript:void(0);" id="notification1" class="btn display-inline-block margin-small radius-5 alert-background padding-medium"><span data-i18n="notification"></span> 1</a>
      </p>
      <p>
        <span data-i18n="notification-btn-2"></span><br>
        <a href="javascript:void(0);" id="notification2" class="btn display-inline-block margin-small radius-5 success-background padding-medium"><span data-i18n="notification"></span> 2</a>
      </p>
      <p>
        <span data-i18n="notification-btn-3"></span><br>
        <a href="javascript:void(0);" id="notification3" class="btn display-inline-block margin-small radius-5 warning-background padding-medium"><span data-i18n="notification"></span> 3</a>
      </p>
      <p>
        <span data-i18n="notification-btn-4"></span><br>
        <a href="javascript:void(0);" id="notification4" class="btn display-inline-block margin-small radius-5 notice-background padding-medium"><span data-i18n="notification"></span> 4</a>
      </p>
    </div>
  </div>
  `,

  overlay: `
  <div>
    <div class="content overlay">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        Overlay
      </div>

      <h2 class="margin-medium">Overlay</h2>
      <p data-i18n="short-overlay-description"></p>
      <p>
        <span data-i18n="overlay-btn-1"></span><br>
        <a href="javascript:void(0);" id="overlay1" class="btn display-inline-block margin-small radius-5 light-grey-background padding-medium">Overlay 1</a>
      </p>
      <p>
        <span data-i18n="overlay-btn-2"></span><br>
        <a href="javascript:void(0);" id="overlay2" class="btn display-inline-block margin-small radius-5 light-grey-background padding-medium">Overlay 2</a>
      </p>
      <p>
        <span data-i18n="overlay-btn-3"></span><br>
        <a href="javascript:void(0);" id="overlay3" class="btn display-inline-block margin-small radius-5 light-grey-background padding-medium">Overlay 3</a>
      </p>
    </div>
  </div>
  `,

  'query-string': `
  <div>
    <div class="content query-string">
      <div class="xlight-grey-background padding-medium align-center">
        <a href="#" class="margin-small display-inline-block right-arrow-btn display-relative dark-btn-background">Home</a>
        Query string
      </div>

      <h2 class="margin-medium">Query string</h2>
      <p class="margin-medium" data-i18n="short-query-string-description"></p>
      <h3 data-i18n="query-string-title"></h3>
      <div id="show-vars" class="xlight-grey-background padding-medium"></div>
    </div>
  </div>
  `,
}
