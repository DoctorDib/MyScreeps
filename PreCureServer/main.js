const god = require('GodMaster');

const harvest = require('CreepHarvester');
const upgrade = require('CreepUpgrader');
const setter = require('CreepSetter');

// Master - switch
const ACTIVE = true;
// Spawn - Switch
const SPAWNCHECKER = true;

// Workers - switchs
const HARVESTER = true;
const UPGRADER = true;
// construction
const SETTER = false;

// Master loop
module.exports.loop = function(){
    if(ACTIVE){
        for(var creepSelect in Game.creeps){
            if(Game.creeps.hasOwnProperty(creepSelect)){
                let creep = Game.creeps[creepSelect];

                switch(creep.memory.role){
                    case 'harvester':
                        if(HARVESTER){
                            harvest.work(creep);
                        }
                        break;
                    case 'upgrader':
                        if(UPGRADER){
                            upgrade.work(creep);
                        }
                        break;
                    case 'setter':
                        if(SETTER){
                            setter.work(creep);
                        }
                        break;
                }
            }
        }

        // Population checker
        if(SPAWNCHECKER){
            god.checkPopulation();
        }
    }
};