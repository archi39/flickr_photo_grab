# flickr_photo_grab

Пример использования метода `JQuery` **getJSON** для отправки get запроса к API https://www.flickr.com/

```javascript
/**
* @param url ссылка на API ресурса 
* @param data данные передаваемые в запросе
* @param callback метод обработчик результата, может быть вынесен в method chaining [done] как в нашем случае 
*/
getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
```

