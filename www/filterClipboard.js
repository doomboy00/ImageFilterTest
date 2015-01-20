/**
 * Clipboard plugin for Cordova
 * 
 * @constructor
 */
function FilterClipboard () {}

/**
 * Sets the clipboard content
 *
 * @param {String}   text      The content to copy to the clipboard
 * @param {Function} onSuccess The function to call in case of success (takes the copied text as argument)
 * @param {Function} onFail    The function to call in case of error
 */
FilterClipboard.prototype.vintage = function (text, onSuccess, onFail) {
    if (typeof text === "undefined" || text === null) text = "";
	cordova.exec(onSuccess, onFail, "FilterClipboard", "copy", [text]);
};

/**
 * Gets the clipboard content
 *
 * @param {Function} onSuccess The function to call in case of success
 * @param {Function} onFail    The function to call in case of error
 */
FilterClipboard.prototype.paste = function (onSuccess, onFail) {
	cordova.exec(onSuccess, onFail, "FilterClipboard", "paste", []);
};

FilterClipboard.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.filterClipboard = new FilterClipboard();
  return window.plugins.filterClipboard;
};

cordova.addConstructor(filterClipboard.install);