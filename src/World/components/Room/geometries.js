import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { setupObjects } from './setupObjects';

function loadScene( sceneOnLoaded ) {
    const loader = new GLTFLoader();

    loader.load(
        '/models/lavaLamp.glb',
        ( sceneData ) => {
            console.log( 'loadedScene^^', sceneData );

            const scene = setupObjects( sceneData );

            sceneOnLoaded( scene );
        },
        undefined,
        ( error ) => {
            console.error( 'Failed to load scene :( ', error );
        }
    );
}

export { loadScene };
