export function getFormattedTime(time) {
    let date = new Date(time);
    let currentDate = new Date();
    let months = [
        'Янв', 'Февр', 'Марта',
        'Апр', 'Мая', 'Июня', 'Июля',
        'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'
    ];
    let formattedTime = '';

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let hour = (date.getHours().toString().length < 2) ? '0' + date.getHours() : date.getHours();
    let min = (date.getMinutes().toString().length < 2) ? '0' + date.getMinutes() : date.getMinutes();

    if (currentDate.getDate() === day) {
        formattedTime += `Сегодня, ${hour}:${min}`;
    } else if (currentDate.getDate() - 1 === day) {
        formattedTime += `Вчера, ${hour}:${min}`;
    } else {
        formattedTime = `${day} ${month} ${year}, ${hour}:${min}`;
    }

    return formattedTime;
}