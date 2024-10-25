CREATE TABLE sms_metrics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(100),
    operator VARCHAR(100),
    sms_sent INT,
    success_rate FLOAT,
    failures INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  