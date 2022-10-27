"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadResultStruct = void 0;
const bindings = require("bindings");
const uplink = bindings("uplink");
const errorhandle = require("./error.js");
class UploadResultStruct {
    constructor(upload) {
        this.upload = upload;
    }
    /*
     * Function uploads bytes data passed as parameter to the object's data stream.
     * Input : Buffer (Buf), Buffer length (Int)
     * Output : WriteResult (Int)
     */
    async write(buffer, bytesread) {
        const writeResult = await uplink.upload_write(this.upload, buffer, bytesread).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return writeResult;
    }
    /*
     * Function to set custom meta information while uploading data
     * Input : customMetadata (Object)
     * Output : None
     */
    async setCustomMetadata(customMetadata) {
        await uplink.upload_set_custom_metadata(this.upload, customMetadata).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
    }
    /*
     * Function commits the uploaded data.
     * Input : None
     * Output : None
     */
    async commit() {
        await uplink.upload_commit(this.upload).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
    }
    /*
     * Function returns the last information about the uploaded object.
     * Input : None
     * Output : ObjectInfo
     */
    async info() {
        const object = await uplink.upload_info(this.upload).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return object;
    }
    /*
     * Function aborts an ongoing upload.
     * Input : None
     * Output : ObjectInfo
     */
    async abort() {
        /* eslint-disable max-len */
        const object = await uplink.upload_abort(this.upload).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return object;
    }
}
exports.UploadResultStruct = UploadResultStruct;
/* eslint-enable max-len,@typescript-eslint/no-explicit-any */
