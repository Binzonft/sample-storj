"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessResultStruct = void 0;
/* eslint-disable */
const bindings = require("bindings");
const uplink = bindings("uplink");
const project_js_1 = require("./project.js");
const errorhandle = require("./error.js");
class AccessResultStruct {
    constructor(access) {
        this.access = access;
    }
    /*
     * Function opens Storj(V3) project using access grant.
     * Input : None
     * Output : Project(Object)
     */
    async openProject() {
        const project = await uplink.open_project(this.access).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), projectResultReturn = new project_js_1.ProjectResultStruct(project.project);
        return projectResultReturn;
    }
    /*
     * Function opens Storj(V3) project using access grant and custom configuration.
     * Input : None
     * Output : Project(Object)
     */
    async configOpenProject() {
        const project = await uplink.config_open_project(this.access).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), projectResultReturn = new project_js_1.ProjectResultStruct(project.project);
        return projectResultReturn;
    }
    /*
     *
     * Function Share creates a new access grant with specific permissions.
     * Access grants can only have their existing permissions restricted, and the resulting
     * access grant will only allow for the intersection of all previous Share calls in the
     * access grant construction chain.
     * Prefixes, if provided, restrict the access grant (and internal encryption information)
     * to only contain enough information to allow access to just those prefixes.
     * Input : Permission (Object) , sharePrefixListArray (Array) , sharePrefixListArraylength (Int)
     * Output : Project(Object)
     */
    async share(permission, sharePrefixListArray, sharePrefixListArraylength) {
        const sharedAccess = await uplink.access_share(this.access, permission, sharePrefixListArray, sharePrefixListArraylength).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        }), sharedAccessResultReturn = new AccessResultStruct(sharedAccess.access);
        return sharedAccessResultReturn;
    }
    /*
     * Function serializes an access grant such that it can be used later with ParseAccess or other tools.
     * Input : None
     * Output : SharedString (String)
     */
    async serialize() {
        const stringResult = await uplink.access_serialize(this.access).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return stringResult;
    }
    /*
     * Function serializes an access grant such that it can be used later with ParseAccess or other tools.
     * Input : bucket (String) , prefix (String) and Encrption key
     * Output : None
     */
    async overrideEncryptionKey(bucket, prefix, encryption_key) {
        const stringResult = await uplink.access_override_encryption_key(this.access, bucket, prefix, encryption_key).catch((error) => {
            errorhandle.storjException(error.error.code, error.error.message);
        });
        return stringResult;
    }
}
exports.AccessResultStruct = AccessResultStruct;
/* eslint-enable */
