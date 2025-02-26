function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function convertToReadableAmount(number) {
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + " B";
  } else if (number >= 1) {
    return number.toFixed(1) + " M";
  } else {
    return number.toFixed(1) + " M";
  }
}
function getPctChange(start, end) {
  if (start == 0) {
    return 0;
  }
  return (end - start) / end * 100;
}
export {
  convertToReadableAmount as c,
  formatDate as f,
  getPctChange as g
};
