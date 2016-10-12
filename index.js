var AsciiBlock = require('skiano.block-ascii');
var Combinatorics = require('js-combinatorics');
var _ = require('lodash');

var SIZE = 6;
var perm = Combinatorics.permutation(_.range(SIZE), SIZE);

// perm.forEach(function(a) {
//   var block = new AsciiBlock([SIZE,SIZE]);

//   for(var i = 0; i < SIZE; i += 1) {
//     block.mark([a[i],i], '#');
//   }

//   var str = block.render(SIZE * 3,SIZE * 2, 0, 0);
//   console.log('\n' + str + '\n');
// });


var input = [2,3,4,1,5];
// [1,4,3,2]

function makeMap(arr) {
  // rearranges pattern to start at min
  // so the ones that are visually the same can be filtered out
  var min = Infinity;
  var minIdx = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    }
  }
  return arr.slice(minIdx).concat(arr.slice(0, minIdx));
}

var output = makeMap(input);

console.log(output, input)
