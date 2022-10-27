import { BucketInfo, ObjectInfo } from "./types.js";
import { DownloadResultStruct } from "./download.js";
import { UploadResultStruct } from "./upload.js";
export declare class ProjectResultStruct {
    project: any;
    constructor(project: any);
    close(): Promise<void>;
    downloadObject(bucketName: string, uploadPath: string, downloadOptions: Record<string, any>): Promise<DownloadResultStruct>;
    uploadObject(bucketName: string, uploadPath: string, uploadOptions: Record<string, any>): Promise<UploadResultStruct>;
    listObjects(bucketName: string, listObjectsOptions: Record<string, any>): Promise<any>;
    deleteObject(bucketName: string, uploadPath: string): Promise<ObjectInfo>;
    statObject(bucketName: string, uploadPath: string): Promise<ObjectInfo>;
    statBucket(bucketName: string): Promise<BucketInfo>;
    createBucket(bucketName: string): Promise<BucketInfo>;
    ensureBucket(bucketName: string): Promise<BucketInfo>;
    listBuckets(listBucketsOptions: Record<string, any>): Promise<any>;
    deleteBucket(bucketName: string): Promise<BucketInfo>;
}
