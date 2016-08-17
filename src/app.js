/*
* for description
*/
var avalon = require('./seed/compact');
require('./filters/index');
require('./vdom/compact');
require('./dom/compact');
require('./directives/compact');
require('./strategy/index');
avalon.onComponentDispose = require('./component/dispose.compact');
require('./vmodel/compact');

var vm = avalon.define({
    $id: "test",
    name: "toms",
    array: [11,22,33]
});
setInterval(function(){
   vm.array.set(0,Math.random()*1000);
   vm.array.set(1,Math.random()*1000);
   vm.array.set(2,Math.random()*1000);
}, 1000);