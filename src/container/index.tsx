import * as React from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color, Vector3, Geometry, LineBasicMaterial, Line, Box3 } from 'three';

class Container extends React.Component<{}, never> {
    private canvas: HTMLCanvasElement;

    componentDidMount() {
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, 1000 / 600, 1, 1000);
        camera.position.set(20, 100, 100);
        camera.lookAt(new Vector3(0, 0, 0));

        const renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
        renderer.setClearColor(new Color(0xEEEEEE));

        this.renderBox(scene);
        this.renderAxises(scene);

        renderer.render(scene, camera);
    }

    render() {
        return (
            <canvas width="1000" height="600" ref={(node) => this.canvas = node} />
        )
    }

    private renderAxises(scene: Scene) {
        const xGeometry = new Geometry();
        xGeometry.vertices.push(new Vector3(0, 0, 0), new Vector3(10000, 0, 0));
        const xMaterial = new LineBasicMaterial({ color: 0xff0000 });
        const xLine = new Line(xGeometry, xMaterial);

        const yGeometry = new Geometry();
        yGeometry.vertices.push(new Vector3(0, 0, 0), new Vector3(0, 10000, 0));
        const yMaterial = new LineBasicMaterial({ color: 0x00ff00 });
        const yLine = new Line(yGeometry, yMaterial);

        const zGeometry = new Geometry();
        zGeometry.vertices.push(new Vector3(0, 0, 0), new Vector3(0, 0, 10000));
        const zMaterial = new LineBasicMaterial({ color: 0x0000ff });
        const zLine = new Line(zGeometry, zMaterial);

        scene.add(xLine, yLine, zLine);
    }

    private renderBox(scene: Scene, showWireFrame: boolean = true) {
        const geometry = new BoxGeometry(50, 50, 50);
        const material = new MeshBasicMaterial({
            color: 0xffff00,
            transparent: true,
            opacity: 0.5,
        });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        if (showWireFrame) {
            const wireFrame = this.getBoxWireFrame(geometry);
            scene.add(wireFrame);
        }
    }

    private getBoxWireFrame(geometry: BoxGeometry) {
        const material = new MeshBasicMaterial({ color: 0xff0ff0 });
        return new Line(geometry, material);
    }
}

export default Container;