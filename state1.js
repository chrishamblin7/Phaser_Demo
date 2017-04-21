demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#0099ff';
        console.log('state1');
        addChangeStateEventListener();
        
    },
    update: function(){}
}