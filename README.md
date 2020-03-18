# Smart Event Open API

SmartEventOpenApi - JavaScript client for smart_event_open_api
Smart Event Open API documentation

- API version: 2.0.8
- Package version: 2.0.8

## Installation

#### git
#
Install it via:

```shell
    git clone https://github.com/SmartBytePl/smartevent-open-api-js.git
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SmartEventApi = require('smart_event_api');

var api = new SmartEventApi.EventsApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.eventsGet(callback);
```


## Documentation for API Endpoints

All URIs are relative to *https://test-se2.smartevent.pl/open-api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SmartEventOpenApi.CategoriesApi* | [**categoriesCodeGet**](docs/CategoriesApi.md#categoriesCodeGet) | **GET** /categories/{code} | Get category details
*SmartEventOpenApi.CategoriesApi* | [**categoriesGet**](docs/CategoriesApi.md#categoriesGet) | **GET** /categories | Get list of all categories
*SmartEventOpenApi.EventsApi* | [**categoryEventsByCodeCodeGet**](docs/EventsApi.md#categoryEventsByCodeCodeGet) | **GET** /category-events/by-code/{code} | Get events data for specied category code
*SmartEventOpenApi.EventsApi* | [**eventsByCodeCodeGet**](docs/EventsApi.md#eventsByCodeCodeGet) | **GET** /events/by-code/{code} | Get specific event data from the system by event code
*SmartEventOpenApi.EventsApi* | [**eventsByIdIdGet**](docs/EventsApi.md#eventsByIdIdGet) | **GET** /events/by-id/{id} | Get specific event data from the system by event id
*SmartEventOpenApi.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | Get Events from the system
*SmartEventOpenApi.OrdersApi* | [**calculateOrder**](docs/OrdersApi.md#calculateOrder) | **GET** /order/calculate | Calculate order
*SmartEventOpenApi.OrdersApi* | [**couponValid**](docs/OrdersApi.md#couponValid) | **GET** /order/coupon/{coupon} | Verify coupon validiation
*SmartEventOpenApi.OrdersApi* | [**createOrder**](docs/OrdersApi.md#createOrder) | **GET** /order/create | Create order in system
*SmartEventOpenApi.OrdersApi* | [**orderDetails**](docs/OrdersApi.md#orderDetails) | **GET** /order/{tokenValue} | Get details about created order

## Documentation for Models

 - [SmartEventOpenApi.BillingData](docs/BillingData.md)
 - [SmartEventOpenApi.CalculateResponse](docs/CalculateResponse.md)
 - [SmartEventOpenApi.Category](docs/Category.md)
 - [SmartEventOpenApi.Channel](docs/Channel.md)
 - [SmartEventOpenApi.ChannelPricing](docs/ChannelPricing.md)
 - [SmartEventOpenApi.Currency](docs/Currency.md)
 - [SmartEventOpenApi.Event](docs/Event.md)
 - [SmartEventOpenApi.GeneralError](docs/GeneralError.md)
 - [SmartEventOpenApi.Image](docs/Image.md)
 - [SmartEventOpenApi.Locale](docs/Locale.md)
 - [SmartEventOpenApi.NotDescribed](docs/NotDescribed.md)
 - [SmartEventOpenApi.Order](docs/Order.md)
 - [SmartEventOpenApi.OrderItem](docs/OrderItem.md)
 - [SmartEventOpenApi.Participant](docs/Participant.md)
 - [SmartEventOpenApi.TaxCategory](docs/TaxCategory.md)
 - [SmartEventOpenApi.Ticket](docs/Ticket.md)
 - [SmartEventOpenApi.TranslationCategory](docs/TranslationCategory.md)
 - [SmartEventOpenApi.TranslationCategoryParent](docs/TranslationCategoryParent.md)
 - [SmartEventOpenApi.TranslationEvent](docs/TranslationEvent.md)
 - [SmartEventOpenApi.TranslationTicket](docs/TranslationTicket.md)

## Documentation for Authorization

 All endpoints do not require authorization.

