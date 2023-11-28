const main = async () => {
  const ExampleToken = await ethers.getContractFactory("ExampleToken");

  await ExampleToken.deploy()
    .then(async (contract) => {
      console.log("Contract deployed at:", contract.address);
    })
    .catch(async (e) => {
      console.log(e.message);
    });
};
main();
