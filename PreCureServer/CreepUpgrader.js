
module.exports = {
    work: function(creep){
        if(creep.memory.active === true && creep.carry.energy === 0){
            creep.memory.active = false;
        } else if(creep.memory.active === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.active = true;
        }

        if(creep.memory.active === true){
            if(creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller); // Move to the controller in the room that the creep is in
            }
        } else {
            if (creep.withdraw(Game.spawns.God, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(Game.spawns.God);
            }
        }
    }
};