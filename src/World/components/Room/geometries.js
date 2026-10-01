import { PlaneGeometry, BoxGeometry, Mesh } from 'three';
//import { woodMaterial, wallMaterial } from "./textures";
/**
function makeTable() {
    const tableGeometry = new PlaneGeometry();

    const table = new Mesh( tableGeometry, woodMaterial() )

    table.rotateX(Math.PI / 2 );
    table.scale.setScalar( 10 );
    table.receiveShadow = true;

    return table;
}

function makeRoom() {
    const roomGeometry = new BoxGeometry();

    const room = new Mesh( roomGeometry, wallMaterial() );

    room.scale.setScalar( 50 );

    return room;
}

export { makeTable, makeRoom };
 **/

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
