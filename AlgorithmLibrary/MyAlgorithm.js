


function MyAlgorithm(am, w, h) {
    this.init(am, w, h);
}

MyAlgorithm.prototype = new Algorithm();
MyAlgorithm.prototype.constructor = MyAlgorithm;
MyAlgorithm.superclass = Algorithm.prototype;

MyAlgorithm.prototype.init = function (am, w, h) {
    // Call the unit function of our "superclass", which adds a couple of
    // listeners, and sets up the undo stack
    MyAlgorithm.superclass.init.call(this, am, w, h);

    this.addControls();

    // Useful for memory management
    this.nextIndex = 0;

    // TODO:  Add any code necessary to set up your own algorithm.  Initialize data
    // structures, etc.

}

MyAlgorithm.prototype.addControls = function () {
    this.controls = [];

  
MyAlgorithm.prototype.disableUI = function (event) {
    for (var i = 0; i < this.controls.length; i++) {
        this.controls[i].disabled = true;
    }
}

// Called by our superclass when we get an animation completed event -- we can
/// now interact again.
MyAlgorithm.prototype.enableUI = function (event) {
    for (var i = 0; i < this.controls.length; i++) {
        this.controls[i].disabled = false;
    }
}


var currentAlg;

function init() {
    var animManag = initCanvas();
    currentAlg = new MyAlgorithm(animManag, canvas.width, canvas.height);

}