function getTodayString() {
    const today = new Date();
    let year = today.getFullYear();

    let month = today.getMonth()+1;
    month = month.toString().padStart(2, '0');
    
    let day = today.getDate();
    day = day.toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export default getTodayString;