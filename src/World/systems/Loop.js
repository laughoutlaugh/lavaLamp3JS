import { Timer } from 'three';

const timer = new Timer(); // for getting delta per tick

class Loop {
    constructor( camera, scene, renderer, stats ) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.stats = stats;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.stats.begin();

            // tell every animated object to tick forward one frame
            this.tick();

            // render a frame
            this.renderer.render( this.scene, this.camera );

            this.stats.end();
        });
    }

    stop() {
        this.renderer.setAnimationLoop( null );
    }

    tick() {
        // only call the getDelta once per frame
        timer.update();
        const delta = timer.getDelta();

        for ( const object of this.updatables ) {
            object.tick( delta );
        }
    }
}

export { Loop };