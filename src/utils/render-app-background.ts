import * as THREE from 'three'

const elId: string = 'app-background-el'

function createCanvas() {
  const canvasEl: HTMLElement = document.createElement('canvas')
  canvasEl.style.width = window.innerWidth.toString()
  canvasEl.style.height = window.innerHeight.toString()
  canvasEl.style.position = 'absolute'
  canvasEl.style.top = '0'
  canvasEl.style.left = '0'
  canvasEl.style.right = '0'
  canvasEl.style.bottom = '0'
  canvasEl.style.zIndex = '-1'
  document.body.appendChild(canvasEl)
  return canvasEl
}

function getCanvas() {
  return document.getElementById(elId)
}

function renderAppBackground() {
  const canvas = getCanvas()
  const container = canvas ?? createCanvas()

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

}

export default renderAppBackground
