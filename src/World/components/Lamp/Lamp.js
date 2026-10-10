import { setupLamp, setupPanel } from './setupLamp';
import { Group, MathUtils } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

class Lamp extends Group {

    #radiansPerSecond = MathUtils.degToRad( 60 );

    constructor( animate=false, loop=null ) {
        super();
        this.loader = new GLTFLoader();

        this.lamp = null;
        this.panel = null;

        this.load();
        if ( animate ) {
            loop.updatables.push( this );
        }
    }

    async load() {
        const lampData = await this.loader.loadAsync(
            '/models/lavaLamp.glb'
        );

        this.lamp = setupLamp( lampData );
        this.panel = setupPanel( lampData );

        if ( this.lamp ) this.add( this.lamp );
        if ( this.panel ) this.add( this.panel );

        this.loaded = true;
        console.log( 'lamp loaded^^', this );
    } catch ( error ) {
        console.error( 'Failed to load lamp :(', error );
    }

    tick( delta ) {
        if ( !this.loaded ) return;

        this.panel.rotation.y += delta * ( Math.PI / 2 ); // implement camera tracking here
    }
}

export { Lamp };