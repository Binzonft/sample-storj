/// <reference types="node" />
import { ObjectInfo } from "./types";
export declare class DownloadResultStruct {
    download: any;
    constructor(download: any);
    read(buffer: Buffer, length: number): Promise<number>;
    info(): Promise<ObjectInfo>;
    close(): Promise<void>;
}
