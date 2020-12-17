// Import all
import * as PIXI from "./pixi.mjs";
import resize from "./resize.mjs";
import { FloatingSprite, AnchoredSprite, StepperSprite } from "./sprite.mjs";
import colorFilter from "./colorFilter.mjs";
import TiledMap from './tiledmap.mjs';

// options for pixi app
const options = {
  antialias: false,
  autoDensity: true,
  backgroundColor: "0xffffff",
  width: 1028,
  height: 768,
};

// Create application
const app = new PIXI.Application(options);

let pixelSize = 1;
let aspectRatio = options.width / options.height;

// Load sprite atlas
app.loader
  //.add("harry", "assets/spritesheet-harry.json")
  .add("ron", "assets/spritesheet-ron.json")
 // .add("collectings", "assets/spritesheet-collectings.json")
  .add("tilesheet", "assets/spritesheet-medievalTile.json")
  .add("tiledmap", "assets/tiled-tilemap-8x8.json")
  .load(startup);

// dynamically resize the app to fixed aspect ratio
resize(app, aspectRatio);

// start animation
function startup() {

  let layer = new TiledMap(app, "tilesheet", "tiledmap"); //TiledMap-Klasse?
  app.stage.addChild(layer);

  // create a sprite the animates while moving
  // let harry = new AnchoredSprite (app, "ron", "ronGoes", 1); //FloatingSprite bewegt sich kontinuierlich
  // app.stage.addChild(harry);

  // create a sprite that uses anchors for animation
  let ron = new FloatingSprite(app, "ron", "ronGoes", 1); //AnchoredSprite Verwendung von Anker bei jedem Frame
  app.stage.addChild(ron);

  // create a sprite that lets us step through individual frames using arrow keys
 // let stepperguy = new StepperSprite(app, "ron", "ronGoes", 1); //StepperSprite zum Debuggen von Animationen

  // add a custom color filter, because we can ...
 // stepperguy.filters = [
 //   colorFilter(0xff3333, 0x3333ff),
 //   colorFilter(0xcc0000, 0x0000cc),
  // ];

  // app.stage.addChild(stepperguy);
  
}
