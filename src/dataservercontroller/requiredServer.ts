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