import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { setupLamp } from './setupLamp'

function loadLamp( onLoaded ) {
    const loader = new GLTFLoader();

    loader.load(
        '/models/lavaLamp.glb',
        ( lampData ) => {
            console.log( 'loaded^^', lampData );

            const lamp =  setupLamp( lampData );

            onLoaded( lamp );
        },
        undefined,
        ( error ) => {
            console.error( 'Failed to load lamp :( ', error );
        }
    );
}

export { loadLamp };
