import * as React from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Color, Vector3 } from 'three';

class Container extends React.Component<{}, never> {
    private canvas: HTMLCanvasElement;

    componentDidMount() {
        const scene = new Scene();
        const camera = new PerspectiveCamera(60, 1000 / 600, 1, 1000);
        camera.position.set(0, 3, 5);

        const renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
        // renderer.setClearColor(new Color(0xEEEEEE));

        var geometry = new BoxGeometry(1, 1, 1);
        var material = new MeshBasicMaterial({ color: 0xffff00 });
        var cube = new Mesh(geometry, material);
        scene.add(cube);

        renderer.render(scene, camera);
    }

    render() {
        return (
            <canvas width="1000" height="600" ref={(node) => this.canvas = node} />
        )
    }
}

export default Container;