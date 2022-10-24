export const getUserData = async (cb) => {
  const data = await fetch("/ibu.json");
  const user = await data.json();
  //   const user = await data.json();
  cb(user);
};

export const getPregnancyDataByUserId = async (id, cb) => {
  const data = await fetch("/kehamilan.json");
  const pregnancies = await data.json();
  const userPregnancy = pregnancies.filter(
    (pregnancy) => pregnancy.id_ibu === id
  );
  cb(userPregnancy);
};

export const getCheckUpListDataByPatientId = async (id, cb) => {
  const response = await fetch("/pemeriksaan.json");
  const checkupList = await response.json();
  const patientCheckupList = await checkupList.filter(
    (pregnancy) => pregnancy.id_ibu === id
  );
  cb(patientCheckupList);
};
