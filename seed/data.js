import axios from 'axios';
import fs from 'fs';
import db from '../db/connection.js';
import Creator from '../models/Creator.js';
import Item from '../models/Item.js';
import Space from '../models/Space.js';

let allCreators = {};
let allItems = {};
let allSpaces = {};

//retrieve data
export const retrieveCreators = async () => {
  try {
    const response = await axios.get(
      "https://eojbtbh68hot62m.m.pipedream.net"
    );
    // console.log(response.data);
    let creatorsData = response.data;
    let structuredCreatorsData = creatorsData.map(
      ({ id, createdTime, fields }) => {
        return {
          id,
          createdTime,
          fields,
        };
      }
    );
    allCreators = structuredCreatorsData;
    writeCreatorData();
  } catch (error) {
    throw error;
  }
  };

  export const retrieveItems = async () => {
    try {
      const response = await axios.get(
        "https://eoc685b1ynuwbq.m.pipedream.net"
      );
      // console.log(response.data);
      let itemsData = response.data;
      let structuredItemsData = itemsData.map(
        ({ id, createdTime, fields}) => {
          return {
            id,
            createdTime,
            fields
          };
        }
      );
      allItems = structuredItemsData;
      writeItemData();
    } catch (error) {
      throw error;
    }
    };

    export const retrieveSpaces = async () => {
      try {
        const response = await axios.get(
          "https://eozjtvk41svx4nc.m.pipedream.net"
        );
        // console.log(response.data);
        let spacesData = response.data;
        let structuredSpacesData = spacesData.map(
          ({ id, createdTime, fields}) => {
            return {
              id,
              createdTime,
              fields,
            };
          }
        );
        allSpaces = structuredSpacesData;
        writeSpaceData();
      } catch (error) {
        throw error;
      }
      };


//write data
  async function writeCreatorData() {
    try {
      await fs.writeFile(
        "./seed/creatorData.json",
        JSON.stringify(allCreators),
        (err) => {
          if (err) throw err;
          console.log("Creator Data has been written to file successfully.")
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function writeItemData() {
    try {
      await fs.writeFile(
        "./seed/itemData.json",
        JSON.stringify(allItems),
        (err) => {
          if (err) throw err;
          console.log("Item Data has been written to file successfully.")
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function writeSpaceData() {
    try {
      await fs.writeFile(
        "./seed/spaceData.json",
        JSON.stringify(allSpaces),
        (err) => {
          if (err) throw err;
          console.log("Space Data has been written to file successfully.")
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

//insert data
  async function insertCreators() {
    try {
      await retrieveCreators();
      await Creator.create(allCreators);
    } catch (error) {
      console.error(error);
    }
  }

  async function insertItems() {
    try {
      await retrieveItems();
      await Item.create(allItems);
    } catch (error) {
      console.error(error);
    }
  }

  async function insertSpaces() {
    try {
      await retrieveSpaces();
      await Space.create(allSpaces);
    } catch (error) {
      console.error(error);
    }
  }

  //main function
  async function insertSeedData(){
    await db.dropDatabase();
    await insertCreators();
    await insertItems();
    await insertSpaces();
    await db.close();
  }

  insertSeedData();