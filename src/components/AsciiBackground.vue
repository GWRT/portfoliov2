<!-- eslint-disable -->
<!-- @ts-nocheck -->
<template>
  <!-- @ts-ignore -->
  <div ref="container" class="three-container"></div>
</template>

<script>
// @ts-nocheck
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default {
  setup() {
    const container = ref(null);

    let camera, controls, scene, renderer, effect;
    let imageplane;

    onMounted(() => {
      setTimeout(() => {
        init();
      }, 100);
    });

    onBeforeUnmount(() => {
      if (controls) {
        controls.dispose();
      }
      if (renderer) {
        renderer.dispose();
      }
      
      // Limpiar todos los event listeners globales
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', onWindowResize);
    });

    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 300; // ZOOM AL MÁXIMO (más cerca = minDistance)

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0, 0, 0);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('/img1024.png', (texture) => {
        const geometry = new THREE.PlaneGeometry(1500, 1500);
        const material = new THREE.MeshBasicMaterial({ 
          map: texture,
          transparent: true
        });
        
        imageplane = new THREE.Mesh(geometry, material);
        imageplane.position.set(0, -200, 0); // Mover más abajo en Y
        scene.add(imageplane);
      });

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);

      effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.color = '#969696';
      effect.domElement.style.backgroundColor = 'black';

      const containerEl = container.value;
      if (containerEl) {
        containerEl.appendChild(effect.domElement);
      }

      controls = new OrbitControls(camera, effect.domElement);
      controls.enableRotate = false;
      controls.enableZoom = false;
      controls.enablePan = false; // Desactivamos el pan de OrbitControls
      controls.screenSpacePanning = true;
      controls.minDistance = 200; // Zoom máximo (más cerca) - MANTENER para no alterar inicio
      controls.maxDistance = 800; // Reducir zoom mínimo (no tan lejos)

      // Variables para el pan manual
      let isPanning = false;
      let previousMousePosition = { x: 0, y: 0 };

      // Funciones de manejo de eventos (para poder removerlas en cleanup)
      const handleWheel = (event) => {
        if (event.ctrlKey) {
          event.preventDefault();
          event.stopPropagation();
          
          const scale = event.deltaY > 0 ? 1.1 : 0.9;
          const newZ = camera.position.z * scale;
          
          if (newZ >= controls.minDistance && newZ <= controls.maxDistance) {
            camera.position.z = newZ;
          }
        }
        // Si no es Ctrl+rueda, permitir scroll normal (no hacer nada)
      };

      const handleMouseDown = (event) => {
        if (event.button === 0) { // Click izquierdo
          isPanning = true;
          previousMousePosition.x = event.clientX;
          previousMousePosition.y = event.clientY;
          
          // Prevenir selección de texto mientras se hace pan
          event.preventDefault();
        }
      };

      const handleMouseMove = (event) => {
        if (isPanning) {
          event.preventDefault();
          event.stopPropagation();
          
          const deltaX = event.clientX - previousMousePosition.x;
          const deltaY = event.clientY - previousMousePosition.y;
          
          // Mover el plano de la imagen directamente (no la cámara)
          if (imageplane) {
            const panSpeed = 0.5;
            imageplane.position.x += deltaX * panSpeed;
            imageplane.position.y -= deltaY * panSpeed; // Invertir Y para que sea natural
          }
          
          previousMousePosition.x = event.clientX;
          previousMousePosition.y = event.clientY;
        }
      };

      const handleMouseUp = (event) => {
        if (event.button === 0) {
          isPanning = false;
        }
      };

      const handleContextMenu = (event) => {
        if (isPanning) {
          event.preventDefault();
        }
      };

      // EVENTOS GLOBALES - Funcionan desde cualquier parte de la página
      
      // 1. ZOOM con Ctrl + rueda (GLOBAL)
      document.addEventListener('wheel', handleWheel, { passive: false });

      // 2. PAN con click izquierdo + drag (GLOBAL)
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('contextmenu', handleContextMenu);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      controls.update();
      effect.render(scene, camera);
    }

    return {
      container
    };
  }
}
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: auto;
}
</style>