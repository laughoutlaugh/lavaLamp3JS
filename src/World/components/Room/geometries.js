import { PlaneGeometry, BoxGeometry, Mesh } from 'three';
import { woodMaterial } from "./textures";

function makeTable() {
    const tableGeometry = new PlaneGeometry();

    const table = new Mesh( tableGeometry, woodMaterial() )

    table.rotateX(Math.PI / -2 );
    table.scale.setScalar( 25 );

    return table;
}

export { makeTable };