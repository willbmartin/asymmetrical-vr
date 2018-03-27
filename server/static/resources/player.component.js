AFRAME.registerComponent('player', {
  schema: {
    playerType: {type: 'string', default: "GOD"}
  },

  init: function () {
    var element = this.el;
    // var ground = this.el.sceneEl.querySelector("#ground");
    var playerType = this.data.playerType;
    if (playerType != "MOUSE" && playerType != "GOD") {
      throw "Parameter is not accurate!";
    }
  
    if (playerType == "GOD") {
      // element.setAttribute('visible', false);
      // inventory.push(elementID);
      element.setAttribute('camera', "userHeight: 30");
      element.setAttribute('networked', "template:#god-template; showLocalTemplate:false")
      //networked="template:#mouse-template; showLocalTemplate:false"
      console.log("Player set to: God");
    } else {
      element.setAttribute('camera', "userHeight:.1");
      element.setAttribute('networked', "template:#mouse-template; showLocalTemplate:false")
      console.log("Player set to: Mouse");
    }
}
});
