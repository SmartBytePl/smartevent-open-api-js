# SmartEventOpenApi.InvoicesApi

All URIs are relative to *http://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoicesDownload**](InvoicesApi.md#invoicesDownload) | **GET** /invoices/download/{type}/order/{tokenValue} | Download invoice by type for order

<a name="invoicesDownload"></a>
# **invoicesDownload**
> &#x27;String&#x27; invoicesDownload(tokenValue, type)

Download invoice by type for order

This endpoint will return pdf document

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.InvoicesApi();
let tokenValue = "tokenValue_example"; // String | order identifcator
let type = "type_example"; // String | type of invoice vat or proforma

apiInstance.invoicesDownload(tokenValue, type, (error, data, response) => {
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
 **tokenValue** | **String**| order identifcator | 
 **type** | **String**| type of invoice vat or proforma | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

