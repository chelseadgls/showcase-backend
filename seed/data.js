import axios from 'axios';
import fs from 'fs';
import db from '../db/connection.js';
import Creator from '../models/Creator.js';
// import Item from '../models/Item.js';
// import Space from '../models/Space.js';

let allCreators = {};
let allItems = {};
import allSpaces = {};


export const retrieveCreators = async () => {
  try {
    const response = await axios.get(
      "https://eojbtbh68hot62m.m.pipedream.net"
    );
    // console.log(response.data);
    let creatorsData = response.data;
    let structuredCreatorsData = creatorsData.map(
      ({}) => {
        return {

        };
      }
    );
    allCreators = structuredCreatorsData;
    writeCreatorData();
  } catch (error) {
    throw error;
  }
  };

  // export const retrieveItems = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://eoc685b1ynuwbq.m.pipedream.net"
  //     );
  //     // console.log(response.data);
  //     let itemsData = response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  //   };

  //   export const retrieveSpaces = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://eozjtvk41svx4nc.m.pipedream.net"
  //       );
  //       // console.log(response.data);
  //       let spacesData = response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //     };