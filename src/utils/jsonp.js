/* global window, document */
// from here – http://learn.javascript.ru/ajax-jsonp#полный-пример

import url from 'url';
import serializeQuery from './serialize-query';

window.CallbackRegistry = {}; // реестр

// при успехе вызовет onSuccess, при ошибке onError
export default function scriptRequest(uri, options) {
  return new Promise((resolve, reject) => {
    let scriptOk = false; // флаг, что вызов прошел успешно

    // сгенерировать имя JSONP-функции для запроса
    const callbackName = `cb${String(Math.random()).slice(-6)}`;

    // укажем это имя в URL запроса
    let link = url.format({
      slashes: false,
      pathname: uri,
      search: serializeQuery(Object.assign({}, options)),
    });
    link += ~link.indexOf('?') ? '&' : '?';
    link += `callback=CallbackRegistry.${callbackName}`;

    // ..и создадим саму функцию в реестре
    window.CallbackRegistry[callbackName] = function jsonpCallback(data) {
      scriptOk = true; // обработчик вызвался, указать что всё ок
      delete window.CallbackRegistry[callbackName]; // можно очистить реестр
      resolve(data);
    };

    // эта функция сработает при любом результате запроса
    // важно: при успешном результате - всегда после JSONP-обработчика
    function checkCallback() {
      if (scriptOk) return; // сработал обработчик?
      delete window.CallbackRegistry[callbackName];
      reject(link);
    }

    const script = document.createElement('script');

    // в старых IE поддерживается только событие, а не onload/onerror
    // в теории 'readyState=loaded' означает "скрипт загрузился",
    // а 'readyState=complete' -- "скрипт выполнился", но иногда
    // почему-то случается только одно из них, поэтому проверяем оба
    script.onreadystatechange = function onready() {
      if (this.readyState === 'complete' || this.readyState === 'loaded') {
        this.onreadystatechange = null;
        setTimeout(checkCallback, 0); // Вызвать checkCallback - после скрипта
      }
    };

    // события script.onload/onerror срабатывают всегда после выполнения скрипта
    script.onload = script.onerror = checkCallback;
    script.src = link;

    document.body.appendChild(script);
  });
}
