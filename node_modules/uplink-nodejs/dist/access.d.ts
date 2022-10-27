import { ProjectResultStruct } from "./project.js";
export declare class AccessResultStruct {
    access: any;
    constructor(access: any);
    openProject(): Promise<ProjectResultStruct>;
    configOpenProject(): Promise<ProjectResultStruct>;
    share(permission: Record<string, any>, sharePrefixListArray: Array<any>, sharePrefixListArraylength: number): Promise<AccessResultStruct>;
    serialize(): Promise<string>;
    overrideEncryptionKey(bucket: string, prefix: string, encryption_key: any): Promise<string>;
}
