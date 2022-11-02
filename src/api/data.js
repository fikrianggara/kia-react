export const getUserData = async (cb) => {
  const data = await fetch("/api/ibu.json");
  const user = await data.json();
  //   const user = await data.json();
  cb(user);
};

export const getPregnancyDataByUserId = async (id, cb) => {
  const data = await fetch("/api/kehamilan.json");
  const pregnancies = await data.json();
  const userPregnancy = pregnancies.filter(
    (pregnancy) => pregnancy.id_ibu === id
  );
  cb(userPregnancy);
};

export const getPregnancyDataById = async (id, cb) => {
  const data = await fetch("/api/kehamilan.json");
  const pregnancies = await data.json();
  const userPregnancy = pregnancies.filter(
    (pregnancy) => pregnancy.id === id
  )[0];
  cb(userPregnancy);
};
export const getCheckupDataById = async (id, cb) => {
  const data = await fetch("/api/pemeriksaan.json");
  const pregnancies = await data.json();
  const userPregnancy = pregnancies.filter(
    (pregnancy) => pregnancy.id_kehamilan === id
  )[0];
  cb(userPregnancy);
};
export const getCheckUpListDataByPatientId = async (id, cb) => {
  const response = await fetch("/api/pemeriksaan.json");
  const checkupList = await response.json();
  const patientCheckupList = await checkupList.filter(
    (pregnancy) => pregnancy.id_ibu === id
  );
  cb(patientCheckupList);
};

export const getCheckUpListDataById = async (id, cb) => {
  const response = await fetch("/api/pemeriksaan.json");
  const checkupList = await response.json();
  const patientCheckupData = await checkupList.find(
    (pregnancy) => pregnancy.id === id
  );
  cb(patientCheckupData);
};
