<template>
    <div class="sphere">
      <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'EarthSphere',
  props: {
    textureFilename: {
      type: String,
      required: true,
    },
    rotationXspeed: {
      type: Number,
      default: 0.0001,
    },
    rotationYspeed: {
      type: Number,
      default: 0.003,
    },
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, alpha: true });

    renderer.setSize(200, 200);

    const geometry = new THREE.SphereGeometry(3, 256, 256);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(this.textureFilename);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    camera.position.z = 5;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let previousTouchPosition = { x: 0, y: 0 };

    const { rotationXspeed, rotationYspeed } = this;

    function toRadians(angle) {
      return angle * (Math.PI / 180);
    }

    function onTouchMove(event) {
      const deltaMove = {
        x: event.touches[0].clientX - previousTouchPosition.x,
        y: event.touches[0].clientY - previousTouchPosition.y,
      };

      if (isDragging) {
        const deltaRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(new THREE.Euler(
            toRadians(deltaMove.y * 1),
            toRadians(deltaMove.x * 1),
            0,
            'XYZ',
          ));

        sphere.quaternion.multiplyQuaternions(deltaRotationQuaternion, sphere.quaternion);
      }

      previousTouchPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }

    function onMouseMove(event) {
      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      if (isDragging) {
        const deltaRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(new THREE.Euler(
            toRadians(deltaMove.y * 1),
            toRadians(deltaMove.x * 1),
            0,
            'XYZ',
          ));

        sphere.quaternion.multiplyQuaternions(deltaRotationQuaternion, sphere.quaternion);
      }

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    }

    function onMouseDown(event) {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    }

    function onTouchStart(event) {
      isDragging = true;
      previousTouchPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }

    function onDragStop() {
      isDragging = false;
    }

    this.$refs.canvas.addEventListener('mousemove', onMouseMove);
    this.$refs.canvas.addEventListener('mousedown', onMouseDown);
    this.$refs.canvas.addEventListener('mouseup', onDragStop);

    this.$refs.canvas.addEventListener('touchmove', onTouchMove);
    this.$refs.canvas.addEventListener('touchstart', onTouchStart);
    this.$refs.canvas.addEventListener('touchend', onDragStop);

    function animate() {
      requestAnimationFrame(animate);

      sphere.rotation.x += rotationXspeed;
      sphere.rotation.y += rotationYspeed;

      renderer.render(scene, camera);
    }

    animate();
  },
};
</script>

<style lang="scss" scoped>
canvas {
    margin: 20px;
    width: 200px;
    height: 200px;
    cursor: grab;
}

.sphere {
    display: flex;
    position: relative;
    padding: 10px;
    margin: 10px;
}
</style>
