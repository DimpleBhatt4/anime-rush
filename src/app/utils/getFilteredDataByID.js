 export const getFilteredDataByID = (data)=>{
  return data?.filter(
          (item, index, self) =>
            index === self.findIndex((obj) => obj.mal_id === item.mal_id)
        );
 }