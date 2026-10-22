import { setupLamp, setupPanel } from './setupLamp';
import { Group } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


/**
 * Creates object containing lava lamp mesh and panel within for lava texture. Uses Group extension
 * to add meshes to class object upon async loading.
 */
class Lamp extends Group {

    /**
     *Creates a lava lamp object and initializes its loader, components,
     * video, and camera tracking.
     *
     * Starts loading the lamp model and registers this instance
     * with the animation loop for updates.
     *
     * @param {Camera} camera - The camera used for position tracking.
     * @param {Loop} loop - The animation loop that updates this instance.
     * @param {HTMLVideoElement} lampVideo - The video element displayed on the lamp's panel.
     */
    constructor( camera, loop, lampVideo ) {
        super(); // invoke superclass
        this.loader = new GLTFLoader();

        this.lamp = null;
        this.panel = null;

        this.video = lampVideo
        this.camera = camera;

        this.load();

        loop.updatables.push( this );
    }

    /**
      * Asynchronously loads the lava lamp model and initializes its components.
      *
      * Sets up the lamp and its video panel, adds them to the parent object,
      * and marks the lamp as loaded once initialization is complete.
      *
      * @async
      * @returns {Promise<void>} A promise that resolves when loading is complete.
      */
    async load() {
        const lampData = await this.loader.loadAsync(
            '/models/lavaLamp.glb'
        );

        this.lamp = setupLamp( lampData );
        this.panel = setupPanel( lampData, this.video );

        if ( this.lamp ) this.add( this.lamp );
        if ( this.panel ) this.add( this.panel );

        this.loaded = true;
        console.log( 'lamp loaded^^', this );

    } catch ( error ) {
        console.error( 'Failed to load lamp :(', error );
    }

    // actions taken each tick
    tick( delta ) {
        if ( !this.loaded ) return;

        // panel always faces camera
        this.panel.rotation.y = ( - Math.atan2( this.panel.position.z - this.camera.position.z,
                                    this.panel.position.x - this.camera.position.x ) );
    }
}

export { Lamp };