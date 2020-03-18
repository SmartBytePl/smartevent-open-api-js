# SmartEventOpenApi.CategoriesApi

All URIs are relative to *https://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCodeGet**](CategoriesApi.md#categoriesCodeGet) | **GET** /categories/{code} | Get category details
[**categoriesGet**](CategoriesApi.md#categoriesGet) | **GET** /categories | Get list of all categories

<a name="categoriesCodeGet"></a>
# **categoriesCodeGet**
> Category categoriesCodeGet(code)

Get category details

This endpoint will return details about specific category

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.CategoriesApi();
let code = "code_example"; // String | 

apiInstance.categoriesCodeGet(code, (error, data, response) => {
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
 **code** | **String**|  | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoriesGet"></a>
# **categoriesGet**
> [Category] categoriesGet()

Get list of all categories

This endpoint will return all categories list

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.CategoriesApi();
apiInstance.categoriesGet((error, data, response) => {
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

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

