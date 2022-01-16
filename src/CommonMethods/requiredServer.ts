interface serverDefinition {
  CPU: number;
  RAM: number;
  HDD: number;
}

interface IPlannerServer {
  serverType: serverDefinition;
  virtualMachine: Array<serverDefinition>;
  calculatePlanner(
    serverType:serverDefinition,
    virtualMachine:Array<serverDefinition>
  ): number;
}

class Planner implements IPlannerServer {
  serverType;
  virtualMachine;
  data: Array<serverDefinition> = [];
  capacity: number = 0;

  constructor(serverType:serverDefinition, virtualMachine:Array<serverDefinition>) {
    this.serverType = serverType;
    this.virtualMachine = virtualMachine;
  }

  calculatePlanner(): number {
    let initialServerType: serverDefinition = {
      CPU: 0,
      RAM: 0,
      HDD: 0,
    };
    // sorting virtual machines
    this.virtualMachine.sort((x,y) => {
      let costForX = x.CPU + x.RAM + x.HDD;
      let costForY = y.CPU + y.HDD + y.HDD

      return costForX - costForY
    });
    // to check if a virtual machine can fit a server configuration
    let vmFit = (prev, curr) => (type) =>
    prev[type] + curr[type] <=this.serverType[type];

    this.virtualMachine.reduce((prev, curr) => {
      let fittable = vmFit(prev, curr);

      // if the current virtual machine can fit without having overload, ket increase the capacity
      if(fittable("HDD") && fittable('CPU') && fittable('RAM')) {
        this.capacity++;

        return {
          CPU: prev.CPU + curr.CPU,
          RAM: prev.RAM + curr.RAM,
          HDD: prev.HDD + curr.HDD,
        };
      }
      return {
        CPU: prev.CPU,
        RAM: prev.RAM,
        HDD: prev.HDD,
      };
    }, initialServerType);
    return this.capacity
  }
}

export default Planner;