const tagsToQueryString = (tags) => {
  if (typeof tags === 'object' && Array.isArray(tags)) {
    let queryString = '';
    tags.forEach((tag) => {
      queryString += `tags_like=${tag}&`;
    });
    queryString = queryString.slice(0, -1);
    return queryString;
  }
  return false;
};

module.exports = { tagsToQueryString };
