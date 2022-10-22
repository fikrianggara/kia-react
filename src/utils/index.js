export const showFormattedDate = (date) => {
  //date is on ISO format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export const showFormattedDateWithHours = (date) => {
  //date is on ISO format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export const formatDate = (date) => {
  //input format is DD/MM/YYYY
  date = date.split(" ");
  const dateL = date[0].split("/");
  const dateR = date[1].split(":");
  // month is 0-based, that's why we need dataParts[1] - 1
  let dateObject = new Date(
    +dateL[2],
    dateL[1] - 1,
    +dateL[0],
    dateR[0],
    dateR[1],
    dateR[2]
  );
  return dateObject;
};
