export const pages = {
  '404': `
  <div>
    <div class="content 404 align-center">
      <span class="margin-top-big radius-circle xlight-grey-background padding-big icon-unlink text-5xl text-faded-light"></span>
      <p class="margin-medium text-xxl text-faded-light" data-i18n="short-404-description"></p>
      <a href="#" class="btn display-inline-block radius-5 light-grey-background padding-medium" data-i18n="back-to-home"></a>
    </div>
  </div>
  `,

  'css-classes': `
  <div>
    <div class="content css-classes">
      <h2>Classi CSS</h2>
      <p class="margin-medium">Usa le classi per assegnare sfondi e posizionamenti</p>
      <div class="float-container">
        <div class="float-item xxdark-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.xxdark-grey-background</div>
        <div class="float-item xdark-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.xdark-grey-background</div>
        <div class="float-item dark-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.dark-grey-background</div>
        <div class="float-item light-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.light-grey-background</div>
        <div class="float-item xlight-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.xlight-grey-background</div>
        <div class="float-item xxlight-grey-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.xxlight-grey-background</div>
        <div class="float-item dark-a-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.dark-a-background</div>
        <div class="float-item light-a-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.light-a-background</div>
        <div class="float-item dark-btn-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.dark-btn-background</div>
        <div class="float-item light-btn-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.light-btn-background</div>
        <div class="float-item success-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.success-background</div>
        <div class="float-item alert-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.alert-background</div>
        <div class="float-item warning-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.warning-background</div>
        <div class="float-item notice-background padding-medium w-2 w-1152-3 w-864-4 w-582-6 w-424-12">.notice-background</div>
      </div>
    </div>
  </div>
  `,

  icons: `
  <div>
    <div class="content icons">
      <h2 data-i18n="icons"></h2>
      <p class="margin-medium" data-i18n="short-icons-description"></p>
      <div class="float-container">
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
      </div>
    </div>
  </div>
  `,

  index: `
  <div>
    <div class="content index">
      <p class="container-max-width" data-i18n="short-template-description"></p>
      <ul class="list-view">
        <li><a href="#css-classes"><strong data-i18n="css-classes"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#icons"><strong data-i18n="icons"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#overlay"><strong>Overlay</strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#query-string?var1=1&var2=2&var3=3"><strong>Query string</strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
        <li><a href="#notifications"><strong data-i18n="notifications"></strong><span class="arrow"><span class="white-background icon-arrow icon-small text-small"></span></span></a></li>
      </ul>
    </div>
  </div>
  `,

  notifications: `
  <div>
    <div class="content notifications">
      <h2 data-i18n="notifications"></h2>
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
      <h2>Overlay</h2>
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
      <h2>Query string</h2>
      <p class="margin-medium" data-i18n="short-query-string-description"></p>
      <h3 data-i18n="query-string-title"></h3>
      <div id="show-vars" class="xlight-grey-background padding-medium"></div>
    </div>
  </div>
  `,
}
