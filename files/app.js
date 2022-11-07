const fs = require("fs").promises;
//read file
async function readFile(filepath) {
  try {
    const data = await fs.readFile(filepath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

//write file

async function openFile() {
  try {
    const csvHeaders = "name,quantity,price";
    await fs.writeFile("groceries.csv", csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
    console.log('completed')
  }
}
//add item in csv file

async function addGroceryItem(name, quantity, price) {
  try {
    const csvLine = `\n${name},${quantity},${price}`;
    await fs.writeFile("groceries.csv", csvLine, { flag: "a" });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

//deleteFile

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

//move file
async function moveFile(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log(`Moved file from ${source} to ${destination}`);
  } catch (error) {
    console.error(`Got an error trying to move the file: ${error.message}`);
  }
}

openFile();
addGroceryItem("apple", 12, 1.5);
readFile("./greetings.txt");
deleteFile("groceries.csv");
moveFile("greetings-2.txt", "./replace/salutations.txt");
