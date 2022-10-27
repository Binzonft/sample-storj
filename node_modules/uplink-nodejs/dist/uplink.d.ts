import { AccessResultStruct } from "./access.js";
declare const errorhandle: any;
declare class ListBucketsOptions {
    cursor: string;
    constructor(cursor?: string);
}
declare class Permission {
    allow_download: boolean;
    allow_upload: boolean;
    allow_list: boolean;
    allow_delete: boolean;
    not_before: number;
    not_after: number;
    constructor(allow_download?: boolean, allow_upload?: boolean, allow_list?: boolean, allow_delete?: boolean, not_before?: number, not_after?: number);
}
declare class UploadOptions {
    expires: number;
    constructor(expires?: number);
}
declare class DownloadOptions {
    offset: number;
    length: number;
    constructor(offset?: number, length?: number);
}
declare class ListObjectsOptions {
    prefix: string;
    cursor: string;
    recursive: boolean;
    system: boolean;
    custom: boolean;
    constructor(prefix?: string, cursor?: string, recursive?: boolean, system?: boolean, custom?: boolean);
}
declare class SharePrefix {
    bucket: string;
    prefix: string;
    constructor(bucket?: string, prefix?: string);
}
declare class CustomMetadataEntry {
    key: string;
    key_length: number;
    value: string;
    value_length: number;
    constructor(key?: string, key_length?: number, value?: string, value_length?: number);
}
declare class CustomMetadata {
    entries: CustomMetadataEntry[];
    count: number;
    constructor(entries?: never[], count?: number);
}
declare class Config {
    user_agent: string;
    dial_timeout_milliseconds: number;
    temp_directory: string;
    constructor(user_agent?: string, dial_timeout_milliseconds?: number, temp_directory?: string);
}
declare class Uplink {
    requestAccessWithPassphrase(satelliteURL: string, apiKey: string, encryptionPassphrase: string): Promise<AccessResultStruct>;
    parseAccess(stringResult: string): Promise<AccessResultStruct>;
    configRequestAccessWithPassphrase(config: Config, satelliteURL: string, apiKey: string, encryptionPassphrase: string): Promise<AccessResultStruct>;
    uplinkDeriveEncryptionKey(phassphrase: string, salt: any): Promise<any>;
}
export { Uplink, DownloadOptions, ListBucketsOptions, Permission, UploadOptions, ListObjectsOptions, CustomMetadataEntry, CustomMetadata, SharePrefix, Config, errorhandle };
