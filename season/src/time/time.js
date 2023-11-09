const getPartOfDay = () => {
    const currentHour = new Date().getHours();
    let partOfDay = '';
  
    if (currentHour >= 6 && currentHour < 12) {
      partOfDay = 'Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      partOfDay = 'Afternoon';
    } else {
      partOfDay = 'Night';
    }
  
    return `Current part of the day: ${partOfDay.toUpperCase()}`;
  };
  
  export default getPartOfDay;
  