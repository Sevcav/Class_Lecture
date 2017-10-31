var counter = {
  num: 0, // comma between properties!
  inc: function(howmuch){
  this.num = this.num + howmuch;
  },
  count: function(){
    return this.num;
  },
  reset: function(startNum) {
    this.num = startNum;
  }
}

for (counter.reset(10) ; counter.count() > 0; counter.inc(-1)) {
  console.log("current value: " + counter.count());
}