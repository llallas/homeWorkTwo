var homeContent = `<div class="hero"> <img src="images/hero.jpg" alt=""></div>
    
<div class="content">
  <div class="left">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.

    </p>
  </div>
  <div class="right">
    <p>
      Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.
    </p>
</div>
</div>`;
var aboutContent = `<div class="hero"> <img src="images/hero.jpg" alt=""></div>
<div class="bigBox">
  <div class="ownersWrapper">
    <div class="imgDiv"><img src="images/owner.jpg" /></div>

    <div class="contentDiv">
      <h1>The Owner:</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio
        sed fermentum convallis, dolor lorem porta magna, eu consequat
        lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim
        tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi
        vulputate accumsan scelerisque. Nunc justo turpis, blandit ac
        vestibulum congue, ullamcorper mattis orci.
      </p>
    </div>
  </div>
  <div class="ownersWrapper">
    <div class="imgDiv"><img src="images/co-owner.png" /></div>

    <div class="contentDiv">
      <h1>The Co-Owner:</h1>
      <p>
        Curabitur tellus erat, commodo at dapibus ac, tempus quis justo.
        Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed
        eros quam, elementum at consequat sit amet, fringilla sed metus.
        Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula
        sodales. Mauris scelerisque pellentesque maximus. Praesent sed
        augue luctus, sollicitudin tortor at, aliquam ex.
      </p>
    </div>
  </div>
</div>`;
var productsContent = `<div class="hero"> <img src="images/hero.jpg" alt=""></div>  
    <div class="bigBox">
<div class="ownersWrapper">
  <div class="imgDiv"><img src="images/butter-almond-soap.jpg" /></div>

  <div class="contentDiv">
    <h1>Butter Almond Soap:</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio
      sed fermentum convallis, dolor lorem porta magna, eu consequat
      lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim
      tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi
      vulputate accumsan scelerisque. Nunc justo turpis, blandit ac
      vestibulum congue, ullamcorper mattis orci.
    </p>
  </div>
</div>
<div class="ownersWrapper">
  <div class="imgDiv"><img src="images/rose-gold-soap.jpg" /></div>

  <div class="contentDiv">
    <h1>Rose-Gold Soap:</h1>
    <p>
      Curabitur tellus erat, commodo at dapibus ac, tempus quis justo.
      Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed
      eros quam, elementum at consequat sit amet, fringilla sed metus.
      Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula
      sodales. Mauris scelerisque pellentesque maximus. Praesent sed
      augue luctus, sollicitudin tortor at, aliquam ex.
    </p>
  </div>
</div>
<div class="ownersWrapper">
  <div class="imgDiv"><img src="images/luxury-soap.jpg" /></div>

  <div class="contentDiv">
    <h1>Luxury Soap:</h1>
    <p>
      Curabitur tellus erat, commodo at dapibus ac, tempus quis justo.
      Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed
      eros quam, elementum at consequat sit amet, fringilla sed metus.
      Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula
      sodales. Mauris scelerisque pellentesque maximus. Praesent sed
      augue luctus, sollicitudin tortor at, aliquam ex.
    </p>
  </div>
</div>
</div>`;
var contactContent = `<div class="hero"> <img src="images/hero.jpg" alt=""></div>
<div class="form">
        <label for="">First Name:<span class="required">*</span></label>
        <input type="text" />
        <label for="">Last Name:<span class="required">*</span></label>
        <input type="text" />
        <label for="">Email:<span class="required">*</span></label>
        <input type="text" />
        <label for="">Phone Number:<span class="required">*</span></label>
        <input type="text" />
        <span class="submit">submit</span>
      </div>
    </div>`
;


export function addPageContent(pageName){
    let pageContentName = pageName + "Content"
    $("#app").html(eval(pageContentName));
}

