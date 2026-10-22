/**
 * Sets camera aspect ratio, Renderer size, and Renderer pixel ratio based on container size.
 *
 * @param {Element} container           HTML container Element
 * @param {PerspectiveCamera} camera    threeJS Camera
 * @param {WebGLRenderer} renderer      scene Renderer
 */
const setSize = ( container, camera, renderer ) => {
    camera.aspect = container.clientWidth / container.clientHeight;     // set camera aspect ratio
    camera.updateProjectionMatrix();                                    // update camera

    renderer.setSize( container.clientWidth, container.clientHeight );  // set renderer size
    renderer.setPixelRatio( window.devicePixelRatio );                  // set renderer pixel ratio
};

/**
 * Creates object that listens for window resize and calls setSize when appropriate.
 */
class Resizer {
    constructor( container, camera, renderer ) {
        // set initial size on load
        setSize( container, camera, renderer );

        window.addEventListener( "resize", () => {
           // set size again if a resize occurs
           setSize( container, camera, renderer );
        });
    }

    onResize() {} // for misc actions to be taken upon resize
}

export { Resizer };