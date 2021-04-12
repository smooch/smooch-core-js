/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import ConversationTruncated from './ConversationTruncated';
import UserTruncated from './UserTruncated';

/**
 * The ConversationJoinEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload
 * @version 9.4.4
 */
class ConversationJoinEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationJoinEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload
     */
    constructor() { 
        
        ConversationJoinEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationJoinEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload} The populated <code>ConversationJoinEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationJoinEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], UserTruncated);
            }
        }
        return obj;
    }

/**
     * Returns The conversation in which the user was added.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the user was added.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the user was added.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The user that joined the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user that joined the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user The user that joined the conversation.
     */
    setUser(user) {
        this['user'] = user;
    }

}

/**
 * The conversation in which the user was added.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationJoinEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user that joined the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user
 */
ConversationJoinEventAllOfPayload.prototype['user'] = undefined;






export default ConversationJoinEventAllOfPayload;

