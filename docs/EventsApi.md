# SmartEventOpenApi.EventsApi

All URIs are relative to *https://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryEventsByCodeCodeGet**](EventsApi.md#categoryEventsByCodeCodeGet) | **GET** /category-events/by-code/{code} | Get events data for specied category code
[**eventsByCodeCodeGet**](EventsApi.md#eventsByCodeCodeGet) | **GET** /events/by-code/{code} | Get specific event data from the system by event code
[**eventsByIdIdGet**](EventsApi.md#eventsByIdIdGet) | **GET** /events/by-id/{id} | Get specific event data from the system by event id
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | Get Events from the system

<a name="categoryEventsByCodeCodeGet"></a>
# **categoryEventsByCodeCodeGet**
> [Event] categoryEventsByCodeCodeGet(code)

Get events data for specied category code

This endpoint will return events for specified category.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let code = "code_example"; // String | Code of event

apiInstance.categoryEventsByCodeCodeGet(code, (error, data, response) => {
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

<a name="eventsByCodeCodeGet"></a>
# **eventsByCodeCodeGet**
> [Event] eventsByCodeCodeGet(code)

Get specific event data from the system by event code

This endpoint will allow you to get details about specific event.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let code = "code_example"; // String | Code of event

apiInstance.eventsByCodeCodeGet(code, (error, data, response) => {
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

<a name="eventsByIdIdGet"></a>
# **eventsByIdIdGet**
> [Event] eventsByIdIdGet(id)

Get specific event data from the system by event id

This endpoint will allow you to get details about specific event.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.EventsApi();
let id = 56; // Number | Id of event

apiInstance.eventsByIdIdGet(id, (error, data, response) => {
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

