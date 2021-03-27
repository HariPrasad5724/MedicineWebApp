const medicines = [
  {
    _id: "1",
    name: "Chlorophyll",
    company: "Sun Ltd",
    originalMRP: 2,
    genericMRP: 1,
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
