export function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function generateDate(){
  return new Date().toISOString().split('.')[0] + 'Z';
}

export function filterItems(items, key, value) {
  return items.filter((item) => item[key] === value);
}

export function searchFilterTip(filteredTips,searchedTip, searchBy) {
    let checkString;
    if (searchBy === "tags" || searchBy === "creator") {
      filteredTips = filteredTips.filter((tip) => {
        checkString = tip[searchBy].toString();
        return checkString.toLowerCase().includes(searchedTip.toLowerCase());
      });
    } else {
      filteredTips = filteredTips.filter((tip) => {
        const { title, description, tags, keywords, language, creator } = tip;
        checkString = `${title} ${description} ${language} ${tags.join(
          " "
        )} ${keywords?.join(" ")}  ${creator}`;
        return checkString.toLowerCase().includes(searchedTip.toLowerCase());
      });
    }

    return filteredTips;
  }
