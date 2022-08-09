if (document.querySelector('#contacts-maps')) {
    const selector = document.querySelector('#contacts-maps');

    function contactsMaps() {
        let map = new ymaps.Map(selector, {
            center: [51.088582359652186,71.41259464648587],
            zoom: 17,
        });
        deleteAllControlsMaps(map);

        let markOne = new ymaps.Placemark([51.08766600019715,71.41391297775561], {}, {
           iconLayout: 'default#image',
           iconImageHref: 'img/maps-mark.svg',
           iconImageSize: [19,28],
           iconImageOffset: [-7,-35],
        });
        map.geoObjects.add(markOne);
    };
    ymaps.ready(contactsMaps);
}


function deleteAllControlsMaps(map) {
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
