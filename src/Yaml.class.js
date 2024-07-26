#!/usr/bin/env nodejs

const fs = require('fs');

function exists(file_path) { }




class FSWrapper {
  constructor() { }
}


function FSWrapperFactory() {
  return FSWrapper;
}



class Yaml {
  constructor() { }

  static read() {
    console.log("Yaml.read: not yet implemented");
  }

  static write() {
    console.log("Yaml.write: Not yet implemented");
  }


};


function YamlFactory() {
  return Yaml;
}


module.exports = { Yaml };

const yml = YamlFactory();
yml.read();
