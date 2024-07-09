import { OrthogonalCamera } from "@xbim/viewer";
import { OrthographicCamera, PerspectiveCamera } from "three";


export class MainCamera{
    
    /* Properties of the class. */
    private _fieldOfView : number;
    public get fieldOfView() : number {
        return this._fieldOfView;
    }
    public set fieldOfView(v : number) {
        this._fieldOfView = v;
    }
    
    private _nearPlane : number;
    public get nearPlane() : number {
        return this._nearPlane;
    }
    public set nearPlane(v : number) {
        this._nearPlane = v;
    }
    
    private _farPlane : number;
    public get farPlane() : number {
        return this._farPlane;
    }
    public set farPlane(v : number) {
        this._farPlane = v;
    }

    private _perspectiveCamera : PerspectiveCamera;
    public get perspectiveCamera() : PerspectiveCamera {
        return this._perspectiveCamera;
    }
    public set perspectiveCamera(v : PerspectiveCamera) {
        this._perspectiveCamera = v;
    }
    
    private _orthographicCamera : OrthographicCamera;
    public get orthographicCamera() : OrthographicCamera {
        return this._orthographicCamera;
    }
    public set orthographicCamera(v : OrthographicCamera) {
        this._orthographicCamera = v;
    }
    
    
    
    /* Constructor of the Class. */
    /**
     * The constructor function initializes a perspective camera and an orthographic camera with
     * specified field of view, near plane, and far plane values.
     * @param [fieldOfView=60] - The `fieldOfView` parameter in the constructor function represents the
     * vertical field of view angle in degrees of the camera. It determines how wide the camera's field
     * of vision is vertically. A larger field of view will result in a wider view angle, capturing
     * more of the scene, while a smaller field. In the provided code snippet, the default value for `fieldOfView` is set to 60 degrees.
     * @param [nearPlane=0.10] - The `nearPlane` parameter in the constructor represents the distance
     * to the near clipping plane of the camera frustum. Objects closer to the camera than this
     * distance will not be rendered. In the provided code snippet, the default value for `nearPlane`
     * is set to 0.10.
     * @param [farPlane=2] - The `farPlane` parameter in the constructor represents the distance from
     * the camera where objects start to become clipped or not rendered. Objects beyond the `farPlane`
     * distance will not be visible in the scene. In the provided code snippet, the `farPlane` value is
     * set to 2 units.
     */
    constructor(fieldOfView = 60, nearPlane = 0.10, farPlane = 2){

        this._fieldOfView = fieldOfView;
        this._nearPlane = nearPlane;
        this._farPlane = farPlane;

        this._perspectiveCamera = new PerspectiveCamera(this._fieldOfView, window.innerHeight/window.innerWidth, this._nearPlane, this._farPlane);
        this._perspectiveCamera.position.set(0,0,0);
        
        this._orthographicCamera = new OrthographicCamera(-1, 1, 1, -1, this._nearPlane, this._farPlane)
            this._orthographicCamera.position.set(0,0,0);
    }
}