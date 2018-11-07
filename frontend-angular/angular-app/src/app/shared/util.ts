import { Table } from "../models/table.model";

export class Util{
    static tipos=['mesa de noche','escritorio','comedor','sala'];
    static material=['madera','metal','plastico','semi-vidrio'];
    static soportes=[3,4,5,6];
    static colores=['rojo','azul','gris','blanco','negro'];
    static listTables=[new Table('Cambriso','rojo',3,'madera',10000,'sala'),new Table('Escarlata','rojo',3,'madera',10000,'sala')];
}