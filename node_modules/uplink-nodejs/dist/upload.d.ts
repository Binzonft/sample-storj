/// <reference types="node" />
import { ObjectInfo } from "./types";
export declare class UploadResultStruct {
    upload: any;
    constructor(upload: any);
    write(buffer: Buffer, bytesread: number): Promise<Record<string, any>>;
    setCustomMetadata(customMetadata: Record<string, any>): Promise<void>;
    commit(): Promise<void>;
    info(): Promise<ObjectInfo>;
    abort(): Promise<ObjectInfo>;
}
