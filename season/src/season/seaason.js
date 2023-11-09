const showDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    const currentMonth = new Date().getMonth();
    let season = '';
  
    switch (currentMonth) {
      case 11:
      case 0:
      case 1:
        season = 'Winter';
        document.body.style.backgroundColor = 'lightblue';
        break;
      case 2:
      case 3:
      case 4:
        season = 'Spring';
        document.body.style.backgroundColor = 'lightgreen';
        break;
      case 5:
      case 6:
      case 7:
        season = 'Summer';
        document.body.style.backgroundColor = 'yellow';
        break;
      case 8:
      case 9:
      case 10:
        season = 'Autumn';
        document.body.style.backgroundColor = 'orange';
        break;
      default:
        season = 'Invalid Month';
    }
  
    return `Current season: ${season}`;
  };
  
  export default showDate;
  