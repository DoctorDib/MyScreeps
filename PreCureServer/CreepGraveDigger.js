
module.exports = {
    work: function(creep){
        let pos = 0;

        // Setting a job for the lazy creep.
        if(creep.memory.active === false) {
            Game.spawns.God.room.find(FIND_TOMBSTONES).forEach(tombstone => {
                if(tombstone.creep) {

                    creep.memory.extra.tombstoneInfo = tombstone;
                }
            });
        }
        if(creep.memory.extra.tombstoneInfo && creep.memory.extra.tombstoneInfo !== null){
            if(_.sum(creep.memory.extra.tombstoneInfo.store.energy) > 0){
                pos = creep.memory.extra.tombstoneInfo.pos;
            }
        }

        if(creep.memory.active === false && creep.carry.energy === 0 && creep.memory.extra.tombstoneInfo !== null){
            creep.memory.active = true;
        } else if(creep.memory.active === true && (creep.memory.extra.tombstoneInfo.store.energy === 0 || creep.carry.energy === creep.carryCapacity)) {
            creep.memory.extra.tombstoneInfo = null;
            creep.memory.active = false;
        }

        if(creep.memory.active === true){
            if(creep.harvest(creep.memory.extra.tombstoneInfo.store.energy) === ERR_NOT_IN_RANGE){
                console.log("move")
                creep.move(creep.pos.getDirectionTo(pos));
            }
        } else {
            if(creep.transfer(Game.spawns.God, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.God);
            }
        }
    }
};

/*
 extra		{1}

 tombstoneInfo		{7}

 room		{4}

 name	:	W1N1

 energyAvailable	:	198

 energyCapacityAvailable	:	300

 visual		{1}

 pos		{3}

 x	:	34

 y	:	33

 roomName	:	W1N1

 id	:	26b40d2d5ee7090

 deathTime	:	9860

 store		{1}

 energy	:	47

 ticksToDecay	:	7

 creep		{14}

 room		{4}

 pos		{3}

 id	:	c0ac0ce540ac73a

 name	:	Jordan

 spawning	:	false

 my	:	true

 body		[5]

 owner		{1}

 ticksToLive	:	1413

 carryCapacity	:	150

 carry		{1}

 fatigue	:	0

 hits	:	0

 hitsMax	:	500

 */