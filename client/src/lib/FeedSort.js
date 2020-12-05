const sort = (data) => {
  return data.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA > dateB ? -1 : 1;
  });
};

export default sort;
