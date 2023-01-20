module.exports = {
  "extends": ["eslint:recommended"],
  "env": { 
      "es6": true,
      "node": true 
  },
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 8,
      "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
      }
  }
}
