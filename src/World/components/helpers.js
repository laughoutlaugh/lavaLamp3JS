import { GridHelper, AxesHelper } from 'three';

function createGridHelper( size=10, div=10 ) {
    const axes = new AxesHelper( size );
    const grid = new GridHelper( size, div );

    axes.position.set( (size/-1.9), 0, (size/-1.9) );

    return { axes, grid };
}

export { createGridHelper };