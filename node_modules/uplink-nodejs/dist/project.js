"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResultStruct = void 0;
const bindings = require("bindings");
const uplink = bindings("uplink");
//
const download_js_1 = require("./download.js");
const errorhandle = require("./error.js");
const upload_js_1 = require("./upload.js");
//
//
class ProjectResultStruct {
    // Project handle
    constructor(project) {
        this.project = project;
    }
    /*
     * Function closes the project and all associated resources.
     * Input : None
     * Output : None
     */
    async close() {
        await uplink.close_project(this.project).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
    }
    /*
     * Function starts download to the specified key.
     * Iutput : Bucket Name (String) , ObjectPath (String) and Download Options (Object)
     * Onput : Download (Object)
     */
    async downloadObject(bucketName, uploadPath, downloadOptions) {
        const download = await uplink.download_object(this.project, bucketName, uploadPath, downloadOptions).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), downloadResultReturn = new download_js_1.DownloadResultStruct(download.download);
        return downloadResultReturn;
    }
    /*
     * Function starts an upload to the specified key.
     * Iutput : Bucket Name (String) , ObjectPath (String) and Download Options (Object)
     * Onput : Upload (Object)
     */
    async uploadObject(bucketName, uploadPath, uploadOptions) {
        const upload = await uplink.upload_object(this.project, bucketName, uploadPath, uploadOptions).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), uploadResultReturn = new upload_js_1.UploadResultStruct(upload.upload);
        return uploadResultReturn;
    }
    /*
     *  Function returns a list of objects with all its information.
     * Input : BucketName (String) , ListObjectOptions (Object)
     * Output : ObjectList (Object)
     */
    async listObjects(bucketName, listObjectsOptions) {
        const objectlist = await uplink.list_objects(this.project, bucketName, listObjectsOptions).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return objectlist;
    }
    /*
     *  Function deletes the object at the specific key.
     * Input : BucketName (String) , ObjectName (String)
     * Output : ObjectInfo (Object)
     */
    async deleteObject(bucketName, uploadPath) {
        const objectinfo = await uplink.delete_object(this.project, bucketName, uploadPath).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return objectinfo;
    }
    /*
     *  Function returns information about an object at the specific key.
     * Input : BucketName (String) , ObjectName (String)
     * Output : ObjectInfo (Object)
     */
    async statObject(bucketName, uploadPath) {
        const objectinfo = await uplink.stat_object(this.project, bucketName, uploadPath).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return objectinfo;
    }
    /*
     * Function returns information about a bucket.
     * Input : BucketName (String)
     * Output : BucketInfo (Object)
     */
    async statBucket(bucketName) {
        const bucketInfo = await uplink.stat_bucket(this.project, bucketName).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return bucketInfo;
    }
    /*
     * Function creates a new bucket.
     * Input : BucketName (String)
     * Output : BucketInfo (Object)
     */
    async createBucket(bucketName) {
        const bucketInfo = await uplink.create_bucket(this.project, bucketName).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return bucketInfo;
    }
    /*
     * Function ensures that a bucket exists or creates a new one.
     * When bucket already exists it returns a valid Bucket and no error
     * Input : BucketName (String)
     * Output : BucketInfo (Object)
     */
    async ensureBucket(bucketName) {
        const bucketInfo = await uplink.ensure_bucket(this.project, bucketName).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return bucketInfo;
    }
    /*
     * Function returns a list of buckets with all its information.
     * Input : ListBucketOptions (Object)
     * Output : List of Bucket Info (Object)
     */
    async listBuckets(listBucketsOptions) {
        const bucketListResult = await uplink.list_buckets(this.project, listBucketsOptions).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return bucketListResult;
    }
    /*
     * Function deletes a bucket.
     * When bucket is not empty it throws BucketNotEmptyError exception.
     * Input : BucketName (String)
     * Output : BucketInfo (Object)
     */
    async deleteBucket(bucketName) {
        const bucketInfo = await uplink.delete_bucket(this.project, bucketName).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return bucketInfo;
    }
}
exports.ProjectResultStruct = ProjectResultStruct;
/* eslint-enable */
