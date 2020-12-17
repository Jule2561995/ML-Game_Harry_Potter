import * as PIXI from 'pixi.min.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    width: 800,
    height: 600,
}
);

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
app.loader.add('blueBean', 'assets/beanBlue.png').load((loader, resources) => {
    // This creates a texture from a 'beanBle.png' image
    const blueBean = new PIXI.Sprite(resources.blueBean.texture);

    // Setup the position of the blueBean
    blueBean.x = app.renderer.width / 2;
    blueBean.y = app.renderer.height / 2;

    // Rotate around the center
    blueBean.anchor.x = 0.5;
    blueBean.anchor.y = 0.5;

    // Add the blueBean to the scene we are building
    app.stage.addChild(blueBean);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the blueBean around a bit
         blueBean.rotation += 0.01;
    });
});
app.loader.onError.add((...args) => console.error(args));