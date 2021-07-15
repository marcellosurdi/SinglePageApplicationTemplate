export const pages = {
  404: `
  <div>
    <div class="content 404 align-center">
      <span class="margin-top-big radius-circle xlight-grey-background padding-big icon-unlink text-5xl text-faded-light"></span>
      <p class="margin-medium text-xxl text-faded-light">Sorry, the page wasn't found</p>
      <a href="#" class="btn display-inline-block radius-5 light-grey-background padding-medium">Back to home</a>
    </div>
  </div>
  `,

  index: `
  <div>
    <div class="content index">
      <ul class="list">
        <li><a href="#page1?ciao=1&a=a&tutti=tutti"><strong>Page 1</strong></a></li>
        <li><a href="#page2"><strong>Page 2</strong></a></li>
        <li><a href="#page3&anche=1&qui=1&funziona=funziona"><strong>Page 3</strong></a></li>
      </ul>
    </div>
  </div>
  `,

  page1: `
  <div>
    <div class="content page1">
      <h2>Page 1</h2>
      <p>Curabitur tempor lacus iaculis pharetra tincidunt. Suspendisse vel orci vestibulum, <a href="#page4">page 4</a>.</p>
    </div>
  </div>
  `,

  page2: `
  <div>
    <div class="content page2">
      <h2>Page 2</h2>
      <p>Nulla egestas lectus vel laoreet porttitor. Aliquam feugiat bibendum sollicitudin, <a href="#">home</a>.</p>
    </div>
  </div>
  `,

  page3: `
  <div>
    <div class="content page3">
      <h2>Page 3</h2>
      <p>Praesent eu massa feugiat, tincidunt lectus consectetur, sodales tortor. Cras sit amet ullamcorper sapien, <a href="#">home</a>.</p>
    </div>
  </div>
  `,

  page4: `
  <div>
    <div class="content page4">
      <h2>Page 4</h2>
      <p>Duis non erat eget lorem dapibus consectetur euismod non lorem. Vestibulum bibendum vehicula pretium. Cras sit amet ullamcorper sapien, <a href="#">home</a>.</p>
    </div>
  </div>
  `,
}
