# SmartEventOpenApi.Ticket

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**code** | **String** |  | [optional] 
**onHold** | **Number** | Number of sold tickets | [optional] 
**onHand** | **Number** | Number of available tickets | [optional] 
**tracked** | **Boolean** |  | [optional] 
**visibleAfterSoldOut** | **Boolean** |  | [optional] 
**salableAfterSoldOut** | **Boolean** |  | [optional] 
**taxCategory** | [**TaxCategory**](TaxCategory.md) |  | [optional] 
**channelPricings** | **{String: [ChannelPricing]}** | Keys reference to code of a channel | [optional] 
**translations** | **{String: [TranslationTicket]}** | Keys reference to code of a translation | [optional] 
