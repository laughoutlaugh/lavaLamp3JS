import { World } from './World/World';

async function main() {
    // get reference to container element
    const container = document.querySelector( '#scene-container' );

    // create instance of World app
    const world = new World( container );

    // render the scene
    world.start();
}

// call main with error handling
main().catch(( err ) => {
    console.error( err );
});

/**
 * 10-13-2026
 * To-do:
 *  - BokehPass DOF effect
 *  - Fix scene lighting
 *  - Animate new lava mp4
 *  - Update lava material
 *  - Add lava lamp lights
 *  - Implement error catching
 *  - General code cleanup
 *  - Organize comments
 *  - Better textures?
 *  - FPS tracking
 *
 *  Later:
 *  - 3 button options
 *  - Floating/closable menu
 *  - Bubble solution
 *  - Metaballs solution
 *  - Phone implementation?
 */