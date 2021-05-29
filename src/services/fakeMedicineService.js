const medicines = 1;

export function getMedicines() {
  return medicines;
}

export function getMedicineByName(name) {
  return medicines.find((m) => m.name.toLowerCase() === name);
}

export function getMedicine(id) {
  return medicines.find((m) => m._id === id);
}

export function deleteMedicines(id) {
  let medicineInDb = medicines.find((m) => m._id === id);
  medicines.splice(medicines.indexOf(medicineInDb), 1);
  return medicineInDb;
}
