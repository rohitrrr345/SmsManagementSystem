import { mysqlConnection } from '../config/db.js';

export const getMetrics = async (req, res) => {
  const [rows] = await mysqlConnection.query('SELECT * FROM sms_metrics ORDER BY created_at DESC LIMIT 100');
  res.json(rows);
};
