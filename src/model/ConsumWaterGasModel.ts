import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/dataSource';

export class ConsumWaterGas extends Model {
  public id!: number;
  public customer_code!: string;
  public measure_datetime!: Date;
  public measure_type!: 'WATER' | 'GAS';
  public value?: number;
}

ConsumWaterGas.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  customer_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  measure_datetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  measure_type: {
    type: DataTypes.ENUM('WATER', 'GAS'),
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'ConsumWaterGas'
});