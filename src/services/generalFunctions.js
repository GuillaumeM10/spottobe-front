const formatTag = (tag) => {
  let tagClass = tag.toLowerCase().replace(/\s+/g, "-");
  tagClass = tagClass.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return tagClass;
};

const dateFormatter = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("fr-FR", options);
};

const addToCalandar = (date) => {
  const startDate = new Date(date.start)
    .toISOString()
    .replace(/-|:|\.\d+/g, "");
  const endDate = new Date(date.end).toISOString().replace(/-|:|\.\d+/g, "");

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&text=${post.title}&details=${post.content}`;
  window.open(url, "_blank");
};

const seeOnMaps = (latitude, longitude) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  window.open(url, "_blank");
};

export { formatTag, dateFormatter, addToCalandar, seeOnMaps };
