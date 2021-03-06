'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var safePut = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var range,
        rangeArr,
        rangeEnd,
        total,
        _args6 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _axios.put.apply(null, _args6);

          case 3:
            return _context6.abrupt('return', _context6.sent);

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6['catch'](0);

            if (!(_context6.t0 instanceof Error)) {
              _context6.next = 19;
              break;
            }

            if (!(_context6.t0.message == 'Network Error')) {
              _context6.next = 16;
              break;
            }

            range = _args6[2].headers['Content-Range'];
            rangeArr = range.split("/");
            rangeEnd = parseInt(rangeArr[0].split("-")[1]);
            total = parseInt(rangeArr[1]);
            // check if the error is on the last chunk - if yes IGNORE;

            if (!(rangeEnd + 1 === total)) {
              _context6.next = 16;
              break;
            }

            return _context6.abrupt('return', {
              status: 200
            });

          case 16:
            throw _context6.t0;

          case 19:
            return _context6.abrupt('return', _context6.t0);

          case 20:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 6]]);
  }));

  return function safePut() {
    return _ref6.apply(this, arguments);
  };
}();

/*
https://storage.googleapis.com/dx-uploads/2.mp4?GoogleAccessId=dx-uploads-sa%40nth-skyline-202908.iam.gserviceaccount.com&Expires=1541613873&Signature=lwZOX4PwfTp%2BA6Ft4fdLOsQ%2FKtVzPVe4Cki5NJs9yWsKQx81BAO0GOkqDzSb6N1aGcsIv8YKbygOCOnfiwMyPkzC9rKbl86M%2FK37ID7pGTzRclts23qGyru0A7gD%2BNqi%2FjR4EnagPjEdz%2Bp7z6ODJGyq3pQ%2BhcH%2FIu%2By7pEwUyXdUzqyaGdtLQsfJY8RzXtLvOlnEN6Wft03w%2FWqkmjMsyfNtWdHhxHvzvtz6f2iKFiPbsekmhVNj2cU%2F49TVdnRX25ph2TLW8%2FPuuboSnZMDJlXOfEZT62XIXttBw1KjvuqnA1zgmoFkDISgjIgM0kga6mSr2%2BMs%2B4i9gEGrE2pEw%3D%3D&upload_id=AEnB2UqwHitsBXfVFgZFYzAGUHakzHq9s2Ahbrcf8s97gNWfK3gt8teS61WH5gM3kIfQCkMTKM4PlOFaZuxlriZl6XwC1LzUtA

https://storage.googleapis.com/dx-uploads/2.mp4?GoogleAccessId=dx-uploads-sa%40nth-skyline-202908.iam.gserviceaccount.com&Expires=1541613873&Signature=lwZOX4PwfTp%2BA6Ft4fdLOsQ%2FKtVzPVe4Cki5NJs9yWsKQx81BAO0GOkqDzSb6N1aGcsIv8YKbygOCOnfiwMyPkzC9rKbl86M%2FK37ID7pGTzRclts23qGyru0A7gD%2BNqi%2FjR4EnagPjEdz%2Bp7z6ODJGyq3pQ%2BhcH%2FIu%2By7pEwUyXdUzqyaGdtLQsfJY8RzXtLvOlnEN6Wft03w%2FWqkmjMsyfNtWdHhxHvzvtz6f2iKFiPbsekmhVNj2cU%2F49TVdnRX25ph2TLW8%2FPuuboSnZMDJlXOfEZT62XIXttBw1KjvuqnA1zgmoFkDISgjIgM0kga6mSr2%2BMs%2B4i9gEGrE2pEw%3D%3D&upload_id=AEnB2UqwHitsBXfVFgZFYzAGUHakzHq9s2Ahbrcf8s97gNWfK3gt8teS61WH5gM3kIfQCkMTKM4PlOFaZuxlriZl6XwC1LzUtA

https://storage.googleapis.com/dx-uploads/2.mp4?GoogleAccessId=dx-uploads-sa%40nth-skyline-202908.iam.gserviceaccount.com&Expires=1541613873&Signature=lwZOX4PwfTp%2BA6Ft4fdLOsQ%2FKtVzPVe4Cki5NJs9yWsKQx81BAO0GOkqDzSb6N1aGcsIv8YKbygOCOnfiwMyPkzC9rKbl86M%2FK37ID7pGTzRclts23qGyru0A7gD%2BNqi%2FjR4EnagPjEdz%2Bp7z6ODJGyq3pQ%2BhcH%2FIu%2By7pEwUyXdUzqyaGdtLQsfJY8RzXtLvOlnEN6Wft03w%2FWqkmjMsyfNtWdHhxHvzvtz6f2iKFiPbsekmhVNj2cU%2F49TVdnRX25ph2TLW8%2FPuuboSnZMDJlXOfEZT62XIXttBw1KjvuqnA1zgmoFkDISgjIgM0kga6mSr2%2BMs%2B4i9gEGrE2pEw%3D%3D&upload_id=AEnB2UqwHitsBXfVFgZFYzAGUHakzHq9s2Ahbrcf8s97gNWfK3gt8teS61WH5gM3kIfQCkMTKM4PlOFaZuxlriZl6XwC1LzUtA
*/


