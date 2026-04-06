import { World } from './World/World';

// async function ensures page loads with textures
async function main() {
    // get reference to container element
    const container = document.querySelector( '#scene-container' );

    // create instance of World app
    const world = new World( container );

    // complete async tasks
    await world.init();

    // render the scene
    world.start();
}

// call main with error handling

main().catch(( err ) => {
    console.error( err );
});
