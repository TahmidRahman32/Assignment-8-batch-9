

const getStorageCard =()=>{
   const cardStore = localStorage.getItem('book');
   if(cardStore){
      return JSON.parse(cardStore)
   }
   return []
}

const saveCardStore = (id)=>{
   const bookCardStorage = getStorageCard();
   const isExists = bookCardStorage.find(bookId => bookId === id);
   if(!isExists){
      bookCardStorage.push(id);
      localStorage.setItem('book', JSON.stringify(bookCardStorage))
   }

}
export { saveCardStore, getStorageCard };