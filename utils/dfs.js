function dfs(tree, callback) {
  if (!tree) {
    return
  }

  callback(tree)

  if (tree.left) dfs(tree.left, callback)
  if (tree.right) dfs(tree.right, callback)
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

    value: 5,
    left: null,
    right: null,
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

dfs(root, node => console.log(node.value))
dfs(null, () => {})
