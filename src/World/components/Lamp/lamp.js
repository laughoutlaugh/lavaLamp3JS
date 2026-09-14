import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { setupLamp } from './setupLamp'

async function loadLamp() {
    const loader = new GLTFLoader();

    const lampData = await loader.loadAsync(
        '../../../../models/lavaLamp.glb'
    );

    console.log( 'loaded ^^', lampData );

    const lamp = setupLamp( lampData );
    lamp.scale.setScalar( 4 );
    lamp.position.set( 0, 1, 0 );

    return lamp;
}

export { loadLamp };
