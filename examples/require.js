console.log('require은 가장 위에 안와도 됩니다');

module.exports= 'export내용';
require('./var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main');
console.log(require.main);
console.log(require.main==module);
console.log(require.main.filename);
