import mongoose from 'mongoose';

const countryOperatorSchema = new mongoose.Schema({
  country: String,
  operator: String,
  highPriority: { type: Boolean, default: false },
  sessionName: String,
  status: { type: String, default: 'inactive' },
});

export default mongoose.model('CountryOperator', countryOperatorSchema);
