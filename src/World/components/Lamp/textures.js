import { MeshPhysicalMaterial, MeshStandardMaterial, TextureLoader } from 'three';

function glassMaterial() {

    const glassMaterial = new MeshPhysicalMaterial({
        transmission: 1,
        roughness: 0,
    })

    return glassMaterial;
}

export { glassMaterial };