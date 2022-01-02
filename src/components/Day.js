
export const Day = ({ day }) => {
  // console.log('day', day);
  
  function getWeekDay(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return days[date.getDay()];
  }

  const { dt, weather, temp } = day;
  const { icon } = weather[0];
  const maxTemp = temp.max.toFixed();
  const minTemp = temp.min.toFixed();
  const dayOfWeek = getWeekDay(new Date(dt * 1000));

  return (
    <div className="day__inner">
      <div className="day_date">{dayOfWeek}</div>
      <div className="day_date">{new Date(dt * 1000).toLocaleDateString()}</div>
      <div className='card_description'>
        <img className='day_image' src={`http://api.openweathermap.org/img/w/${icon}.png`} alt=''/>
      </div>
      <div className='card_temperature'>
        <strong className='temp_max'> {maxTemp}°</strong> / 
        <span className='temp_min'> {minTemp}°</span>
      </div>
    </div>
  )
}
