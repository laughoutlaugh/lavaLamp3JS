import { Color, Scene } from 'three';

function createScene() {
    const scene = new Scene();

    scene.background = new Color( 'orangered' );

    return scene;
}

export { createScene };