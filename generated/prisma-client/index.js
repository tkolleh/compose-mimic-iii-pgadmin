"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Admission",
    embedded: false
  },
  {
    name: "Callout",
    embedded: false
  },
  {
    name: "Caregiver",
    embedded: false
  },
  {
    name: "Chartevent",
    embedded: false
  },
  {
    name: "Chartevents1",
    embedded: false
  },
  {
    name: "Chartevents10",
    embedded: false
  },
  {
    name: "Chartevents11",
    embedded: false
  },
  {
    name: "Chartevents12",
    embedded: false
  },
  {
    name: "Chartevents13",
    embedded: false
  },
  {
    name: "Chartevents14",
    embedded: false
  },
  {
    name: "Chartevents15",
    embedded: false
  },
  {
    name: "Chartevents16",
    embedded: false
  },
  {
    name: "Chartevents17",
    embedded: false
  },
  {
    name: "Chartevents2",
    embedded: false
  },
  {
    name: "Chartevents3",
    embedded: false
  },
  {
    name: "Chartevents4",
    embedded: false
  },
  {
    name: "Chartevents5",
    embedded: false
  },
  {
    name: "Chartevents6",
    embedded: false
  },
  {
    name: "Chartevents7",
    embedded: false
  },
  {
    name: "Chartevents8",
    embedded: false
  },
  {
    name: "Chartevents9",
    embedded: false
  },
  {
    name: "Cptevent",
    embedded: false
  },
  {
    name: "DCpt",
    embedded: false
  },
  {
    name: "DIcdDiagnosis",
    embedded: false
  },
  {
    name: "DIcdProcedure",
    embedded: false
  },
  {
    name: "DItem",
    embedded: false
  },
  {
    name: "DLabitem",
    embedded: false
  },
  {
    name: "Datetimeevent",
    embedded: false
  },
  {
    name: "DiagnosesIcd",
    embedded: false
  },
  {
    name: "Drgcode",
    embedded: false
  },
  {
    name: "Icustay",
    embedded: false
  },
  {
    name: "InputeventsCv",
    embedded: false
  },
  {
    name: "InputeventsMv",
    embedded: false
  },
  {
    name: "Labevent",
    embedded: false
  },
  {
    name: "Microbiologyevent",
    embedded: false
  },
  {
    name: "Noteevent",
    embedded: false
  },
  {
    name: "Outputevent",
    embedded: false
  },
  {
    name: "Patient",
    embedded: false
  },
  {
    name: "Prescription",
    embedded: false
  },
  {
    name: "ProcedureeventsMv",
    embedded: false
  },
  {
    name: "ProceduresIcd",
    embedded: false
  },
  {
    name: "Service",
    embedded: false
  },
  {
    name: "Transfer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
