import mongoose from '../db/connection.js';
// import creatorData from '' assert { type: "json" }
// import itemData from '' assert { type: "json" }
// import spaceData from '' assert { type: "json" }
import Creator from '../models/Creator.js'
import Item from '../models/Item.js'
import Space from '../models/Space.js'

// let structuredCreatorData = creatorData.map(

// );

// let structuredItemData = itemData.map(

// );

// let structureSpaceData = spaceData.map(

// );

let insertData = async () => {
  await Creator.deleteMany({});
  await Item.deleteMany({});
  let Space.deleteMany({});
  await Creator.create(structuredCreatorData);
  await Item.create(structuredItemData);
  await Space.create(structuredSpaceData);
  console.log('Creators, Items, Spaces inserted.')
  // mongoose.disconnect();
};

insertData();