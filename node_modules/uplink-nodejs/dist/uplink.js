"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorhandle = exports.Config = exports.SharePrefix = exports.CustomMetadata = exports.CustomMetadataEntry = exports.ListObjectsOptions = exports.UploadOptions = exports.Permission = exports.ListBucketsOptions = exports.DownloadOptions = exports.Uplink = void 0;
/* eslint-disable */
const access_js_1 = require("./access.js");
const bindings = require("bindings");
const uplink = bindings("uplink"), defaultValue = 0;
const errorhandle = require("./error.js");
exports.errorhandle = errorhandle;
class ListBucketsOptions {
    constructor(cursor = "") {
        this.cursor = cursor;
    }
}
exports.ListBucketsOptions = ListBucketsOptions;
class Permission {
    constructor(allow_download = false, allow_upload = false, allow_list = false, allow_delete = false, not_before = defaultValue, not_after = defaultValue) {
        this.allow_download = allow_download;
        this.allow_upload = allow_upload;
        this.allow_list = allow_list;
        this.allow_delete = allow_delete;
        this.not_before = not_before;
        this.not_after = not_after;
    }
}
exports.Permission = Permission;
class UploadOptions {
    constructor(expires = defaultValue) {
        this.expires = expires;
    }
}
exports.UploadOptions = UploadOptions;
class DownloadOptions {
    constructor(offset = defaultValue, length = defaultValue) {
        this.offset = offset;
        this.length = length;
    }
}
exports.DownloadOptions = DownloadOptions;
class ListObjectsOptions {
    constructor(prefix = "", cursor = "", recursive = false, system = false, custom = false) {
        this.prefix = prefix;
        this.cursor = cursor;
        this.recursive = recursive;
        this.system = system;
        this.custom = custom;
    }
}
exports.ListObjectsOptions = ListObjectsOptions;
class SharePrefix {
    constructor(bucket = "", prefix = "") {
        this.bucket = bucket;
        this.prefix = prefix;
    }
}
exports.SharePrefix = SharePrefix;
class CustomMetadataEntry {
    constructor(key = "", key_length = defaultValue, value = "", value_length = defaultValue) {
        this.key = key;
        this.key_length = key_length;
        this.value = value;
        this.value_length = value_length;
    }
}
exports.CustomMetadataEntry = CustomMetadataEntry;
class CustomMetadata {
    constructor(entries = [], count = defaultValue) {
        this.entries = entries;
        this.count = count;
    }
}
exports.CustomMetadata = CustomMetadata;
class Config {
    constructor(user_agent = "", dial_timeout_milliseconds = defaultValue, temp_directory = "") {
        this.user_agent = user_agent;
        this.dial_timeout_milliseconds = dial_timeout_milliseconds;
        this.temp_directory = temp_directory;
    }
}
exports.Config = Config;
class Uplink {
    /*
     * Request_access_with_passphrase generates a new access grant using a passhprase.
     * It must talk to the Satellite provided to get a project-based salt for deterministic
     * key derivation.
     * Note: this is a CPU-heavy function that uses a password-based key derivation
     * function (Argon2). This should be a setup-only step.
     * Most common interactions with the library should be using a serialized access grant
     * through ParseAccess directly.
     * Input : Satellite Address (String) , API key (String) , Encryption phassphrase(String)
     * Output : Access (Object)
     */
    async requestAccessWithPassphrase(satelliteURL, apiKey, encryptionPassphrase) {
        const access = await uplink.request_access_with_passphrase(satelliteURL, apiKey, encryptionPassphrase).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), accessResultReturn = new access_js_1.AccessResultStruct(access.access);
        return accessResultReturn;
    }
    /*
     * ParseAccess parses a serialized access grant string.
     * This should be the main way to instantiate an access grant for opening a project.
     * See the note on RequestAccessWithPassphrase
     * Input : Shared string
     * Output : Access (Object)
     */
    async parseAccess(stringResult) {
        const parsedSharedAccess = await uplink.parse_access(stringResult).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), accessResultReturn = new access_js_1.AccessResultStruct(parsedSharedAccess.access);
        return accessResultReturn;
    }
    /*
     * RequestAccessWithPassphrase generates a new access grant using a passhprase and custom configuration.
     * It must talk to the Satellite provided to get a project-based salt for deterministic key derivation.
     * Note: this is a CPU-heavy function that uses a password-based key derivation function (Argon2). This should be a setup-only step.
     * Most common interactions with the library should be using a serialized access grant
     * hrough ParseAccess directly.
     * Input : Config (Object) , Satellite Address (String) , API key (String) , Encryption phassphrase(String)
     * Output : Access (Object)
     */
    async configRequestAccessWithPassphrase(config, satelliteURL, apiKey, encryptionPassphrase) {
        const access = await uplink.config_request_access_with_passphrase(config, satelliteURL, apiKey, encryptionPassphrase).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), accessResultReturn = new access_js_1.AccessResultStruct(access.access);
        return accessResultReturn;
    }
    /*
     * Input : Encryption phassphrase(String) , Array
     * Output : Output : Encryptio_Key (Object)
     */
    async uplinkDeriveEncryptionKey(phassphrase, salt) {
        const encryption = await uplink.derive_encryption_key(phassphrase, salt, salt.length).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return encryption;
    }
}
exports.Uplink = Uplink;
/* eslint-enable */
