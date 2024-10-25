import { exec } from 'child_process';

export const startSession = async (req, res) => {
  const { country, operator } = req.body;
  const sessionName = `${country}_${operator}`;

  exec(`screen -dmS ${sessionName} node path/to/smsProgram.js`, (error) => {
    if (error) return res.status(500).json({ error: 'Failed to start session' });
    res.json({ message: 'Session started', session: sessionName });
  });
};

export const stopSession = async (req, res) => {
  const { sessionName } = req.body;

  exec(`screen -S ${sessionName} -X quit`, (error) => {
    if (error) return res.status(500).json({ error: 'Failed to stop session' });
    res.json({ message: 'Session stopped', session: sessionName });
  });
};

