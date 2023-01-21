import * as fs from "fs";
import path from "path";

/**
 * A function to determine whether this is the development environment
 * @returns {Boolean} true if this is the development environment
 */
export const isDev = () => {
  return !!process.argv.find((el) => el === "--config-dev");
};

/**
 * A function to get the files in a directory filtered by extension
 * @param {string} dir name of the directory to get the files from
 * @param {Array} fileExt an array of file extensions to filter by
 * @returns {Array} an array of files in the directory with the .ts extension
 */
export const getEntries = (dir, fileExt = [".ts"]) => {
  return fs
    .readdirSync(dir)
    .filter((el) => fileExt.includes(path.extname(el)))
    .map((el) => dir + "/" + el);
};