var _axios = require('axios');

var _FileMeta = require('./FileMeta');

var _FileMeta2 = _interopRequireDefault(_FileMeta);

var _FileProcessor = require('./FileProcessor');

var _FileProcessor2 = _interopRequireDefault(_FileProcessor);

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _errors = require('./errors');

var errors = _interopRequireWildcard(_errors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MIN_CHUNK_SIZE = 262144;

var Upload = function () {
  function Upload(args, allowSmallChunks) {
    _classCallCheck(this, Upload);

    var opts = _extends({
      chunkSize: MIN_CHUNK_SIZE,
      storage: window.localStorage,
      contentType: 'text/plain',
      onChunkUpload: function onChunkUpload() {},
      id: null,
      url: null,
      file: null
    }, args);

    if ((opts.chunkSize % MIN_CHUNK_SIZE !== 0 || opts.chunkSize === 0) && !allowSmallChunks) {
      throw new _errors.InvalidChunkSizeError(opts.chunkSize);
    }

    if (!opts.id || !opts.url || !opts.file) {
      throw new _errors.MissingOptionsError();
    }
    //debug.enabled = true;
    (0, _debug2.default)('Creating new upload instance:');
    (0, _debug2.default)(' - Url: ' + opts.url);
    (0, _debug2.default)(' - Id: ' + opts.id);
    (0, _debug2.default)(' - File size: ' + opts.file.size);
    (0, _debug2.default)(' - Chunk size: ' + opts.chunkSize);

    this.opts = opts;
    this.meta = new _FileMeta2.default(opts.id, opts.file.size, opts.chunkSize, opts.storage);
    this.processor = new _FileProcessor2.default(opts.file, opts.chunkSize);
  }

  _createClass(Upload, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this = this;

        var meta, processor, opts, finished, resumeUpload, uploadChunk, validateChunk, getRemoteResumeIndex;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                meta = this.meta, processor = this.processor, opts = this.opts, finished = this.finished;

                resumeUpload = function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var localResumeIndex, remoteResumeIndex, resumeIndex;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            localResumeIndex = meta.getResumeIndex();
                            _context.next = 3;
                            return getRemoteResumeIndex();

                          case 3:
                            remoteResumeIndex = _context.sent;
                            resumeIndex = Math.min(localResumeIndex, remoteResumeIndex);

                            (0, _debug2.default)('Validating chunks up to index ' + resumeIndex);
                            (0, _debug2.default)(' - Remote index: ' + remoteResumeIndex);
                            (0, _debug2.default)(' - Local index: ' + localResumeIndex);

                            _context.prev = 8;
                            _context.next = 11;
                            return processor.run(validateChunk, 0, resumeIndex);

                          case 11:
                            _context.next = 22;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](8);

                            (0, _debug2.default)('Validation failed, starting from scratch');
                            (0, _debug2.default)(' - Failed chunk index: ' + _context.t0.chunkIndex);
                            (0, _debug2.default)(' - Old checksum: ' + _context.t0.originalChecksum);
                            (0, _debug2.default)(' - New checksum: ' + _context.t0.newChecksum);

                            _context.next = 21;
                            return processor.run(uploadChunk);

                          case 21:
                            return _context.abrupt('return');

                          case 22:

                            (0, _debug2.default)('Validation passed, resuming upload');
                            _context.next = 25;
                            return processor.run(uploadChunk, resumeIndex);

                          case 25:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this, [[8, 13]]);
                  }));

                  return function resumeUpload() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                uploadChunk = function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(checksum, index, chunk) {
                    var total, start, end, headers, res;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            total = opts.file.size;
                            start = index * opts.chunkSize;
                            end = index * opts.chunkSize + chunk.byteLength - 1;
                            headers = {
                              'Content-Type': opts.contentType,
                              'Content-Range': 'bytes ' + start + '-' + end + '/' + total
                            };


                            (0, _debug2.default)('Uploading chunk ' + index + ':');
                            (0, _debug2.default)(' - Chunk length: ' + chunk.byteLength);
                            (0, _debug2.default)(' - Start: ' + start);
                            (0, _debug2.default)(' - End: ' + end);

                            _context2.next = 10;
                            return safePut(opts.url, chunk, {
                              headers: headers
                            });

                          case 10:
                            res = _context2.sent;

                            checkResponseStatus(res, opts, [200, 201, 308]);
                            (0, _debug2.default)('Chunk upload succeeded, adding checksum ' + checksum);
                            meta.addChecksum(index, checksum);

                            opts.onChunkUpload({
                              totalBytes: total,
                              uploadedBytes: end + 1,
                              chunkIndex: index,
                              chunkLength: chunk.byteLength
                            });

                          case 15:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this);
                  }));

                  return function uploadChunk(_x, _x2, _x3) {
                    return _ref3.apply(this, arguments);
                  };
                }();

                validateChunk = function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newChecksum, index) {
                    var originalChecksum, isChunkValid;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            originalChecksum = meta.getChecksum(index);
                            isChunkValid = originalChecksum === newChecksum;

                            if (isChunkValid) {
                              _context3.next = 5;
                              break;
                            }

                            meta.reset();
                            throw new _errors.DifferentChunkError(index, originalChecksum, newChecksum);

                          case 5:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this);
                  }));

                  return function validateChunk(_x4, _x5) {
                    return _ref4.apply(this, arguments);
                  };
                }();

                getRemoteResumeIndex = function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var headers, res, header, range, bytesReceived;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            headers = {
                              'Content-Range': 'bytes */' + opts.file.size
                            };

                            (0, _debug2.default)('Retrieving upload status from GCS');
                            _context4.next = 4;
                            return safePut(opts.url, null, {
                              headers: headers
                            });

                          case 4:
                            res = _context4.sent;


                            checkResponseStatus(res, opts, [308]);
                            header = res.headers['range'];

                            (0, _debug2.default)('Received upload status from GCS: ' + header);
                            range = header.match(/(\d+?)-(\d+?)$/);
                            bytesReceived = parseInt(range[2]) + 1;
                            return _context4.abrupt('return', Math.floor(bytesReceived / opts.chunkSize));

                          case 11:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this);
                  }));

                  return function getRemoteResumeIndex() {
                    return _ref5.apply(this, arguments);
                  };
                }();

                if (!finished) {
                  _context5.next = 7;
                  break;
                }

                throw new _errors.UploadAlreadyFinishedError();

              case 7:
                if (!(meta.isResumable() && meta.getFileSize() === opts.file.size)) {
                  _context5.next = 13;
                  break;
                }

                (0, _debug2.default)('Upload might be resumable');
                _context5.next = 11;
                return resumeUpload();

              case 11:
                _context5.next = 16;
                break;

              case 13:
                (0, _debug2.default)('Upload not resumable, starting from scratch');
                _context5.next = 16;
                return processor.run(uploadChunk);

              case 16:
                (0, _debug2.default)('Upload complete, resetting meta');
                meta.reset();
                this.finished = true;

              case 19:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function start() {
        return _ref.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: 'pause',
    value: function pause() {
      this.processor.pause();
      (0, _debug2.default)('Upload paused');
    }
  }, {
    key: 'unpause',
    value: function unpause() {
      this.processor.unpause();
      (0, _debug2.default)('Upload unpaused');
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.processor.pause();
      this.meta.reset();
      (0, _debug2.default)('Upload cancelled');
    }
  }]);

  return Upload;
}();

Upload.errors = errors;
exports.default = Upload;


function checkResponseStatus(res, opts) {
  var allowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var status = res.status;

  if (allowed.indexOf(status) > -1) {
    return true;
  }

  switch (status) {
    case 308:
      throw new _errors.UploadIncompleteError();

    case 201:
    case 200:
      throw new _errors.FileAlreadyUploadedError(opts.id, opts.url);

    case 404:
      throw new _errors.UrlNotFoundError(opts.url);

    case 500:
    case 502:
    case 503:
    case 504:
      throw new _errors.UploadFailedError(status);

    default:
      throw new _errors.UnknownResponseError(res);
  }
}