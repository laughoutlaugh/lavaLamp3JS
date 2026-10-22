import { WebGLRenderer, NeutralToneMapping } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer( {antialias: true} );

    // turn on soft shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;

    renderer.shadowMapBias = 0.039;
    renderer.shadowMapDarkness = 1;
    renderer.shadowMapWidth = 1024;
    renderer.shadowMapHeight = 1024;

    //renderer.toneMapping = NeutralToneMapping;

    return renderer;
}

export { createRenderer };