var dude;
var dude_swarm;

function create ()
{
	this.add.image(400, 300, 'sky');
																		
	 timedEvent = this.time.addEvent({ delay: 3000, callback: swarm, callbackScope: this, loop: true });

	//swarm(this);

	//dude_swarm = this.add.group({key: 'dude'});
	//dude_swarm.add();
}

function swarm(){
	var y = Phaser.Math.Between(0, 600)
	var s = this.physics.add.image(100, y, 'dude');
	s.setVelocity(100, 0) .setBounce(1, 1).setCollideWorldBounds(true);//.setGravityY(200);
}
