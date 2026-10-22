import { Color, Scene, Fog } from 'three';

function createScene() {
    const scene = new Scene();

    scene.background = new Color( 'orangered' );

    scene.fog = new Fog(
        '#690909',  // color
        1,          // near
        100         // far
    );

    return scene;
}

export { createScene };