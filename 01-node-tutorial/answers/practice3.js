fs = require("fs").promises;

const makeFile = async () => {
  try {
    //const first = await readFile("./content/first.txt", "utf8");
    //const second = await readFile("./content/second.txt", "utf8");
    await fs.writeFile("./content/practice2.txt", `This is the first line.\n`);
    for (i = 1; i < 10; i++) {
      await fs.writeFile(
        "./content/practice2.txt",
        `This is the line ${i + 1}.\n`,
        { flag: "a" }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
makeFile();
