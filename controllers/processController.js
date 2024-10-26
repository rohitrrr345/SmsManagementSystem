import { exec } from 'child_process';


export const startSession = async (req, res) => {
    const { country, operator } = req.body;
    const sessionName = `${country}_${operator}`;
    
    // Check if the OS is Windows
    const isWindows = process.platform === 'win32';

    // Use "start" command for Windows and "screen" command for Linux/MacOS
    const command = isWindows 
        ? `start /B node ./path/to/your/smsProgram.js ${country} ${operator}`
        : `screen -dmS ${sessionName} node ./path/to/your/smsProgram.js ${country} ${operator}`;

    try {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error("Error starting session:", error.message);
                return res.status(500).json({ error: "Failed to start session" });
            }
            console.log("Session started:", stdout || "Session started with no output");
            res.json({ message: `Session ${sessionName} started successfully` });
        });
    } catch (err) {
        console.error("Unexpected error in startSession:", err);
        res.status(500).json({ error: "Failed to start session due to an unexpected error" });
    }
};
export const stopSession = async (req, res) => {
  const { sessionName } = req.body;

  exec(`screen -S ${sessionName} -X quit`, (error) => {
    if (error) return res.status(500).json({ error: 'Failed to stop session' });
    res.json({ message: 'Session stopped', session: sessionName });
  });
};

