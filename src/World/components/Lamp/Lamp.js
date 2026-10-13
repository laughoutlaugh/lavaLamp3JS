import { setupLamp, setupPanel } from './setupLamp';
import { Group, MathUtils } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

class Lamp extends Group {

    #radiansPerSecond = MathUtils.degToRad( 60 );

    constructor( camera, animate=false, loop=null, lampVideo=null ) {
        super();
        this.loader = new GLTFLoader();

        this.lamp = null;
        this.panel = null;

        this.load();
        if ( animate ) {
            this.video = lampVideo
            this.video.play();
            this.camera = camera;
            loop.updatables.push( this );
        }
    }

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

    tick( delta ) {
        if ( !this.loaded ) return;

        this.panel.rotation.y = ( - Math.atan2( this.panel.position.z - this.camera.position.z,
                                    this.panel.position.x - this.camera.position.x ) );
    }
}

export { Lamp };