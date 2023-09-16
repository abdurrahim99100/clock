const setClock = () => {

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    // time related;
    const horse = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // date related; 
    const currentMonth = date.getMonth();
    const currentMonthName = monthNames[currentMonth];
    const updateDay = date.getDate();
    const updateYear = date.getFullYear();

    // time related code;
    let setHorse = document.getElementById('horse');
    setHorse.innerText = horse;

    let setMinute = document.getElementById('minute');
    setMinute.innerText = minutes;

    let setSecond = document.getElementById('seconds');
    setSecond.innerText = seconds;

    // date related code;
    let setCurrentMonth = document.getElementById('month');
    setCurrentMonth.innerText = currentMonthName;

    let setUpdateDay = document.getElementById('date');
    setUpdateDay.innerText = updateDay;

    let setUpdateYear = document.getElementById('year');
    setUpdateYear.innerText = updateYear;









};
setInterval(setClock, 1000);
