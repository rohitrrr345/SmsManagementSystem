import CountryOperator from '../models/CountryOperator.js';

export const addCountryOperator = async (req, res) => {
  const { country, operator, highPriority } = req.body;
  const countryOperator = new CountryOperator({ country, operator, highPriority });
  await countryOperator.save();
  res.status(201).json(countryOperator);
};

export const getCountryOperators = async (req, res) => {
  const countryOperators = await CountryOperator.find();
  res.json(countryOperators);
};
