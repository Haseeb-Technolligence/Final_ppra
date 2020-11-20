export const ConvertDateTime = (date) => {
  let convertedDate = new Date(date);
  const dd = String(convertedDate.getDate()).padStart(2, "0");
  const mm = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const yyyy = convertedDate.getFullYear();
  const time =
    convertedDate.getHours() +
    ":" +
    convertedDate.getMinutes() +
    ":" +
    convertedDate.getSeconds();
  return (date = mm + "/" + dd + "/" + yyyy + " AT " + time);
};

export const ConvertDate = (date) => {
  let convertedDate = new Date(date);
  const dd = String(convertedDate.getDate()).padStart(2, "0");
  const mm = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const yyyy = convertedDate.getFullYear();

  return (date = mm + "/" + dd + "/" + yyyy);
};
