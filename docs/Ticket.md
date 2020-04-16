# SmartEventOpenApi.Ticket

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**code** | **String** |  | [optional] 
**onHold** | **Number** | Number of sold tickets | [optional] 
**onHand** | **Number** | Number of available tickets | [optional] 
**alternativeOnHand** | **String** | Alternative number of available tickets it is used to show specific value for the user | [optional] 
**tracked** | **Boolean** |  | [optional] 
**visibleAfterSoldOut** | **Boolean** |  | [optional] 
**salableAfterSoldOut** | **Boolean** |  | [optional] 
**taxCategory** | [**TaxCategory**](TaxCategory.md) |  | [optional] 
**channelPricings** | [**{String: ChannelPricing}**](ChannelPricing.md) | Keys reference to code of a channel | [optional] 
**translations** | [**{String: TranslationTicket}**](TranslationTicket.md) | Keys reference to code of a translation | [optional] 
