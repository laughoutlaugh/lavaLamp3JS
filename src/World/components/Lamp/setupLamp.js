import { AnimationMixer } from 'three';
import { glassMaterial, lavaMaterial } from './textures';

function setupLamp( data ) {
    const lamp = data.scene.children[0];

    const metalPart = data.scene.children[0].children[0];
    const glassPart = data.scene.children[0].children[1];

    metalPart.material = lavaMaterial();
    glassPart.material = glassMaterial();

    lamp.scale.setScalar( 8 );

    return lamp;
}

export { setupLamp };