# SmartEventOpenApi.PromotionsApi

All URIs are relative to *https://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**couponValid**](PromotionsApi.md#couponValid) | **GET** /promotions/coupon/{coupon} | Verify coupon validiation

<a name="couponValid"></a>
# **couponValid**
> &#x27;String&#x27; couponValid(coupon)

Verify coupon validiation

This endpoint will response with string what is the status of sended coupon

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.PromotionsApi();
let coupon = "coupon_example"; // String | 

apiInstance.couponValid(coupon, (error, data, response) => {
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
 **coupon** | **String**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

