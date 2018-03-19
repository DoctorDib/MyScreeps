
module.exports = {
    work: function(creep){
        if(creep.memory.active === true && creep.carry.energy === 0){
            creep.memory.active = false;
        } else if(creep.memory.active === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.active = true;
        }

        if(creep.memory.active === true){
            if(creep.transfer(Game.spawns.God, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.God);
            }
        } else {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) === ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
};