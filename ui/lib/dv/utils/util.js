export function mulAdd(nums) {
  nums = filterNonNumber(nums)
  return nums.reduce((all, num) => all + num, 0)
}

export function filterNonNumber(array) {
  return array.filter(n => typeof n === 'number')
}

export function getTwoPointDistance(pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0]);
  const minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}

export function getPolylineLength(points) {
  const lineSegments = new Array(points.length - 1)
    .fill(0)
    .map((foo, i) => [points[i], points[i + 1]])
  const lengths = lineSegments.map(item => getTwoPointDistance(...item))
  return mulAdd(lengths)
}

export function random(min, max) {
  if (arguments.length === 1) {
    return Math.floor(Math.random() * min + 1)
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

/**
 * @description Get the coordinates of the specified radian on the circle
 * @param {Number} x      Circle x coordinate
 * @param {Number} y      Circle y coordinate
 * @param {Number} radius Circle radius
 * @param {Number} radian Specfied radian
 * @return {Array} Postion of point
 */
export function getCircleRadianPoint(x, y, radius, radian) {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius]
}
