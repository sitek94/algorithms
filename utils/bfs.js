function bfs(tree, callback) {
  const queue = [tree]

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      callback(node)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}

const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
}

bfs(root, node => console.log(node.value))
bfs(null, () => {})
