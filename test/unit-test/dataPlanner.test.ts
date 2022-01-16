import {expect} from "chai";
import "mocha";
import ServerPlanner from "../../src/CommonMethods/requiredServer"
require("ts-mocha")

describe("calculatePlanner", function () {
  it("calculate the capacity of the server", function() {
    let serverDefinition = {CPU: 2, RAM: 32, HDD: 100};
    let virtualMachine = [
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 1, RAM: 16, HDD: 10 },
      { CPU: 2, RAM: 32, HDD: 100 },
    ];
    let serverPlanner = new ServerPlanner(serverDefinition, virtualMachine);
    let result = serverPlanner.calculatePlanner();
    expect(result).equal(2);
  })
})