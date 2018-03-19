const maxCreepPopulation = {
    harvester : 3,
    upgrader : 2,
    setter: 0
};

let createCreeps = function(role, bodyTypes){
    Game.spawns.God.createCreep(bodyTypes, null, {role: role, active: false});
};

/*
 Body Part key:

 Harvester = [MOVE, MOVE, WORK, CARRY, CARRY] - 300
 Upgrader = [CARRY, MOVE, WORK, WORK] - 300
 Setter = [WORK, WORK, MOVE, MOVE] - 300
 */

module.exports = {
    checkPopulation: function(){
        // Collecting values
        let sum = {
            harvestCreeps : _.sum(Game.creeps, (c) => c.memory.role === 'harvester'),
            upgraderCreeps : _.sum(Game.creeps, (c) => c.memory.role === 'upgrader'),
            setterCreeps : _.sum(Game.creeps, (c) => c.memory.role === 'setter'),
        };

        // CHECK WHO NEEDS SPAWNING
        if(sum.harvestCreeps !== maxCreepPopulation.harvester){
            createCreeps('harvester', [MOVE, MOVE, WORK, CARRY, CARRY]);
            return false;
        }

        if(sum.upgraderCreeps !== maxCreepPopulation.upgrader){
            createCreeps('upgrader', [CARRY, MOVE, WORK, WORK]);
            return false;
        }

        if(sum.setterCreeps !== maxCreepPopulation.setter){
            createCreeps('setter', [WORK, WORK, MOVE, MOVE]);
            return false;
        }

        // All is good, continue working
        return true;
    },
    createCreate: function(role, bodyTypes) { // Manually creating a creep
        createCreeps(role, bodyTypes);
    },
    deleteCreep: function(name){
        Game.creeps[name].suicide(); // Removing creep from existence!
    }
};