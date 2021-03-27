const medicines = [
  {
    _id: "1",
    name: "Chlorophyll",
    company: "Sun Ltd",
    originalMRP: 2,
    genericMRP: 1,
    count:0,
  },
  {
    _id: "2",
    name: "Glycomate",
    company: "Moon Ltd",
    originalMRP: 3,
    genericMRP: 2,
  },
  {
    _id: "3",
    name: "Zincovit",
    company: "Fire Ltd",
    originalMRP: 5,
    genericMRP: 2,
  },
  {
    _id: "4",
    name: "Acrolyn",
    company: "Moon Ltd",
    originalMRP: 6,
    genericMRP: 4,
  },
  {
    _id: "5",
    name: "Zinco",
    company: "Fiefox Ltd",
    originalMRP: 3,
    genericMRP: 2,
  }, {
    _id: "6",
    name: "Battolmin",
    company: "Crosin Ltd",
    originalMRP: 3,
    genericMRP: 1,
  }, {
    _id: "7",
    name: "Vicks",
    company: "Balm Ltd",
    originalMRP: 4,
    genericMRP: 2,
  }, {
    _id: "8",
    name: "Halthimin",
    company: "Krot Ltd",
    originalMRP: 5,
    genericMRP: 4,
  }, {
    _id: "9",
    name: "Falcon",
    company: "Kings Ltd",
    originalMRP: 3,
    genericMRP: 1,
  },{
    _id: "10",
    name: "Chlorophyll",
    company: "Sun Ltd",
    originalMRP: 2,
    genericMRP: 1,
  },
  {
    _id: "11",
    name: "Glycomate",
    company: "Moon Ltd",
    originalMRP: 3,
    genericMRP: 2,
  },
  {
    _id: "12",
    name: "Zincovit",
    company: "Fire Ltd",
    originalMRP: 5,
    genericMRP: 2,
  },
  {
    _id: "13",
    name: "Acrolyn",
    company: "Moon Ltd",
    originalMRP: 6,
    genericMRP: 4,
  },
  {
    _id: "14",
    name: "Zinco",
    company: "Fiefox Ltd",
    originalMRP: 3,
    genericMRP: 2,
  }, {
    _id: "15",
    name: "Battolmin",
    company: "Crosin Ltd",
    originalMRP: 3,
    genericMRP: 1,
  }, {
    _id: "16",
    name: "Vicks",
    company: "Balm Ltd",
    originalMRP: 4,
    genericMRP: 2,
  }, {
    _id: "17",
    name: "Halthmin",
    company: "Krot Ltd",
    originalMRP: 5,
    genericMRP: 4,
  }, {
    _id: "18",
    name: "Falcon",
    company: "Kings Ltd",
    originalMRP: 3,
    genericMRP: 1,
  },
];

export function getMedicines() {
  return medicines;
}

export function getMedicine(id) {
  return medicines.find((m) => m._id === id);
}

export function deleteMedicines(id) {
  let medicineInDb = medicines.find((m) => m._id === id);
  medicines.splice(medicines.indexOf(medicineInDb), 1);
  return medicineInDb;
}
