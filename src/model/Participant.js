/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.8
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Participant model module.
* @module model/Participant
* @version 2.0.8
*/
export default class Participant {
    /**
    * Constructs a new <code>Participant</code>.
    * @alias module:model/Participant
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Participant} obj Optional instance to populate.
    * @return {module:model/Participant} The populated <code>Participant</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Participant();
                        
            
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('second_name')) {
                obj['second_name'] = ApiClient.convertToType(data['second_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * @member {String} second_name
    */
    second_name = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {String} comment
    */
    comment = undefined;
    /**
    * @member {String} attributes
    */
    attributes = undefined;
    /**
    * @member {String} street
    */
    street = undefined;
    /**
    * @member {String} city
    */
    city = undefined;
    /**
    * @member {String} postcode
    */
    postcode = undefined;
    /**
    * @member {String} country_code
    */
    country_code = undefined;




}
