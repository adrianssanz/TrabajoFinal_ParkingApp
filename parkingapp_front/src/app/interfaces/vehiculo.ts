export interface Vehiculo {
    id: number;
    matricula: string;
    uid: string;
    tipoVehiculo: {
        id: number;
        tarifaHora: number;
        tipoVehiculo: string;
    };
}