import { MeshPhysicalMaterial } from 'three';

function glassMaterial() {
    return new MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 0.01
        }
    );
}

export { glassMaterial };