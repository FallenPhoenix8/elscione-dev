function setPathLength(path: SVGPathElement) {
  const length = path.getTotalLength()
  path.style.setProperty("--length", length.toString())
  path.style.strokeDasharray = `${length} ${length}`
}

export { setPathLength }
