# SmartEventOpenApi.PaymentsApi

All URIs are relative to *http://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payuCreate**](PaymentsApi.md#payuCreate) | **GET** /payments/payu/create/{tokenValue} | Create payment for order

<a name="payuCreate"></a>
# **payuCreate**
> payuCreate(tokenValue)

Create payment for order

This endpoint will redirect to start payment

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.PaymentsApi();
let tokenValue = "tokenValue_example"; // String | order identifcator

apiInstance.payuCreate(tokenValue, (error, data, response) => {
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
 **tokenValue** | **String**| order identifcator | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

