import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov
        1, // aspect ratio (dummy)
        0.1, // near clipping plain ( 10 cm )
        100, // far clipping plain ( 100 m )
    );

    // move camera back
    camera.position.set( 10, 10, 10 );

    return camera;
}

export { createCamera };