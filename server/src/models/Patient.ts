import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// Define the attributes for the Patient model
interface PatientAttr {
  patient_id: number;
  patient_name?: string | null;
  email: string;
  password: string;
  height?: number;
  weight?: number;
  age?: number;
  dr_id?: number;
  notes?: string;
}

// Define the optional attributes for creating a new Patient
interface PatientCreationAttributes extends Optional<PatientAttr, 'patient_id'> {}

// Define the Patient class extending Sequelize's Model
export class Patient extends Model<PatientAttr, PatientCreationAttributes> implements PatientAttr {
  public patient_id!: number;
  public patient_name?: string | null;
  public email!: string;
  public password!: string;
  public height?: number;
  public weight?: number;
  public age?: number;
  public dr_id?: number;
  public notes?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Method to hash and set the password for the patient
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

// Define the PatientFactory function to initialize the Patient model
export function PatientFactory(sequelize: Sequelize): typeof Patient {
  Patient.init(
    {
      patient_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      patient_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dr_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'doctors',
          key: 'dr_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'patients',
      sequelize,
      hooks: {
        beforeCreate: async (patient: Patient) => {
          await patient.setPassword(patient.password);
        },
        beforeUpdate: async (patient: Patient) => {
          if (patient.changed('password')) {
            await patient.setPassword(patient.password);
          }
        },
      },
    }
  );

  return Patient;
}
