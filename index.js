const testData = [4, 1, 3, 4, 8, 1, 3, 9, 3, 3, 2]; // Output: 1 █

const TrappingWater = (data) => {
  if (!Array.isArray(data)) {
    return;
  }

  const map = {
    height: Math.max.apply(null, data),
    width: data.length
  }

  const matrix = makeMatrix(data, map);
  // console.log(map);
  console.log(matrix);

  console.log(matrix.split('').filter(char => char === 'X').length);
};

const makeMatrix = (data, map) => {
  let matrix = [];

  for (let i = map.height; i > 0; i--) {
    for (let k = 0; k <= map.width; k++) {
      if (i - data[k] <= 0) {
        matrix.push('█');
      } else if (scan(data, k, map, i)) {
        matrix.push('X');
      } else {
        matrix.push(' ');
      }
    }
    matrix.push('\n');
  }

  return matrix.join('');
};

const scan = (data, k, map, i) => {
  if (k === 0) return false;
  if (k === map.width) return false;

  let hasBoundarylLeftward = false;
  let hasBoundarylRightward = false;

  for (let j = k; j <= map.width; j++) {
    if (data[j] >= i) {
      hasBoundarylRightward = true;
    }
  }

  for (let j = k; j >= 0; j--) {
    if (data[j] >= i) {
      hasBoundarylLeftward = true;
    }
  }

  // const boundary = {
  //   left: hasBoundarylLeftward,
  //   right: hasBoundarylRightward
  // }

  // // console.log(boundary);

  return hasBoundarylLeftward && hasBoundarylRightward;
}

TrappingWater(testData)