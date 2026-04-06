const setSize = ( container, camera, renderer ) => {
    camera.aspect = container.clientWidth / container.clientHeight; // set camera aspect ratio
    camera.updateProjectionMatrix();                                // update camera

    renderer.setSize( container.clientWidth, container.clientHeight ); // set renderer size
    renderer.setPixelRatio( window.devicePixelRatio );                 // set renderer pixel ratio
};

class Resizer {
    contructor( container, camera, renderer ) {
        // set initial size on load
        setSize( container, camera, renderer );

        window.addEventListener( "resize", () => {
           // set size again if a resize occurs
           setSize( container, camera, renderer );

           this.onResize();
        });
    }

    onResize() {}
}

export { Resizer };