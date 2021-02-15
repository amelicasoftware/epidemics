import { FilterElement } from './FilterElement.model';
export interface Filter {
    nombre: string;
    elementos: FilterElement[];
    state?: boolean;
}
