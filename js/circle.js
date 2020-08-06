(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        circumference: function(radius) {
            // TODO: complete this method
            return Math.pi * 2 * this.radius;
            //area = pi * radius^2

            // return radius * radius * pi; // TODO: return the proper value

        },
          area : function(){
            return Math.pi * this.radius * this.radius;
          },

        logInfo: function (doRounding) {
            // TODO: complete this method.
                if(doRounding == true){
                    return Math.ceil(Math.pi)

                } else
                    return Math.pi


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();