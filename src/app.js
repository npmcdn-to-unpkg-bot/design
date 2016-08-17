/*
* for description
*/
var uuid = require('./uuid');

var Vue  = require('./vue/vue');
// The raw data to observe
var stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]

// A resusable polygon graph component
Vue.component('polygraph', {
  props: ['stats'],
  template: '#polygraph-template',
  replace: true,
  computed: {
    // a computed property for the polygon's points
    points: function () {
      var total = this.stats.length
      return this.stats.map(function (stat, i) {
        var point = valueToPoint(stat.value, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  },
  components: {
    // a sub component for the labels
    'axis-label': {
      props: {
        stat: Object,
        index: Number,
        total: Number
      },
      template: '#axis-label-template',
      replace: true,
      computed: {
        point: function () {
          return valueToPoint(
            +this.stat.value + 10,
            this.index,
            this.total
          )
        }
      }
    }
  }
})

// math helper...
function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return {
    x: tx + 500,
    y: ty + 500
  }
};

// bootstrap the demo
var $obj = new Vue({
  el: '#demo',
  data: {
    newLabel: '',
    stats: stats
  }
});
setInterval(function(){
   $obj.stats = [{
   	value : Math.random()*500,
   	label : uuid.v4()
   },{
   	value : Math.random()*500,
   	label : uuid.v4()
   },{
   	value : Math.random()*500,
   	label : uuid.v4()
   }];
}, 100);