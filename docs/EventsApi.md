# SmartEventOpenApi.EventsApi

All URIs are relative to *http://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsCalendarGetByEventId**](EventsApi.md#eventsCalendarGetByEventId) | **GET** /open-api/events/{eventId}/calendar/{type} | Get specific event calendar by type_extension
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | Get Events from the system
[**eventsGetByCategoryCode**](EventsApi.md#eventsGetByCategoryCode) | **GET** /category-events/by-code/{code} | Get events data for specied category code
[**eventsGetByEventCode**](EventsApi.md#eventsGetByEventCode) | **GET** /events/by-code/{code} | Get specific event data from the system by event code
[**eventsGetByEventId**](EventsApi.md#eventsGetByEventId) | **GET** /events/by-id/{id} | Get specific event data from the system by event id

<a name="eventsCalendarGetByEventId"></a>
# **eventsCalendarGetByEventId**
> eventsCalendarGetByEventId(eventId, type)

Get specific event calendar by type_extension

This endpoint will allow you to get calendar schedule

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let eventId = 56; // Number | Id of event
let type = "type_example"; // String | type of calendar

apiInstance.eventsCalendarGetByEventId(eventId, type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Id of event | 
 **type** | **String**| type of calendar | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventsGet"></a>
# **eventsGet**
> [Event] eventsGet()

Get Events from the system

This endpoint will allow you to get details about events.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
apiInstance.eventsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsGetByCategoryCode"></a>
# **eventsGetByCategoryCode**
> [Event] eventsGetByCategoryCode(code)

Get events data for specied category code

This endpoint will return events for specified category.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let code = "code_example"; // String | Code of event

apiInstance.eventsGetByCategoryCode(code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Code of event | 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsGetByEventCode"></a>
# **eventsGetByEventCode**
> [Event] eventsGetByEventCode(code)

Get specific event data from the system by event code

This endpoint will allow you to get details about specific event.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let code = "code_example"; // String | Code of event

apiInstance.eventsGetByEventCode(code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Code of event | 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsGetByEventId"></a>
# **eventsGetByEventId**
> [Event] eventsGetByEventId(id)

Get specific event data from the system by event id

This endpoint will allow you to get details about specific event.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let id = 56; // Number | Id of event

apiInstance.eventsGetByEventId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of event | 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

