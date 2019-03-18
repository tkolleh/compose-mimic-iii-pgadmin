"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Caregiver",
    embedded: false
  },
  {
    name: "Admission",
    embedded: false
  },
  {
    name: "Callout",
    embedded: false
  },
  {
    name: "Chartevent",
    embedded: false
  },
  {
    name: "Chartevents_1",
    embedded: false
  },
  {
    name: "Chartevents_10",
    embedded: false
  },
  {
    name: "Chartevents_11",
    embedded: false
  },
  {
    name: "Chartevents_12",
    embedded: false
  },
  {
    name: "Chartevents_13",
    embedded: false
  },
  {
    name: "Chartevents_14",
    embedded: false
  },
  {
    name: "Chartevents_15",
    embedded: false
  },
  {
    name: "Chartevents_16",
    embedded: false
  },
  {
    name: "Chartevents_17",
    embedded: false
  },
  {
    name: "Chartevents_2",
    embedded: false
  },
  {
    name: "Chartevents_3",
    embedded: false
  },
  {
    name: "Chartevents_4",
    embedded: false
  },
  {
    name: "Chartevents_5",
    embedded: false
  },
  {
    name: "Chartevents_6",
    embedded: false
  },
  {
    name: "Chartevents_7",
    embedded: false
  },
  {
    name: "Chartevents_8",
    embedded: false
  },
  {
    name: "Chartevents_9",
    embedded: false
  },
  {
    name: "Cptevent",
    embedded: false
  },
  {
    name: "D_cpt",
    embedded: false
  },
  {
    name: "D_icd_diagnosis",
    embedded: false
  },
  {
    name: "D_icd_procedure",
    embedded: false
  },
  {
    name: "D_item",
    embedded: false
  },
  {
    name: "D_labitem",
    embedded: false
  },
  {
    name: "Datetimeevent",
    embedded: false
  },
  {
    name: "Diagnoses_icd",
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
    name: "Inputevents_cv",
    embedded: false
  },
  {
    name: "Inputevents_mv",
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
    name: "Procedureevents_mv",
    embedded: false
  },
  {
    name: "Procedures_icd",
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
