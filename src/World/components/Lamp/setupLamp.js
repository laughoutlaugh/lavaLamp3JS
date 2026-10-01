import { AnimationMixer } from 'three';
import { glassMaterial } from './textures';

function setupLamp( data ) {
    const lamp = data.scene.children[3];

    const metalPart = data.scene.children[3].children[0];
    const glassPart = data.scene.children[3].children[1];

    glassPart.material = glassMaterial();

    // lamp.scale.setScalar();

    metalPart.castShadow = true;
    glassPart.castShadow = true;

    return lamp;
}

export { setupLamp };