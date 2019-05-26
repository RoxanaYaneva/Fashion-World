const EventEmitter = require('events');

const EventBus =  {
    eventEmitter: null,
    init: () => {
        console.log("init")
        this.eventEmitter = new EventEmitter();
    },

    /**
     * Adds the @listener function to the end of the listeners array
     * for the event named @eventName
     * Will ensure that only one time the listener added for the event
     *
     * @param {string} eventName
     * @param {function} listener
     */
  on: (eventName, listener) => {
    console.log("on " + eventName);
    this.eventEmitter.on(eventName, listener); 
  },

    /**
     * Will temove the specified @listener from @eventname list
     *
     * @param {string} eventName
     * @param {function} listener
     */
  removeEventListener: (eventName, listener) => {
      console.log("remove")
    this.eventEmitter.removeListener(eventName, listener);
  },

  /**
   * Will emit the event on the evetn name with the @payload
   * and if its an error set the @error value
   *
   * @param {string} event
   * @param {object} payload
   * @param {boolean} error
   */
  emit: (event, payload, error = false) => {
    console.log("emit " + event);
    this.eventEmitter.emit(event, payload, error);
  },
}

module.exports =  { EventBus };
