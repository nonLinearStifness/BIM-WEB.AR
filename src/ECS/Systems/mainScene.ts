import { Scene } from "three";
import { MainCamera } from "./mainCamera";


export class MainScene{
    
    /* TODO: Add a method that allows to change the perspective vs orthographic camera based on the scene.  */
    constructor(camera: MainCamera){
        
        const scene = new Scene();

        scene.add(camera.perspectiveCamera);
    }
    
}