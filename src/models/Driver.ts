export interface IDriver {
    id?: number;
    name: string;
    timing?: number;
    crossedFinishLine?: boolean;
}

export type Drivers = Array<IDriver>;