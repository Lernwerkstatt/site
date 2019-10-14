const fs = require("fs");
const moment = require("moment");

const fsp = fs.promises;

const isOutdated = cache => !moment(cache.date).isSame(moment(), "minute");

const createCache = async callback => {
  const date = moment();
  let value = [];

  try {
    value = await callback();
  } catch (notAvailable) {
    console.error(notAvailable);
  }

  return {
    date,
    value
  };
};

const get = async (filename, callback) => {
  let result;

  const directory = `${__dirname}/../../cache`;
  if (!fs.existsSync(directory)) {
    await fsp.mkdir(directory);
  }
  const path = `${directory}/${filename}`;

  try {
    const handle = await fsp.open(path, "r+");

    const buffer = Buffer.alloc(500000);
    const file = await handle.read(buffer, 0, buffer.length, 0);

    // Print only read bytes to avoid junk.
    if (file.bytesRead) {
      const readBytes = file.buffer.slice(0, file.bytesRead).toString();
      const cache = JSON.parse(readBytes);

      if (isOutdated(cache)) {
        const newCache = await createCache(callback);
        result = newCache.value;
        handle.writeFile(JSON.stringify(newCache));
      } else {
        result = cache.value;
      }
    } else {
      const newCache = await createCache(callback);
      result = newCache.value;
      handle.writeFile(JSON.stringify(newCache));
    }

    // Close the opened file.
    await handle.close();
  } catch (noDirectoryOrNoFileOrFileCorrupted) {
    const newCache = await createCache(callback);
    result = newCache.value;

    try {
      await fsp.writeFile(path, JSON.stringify(newCache), "utf8");
    } catch (catastrophe) {
      console.error(catastrophe);
    }
  }

  return result;
};

const invalidate = async (filename, callback) => {
  const directory = `${__dirname}/../../cache`;
  if (!fs.existsSync(directory)) {
    await fsp.mkdir(directory);
  }
  const path = `${directory}/${filename}`;

  const newCache = await createCache(callback);

  try {
    await fsp.writeFile(path, JSON.stringify(newCache), "utf8");
  } catch (catastrophe) {
    console.error(catastrophe);
  }
};

module.exports = {
  get,
  invalidate
};
