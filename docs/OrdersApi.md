# SmartEventOpenApi.OrdersApi

All URIs are relative to *https://test-se2.smartevent.pl/open-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderCreate**](OrdersApi.md#orderCreate) | **GET** /order/create | Create order in system
[**orderGetByToken**](OrdersApi.md#orderGetByToken) | **GET** /order/{tokenValue} | Get details about created order
[**orderGetCalculation**](OrdersApi.md#orderGetCalculation) | **GET** /order/calculate | Calculate order

<a name="orderCreate"></a>
# **orderCreate**
> &#x27;String&#x27; orderCreate(customerName, customerSurname, customerPhone, customerEmail, deliveryName, deliverySurname, deliveryPhone, id, qty, opts)

Create order in system

This endpoint will allow you to create new order in system. Will return tokenValue.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.OrdersApi();
let customerName = "customerName_example"; // String | Customer name
let customerSurname = "customerSurname_example"; // String | Customer surname
let customerPhone = "customerPhone_example"; // String | Customer phone number
let customerEmail = "customerEmail_example"; // String | Customer email
let deliveryName = "deliveryName_example"; // String | Name
let deliverySurname = "deliverySurname_example"; // String | Surname
let deliveryPhone = "deliveryPhone_example"; // String | Phone number
let id = [3.4]; // [Number] | Array of tickets ids
let qty = [3.4]; // [Number] | Array of tickets quantitys
let opts = { 
  'participantName': ["participantName_example"], // [String] | If not passed, copied from customer_name. Number of participant should be equal number of tickets (sum of values in qty field).
  'participantSurname': ["participantSurname_example"], // [String] | If not passed, copied from customer_surname. Number of participant should be equal number of tickets (sum of values in qty field).
  'participantEmail': ["participantEmail_example"], // [String] | If not passed, copied from customer_email. Number of participant should be equal number of tickets (sum of values in qty field).
  'participantPhone': ["participantPhone_example"], // [String] | If not passed, copied from customer_phone. Number of participant should be equal number of tickets (sum of values in qty field).
  'participantComment': ["participantComment_example"], // [String] | Number of participant should be equal number of tickets (sum of values in qty field).
  'participantAttributes': ["participantAttributes_example"], // [String] | Number of participant should be equal number of tickets (sum of values in qty field).
  'customerCompany': "customerCompany_example", // String | Customer company name
  'customerStreet': "customerStreet_example", // String | Street address
  'customerCity': "customerCity_example", // String | City name
  'customerPostcode': "customerPostcode_example", // String | Post code
  'customerCountryCode': "customerCountryCode_example", // String | Country code
  'customerVatid': "customerVatid_example", // String | Vat ID only digits and signs
  'customerNewsletter': "customerNewsletter_example", // String | If user sign in to newsletter
  'customerFacebook': "customerFacebook_example", // String | Facebook identificator
  'customerLinkedin': "customerLinkedin_example", // String | LinkedIn identificator
  'customerTwitter': "customerTwitter_example", // String | Twitter identificator
  'customerInstagram': "customerInstagram_example", // String | Instagram identificator
  'customerGoogleplus': "customerGoogleplus_example", // String | GooglePlus identificator
  'deliveryCompany': "deliveryCompany_example", // String | Company Name
  'deliveryStreet': "deliveryStreet_example", // String | Street address
  'deliveryCity': "deliveryCity_example", // String | City name
  'deliveryPostcode': "deliveryPostcode_example", // String | Post code
  'deliveryCountryCode': "deliveryCountryCode_example", // String | Country code
  'deliveryVatid': "deliveryVatid_example", // String | Vat ID only digits and signs
  'additionalInfo': "additionalInfo_example", // String | customer comments for order
  'channelCode': "channelCode_example", // String | Code of the channel which should be used. If not passed it is resolved on domain base.
  'currencyCode': "currencyCode_example", // String | Currency of the order. If not passed default channel currency will be used.
  'localeCode': "localeCode_example", // String | Locale of the order. If not passed default channel locale wii be used.
  'coupon': "coupon_example", // String | Name of the coupon to be applied
  'ref': "ref_example" // String | Affiliate referer identficator
};
apiInstance.orderCreate(customerName, customerSurname, customerPhone, customerEmail, deliveryName, deliverySurname, deliveryPhone, id, qty, opts, (error, data, response) => {
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
 **customerName** | **String**| Customer name | 
 **customerSurname** | **String**| Customer surname | 
 **customerPhone** | **String**| Customer phone number | 
 **customerEmail** | **String**| Customer email | 
 **deliveryName** | **String**| Name | 
 **deliverySurname** | **String**| Surname | 
 **deliveryPhone** | **String**| Phone number | 
 **id** | [**[Number]**](Number.md)| Array of tickets ids | 
 **qty** | [**[Number]**](Number.md)| Array of tickets quantitys | 
 **participantName** | [**[String]**](String.md)| If not passed, copied from customer_name. Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **participantSurname** | [**[String]**](String.md)| If not passed, copied from customer_surname. Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **participantEmail** | [**[String]**](String.md)| If not passed, copied from customer_email. Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **participantPhone** | [**[String]**](String.md)| If not passed, copied from customer_phone. Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **participantComment** | [**[String]**](String.md)| Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **participantAttributes** | [**[String]**](String.md)| Number of participant should be equal number of tickets (sum of values in qty field). | [optional] 
 **customerCompany** | **String**| Customer company name | [optional] 
 **customerStreet** | **String**| Street address | [optional] 
 **customerCity** | **String**| City name | [optional] 
 **customerPostcode** | **String**| Post code | [optional] 
 **customerCountryCode** | **String**| Country code | [optional] 
 **customerVatid** | **String**| Vat ID only digits and signs | [optional] 
 **customerNewsletter** | **String**| If user sign in to newsletter | [optional] 
 **customerFacebook** | **String**| Facebook identificator | [optional] 
 **customerLinkedin** | **String**| LinkedIn identificator | [optional] 
 **customerTwitter** | **String**| Twitter identificator | [optional] 
 **customerInstagram** | **String**| Instagram identificator | [optional] 
 **customerGoogleplus** | **String**| GooglePlus identificator | [optional] 
 **deliveryCompany** | **String**| Company Name | [optional] 
 **deliveryStreet** | **String**| Street address | [optional] 
 **deliveryCity** | **String**| City name | [optional] 
 **deliveryPostcode** | **String**| Post code | [optional] 
 **deliveryCountryCode** | **String**| Country code | [optional] 
 **deliveryVatid** | **String**| Vat ID only digits and signs | [optional] 
 **additionalInfo** | **String**| customer comments for order | [optional] 
 **channelCode** | **String**| Code of the channel which should be used. If not passed it is resolved on domain base. | [optional] 
 **currencyCode** | **String**| Currency of the order. If not passed default channel currency will be used. | [optional] 
 **localeCode** | **String**| Locale of the order. If not passed default channel locale wii be used. | [optional] 
 **coupon** | **String**| Name of the coupon to be applied | [optional] 
 **ref** | **String**| Affiliate referer identficator | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="orderGetByToken"></a>
# **orderGetByToken**
> Order orderGetByToken(tokenValue)

Get details about created order

This endpoint will response with all order details

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.OrdersApi();
let tokenValue = "tokenValue_example"; // String | 

apiInstance.orderGetByToken(tokenValue, (error, data, response) => {
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
 **tokenValue** | **String**|  | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="orderGetCalculation"></a>
# **orderGetCalculation**
> CalculateResponse orderGetCalculation(id, qty)

Calculate order

This endpoint will allow you to get order totals.

### Example
```javascript
import SmartEventOpenApi from 'smart_event_open_api';

let apiInstance = new SmartEventOpenApi.OrdersApi();
let id = [3.4]; // [Number] | array of tickets ids
let qty = [3.4]; // [Number] | array of tickets quantitys

apiInstance.orderGetCalculation(id, qty, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array of tickets ids | 
 **qty** | [**[Number]**](Number.md)| array of tickets quantitys | 

### Return type

[**CalculateResponse**](CalculateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

