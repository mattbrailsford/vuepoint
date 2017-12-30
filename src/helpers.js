import moment from 'moment';

export function cssColor(name){
    var body = document.getElementsByTagName("body")[0];
    var el = document.createElement("span");
    el.className = "bg--"+ name +" h-hidden";
    body.appendChild(el);
    var style = window.getComputedStyle(el, null);
    var color = style.getPropertyValue('background-color');
    body.removeChild(el);
    return color;
}

export function relativeDate(value) {
    const date = moment(value);

    if (moment().isSame(date, 'd')) {
        return 'Today';
    }

    if (moment().add(1, 'day').isSame(date, 'd')) {
        return 'Tomorrow';
    }

    if (date.isBetween(moment().add(1, 'day'), moment().add(8, 'days'), 'day')) {
        return date.format('dddd');
    }

    return 'In ' + date.toNow(true);
}

export function relativeDateTime(value) {
    const date = moment(value);

    if (moment().diff(date, 'days') > 5) {
        return 'A long long time ago';
    }

    if (moment().diff(date, 'days') > 1) {
        return `${moment().diff(date, 'days')} days ago`;
    }

    if (moment().diff(date, 'hours') >= 24) {
        return 'A day ago';
    }

    if (moment().diff(date, 'hours') > 1) {
        return `${moment().diff(date, 'hours')} hours ago`;
    }

    if (moment().diff(date, 'minutes') > 59) {
        return 'An hour ago';
    }

    if (moment().diff(date, 'seconds') > 119) {
        return `${moment().diff(date, 'minutes')} minutes ago`;
    }

    if (moment().diff(date, 'seconds') >= 60) {
        return 'A minute ago';
    }

    return 'Just now';
}

export function positionToGridAreaNotation(position) {
    const [from, to = null] = position.toLowerCase().split(':');

    if (from.length !== 2 || (to && to.length !== 2)) {
        return ;
    }

    const areaFrom = `${from[1]} / ${indexInAlphabet(from[0])}`;
    const area = to ? `${areaFrom} / ${Number(to[1]) + 1} / ${indexInAlphabet(to[0]) + 1}` : areaFrom;

    return area ;
}

function indexInAlphabet(character) {
    const index = character.toLowerCase().charCodeAt(0) - 96;
    return index < 1 ? 1 : index;
}


