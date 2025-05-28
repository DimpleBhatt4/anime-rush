export const getFilteredPromoByID = ( data ) => {
  return data?.filter(
    (item, index, self) =>
      index === self.findIndex((obj) => obj.entry.mal_id === item.entry.mal_id)
  );
};
