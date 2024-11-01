function setPathLength(path: SVGPathElement) {
  const length = path.getTotalLength()
  path.style.setProperty("--length", length.toString())
}

export { setPathLength }
