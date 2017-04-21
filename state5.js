demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffcc80';
        console.log('state5');
        addChangeStateEventListener();
    },
    update: function(){}
}