const path = require('path');

module.exports = {
  entry: './scripts/index.js', // Ruta de tu archivo principal
  output: {
    filename: 'bundle.js', // Archivo final
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  mode: 'development', // Puedes cambiar a 'production' para la versión final
};